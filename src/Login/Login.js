import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import { Link } from 'react-router-dom';
import axios from './api/axios';
import './styles.css';
import Image from '../img-imports/leftimg.jpg';
const LOGIN_URL = '/auth';
  


export const Login = () => {

  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(false);
  };
  
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
  
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
  
    useEffect(() => {
      userRef.current.focus();
    }, []);
  
    useEffect(() => {
      setErrMsg('');
    }, [user, pwd]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({ user, pwd }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
        console.log(JSON.stringify(response?.data));
        //console.log(JSON.stringify(response));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({ user, pwd, roles, accessToken });
        setUser('');
        setPwd('');
        setSuccess(true);
      } catch (err) {
        if (!err?.response) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
          setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
      }
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#"><Link to='/landingpage'>Go to Home</Link></a>
                    </p>
                </section>
            ) : (
              <div className={show ? 'fade-in' : 'fade-out'}>
                <div className='login-container'>
                <div className='left-img'>
                  <img src={Image}/>
                </div>
                <div className="container">
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Phone Number:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#"><Link to='/register' onClick={handleShow} >Sign Up</Link></a>
                        </span>
                    </p>
                </section>
                </div>
                </div>
                </div>
            )}
        </>
    )
}


