
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import { Link } from 'react-router-dom';
import './styles.css';
import Image from '../img-imports/leftimg.jpg';

const LOGIN_URL = 'https://dev-xp-api.speakyourmindeducation.com/authentication/login/';

export const Login = () => {

  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(false);
  };
  
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    userRef.current.focus();
  }, []);
  
  useEffect(() => {
    setErrMsg('');
  }, [username, password]);
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await fetch(LOGIN_URL, {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username: user, password: pwd }),
  //     });
  //     const responseData = await response.json();
  //     if (response.ok) {
  //       console.log(JSON.stringify(responseData));
  //       const accessToken = responseData?.accessToken;
  //       const roles = responseData?.roles;
  //       setAuth({ user, pwd, roles, accessToken });
  //       setUser('');
  //       setPwd('');
  //       setSuccess(true);
  //       window.location.href = '/';
  //     } else if (response.status === 400) {
  //       setErrMsg('Missing Username or Password');
  //     } else if (response.status === 401) {
  //       setErrMsg('Unauthorized');
  //     } else {
  //       setErrMsg('Login Failed');
  //     }
  //     errRef.current.focus();
  //   } catch (err) {
  //     console.log(err);
  //     setErrMsg('No Server Response');
  //     errRef.current.focus();
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password}),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(JSON.stringify(responseData));
        window.location.href = '/dash';
        const accessToken = responseData?.accessToken;
        const roles = responseData?.roles;
        setAuth({ username, password , roles, accessToken });
        setUsername('');
        setPassword('');
        setSuccess(true);
      } else if (response.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (response.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    } catch (err) {
      console.log(err);
      // setErrMsg('No Server Response');
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
                        <a href="#"><Link to='/dash'>Go to Home</Link></a>
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
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button type = "submit">Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                         
                             <Link to='/register' onClick={handleShow} >Sign Up</Link>
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
