import React, { useState } from "react";
import "./curriculum.css";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Logo from '../img-imports/SYM_Logo_Circle.svg';
import { FaRegPlayCircle } from "react-icons/fa";
import { FaPenAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import videoFile from '../img-imports/Intro-Governance.mp4'
import Chatbot from '../chatbot/chatbot.js';
import Header from "../components/Header";

export function handleSidebarbuttonHover() {
  const progressBar = document.getElementById('ProgressBar');
  const value = progressBar.value;
  progressBar.title = `${value}%`;
}

export default function Curriculum() {

  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className='maincontainer'>
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
      <div className='cur-below-nav'>
        <div className="courses-sidebar">
          <br />
          <br />
          <h2>
            Curriculum
          </h2>
          <button onClick={handleSidebarbuttonHover} className='courses-btn'>
            <div className="button-text">
              <span>1. Intro to ...</span>
              <FaRegPlayCircle className='sidebar-button-icon' />
            </div>
            <progress id="ProgressBar" value="78" max="100" title=""></progress>
          </button>
          <button onClick={handleSidebarbuttonHover} className='courses-btn'>
            <div className="button-text">
              <span>2. Voting</span>
              <FaRegPlayCircle className='sidebar-button-icon' />
            </div>
            <progress id="ProgressBar" value="78" max="100" title=""></progress>
          </button>
          <Link to='/quiz'>
            <button onClick={handleSidebarbuttonHover} className='courses-btn'>
              <div className="button-text">
                <span>3. Quiz 1</span>
                <FaPenAlt className='sidebar-button-icon' />
              </div>
              <progress id="ProgressBar" value="78" max="100" title=""></progress>
            </button>
          </Link>
          <button onClick={handleSidebarbuttonHover} className='courses-btn'>
            <div className="button-text">
              <span>4. Bills</span>
              <FaRegPlayCircle className='sidebar-button-icon' />
            </div>
            <progress id="ProgressBar" value="78" max="100" title=""></progress>
          </button>
          <button onClick={handleSidebarbuttonHover} className='courses-btn'>
            <div className="button-text">
              <span>5. Assembly</span>
              <FaRegPlayCircle className='sidebar-button-icon' />
            </div>
            <progress id="ProgressBar" value="78" max="100" title=""></progress>
          </button>
          <button onClick={handleSidebarbuttonHover} className='courses-btn'>
            <div className="button-text">
              <span>6. Quiz 2</span>
              <FaPenAlt className='sidebar-button-icon' />
            </div>
            <progress id="ProgressBar" value="78" max="100" title=""></progress>
          </button>
        </div>
        <div className="curriculum-content">
          <video src={videoFile} controls />
        </div>
      </div>
    </div>
  )
};


