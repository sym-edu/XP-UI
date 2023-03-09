import React, {Suspense} from 'react';
import  Curriculum  from './curriculum.js';
import  LandingPage from './landingpage.jsx';
import { BrowserRouter , Route  } from "react-router-dom";
import { Login } from './Login/Login.js';
import Register from './Login/Register.js';

function App () {
    return(
        <div className='root'>
            <BrowserRouter>
            <Route exactpath='/' component={ Login } />
            <Suspense fallback={<div>Loading...</div>}>
             <Route path='/register' component={ Register } /> 
             <Route path='/' component={ LandingPage } />
             <Route path='/curriculum' component={ Curriculum } />
             </Suspense>
             </BrowserRouter>
        </div>
    )   
}

export default App;