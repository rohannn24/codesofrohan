import React from 'react'
import './Home.css'
import LineWithName from './LineWithName'
import { Link } from 'react-router-dom'
import LongCard from './LongCard'
import Homeright from './Homeright'
import Homeleft from './Homeleft'

export default function Home() {
  return (
    <div>
        <div class="c-home">
        {/* ----------------left-side----------------- */}
        <Homeleft/>
        {/* ----------------mid-side----------------- */}
        <section class="home-mid">
          <LineWithName name = 'Highlights'/>

          <div className="card-sec">
            <div className="home-card">
              <div className='card-img'><img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="java" /></div>
              <p className="card-title">Java Tutorial</p>
            </div>
            <div className="home-card">
              <div className='card-img'><img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="java" /></div>
              <p className="card-title">Web-Dev Tutorial</p>
            </div>
            <div className="home-card">
              <div className='card-img'><img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="java" /></div>
              <p className="card-title">Java Tutorial</p>
            </div>
            <div className="home-card">
              <div className='card-img'><img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="java" /></div>
              <p className="card-title">Java Tutorial</p>
            </div>
          </div>









          <LineWithName name = 'Java Topics'/>

          <div className="full-five-sec">
            <div className="main-page">
              <div className="mp-img">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
              <h3 className="mp-title">Introduction To Java | Lecture #0</h3>
              <p className="desc">Welcome to Lecture 0 at CodesOfRohan.com! Unleash the power of Java programming with our comprehensive introduction. From syntax basics to object-oriented concepts, Rohan's engaging lecture sets the perfect foundation for your coding journey. Let's dive into Java's world together!</p>
              <button className="btn btn-primary">Start Now</button>
            </div>
            <div className="supporting-page">
              <div className="sp-sec">
                <div className="sp-img">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                  <p>Variables In Java | Lecture #1</p>
              </div>
              <div className="sp-sec">
                <div className="sp-img">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                  <p>Variables In Java | Lecture #2</p>
              </div>
              <div className="sp-sec">
                <div className="sp-img">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                  <p>Variables In Java | Lecture #3</p>
              </div>
              <div className="sp-sec">
                <div className="sp-img">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                  <p>Variables In Java | Lecture #4</p>
              </div>
              <div className="sp-sec">
                <div className="sp-img">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                  <p>Variables In Java | Lecture #5</p>
              </div>
            </div>
          </div>



          <LineWithName name = 'Web-Dev Topics'/>

          <div className="full-five-sec">
            <div className="main-page">
              <div className="mp-img">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
              <h3 className="mp-title">Introduction To Java | Lecture #0</h3>
              <p className="desc">Welcome to Lecture 0 at CodesOfRohan.com! Unleash the power of Java programming with our comprehensive introduction. From syntax basics to object-oriented concepts, Rohan's engaging lecture sets the perfect foundation for your coding journey. Let's dive into Java's world together!</p>
              <button className="btn btn-primary">Start Now</button>
            </div>
            <div className="supporting-page">
              <div className="sp-sec">
                <div className="sp-img">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                  <p>Variables In Java | Lecture #1</p>
              </div>
              <div className="sp-sec">
                <div className="sp-img">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                  <p>Variables In Java | Lecture #2</p>
              </div>
              <div className="sp-sec">
                <div className="sp-img">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                  <p>Variables In Java | Lecture #3</p>
              </div>
              <div className="sp-sec">
                <div className="sp-img">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                  <p>Variables In Java | Lecture #4</p>
              </div>
              <div className="sp-sec">
                <div className="sp-img">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                  <p>Variables In Java | Lecture #5</p>
              </div>
            </div>
          </div>
          <LineWithName name = "Featured Tutorials"/>
          
          <LongCard 
            img = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            tag = 'html'
            title = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, deserunt. Ab libero esse omnis provident veniam. Consequatur, enim! Repellendus, eius.'        
          />
          <LongCard 
            img = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            tag = 'html'
            title = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, deserunt. Ab libero esse omnis provident veniam. Consequatur, enim! Repellendus, eius.'        
          />
          <LongCard 
            img = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            tag = 'html'
            title = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, deserunt. Ab libero esse omnis provident veniam. Consequatur, enim! Repellendus, eius.'        
          />
          <LongCard 
            img = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            tag = 'html'
            title = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, deserunt. Ab libero esse omnis provident veniam. Consequatur, enim! Repellendus, eius.'        
          />
          <LongCard 
            img = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            tag = 'html'
            title = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, deserunt. Ab libero esse omnis provident veniam. Consequatur, enim! Repellendus, eius.'        
          />
          <LongCard 
            img = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            tag = 'html'
            title = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, deserunt. Ab libero esse omnis provident veniam. Consequatur, enim! Repellendus, eius.'        
          />
          <LongCard 
            img = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            tag = 'html'
            title = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, deserunt. Ab libero esse omnis provident veniam. Consequatur, enim! Repellendus, eius.'        
          />
          <LongCard 
            img = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            tag = 'html'
            title = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, deserunt. Ab libero esse omnis provident veniam. Consequatur, enim! Repellendus, eius.'        
          />
        </section>
        {/* ----------------right-side----------------- */}
        <Homeright/>
    </div>
    </div>
  )
}
