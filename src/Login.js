import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import logo from './chat-logo.png';
import { auth, provider } from './firebase';

export default function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider)
    .catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="agv"/>
        <h1>Chat App</h1>
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  )
}
