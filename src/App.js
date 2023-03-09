import React from 'react';
import  Curriculum  from './curriculum.js';
import  LandingPage from './landingpage.jsx';
import { BrowserRouter , Route  } from "react-router-dom";
import { Login } from './Login/Login.js';
import Register from './Login/Register.js';

function App () {

    // const router=createBrowserRouter(
    //     createRoutesFromElements(
    //             <Route path="/" element={<Root />}>

    //                 </Route>
    //     )     
    // );
    return(
        <div className='root'>
            <BrowserRouter>
            <Route exactpath='/' component={ Login } />
             <Route path='/register' component={ Register } />
             <Route path='/landingpage' component={ LandingPage } />
             <Route path='/curriculum' component={ Curriculum } />
             </BrowserRouter>
        </div>
    )   
}

export default App;