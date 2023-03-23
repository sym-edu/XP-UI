import React from 'react';
import Curriculum from './Curriculum/curriculum.js';
import LandingPage from './LandingPage/landingpage.jsx';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import { Login } from './Login/Login.js';
import Register from './Login/Register.js';
import ProfileStatistics from './Profile/profile.js';
import QuizComponent from './quiz/quiz.js';
import Uploader from './uploader/uploader.js';
import NeedHelpPage from './help-section/helppage.js';
import NotesApp from './mynotes/notesapp.js';

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
            <Route path='/profile'>
              <ProfileStatistics />
            </Route>
            <Route exact path='/quiz'>
              <QuizComponent />
            </Route>
            <Route path='/uploader'>
              <Uploader />
            </Route>
            <Route path='/helper'>
              <NeedHelpPage />
            </Route>
            <Route path='/mynotes'>
              <NotesApp />
            </Route>
            <Route component = { LandingPage } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
