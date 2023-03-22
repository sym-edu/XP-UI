import React, {useState} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './profile.css'; 
import Logo from '../img-imports/symlogo.jpeg';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TbRobot }  from 'react-icons/tb';
import Chatbot from '../chatbot/chatbot.js';
import FaRegPlayCircle from 'react-icons/fa';
import FaPenAlt from 'react-icons/fa';

export default function ProfileStatistics() {

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
      <li className='nav-center-4'>
        <Link to='/helper'>
            <span className='help-button-text'>Need Help ?</span>
        </Link>
        </li>
    </ul>
    </div>
           <div className='profile-div'>
            <MDBCard className="profile-card">
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Radhika</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Student <span className="mx-2">|</span> <a href="#!">speakyourmindeducation.com</a>
                </MDBCardText>
                <div className="icons">
                  
                </div>
                <MDBBtn className='profile-message-button' rounded size="lg">
                  Message now
                </MDBBtn>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>                   
                    <MDBCardText className="profile-span">Courses Taken :</MDBCardText>
                    <MDBCardText className="profile-num">15</MDBCardText>
                  </div>
                  <div className="px-3">             
                    <MDBCardText className="profile-span">Average Score :</MDBCardText>
                    <MDBCardText className="profile-num">65%</MDBCardText>
                  </div>
                  <div>                 
                    <MDBCardText className="profile-span">Rank</MDBCardText>
                    <MDBCardText className="profile-num">25</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
    </div>
    </>
  );
}
