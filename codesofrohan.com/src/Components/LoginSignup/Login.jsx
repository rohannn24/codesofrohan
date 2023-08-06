import React from 'react'
import './Loginsignup.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='li-bg'>
         {/* <!-- ------------------------login-page------------------------ --> */}
    <div class="full-login-page">
        <div class="loging-in-card">
            <div class="form-control">
                <h1 className='heading'>LogIn</h1>
                <input class="input input-alt" placeholder="Enter Username" required="" type="text"/>
                <span class="input-border input-border-alt"></span>
            </div>
            <div class="form-control">
                <input class="input input-alt" placeholder="Enter Password" required="" type="password"/>
                <span class="input-border input-border-alt"></span>
            </div>
            <div class="btns">
                <button class = "btns">Login</button>
                <Link to = '/sign-up'><button class = "btns">SignUp</button></Link>
            </div>
        </div>
    </div>
    </div>
  )
}
