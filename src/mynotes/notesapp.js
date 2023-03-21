import React, { useState, useEffect } from 'react';
import './notesapp.css';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  return (
    <div class='notes-container'>
      <h2>My Notes</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea value={newNote} onChange={handleInputChange} />
        <button type="submit">Save Note</button>
      </form>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesApp;
