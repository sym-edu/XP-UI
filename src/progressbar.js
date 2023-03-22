import React from 'react';

const statsProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-inner" style={{ width: `${progress}%` }}>
        <span className="progress-bar-text">{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default statsProgressBar;
