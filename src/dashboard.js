import React from "react";
import "./dash.css";

function Dashboard () {
    return(
    <div>
        <div className='container'>
        <div class="logo">
            <img src="logo.png" alt="Logo" />
            <span>Hello,Learner!</span>
        </div>
        
        <ul>
            <li><a href="#">My Dashboard</a></li>
            <li><a href="#">Profile</a></li>
            <button>
                <span>Need Help</span>
                <img src="help.png" alt="Help" />
            </button>
        </ul>
     </div>

<div class="container">
<div class="sidebar">
    <span>
        Curriculum
    </span>
  <button>
    <div class="button-text">
      Button 1
    </div>
    <div class="progress-bar">
        <div class="progress-fill" style ="  width: 60%; background-color: rgb(0, 0, 0);"></div>
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
<div class="content">
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
  </div>
</div>
</div>
    )
}