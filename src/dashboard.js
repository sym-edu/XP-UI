import React from "react";
import "./dash.css";
import Qmark from './qmark.jpeg';
import Logo from './symlogo.jpeg';

function Dashboard () {
    return(
    <div class='container'>
        <div class='nav'>
        <div class="logo">
            <img src={Logo} alt="Logo" />
            <span>Hello,Learner!</span>
        </div>
        
        <ul class='ulist'>
            <li class='litems'><a href="#">Profile</a></li>
            <li class='litems'><a href="#">My Dashboard</a></li>
            <button class='help-button'>
                <span class='help-button-text'>Need Help</span>
                <img src={Qmark} alt="Help" class='qimg'/>
            </button>
        </ul>
     </div>
<div class="sidebar">
    <span>
        Curriculum
    </span>
  <button>
    <div class="button-text">
      Button 1
    </div>
    <div class="progress-bar">
        <div class="progress-fill" style ={{  width: '60%' , backgroundColor: 'rgb(0, 0, 0)'}}></div>
    </div>
  </button>
  <button>
    <div class="button-text">
      Button 2
    </div>
    <div class="progress-bar">
        <div class="progress-fill"></div>
    </div>
  </button>
  <button>
    <div class="button-text">
      Button 3
    </div>
    <div class="progress-bar">
        <div class="progress-fill"></div>
    </div>
  </button>
  <button>
    <div class="button-text">
      Button 4
    </div>
    <div class="progress-bar">
        <div class="progress-fill"></div>
    </div>
  </button>
  <button>
    <div class="button-text">
      Button 5
    </div>
    <div class="progress-bar">
        <div class="progress-fill"></div>
    </div>
  </button>
  <button>
    <div class="button-text">
      Button 6
    </div>
    <div class="progress-bar">
        <div class="progress-fill"></div>
    </div>
  </button>
</div>
</div>
    )
}
{/*<div class="content">
    <video id="my-video" class="custom-video" src="path/to/video.mp4"></video>
    <div class="custom-controls">
      <button id="play-pause-btn" class="control-btn play-btn"></button>
      <div class="progress-bar-vid">
        <div class="progress"></div>
      </div>
      <div class="time">
        <span id="current-time"></span> / <span id="duration"></span>
      </div>
    </div>
  </div>*/}

    


export default Dashboard;