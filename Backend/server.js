
const session = require("express-session");
const express = require("express");
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")

// Create express app
const app = express();


app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
})); 
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret', //This is a secret key used to encrypt the session cookie
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // This can be set to true if I am using https
        maxAge: 1000 * 60 * 60 * 24 // This means the cookie will expire in one day
    }


}))

// creating a variable for the connection to the mySQL database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"PhysioApp"

})


 
app.get("/Patients", (req, res)=> {
    const sql = "SELECT * FROM Patients";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

// Route to handle sign-up
app.post('/api/Sign-Up', (req, res) => {
    const sql = `
        INSERT INTO Patients (FirstName, LastName, PreferredName, Email, Password, PhoneNo, PainScore, ReadInfo, PastMedHistory, SymptomArea) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    console.log(req.body)
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.preferredName,
        // req.body.age,
        req.body.email,
        req.body.password,
        req.body.contactNumber,
        req.body.painScale,
        req.body.readInfo,
        JSON.stringify(req.body.pastMedHistory), // Converts array to JSON string so that it can be inputted to the database
        JSON.stringify(req.body.bodyPart) // Convert array to JSON string so that it can be inputted to the database
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Error inserting data' });
        }
        res.status(200).json(result);
    });
});




// This is an api which checks whether the login credentials entered are the same as what is in the database
app.post('/api/Sign-in', (req, res) => {
    const sql = "SELECT * FROM Patients WHERE Email = ? and Password = ?";
    db.query(sql, [req.body.email, req.body.password, req.body.password, req.body.preferredName, req.body.firstName, req.body.lastName, 
        req.body.pastMedHistory], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});

        // This checks if a record exists. If it does login = true, if not login = false
        if(result.length > 0) {

            
            req.session.email = result[0].Email; // This assigns an email to a session
            req.session.preferredName  = result[0].PreferredName; // This assigns a preferred name to a session
            req.session.firstName  = result[0].FirstName; // This assigns a first name to a session
            req.session.lastName  = result[0].LastName; // This assigns a last name to a session
            req.session.pastMedHistory  = result[0].PastMedHistory; // This contains the PMH details of a session
            
            const email = result[0].email;
            const token = jwt.sign({email}, "our-jsonwebtoken-secret-key", {expiresIn: '1d'} )
            res.cookie('token', token);


            console.log('The user logged in is:', req.session.email);
            
            return res.json({
                Login: true, 
                email: req.session.email,
                
            })
        } else {
            return res.json({
                Login: false
            })
        }
    })
})

// this defines the variable to check whether once logged in, if the cookies are matched
const verifyUser =  (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({Message: "Token required, please log in"})
    } else {
        jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
            if (err) {
                return res.json({Message: "Authentication Error"})
            } else {
                req.email = decoded.email
                next();
            }
        })
    }
}




// This is the backend route for MyProfile once the user logs in
app.get('/api/MyProfile', verifyUser, (req, res) => {
    // if the user is logged in, this will return the information of the user
    if(req.session.email) {
        return res.json({
            valid: true, 
    
            email: req.session.email,
            name: req.session.preferredName,
            firstName: req.session.firstName,
            lastName: req.session.lastName,
            pastMedHistory: req.session.pastMedHistory
        })
    } else {
        return res.json({valid: false})
    }
})


// This is a route to log the user out by removing the cookies of the session

app.get('/api/LogOut', (req, res) => {
    res.clearCookie('token');
    console.log('user has logged out Successfully');
    return res.json({Status:"Success"});
    
})



// This gets the current notes from the database depending on the email
app.get('/api/get/Notes', (req, res) => {
    // As 'email' is stored in session when user logs in we want to request session email to get the result
    const userEmail = req.session.email; 
    if (!userEmail) {
      return res.status(401).send('User not authenticated');
    }
    else {
        console.log("Retrieving data from Notes table")
    }

    const query = 'SELECT NoteID, Note, Timestamp FROM Notes WHERE PatientID = (SELECT PatientID FROM Patients WHERE Email = ? )';
    db.query(query, [userEmail], (err, result) => {
      if (err) {
        console.error('Error fetching notes from the database:', err);
        res.status(500).send('Error fetching notes from the database');
        return;
      }
      res.status(200).json({ Status: "Success", data: result });
    });
});


//This  will post any information from the frontend into the Notes table
app.post('/api/post/Note', (req, res) => {
    const { Note, Timestamp } = req.body;
    const userEmail = req.session.email;
  
    if (!userEmail) {
      return res.status(401).send('User not authenticated');
    }
  
    const query = `
      INSERT INTO Notes (PatientID, Note, Timestamp)
      VALUES ((SELECT PatientID FROM Patients WHERE Email = ?), ?, ?)
    `;
    db.query(query, [userEmail, Note, Timestamp], (err, result) => {
      if (err) {
        console.error('Error saving note to the database:', err);
        res.status(500).send('Error saving note to the database');
        return;
      }
      res.status(200).json({ Status: "Success" });
    });
});




// This edits the notes in the patients journal 
app.put('/api/edit/Note', (req, res) => {
    const { NoteID, newNoteContent } = req.body;
    const userEmail = req.session.email;

    if (!userEmail) {
        return res.status(401).send('User not authenticated');
    }

    const query = `
        UPDATE Notes 
        SET Note = ?
        WHERE NoteID = ? 
        AND PatientID = (SELECT PatientID FROM Patients WHERE Email = ?)
    `;

    db.query(query, [newNoteContent, NoteID, userEmail], (err, result) => {
        if (err) {
            console.error('Error editing note in the database:', err);
            return res.status(500).send('Error editing note in the database');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Note not found or not authorized');
        }

        res.status(200).json({ Status: "Success" });
    });
});



//This deletes a note from the patients Journal
app.delete('/api/delete/Note', (req, res) => {
    console.log("Delete request received for NoteID:", req.body.NoteID);
    const { NoteID } = req.body;
    const userEmail = req.session.email;

    if (!userEmail) {
        return res.status(401).send('User not authenticated');
    }

    // Log the NoteID and userEmail for debugging
    console.log('NoteID:', NoteID, 'User Email:', userEmail);

    const query = `
      DELETE FROM Notes 
      WHERE NoteID = ? 
      AND PatientID = (SELECT PatientID FROM Patients WHERE Email = ?)
    `;

    db.query(query, [NoteID, userEmail], (err, result) => {
        if (err) {
            console.error('Error deleting note from the database:', err);
            return res.status(500).send('Error deleting note from the database');
        }

        // Check if any rows were affected (i.e., if the note was deleted)
        if (result.affectedRows === 0) {
            return res.status(404).send('Note not found or not authorized');
        }

        console.log('Note deleted successfully');
        res.status(200).json({ Status: "Success" });
    });
});


  



app.listen(8080, () => {
    console.log("listening");
})






