// Get the functions in the db.js file to use
const db = require('./../services/db');

class Patients {
    constructor(patientID, firstName, lastName, preferredName, dOB, email, phoneNo, painScore, readInfo, pastMedHistory, notes, symptomArea) {
      this.patientID = patientID;
      this.firstName = firstName;
      this.lastName = lastName; 
      this.preferredName = preferredName;
      this.dOB = dOB;
      this.email = email;
      this.phoneNo = phoneNo; 
      this.painScore = painScore;
      this.readInfo = readInfo;
      this.pastMedHistory = pastMedHistory; 
      this.notes = notes;
      this.symptomArea = symptomArea;
    }
  
    // Function to retrieve patient notes details
    getPatientNotes() {
      return {
        notes: this.notes,
      };
    }
  
    // Function to retrieve patient preferred name details
    getPatientPreferredName() {
      return {
        preferredName: this.preferredName,
      };
    }

    // Function to retrieve patient past medical history
    getPatientPMH() {
      return {
        pastMedHistory: this.pastMedHistory,
      };
    }
  }

