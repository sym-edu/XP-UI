import React from'react';
import Snap from '../img-imports/metrics-snap.jpg';
// import'./App.css';

function Profile() {
  return(
    <div className="m-profile">
      <img src={Snap} style={{maxWidth: '100%'}}></img>
    </div>
  );
}

export default Profile;