import React from 'react';
import './landingpage.css';
import ybar from './img-imports/useme.png';
import Logo from './img-imports/symlogo.jpeg';
import Qmark from './img-imports/qmark.jpeg';
import { FaRegPlayCircle } from 'react-icons/fa';
import {LineChart} from './linechart.js';
import {AiOutlineQuestionCircle} from 'react-icons/ai';

const data=[12,5,7,3,8,9];
const labels=['January','Febuary','March','April','May','June'];

function LandingPage() {
  return (
    <div className='maincontainer'>
      <div className='nav'>
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
            <button className='help-button'>
                <span className='help-button-text'>Need Help</span>
                <AiOutlineQuestionCircle/>
            </button>
        </ul>
        </div>
        <div className="courses-sidebar">
          <br/>
          <br/>
          <h2>My Courses</h2>
          <a href='#'>
            <button id='courses-btn' className='courses-btn'>
              <div className='btn+icon'>
              <span className='fl'>FL-101</span>
              <FaRegPlayCircle/>
              </div>
              <progress id="myProgressBar" value="0" max="100"></progress>
              </button>
          </a>
          <a href='#'>
            <button id='courses-btn' className='courses-btn'>
              <div className='btn+icon'>
              <span className='myc'>My Courses</span>
              <FaRegPlayCircle/>
              </div>
              <progress id="myProgressBar" value="0" max="100"></progress>
              </button>
          </a>
          <a href='#'>
            <button id='courses-btn' className='courses-btn'>
              <div className='btn+icon'>
              <span>My Assignments</span>
              <FaRegPlayCircle/>
              </div>
              <progress id="myProgressBar" value="0" max="100"></progress>
              </button>
          </a>
          <a href='#'>
            <button id='courses-btn' className='courses-btn'>
              <span>My Notes</span>
              </button>
          </a>
        </div>
        <div className="content-area">
                <div className="content-button">
        <a href="/curriculum">
           <button className="content-btn" id="btn">
            <span>Continue Your Learning</span> 
            <span>STOCKS AND INVESTING</span> 
            <FaRegPlayCircle size={32}/>
            </button>
        </a>
      </div>
      <div className="below-content-button"> 
         <div className="stats">
             <h2>My Stats</h2>
                  <br/>
                    <div className="att">
                        <h3>Attendance</h3> 
                        <img className='my-image' src={ybar} alt="Attendance" />
                    </div>
                    <div className="scr">
                        <h3>Assignment Score</h3>
                        <img className='my-image' src={ybar}  alt="Assignment <br> Score" />
                    </div>
                    <div className="ovp">
                        <h3>Overall Progress</h3>
                        <img className='my-image' src={ybar} alt="Overall Progress" />
                    </div>
          </div>
           <div className='my-chart'>
              <LineChart data={data} options={options} title="My Progress" className='my-chart' titleClassName='chart-title'/>
          </div> 
      </div>
      </div>
      </div>
      );
}

export default LandingPage;