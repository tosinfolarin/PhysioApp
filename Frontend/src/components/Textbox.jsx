import { useState } from "react";


axios.defaults.withCredentials = true;

const Textbox = () => {

  const [diaryEntry, setDiaryEntry] = useState(''); // This holds the current text input from the data, its state is updated when submit is clicked
  const [entries, setEntries] = useState([]); // This is an array to store the data
  const [isEditing, setIsEditing] = useState(false); // This is boolean data type which determines whether an existing entry is being edited
  const [currentIndex, setCurrentIndex] = useState(null); // This stores the index of the entry being edited


  //the handleDiarySubmit function handles the submission to either add a new entry or update the existing one
  const handleDiarySubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    

   



    //defining the date and the time
    const now = new Date();
    const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`; //This ensures onl the date and time in minutes is displayed at the time of the submit

    if (isEditing) {
      // Update the existing entry without changing the timestamp
      const updatedEntries = [...entries];
      updatedEntries[currentIndex].notes = diaryEntry;
      setEntries(updatedEntries);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      // This adds a new entry with a timestamp
      setEntries([...entries, { notes: diaryEntry, timestamp }]);
    }
    setDiaryEntry(''); // Clear the textarea after submission
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

  //Defines the function to delete entries when required
  const handleDelete = (index) => {
    const updatedEntries = entries.filter((entry, i) => i !== index);
    setEntries(updatedEntries);
  };



  return (
    // is the output of the form entry:
    <form onSubmit={handleDiarySubmit}>
        <div className="output">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <p>{entry.notes}</p>
            <p>{entry.timestamp}</p>
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