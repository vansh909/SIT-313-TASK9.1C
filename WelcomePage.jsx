import React from 'react';
import {Link} from 'react-router-dom'
import './WelcomePage.css';

function WelcomePage(){
  return (
    <div className="welcome-page">
      <h1>Welcome to devDeakin</h1>
      <p>Start exploring and creating amazing projects.</p>
      <button  ><Link to ='/'>
      LogOut 
      </Link>
      </button>
    </div>
  );
};

export default WelcomePage;
