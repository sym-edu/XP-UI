import React , {useState} from "react";
import "./curriculum.css";
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import Logo from '../img-imports/symlogo.jpeg';
import { FaRegPlayCircle } from "react-icons/fa";
import { FaPenAlt} from 'react-icons/fa';
import { Link } from "react-router-dom";
import videoFile from '../img-imports/my-video.mp4'
import Chatbot from '../chatbot/chatbot.js';

export function handleSidebarbuttonHover() {
  const progressBar = document.getElementById('ProgressBar');
  const value = progressBar.value;
  progressBar.title = `${value}%`;
}

export default function Curriculum (){

  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return(
    <div className='maincontainer'>
        <div className='nav'>
        <div className='nav-left'>
                  <img src={Logo} alt='sym-logo' className='nav-logo'/>
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
            <span className='chatbot-span' onClick={ toggleChatbot }> Chatbot</span>
                  { showChatbot && <Chatbot />}
          </li>
          <li className='nav-center-4'>
            <Link to='/helper'>
                <span className='help-button-text'>Need Help ?</span>
            </Link>
            </li>
        </ul>
        </div>
        <div className='cur-below-nav'>
<div className="courses-sidebar">
  <br/>
  <br/>
    <h2>
        Curriculum
    </h2>
  <button onClick={handleSidebarbuttonHover} className='courses-btn'>
    <div className="button-text">
      <span>1. Intro to Finance</span>
      <FaRegPlayCircle/>
      </div>
      <progress id="ProgressBar" value="78" max="100" title=""></progress>
  </button>
  <button onClick={handleSidebarbuttonHover} className='courses-btn'>
    <div className="button-text">
      <span>2. Stock and Investing</span>
      <FaRegPlayCircle/>
      </div>
    <progress id="ProgressBar" value="78" max="100" title=""></progress>
  </button>
  <Link to='/quiz'>
  <button onClick={handleSidebarbuttonHover} className='courses-btn'>
    <div className="button-text">
      <span>3. Quiz 1</span>
      <FaPenAlt/>
      </div>
    <progress id="ProgressBar" value="78" max="100" title=""></progress>
    </button>
    </Link>
  <button onClick={handleSidebarbuttonHover} className='courses-btn'>
    <div className="button-text">
      <span>4. Financing</span> 
      <FaRegPlayCircle/>
    </div>
    <progress id="ProgressBar" value="78" max="100" title=""></progress>
  </button>
  <button onClick={handleSidebarbuttonHover} className='courses-btn'>
    <div className="button-text">
      <span>5. Banking</span>
      <FaRegPlayCircle/>
    </div>
    <progress id="ProgressBar" value="78" max="100" title=""></progress>
  </button>
  <button onClick={handleSidebarbuttonHover} className='courses-btn'>
    <div className="button-text">
      <span>6. Quiz 2</span>
      <FaPenAlt/>
      </div>
    <progress id="ProgressBar" value="78" max="100" title=""></progress>
  </button>
</div>
<div className="content">
    <video src={videoFile} controls/>
</div>
</div>
</div>
  )
};


    