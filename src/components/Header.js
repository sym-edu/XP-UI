import React, { useState } from "react";
import './Header.css';
import Chatbot from '../chatbot/chatbot.js';
import Logo from '../img-imports/SYM_Logo_Circle.svg';
import { Link, NavLink } from "react-router-dom";
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export default function Header() {
    const [showChatbot, setShowChatbot] = useState(false);

    function toggleChatbot() {
        setShowChatbot(!showChatbot);
    }

    return (
        <div className='header-nav'>
            <div className='header-nav-left'>
                <img src={Logo} alt='sym-logo' className='header-nav-logo'/>
                <h3 className='header-nav-logo-h3'>Hello, Learner!</h3>
            </div>
            <ul className='header-nav-center'>
                <li className='header-nav-center-1'>
                    <NavLink 
                        activeStyle={{ borderBottom: '2px solid black', fontWeight: 'bold' }} 
                        exact to="/dash">
                            My Dashboard
                    </NavLink>
                </li>
                <li className='header-nav-center-2'>
                    <NavLink 
                        activeStyle={{ borderBottom: '2px solid black', fontWeight: 'bold' }} 
                        to="/profile">
                            Profile
                    </NavLink>
                    {/* <Link to='/profile'>
                        <span className='header-profile-span'>Profile</span>
                    </Link> */}
                </li>
                {/* <li className='header-nav-center-3'>
                    <span className='header-chatbot-span' onClick={toggleChatbot}> Chatbot</span>
                    {showChatbot && <Chatbot />}
                </li> */}
            </ul>
            <div className='header-nav-right'>
                    <button className='header-help-button'>
                        <span className='header-help-button-text' onClick={toggleChatbot}>Need Help</span>
                        <AiOutlineQuestionCircle style= {{ color:'black', fontSize:'40px' }} />
                        {showChatbot && <Chatbot />}
                    </button>
            </div>
        </div>
    );
}