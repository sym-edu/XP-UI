import React from 'react';
import './styles.css';
import ybar from './useme.png';
import LineChart from './Chart';

const data=[12,5,7,3,8,9];
const labels=['January','Febuary','March','April','May','June'];

function CoursesOverview() {
  return (
    <div className='maincontainer'>
        <a href="/curriculum">
           <button className="btn" id="btn">Continue Your Learning STOCKS AND INVESTING</button>
        </a>
      <div className="container"> 
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
              <LineChart data={data} label={labels} title="My Progress" className='my-chart' titleClassName='chart-title'/>
          </div>
      </div>
    </div>
  );
}

export default CoursesOverview;
