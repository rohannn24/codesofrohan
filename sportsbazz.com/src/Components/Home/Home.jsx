import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import HomeNav from './HomeNav'
import { Helmet } from 'react-helmet'
import Animatedpagetoleft from '../Animation/Animatedpagetoleft'
import Animatedpagetoright from '../Animation/Animatedpagetoright'
import HomeCard from './HomeCard'
import AnimatedPage from '../Animation/Animatedpage'

function goToBtn() {
  window.scrollTo({
    top: 0, left: 0, behavior: 'smooth'
  })
}

export default function Home() {
  return (
    <div className='c-home'>
      <Helmet>
        <title>SportsBazz | Get Inside Sports</title>
        <meta name="keywords" content="SportsBazz, Sports insides, sports updates, nba, nfl, mma, cricket, ipl, tom brady, tigerwoods" />
      </Helmet>
      <AnimatedPage>
      <section className="mid-side">
        <HomeNav/>
        <div className="second-head-line d-flex1">
          <h4>ATH-ELITES</h4><div className="line"></div>
        </div>
        <div className="d-flex2">
          <div className="ath-card">
            <div className="img-control">
              <img src="https://i.pinimg.com/736x/27/61/2c/27612c7c577607cd669473e756f3a844.jpg" alt="" />
            </div>
            <p>Michael Jordan</p>
            <Link to = '/tag/michael-jordan' onClick={goToBtn}><div className="mg-auto btn btn-danger">About Him</div></Link>
          </div>
          <div className="ath-card">
            <div className="img-control">
              <img src="https://cdn.vox-cdn.com/thumbor/8ja-3U5u6_Niy8vHF9C8lJW9Uj8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24777393/1523679335.jpg" alt="" />
            </div>
            <p>Alan Jouban</p>
            <Link to = '/michael-jordan'><div className="mg-auto btn btn-danger">About Him</div></Link>
          </div>
          <div className="ath-card">
            <div className="img-control">
              <img src="https://static01.nyt.com/images/2021/02/07/sports/07sb-oldbrady/07sb-oldbrady-mediumSquareAt3X.jpg" alt="" />
            </div>
            <p>Tom Brady</p>
            <Link to = '/michael-jordan'><div className="mg-auto btn btn-danger">About Him</div></Link>
          </div>
          <div className="ath-card">
            <div className="img-control">
              <img src="https://cdn.bleacherreport.net/images_root/slides/photos/000/984/343/1483215_original.jpg?1307002618" alt="" />
            </div>
            <p>Shaq</p>
            <Link to = '/michael-jordan'><div className="mg-auto btn btn-danger">About Him</div></Link>
          </div>

        </div>
        <div className="second-head-line d-flex1">
          <h4>THE FAN'S PERSPECTIVE</h4><div className="line"></div>
        </div>

        <div className="d-flex1 third-box">
          <div className="main-post">
              <div className="mp-img-control">
              <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-487998470-473x315.jpg" alt="" />
              </div>
              <p>Freelancer</p>
              <h6>“It’s Catchy, Lacking Substance” a Rapper’s Ode to Boxing Legend Floyd Mayweather in a New Song Strikes a...</h6>
              <div className="mg3 btn btn-danger">Read More</div>
          </div>
          <div className="sub-post">
            <Link to = ""><div className="sub-post-card">
              <div className="hover-control">
              <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1351157517.jpg?width=900" alt="" />
              </div>
                
              <div className="c-title">
                <p>“It’s Canelo’s Fault Benavidez’s Resume Sucks”: Fans Still Can’t Get Over $50 Million Failure While...</p>
                <p className="writer">Freelancer</p>
              </div>
            </div><hr/></Link>
            <Link to = ""><div className="sub-post-card">
              <div className="hover-control">
              <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1349044649.jpg?width=900" alt="" />
              </div>
                
              <div className="c-title">
                <p>Floyd Mayweather’s “Dirty Tactics” Resurfaces Hours Before New Partnership Announcement, Fans Blast 50-0 Boxer</p>
                <p className="writer">Freelancer</p>
              </div>
            </div><hr/></Link>
            <Link to = ""><div className="sub-post-card">
              <div className="hover-control">
              <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1351157517.jpg?width=900" alt="" />
              </div>
                
              <div className="c-title">
                <p>“It’s Canelo’s Fault Benavidez’s Resume Sucks”: Fans Still Can’t Get Over $50 Million Failure While...</p>
                <p className="writer">Freelancer</p>
              </div>
            </div><hr/></Link>
            <Link to = "/blog"><div className="sub-post-card">
              <div className="hover-control">
              <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1351157517.jpg?width=900" alt="" />
              </div>
                
              <div className="c-title">
                <p>“It’s Canelo’s Fault Benavidez’s Resume Sucks”: Fans Still Can’t Get Over $50 Million Failure While...</p>
                <p className="writer">Freelancer</p>
              </div>
            </div><hr/></Link>
          </div>
        </div>

        <div className="second-head-line d-flex1">
          <h4>HUMOURS</h4><div className="line"></div>
        </div>
        <div className="d-flex1 third-box">
          <div className="main-post">
              <div className="mp-img-control">
              <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-487998470-473x315.jpg" alt="" />
              </div>
              <p>Freelancer</p>
              <h6>“It’s Catchy, Lacking Substance” a Rapper’s Ode to Boxing Legend Floyd Mayweather in a New Song Strikes a...</h6>
              <div className="mg3 btn btn-danger">Read More</div>
          </div>
          <div className="sub-post">
            <Link to = ""><div className="sub-post-card">
              <div className="hover-control">
              <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1351157517.jpg?width=900" alt="" />
              </div>
                
              <div className="c-title">
                <p>“It’s Canelo’s Fault Benavidez’s Resume Sucks”: Fans Still Can’t Get Over $50 Million Failure While...</p>
                <p className="writer">Freelancer</p>
              </div>
            </div><hr/></Link>
            <Link to = ""><div className="sub-post-card">
              <div className="hover-control">
              <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1349044649.jpg?width=900" alt="" />
              </div>
                
              <div className="c-title">
                <p>Floyd Mayweather’s “Dirty Tactics” Resurfaces Hours Before New Partnership Announcement, Fans Blast 50-0 Boxer</p>
                <p className="writer">Freelancer</p>
              </div>
            </div><hr/></Link>
            <Link to = ""><div className="sub-post-card">
              <div className="hover-control">
              <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1351157517.jpg?width=900" alt="" />
              </div>
                
              <div className="c-title">
                <p>“It’s Canelo’s Fault Benavidez’s Resume Sucks”: Fans Still Can’t Get Over $50 Million Failure While...</p>
                <p className="writer">Freelancer</p>
              </div>
            </div><hr/></Link>
            <Link to = "/blog"><div className="sub-post-card">
              <div className="hover-control">
              <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1351157517.jpg?width=900" alt="" />
              </div>
                
              <div className="c-title">
                <p>“It’s Canelo’s Fault Benavidez’s Resume Sucks”: Fans Still Can’t Get Over $50 Million Failure While...</p>
                <p className="writer">Freelancer</p>
              </div>
            </div><hr/></Link>
          </div>
        </div>

        <div className="second-head-line d-flex1">
          <h4>LATEST NEWS</h4><div className="line"></div>
        </div>

        <div className="last-box">
          <Animatedpagetoleft><HomeCard/></Animatedpagetoleft>
          <Animatedpagetoright><HomeCard/></Animatedpagetoright>
          <Animatedpagetoleft><HomeCard/></Animatedpagetoleft>
          <Animatedpagetoright><HomeCard/></Animatedpagetoright>
          <Animatedpagetoleft><HomeCard/></Animatedpagetoleft>
          <Animatedpagetoright><HomeCard/></Animatedpagetoright>
          <Animatedpagetoleft><HomeCard/></Animatedpagetoleft>
        </div>
      </section>

      </AnimatedPage>
    </div>
  )
}
