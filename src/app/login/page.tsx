"use client"

import React,{ useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/login.css'

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className='container-login'>
        <div className='login'>
            <h1 id='login-h3'>LOGIN</h1>
            <form action="" className='form'>
                <input type='email' placeholder='Enter your email'></input>
                <input type='password' placeholder='Enter your password'></input>
                <button type='submit' className='submit'>SIGN IN</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
