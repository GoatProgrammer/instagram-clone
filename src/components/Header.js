import React from 'react'
import '../styles/Header.css'
import Button from '@material-ui/core/Button';
import { firebase, db, auth } from '../firebase';


function Header({ user, auth, setOpenSignIn, setOpen, signOut }) {
  return (
    <div className="header">
      <h1>hEADER</h1>
    </div >
  )
}

export default Header
