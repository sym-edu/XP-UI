import React from "react";
import "./curriculum.css";
import Qmark from './img-imports/qmark.jpeg';
import Logo from './img-imports/symlogo.jpeg';

export function Curriculum (){
  return(
    <div className='container'>
        <div className='nav'>
        <div className="logo">
            <img src={Logo} alt="Logo" />
            <span>Hello,Learner!</span>
        </div>
        <ul className='ulist'>
            <li className='litems'><a href="#">Profile</a></li>
            <li className='litems'><a href="#">My Dashboard</a></li>
            <button className='help-button'>
                <span className='help-button-text'>Need Help</span>
                <img src={Qmark} alt="Help" className='qimg'/>
            </button>
        </ul>
     </div>
<div className="sidebar">
    <span>
        Curriculum
    </span>
  <button>
    <div className="button-text">
      Button 1
    </div>
    <div className="progress-bar">
        <div className="progress-fill" style ={{  width: '60%' , backgroundColor: 'rgb(0, 0, 0)'}}></div>
    </div>
  </button>
  <button>
    <div className="button-text">
      Button 2
    </div>
    <div className="progress-bar">
        <div className="progress-fill"></div>
    </div>
  </button>
  <button>
    <div className="button-text">
      Button 3
    </div>
    <div className="progress-bar">
        <div className="progress-fill"></div>
    </div>
  </button>
  <button>
    <div className="button-text">
      Button 4
    </div>
    <div className="progress-bar">
        <div className="progress-fill"></div>
    </div>
  </button>
  <button>
    <div className="button-text">
      Button 5
    </div>
    <div className="progress-bar">
        <div className="progress-fill"></div>
    </div>
  </button>
  <button>
    <div className="button-text">
      Button 6
    </div>
    <div className="progress-bar">
        <div className="progress-fill"></div>
    </div>
  </button>
</div>
<div className="content">
    <video id="my-video" className="custom-video" src="path/to/video.mp4"></video>
    <div className="custom-controls">
      <button id="play-pause-btn" className="control-btn play-btn"></button>
      <div className="progress-bar-vid">
        <div className="progress"></div>
      </div>
      <div className="time">
        <span id="current-time"></span> / <span id="duration"></span>
      </div>
    </div>
  </div>
</div>

  )
};


    