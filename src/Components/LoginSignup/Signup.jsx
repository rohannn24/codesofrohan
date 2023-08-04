import React from 'react'
import './Loginsignup.css'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='li-bg'>
         {/* <!---------------------------signup-page------------------------ --> */}
    <div class="full-login-page">
        <div class="loging-in-card">
            <div class="form-control">
                <h1 className='heading'>SignUp</h1>
                <input class="input input-alt" placeholder="Enter Name" required="" type="text"/>
                <span class="input-border input-border-alt"></span>
            </div>
            <div class="form-control">
                <input class="input input-alt" placeholder="Enter Username" required="" type="text"/>
                <span class="input-border input-border-alt"></span>
            </div>
            <div class="form-control">
                <input class="input input-alt" placeholder="Enter Password" required="" type="password"/>
                <span class="input-border input-border-alt"></span>
            </div>
            <div class="form-control">
                <input class="input input-alt" placeholder="Rewrite Password" required="" type="password"/>
                <span class="input-border input-border-alt"></span>
            </div>
            <div class="btns">
                <Link to = '/login'><button class = "btns">Login</button></Link>
                <button class = "btns">SignUp</button>
            </div>
        </div>
    </div>
    </div>
  )
}
