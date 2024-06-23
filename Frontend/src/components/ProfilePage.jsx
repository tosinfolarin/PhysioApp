import React, { useState } from 'react';

const Profile = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [progress, setProgress] = useState('Select Progress');
    const [notes, setNotes] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setProfilePic(URL.createObjectURL(file));
    };

    const handleProgressChange = (e) => {
        setProgress(e.target.value);
    };

    const addExercise = () => {
        // Add exercise logic here
        const newExercise = `Exercise ${exercises.length + 1}`;
        setExercises([...exercises, newExercise]);
    };

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    return (
        <div className="profile-page">
            <div className="profile-section">
                <h2>Profile Picture</h2>
                <div className="profile-img">
                    {profilePic ? (
                        <img src={profilePic} alt="Profile" />
                    ) : (
                        <div className="placeholder-img">No Image</div>
                    )}
                    <input type="file" onChange={handleImageUpload} />
                </div>
            </div>

            <div className="exercise-section">
                <h2>Exercises</h2>
                <div className="exercise-box">
                    {exercises.length === 0 ? (
                        <p>No exercises added yet.</p>
                    ) : (
                        <ul>
                            {exercises.map((exercise, index) => (
                                <li key={index}>{exercise}</li>
                            ))}
                        </ul>
                    )}
                    <button onClick={addExercise}>Add Exercise</button>
                </div>
            </div>

            <div className="progress-section">
                <h2>Progress</h2>
                <select value={progress} onChange={handleProgressChange}>
                    <option value="Select Progress" disabled>Select Progress</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                {progress !== 'Select Progress' && (
                    <p>Your progress: {progress}</p>
                )}
            </div>

            <div className="notes-section">
                <h2>Notes</h2>
                <textarea
                    value={notes}
                    onChange={handleNotesChange}
                    placeholder="Write notes about your progress..."
                    rows={5}
                />
            </div>
        </div>
    );
}

export default Profile;
