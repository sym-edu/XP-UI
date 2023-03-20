import React from 'react';
import './helppage.css';

const NeedHelpPage = () => {
  return (
    <div className ='help-content'>
        <div className='content-area-help'>
      <h2>Need Help?</h2>
      <p>If you need assistance with your dashboard or coursework, please contact your instructor or TA.</p>
      <br/>
      <p>You can also access the following resources:</p>
      <ul>
        <li>- Academic support center</li>
        <li>- Student counseling services</li>
        <li>- Library resources</li>
      </ul>
      <br/>
      <p>If you are experiencing technical difficulties, please contact the IT help desk.</p>
      <br/>
      <p>Contact information for these resources can be found on the school's website.</p>
    </div>
    </div>
  );
};

export default NeedHelpPage;
