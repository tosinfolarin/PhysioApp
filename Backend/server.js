// Import express.js
const express = require("express");
const mysql = require('mysql')
const cors = require('cors')

// Create express app
const app = express();

app.use(cors())

// creating a variable for the mySQL database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"PhysioApp"

})


app.get("/", (req, res)=> {
    return res.json("From backend side")
})

//API to get information from the database

app.get("/Patients", (req, res)=> {
    const sql = "SELECT * FROM Patients";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.listen(8080, () => {
    console.log("listening");
})