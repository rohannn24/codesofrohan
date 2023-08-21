import './Everyblog.css'
import { React, useState } from 'react'
import CardInfo from './CardInfo'
import CardList from './CardList'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function goToBtn() {
    window.scrollTo({
        top: 0, left: 0, behavior: 'smooth'
    })
}
export default function Everyblog() {
    const totalPage = Math.ceil(CardInfo.length/8);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(8);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = CardInfo.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
            <Helmet>
                <title>TrackInTravels | Blog Page</title>
                <meta name="description" content="Best guide blogs of places around the globe. Come explore and choose you next destination." />
            </Helmet>
                <section className="c-blog">
                    <div className="b-blog">
                        <div className="blog-left">
                            <h1 className="c-head">Blog | Latest Technologies in the world</h1><hr />
                            <CardList 
                                CardInfo={currentPosts}
                                totalPosts={CardInfo.length}
                            />
                            <div className="c-pagination-btn">
                                <div className="mg-a c-btn" onClick={() => {if(currentPage>1){setCurrentPage(currentPage-1)} else{setCurrentPage(1)}}}><p onClick={goToBtn}>Prev</p></div>
                                <p className='mg-a'>{currentPage} of {Math.ceil(CardInfo.length/8)}</p>
                                <div className="mg-a c-btn" onClick={() => {if(currentPage<Math.ceil(totalPage)){setCurrentPage(currentPage+1)} else{setCurrentPage(currentPage)}}}><p onClick={goToBtn}>Next</p></div>
                            </div>
                        </div>
                        <div className="blog-right">
                            <div className="recent">
                                <h3 className="r-head">Recent Blog</h3>
                                <ul>
                                    <li><Link to = "/blogs/top-10-most-popular-places-in-india">Top 10 Most Popular Places in India</Link></li>
                                    <li><Link to = "/blogs/top-10-best-places-in-india">Best places to visit in India</Link></li>
                                    <li><Link to = "/blogs/agra">Agra | Symbol of love</Link></li>
                                    <li><Link to = "/blogs/darjeeling">Darjeeling | It's Trekking Time</Link></li>
                                    <li><Link to = "/blogs/ladakh">Ladak is calling for a ride.</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
  )
}
