// Import express.js

// const express = require("express");
// const mysql = require('mysql')
// const cors = require('cors')

// // Create express app
// const app = express();

// app.use(cors()); 

// // creating a variable for the mySQL database
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password:"",
//     database:"PhysioApp"

// })


// app.get("/", (req, res)=> {
//     return res.json("From backend side")
// })

// //API to get information from the database

// app.get("/Patients", (req, res)=> {
//     const sql = "SELECT * FROM Patients";
//     db.query(sql, (err, data)=> {
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })


// app.listen(8080, () => {
//     console.log("listening");
// })




// Import express.js

const express = require("express");
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser');

// Create express app
const app = express();

app.use(cors()); 
app.use(express.json());

// creating a variable for the mySQL database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"PhysioApp"

})



app.post('/Sign', (req, res) => {
    const sql = "INSERT INTO Sign (`Name`, `Password` VALUES (?)";
    const values = [
        req.body.name,
        req.body.password
        
    ]
    db.query(sql, [values], (err, data => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);

    }))
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
    db.query(sql, [req.body.email, req.body.password], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        // This checks if a record exists. If it does login = true, if not login = false
        if(result.length > 0) {
            return res.json({Login: true})
        } else {
            return res.json({Login: false})
        }
    })
})










app.listen(8080, () => {
    console.log("listening");
})






