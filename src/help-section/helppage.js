import React,{useState} from 'react';
import './helppage.css';
import Chatbot from '../chatbot/chatbot.js';
import {Link} from 'react-router-dom';
import Logo from '../img-imports/symlogo.jpeg';

const NeedHelpPage = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <>
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
          </ul>
      <div className='nav-right'>
            <Link to='/helper'>
              <button className='help-button'>
                <span className='help-button-text'>Need Help ?</span>
                </button>
            </Link>
            </div>
        </div>
    <div className ='help-content'>
        <div className='content-area-help'>
      <h2>Need Help?</h2>
      <p>If you need assistance with your dashboard or coursework, please contact your instructor or TA.</p>
      <br/>
      <p>You can also access the following resources:</p>
      <ul>
        <li>- Academic support center</li>
        <li>- Student counseling services</li>
        <li>- Library resources</li>
      </ul>
      <br/>
      <p>If you are experiencing technical difficulties, please contact the IT help desk.</p>
      <br/>
      <p>Contact information for these resources can be found on the school's website.</p>
    </div>
    </div>
    </>
  );
};

export default NeedHelpPage;
