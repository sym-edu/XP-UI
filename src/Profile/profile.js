import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './profile.css'; 
import Logo from '../img-imports/symlogo.jpeg';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TbRobot }  from 'react-icons/tb';
export default function ProfileStatistics() {
  return (
    <>    <div className='nav'>
        <div className='nav-left'>
                  <img src={Logo} alt='sym-logo' className='nav-logo'/>
        <h3 className='nav-logo-h3'>Hello,Learner!</h3>
        </div>
        <ul className='nav-center'>
          <li className='nav-center-1'>
             <a href="#" >
              <span>Profile</span>
              </a>
          </li>
          <li className='nav-center-2'>
            <a href='#'>
              <span>My Dashboard</span>
            </a>
            </li>
            <li>
              <Link to='/chatbot' className='chatbot-link'>
              <TbRobot />
              </Link>
            </li>
            <button className='help-button'>
                <span className='help-button-text'>Need Help</span>
                <AiOutlineQuestionCircle/>
            </button>
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
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">15</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Courses Taken :</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">65%</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Average Score :</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">25</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Rank</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
    </div>
    </>
  );
}
