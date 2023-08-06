import AnimatedPage from '../Animation/Animatedpage'
import './Contact.css'
import React from 'react'

export default function Contactus() {
  return (
    <AnimatedPage>
    <div className='c-contact'>
      <div class="jumbotron jumbotron-sm">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-12 c-height">
              <h1 class="h1">
                Contact us <br/><small>Feel free to contact us</small></h1>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="c-f well well-sm">
              <form
                action="https://formspree.io/f/mwkjgjar"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">
                        Name</label>
                      <input type="text" class="form-control" id="name" placeholder="Enter Full Name" required="required" name = "username"/>
                    </div>
                    <div class="form-group">
                      <label for="email">
                        Email Address</label>
                      <div class="input-group">
                        <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                        </span>
                        <input type="email" class="form-control" id="email" placeholder="Enter Email" required="required" name = "email" /></div>
                    </div>
                    <div class="form-group">
                      <label for="subject">
                        Subject</label>
                      <select id="subject" name="subject" class="form-control" required="required">
                        <option value="na" selected="">Choose One:</option>
                        <option value="service">General Customer Service</option>
                        <option value="suggestions">Suggestions</option>
                        <option value="product">Product Support</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">
                        Message</label>
                      <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                        placeholder="Leave Your Message"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-primary pull-right c-resp" id="btnContactUs">
                      Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-4 c-f">
            <form>
              <legend><span class="glyphicon glyphicon-globe"></span>Our office</legend>
              <address>
                <strong>Customer Support</strong><br />
                <a href="mailto:info@ssesolution.co.in">info@ssesolution.co.in</a>
              </address>
            </form>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  )
}

