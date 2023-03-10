import React from 'react';
import Curriculum from './curriculum.js';
import LandingPage from './landingpage.jsx';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import { Login } from './Login/Login.js';
import Register from './Login/Register.js';
import Assignments from './uploading/uploader.js';

import Chatbot from './chatbot/chatbot.js';

function App() {

  return (
    <div className='root'>
      <Router>
          <Switch>
            <Route exact path='/login'>
          <Login />
          </Route>
            <Route exact path='/register'>
                <Register />
            </Route>
            <Route exact path='/landingpage'>
                <LandingPage />
            </Route>
            <Route exact path='/curriculum'>
                <Curriculum />
            </Route>
            <Route exact path='/chatbot'>
                <Chatbot />
            </Route>
            <Route component = { Login } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
