// Import express.js

const session = require("express-session");
const express = require("express");
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")

// Create express app
const app = express();


app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
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

// creating a variable for the mySQL database
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
    db.query(sql, [req.body.email, req.body.password, req.body.password, req.body.preferredName, req.body.firstName, req.body.lastName, req.body.pastMedHistory], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});

        // This checks if a record exists. If it does login = true, if not login = false
        if(result.length > 0) {
            req.session.email = result[0].Email; // This assigns an email to a session
            req.session.preferredName  = result[0].PreferredName;
            req.session.firstName  = result[0].FirstName;
            req.session.lastName  = result[0].LastName;
            req.session.pastMedHistory  = result[0].PastMedHistory;


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




// This is the backend route for MyProfile once the user logs in
app.get('/api/MyProfile', (req, res) => {
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





app.listen(8080, () => {
    console.log("listening");
})






