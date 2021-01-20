import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Home from './Home';
import Login from './Login'
import SignUp from './Signup'
import heartLogo from '../images/heartLogo.png'
import { HeartContext } from '../libs/HeartContext'
import './homePage.css'
import Dashboard from "./Dashboard"
import Result from './Result';
import UserResults from './UserResults';

function HomePage (){

    
    const [ loading , setLoading ] = useState( false );
    const [ isLogin, setIsLogin ] = useState( false );
    const [ currentUser, setCurrentUser ] = useState();
    const [ errorMessage, setErrorMessage ] = useState( false )
    const [ firstName, setFirstName ] = useState('')

    const Logout = () => {
        setIsLogin( false );
        localStorage.setItem('token', null)
    }

    return (
      <Router>
        <HeartContext.Provider
          value={{
            isLogin,
            setIsLogin,
            currentUser,
            setCurrentUser,
            errorMessage,
            setErrorMessage,
            firstName,
            setFirstName,
            loading,
            setLoading,
          }}
        >
          <nav className="nav-bar">
            <div className="nav-list">
              <div className="left-header">
                <img className="heart-logo" src={heartLogo} alt="heart waves" />
                <div>
                  <Link to="/home">Home</Link>
                </div>
                {isLogin ? (
                  <div>
                    <Link to="/result">Result</Link>
                  </div>
                ) : null}
                {isLogin ? (
                  <div>
                    <Link to="/dashboard">Dashboard</Link>
                  </div>
                ) : null}
              </div>
              {isLogin ? (
                <input
                  className="sign-up"
                  type="submit"
                  value="Log out"
                  onClick={Logout}
                />
              ) : (
                <div className="right-header">
                  <Login />
                  <SignUp />
                </div>
              )}
            </div>
          </nav>
          <Switch>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/userresults">
              <UserResults />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </HeartContext.Provider>
      </Router>
    );
}

export default HomePage;