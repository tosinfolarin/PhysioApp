// require("dotenv").config();

// const mysql = require('mysql2/promise');

// const config = {
//   db: { /* do not put password or any sensitive info here*/
//     host: process.env.DB_CONTAINER,
//     port: process.env.DB_PORT,
//     user: process.env.MYSQL_ROOT_USER,
//     password: process.env.MYSQL_ROOT_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//     waitForConnections: true,
//     connectionLimit: 2,
//     queueLimit: 0,
//   },
// };
  
// const pool = mysql.createPool(config.db);

// // Utility function to query the database
// async function query(sql, params) {
//   const [rows, fields] = await pool.execute(sql, params);

//   return rows;
// }

// module.exports = {
//   query,
// }








// import express from 'express';
// import mysql from 'mysql';
// import cors from 'cors';

// // Create express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Create a variable for the MySQL database connection
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "PhysioApp"
// });

// // Connect to MySQL
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the database.');
// });

// Route to handle sign-up
// app.post('/Sign-Up', (req, res) => {
//     const sql = `
//         INSERT INTO Patients (FirstName, LastName, PreferredName, Email, Password, PhoneNo, PainScore, ReadInfo, PastMedHistory, SymptomArea) 
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;
//     const values = [
//         req.body.firstName,
//         req.body.lastName,
//         req.body.preferredName,
//         // req.body.Age,
//         req.body.Email,
//         req.body.Password,
//         req.body.contactNumber,
//         req.body.painScale,
//         req.body.readInfo,
//         req.body.pastMedHistory,
//         req.body.bodyPart
//     ];

//     db.query(sql, values, (err, result) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).json({ message: 'Error inserting data' });
//         }
//         res.status(200).json(result);
//     });
// });

// // API to get information from the database
// app.get('/Patients', (req, res) => {
//     const sql = "SELECT * FROM Patients";
//     db.query(sql, (err, data) => {
//         if (err) {
//             console.error('Error fetching data:', err);
//             return res.status(500).json(err);
//         }
//         res.status(200).json(data);
//     });
// });

// // Start the server
// app.listen(8080, () => {
//     console.log("Server is listening on port 8080");
// });
