"use client"

import React,{ useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/register.css'

function RegisterPage() {
  return (
    <div>
      <Navbar />
      <div className='container-register'>
        <h1 id='register-h3'>REGISTER</h1>
            <form action="" className='form-register'>
                <input type='text' placeholder='Enter your name'></input>
                <input type='email' placeholder='Enter your email'></input>
                <input type='password' placeholder='Enter your password'></input>
                <input type='password' placeholder='confirm your password'></input>
                <button type='submit' className='submit-register'>SIGN UP</button>
            </form>
      </div>
    </div>
  )
}

export default RegisterPage
