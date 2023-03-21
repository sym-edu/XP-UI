import React, {useState, useEffect} from 'react';
import './landingpage.css';
import ybar from './img-imports/useme.png';
import Logo from './img-imports/symlogo.jpeg';
import { FaRegPlayCircle } from 'react-icons/fa';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import { SlNote } from 'react-icons/sl';
import { FaPenAlt} from 'react-icons/fa';
import $ from 'jquery';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { TbRobot} from "react-icons/tb";



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
);

export function handleHover() {
  const progressBar = document.getElementById('ProgressBar');
  const value = progressBar.value;
  progressBar.title = `${value}%`;
}

export default function LandingPage() {

  const options = {
    responsive: true,
    elements: {
      line: {
          borderColor: 'white'
      }
  },
    plugins: {
      legend: {
        position: "top" ,
        labels:{
           PointElement: "circle"
      }
    },
      title: {
        display: true,
        text: "My Progress",
        font:{
          size:26,
          color: "black"
        }
      }
    }
  };

  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  const data = {
    labels,
    datasets: [
      {
        label: "Confidence",
        data:  [65, 59, 80, 81, 56, 55, 40],
        borderColor: "blue",
        backgroundColor: "blue"
      },
      {
        label: "Body Language",
        data:  [23, 45,12,34,12,36,67],
        borderColor: "slateblue",
        backgroundColor: "slateblue"
      },
      {
        label: "Diction",
        data:  [7, 12, 45,12, 23, 52, 43],
        borderColor: "darkblue",
        backgroundColor: "darkblue"
      }
    ]
  };

  return (
    <div id='landingpage' className='maincontainer'>
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
            <li>
            <Link to ='/chatbot'>
            <TbRobot className='sichatbot' />
            </Link> 
            </li>
            <Link to='/helper'>
            <button className='help-button'>
                <span className='help-button-text'>Need Help</span>
                <AiOutlineQuestionCircle style= {{ color:'black'}} />
            </button>
            </Link>
        </ul>
        </div>
        <div className="courses-sidebar">
          <br/>
          <br/>
          <h2>My Courses</h2>
            <button id='courses-btn' onMouseOver={handleHover} className='courses-btn'>
              <div className='btn-icon-1'>
              <span className='fl'>FL-101</span>
              <FaRegPlayCircle  className='sidebar-button-icon' />
              </div>
              <progress id="ProgressBar" value="78" max="100" title=""></progress>
              </button>
            <button id='courses-btn' onMouseOver={handleHover} className='courses-btn'>
              <div className='btn-icon-2'>
              <span className='myc'>My Courses</span>
              <FaRegPlayCircle className='sidebar-button-icon' />
              </div>
              <progress id="ProgressBar" value="50" max="100" title=''></progress>
              </button>
            <button id='courses-btn' onMouseOver={handleHover} className='courses-btn-3'>
              <div className='btn-icon-3'>
              <span>Assignments</span>
              <FaPenAlt className='sidebar-button-icon' />
              </div>
              <progress id="ProgressBar" value="63" max="100" title=""></progress>
              </button>
              <Link to='/mynotes'>
            <button id='courses-btn' className='courses-btn-4'>
              <span className='note-span'>My Notes</span>
              <SlNote/>
              </button>
              </Link>
        </div>
        <div className="content-area">
               <button className='content-btn' id="btn">
               
              <div className="content-btn-content">
            <span style={{color:'white'}}>Continue Your Learning</span> 
            <Link to='/curriculum'><span style={{color:'white'}}>STOCKS AND INVESTING</span></Link> 
            <FaRegPlayCircle size={32}/>
            </div>
            </button>
      <div className="below-content-button"> 
         <div className="stats">
             <h3 className='stats-title'>My Stats</h3>
                  <br/>
                    <div className="att">
                        <h3>Attendance</h3> 
                        <img className='my-image' src={ybar} alt="Attendance" />
                    </div>
                    <div className="scr">
                        <h3>Assignment Score</h3>
                        <img className='my-image-2' src={ybar}  alt="Assignment <br> Score" />
                    </div>
                    <div className="ovp">
                        <h3>Overall Progress</h3>
                        <img className='my-image' src={ybar} alt="Overall Progress" />
                    </div>
          </div>
              <div className="my-chart">
    <Line options={options} data={data}  />
    </div>
      </div>
      </div>
      </div>
      );
}

