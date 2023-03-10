import React from "react";
import "./curriculum.css";
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import Logo from './img-imports/symlogo.jpeg';
import { FaRegPlayCircle } from "react-icons/fa";
import { FaPenAlt} from 'react-icons/fa';

export default function Curriculum (){
  return(
    <div className='curriculum-container'>
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
        <div className='cur-below-nav'>
<div className="sidebar">
    <span>
        Curriculum
    </span>
    <a href="#">
  <button className='sidebar-btn-1'>
    <div className="button-text">
      <pre>1. Intro to Finance</pre>
      <div className='sidebar-btn-img'>
      <FaRegPlayCircle/>
      </div>
    </div>
    <div className="progress-bar">
        <div className="progress-fill" style ={{  width: '60%' , backgroundColor: 'rgb(0, 0, 0)'}}></div>
    </div>
  </button>
  </a>
  <a href="#">
  <button>
    <div className="button-text">
      <pre>2. Stock and Investing</pre>
      <div className='sidebar-btn-img'>
      <FaRegPlayCircle/>
      </div>
    </div>
    <div className="progress-bar">
    <div className="progress-fill" style ={{  width: '60%' , backgroundColor: 'rgb(0, 0, 0)'}}></div>
    </div>
  </button>
  </a>
  <a href="#">
  <button>
    <div className="button-text">
      3. Quiz 1
      <div className='sidebar-btn-img'>
      <FaPenAlt/>
      </div>
    </div>
    <div className="progress-bar">
    <div className="progress-fill" style ={{  width: '60%' , backgroundColor: 'rgb(0, 0, 0)'}}></div>
    </div>
  </button>
  </a>
  <a href="#">
  <button>
    <div className="button-text">
      4. Financing
      <div className='sidebar-btn-img'>
      <FaRegPlayCircle/>
    </div>
    </div>
    <div className="progress-bar">
    <div className="progress-fill" style ={{  width: '60%' , backgroundColor: 'rgb(0, 0, 0)'}}></div>
    </div>
  </button>
  </a>
  <a href="#">
  <button>
    <div className="button-text">
      5. Banking
      <div className='sidebar-btn-img'>
      <FaRegPlayCircle/>
    </div>
    </div>
    <div className="progress-bar">
    <div className="progress-fill" style ={{  width: '60%' , backgroundColor: 'rgb(0, 0, 0)'}}></div>
    </div>
  </button>
  </a>
  <a href="#">
  <button>
    <div className="button-text">
      6. Quiz 2
      <div className='sidebar-btn-img'>
      <FaPenAlt/>
      </div>
    </div>
    <div className="progress-bar">
    <div className="progress-fill" style ={{  width: '60%' , backgroundColor: 'rgb(0, 0, 0)'}}></div>
    </div>
  </button>
  </a>
</div>
<div className="content">
    <video id="my-video" className="custom-video" controls/>
      <source src="./img-imports/my-video.mp4" type="video/mp4"/>
  </div>
  </div>
</div>

  )
};


    