import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const Textbox = () => {
  const [diaryEntry, setDiaryEntry] = useState(''); // This holds the current text input from the data, its state is updated when submit is clicked
  const [entries, setEntries] = useState([]); // This is an array to store the data
  const [isEditing, setIsEditing] = useState(false); // This is boolean data type which determines whether an existing entry is being edited
  const [currentIndex, setCurrentIndex] = useState(null); // This stores the index of the entry being edited

  useEffect(() => {
    // This gets the notes from the database when the component mounts
    getNotes();
  }, []);

  const getNotes = () => {
    axios.get('http://localhost:8080/api/get/Notes')
      .then(res => {
        console.log('Response data:', res.data); // For debugging, this shows the information is going to the console
        if (res.data.Status === "Success") {
          setEntries(res.data.data); // Set the entries state with the notes data from the server
        } else {
          alert("Error fetching notes");
        }
      })
      .catch(err => console.log(err));
  };

  //This function formats the date and time so that it will return YYYY-MM-DD HH:MM
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };
  
  

  // The handleDiarySubmit function handles the submission to either add a new entry or update the existing one
  const handleDiarySubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Define the date and the time
    const now = new Date();
    const Timestamp = formatDateTime(now);
  
    if (isEditing) {
      // Updates the existing entry in the backend
      // This function holds the value of the the updated note entry
      // The NoteID is assigned to the edited note
      const updatedEntry = { NoteID: entries[currentIndex].NoteID, newNoteContent: diaryEntry };
  
      axios.put('http://localhost:8080/api/edit/Note', updatedEntry)
        .then(res => {
          if (res.data.Status === "Success") {
            const updatedEntries = [...entries];
            updatedEntries[currentIndex].Note = diaryEntry;

          

            setEntries(updatedEntries);
            setIsEditing(false);
            setCurrentIndex(null);
          } else {
            alert("Error updating note");
          }
        })
        .catch(err => console.error('Error updating note:', err));
    } else {
      const newEntry = { Note: diaryEntry, Timestamp };
      console.log(newEntry)
      axios.post('http://localhost:8080/api/post/Note', newEntry)
        .then(res => {
          if (res.data.Status === "Success") {
            setEntries([...entries, newEntry]); // Update the local state with the new entry
          } else {
            alert("Error saving note");
          }
        })
        .catch(err => console.error('Error saving note:', err));
    }
  
    setDiaryEntry(''); // Clears the textarea after submission
  };

  // This updates the diary state when the user types in the text area
  const handleDiaryChange = (event) => {
    setDiaryEntry(event.target.value); // Update state with diary entry
  };

  // This defines the handle edit
  const handleEdit = (index) => {
    setDiaryEntry(entries[index].Note); // Update this line to use 'Note' instead of 'notes'
    setIsEditing(true);
    setCurrentIndex(index);
  };


  const handleDelete = (noteID, index) => {
    axios.delete('http://localhost:8080/api/delete/Note', { data: { NoteID: noteID } })
      .then(res => {
        if (res.data.Status === "Success") {
          // Update the frontend after successful deletion from the database
          const updatedEntries = entries.filter((entry, i) => i !== index);
          setEntries(updatedEntries);
        } else {
          alert("Error deleting note");
        }
      })
      .catch(err => console.log(err));
  };


  return (
    // Output of the form entry:
    <form onSubmit={handleDiarySubmit}>
      <div className="output">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <p>{entry.Note}</p>
            <p>{formatDateTime(entry.Timestamp)}</p>
            <button type="button" onClick={() => handleEdit(index)}>Edit</button>
            <button type="button" onClick={() => handleDelete(entry.NoteID, index)}>Delete</button>
          </div>
        ))}
      </div>




      <textarea
        value={diaryEntry} // Bind textarea value to state
        onChange={handleDiaryChange} // Update state on change
        placeholder="Document your progress here..."
        rows="5"
        cols="100"
      />



      <button className="diary-submit" type="submit">
        {isEditing ? 'Submit Edited Entry' : 'Submit Diary Entry'}
      </button>
    </form>
  );
};

export default Textbox;