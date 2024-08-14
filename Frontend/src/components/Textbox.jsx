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

  const formatDateTime = (date) => {
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
    // const now = new Date();
    // const Timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    const now = new Date();
    const Timestamp = formatDateTime(now);

    
    if (isEditing) {
      // Update the existing entry without changing the timestamp
      const updatedEntries = [...entries];
      updatedEntries[currentIndex].Note = diaryEntry;
      setEntries(updatedEntries);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      const newEntry = { Note: diaryEntry, Timestamp };
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
    setDiaryEntry(entries[index].notes);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  // Defines the function to delete entries when required
  const handleDelete = (index) => {
    const updatedEntries = entries.filter((entry, i) => i !== index);
    setEntries(updatedEntries);
  };



  return (
    // Output of the form entry:
    <form onSubmit={handleDiarySubmit}>
      <div className="output">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <p>{entry.Note}</p>
            <p>{entry.Timestamp}</p>
            <button type="button" onClick={() => handleEdit(index)}>Edit</button>
            <button type="button" onClick={() => handleDelete(index)}>Delete</button>
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