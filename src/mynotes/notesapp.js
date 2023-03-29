import React, { useState, useEffect } from 'react';
import './notesapp.css';
import Logo from '../img-imports/SYM_Logo_Circle.svg';
import { Link } from 'react-router-dom';
import Chatbot from '../chatbot/chatbot.js';
import { FaPenAlt, FaRegPlayCircle } from 'react-icons/fa';
import { SlNote } from 'react-icons/sl';
import Header from '../components/Header';

function handleSidebarbuttonHover() {
  const progressBar = document.getElementById('ProgressBar');
  const value = progressBar.value;
  progressBar.title = `${value}%`;
}

const NotesApp = () => {

  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

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
    <>
      {/* <div className='nav'>
        <div className='nav-left'>
          <img src={Logo} alt='sym-logo' className='nav-logo' />
          <h3 className='nav-logo-h3'>Hello,Learner!</h3>
        </div>
        <ul className='nav-center'>
          <li className='nav-center-1'>
            <Link to='/profile'>
              <span className='profile-span'>Profile</span>
            </Link>
          </li>
          <li className='nav-center-2'>
            <Link to='/landingpage'>
              <span>My Dashboard</span>
            </Link>
          </li>
          <li className='nav-center-3'>
            <span className='chatbot-span' onClick={toggleChatbot}> Chatbot</span>
            {showChatbot && <Chatbot />}
          </li>
        </ul>
        <div className='nav-right'>
          <Link to='/helper'>
            <button className='help-button'>
              <span className='help-button-text'>Need Help ?</span>
            </button>
          </Link>
        </div>
      </div> */}
      <Header />
      <div className="courses-sidebar">
        <br />
        <br />
        <h2>My Courses</h2>
        <button id='courses-btn' onMouseOver={handleSidebarbuttonHover} className='courses-btn'>
          <div className='btn-icon-1'>
            <span className='fl'>FL-101</span>
            <FaRegPlayCircle className='sidebar-button-icon' />
          </div>
          <progress id="ProgressBar" value="78" max="100" title=""></progress>
        </button>
        <button id='courses-btn' onMouseOver={handleSidebarbuttonHover} className='courses-btn'>
          <div className='btn-icon-2'>
            <span className='myc'>My Courses</span>
            <FaRegPlayCircle className='sidebar-button-icon' />
          </div>
          <progress id="ProgressBar" value="50" max="100" title=''></progress>
        </button>
        <button id='courses-btn' onMouseOver={handleSidebarbuttonHover} className='courses-btn'>
          <div className='btn-icon-3'>
            <span>Assignments</span>
            <FaPenAlt className='sidebar-button-icon' />
          </div>
          <progress id="ProgressBar" value="63" max="100" title=""></progress>
        </button>
        <Link to='/mynotes'>
          <button id='courses-btn' className='courses-btn-4'>
            <span className='note-span'>My Notes</span>
            <SlNote />

          </button>
        </Link>
      </div>
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
    </>
  );
};

export default NotesApp;
