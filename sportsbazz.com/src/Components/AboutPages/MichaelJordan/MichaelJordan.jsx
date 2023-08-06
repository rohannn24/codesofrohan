import './MichaelJordan.css'
import React from 'react'
import AnimatedPage from '../../Animation/Animatedpage'
import HomeNav from '../../Home/HomeNav'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function MichaelJordan() {
  return (
    <div className='mj'>
        <Helmet>
            <title>Michael Jordan: NetWorth 2023, Family, and Stats</title>
            <meta name="description" content="On EssentiallySports, you can get the most recent details about former NBA superstar Michael Jordan, including his net worth, businesses, shoe lines, and other details." />
        </Helmet>
        <AnimatedPage>
        <HomeNav/>
        <h1 className="mj-name">Michael Jordan</h1>
        <div className="s-line-bold"></div>
        <h4 className="mj-nw">Michael Jordan: Net Worth 2023, Family, and Stats</h4>
        <div className="s-line"></div>
        <h5>Michael Jordan: Net Worth 2023</h5>
        <p><Link to ='/tag/michael-jordan' className='c-link'>Michael Jordan</Link> is arguably the greatest basketball player ever and his success on the hardwood provided a platform for his several lucrative off-the-court ventures. Jordan's endorsement deal with Nike was crucial to the financial growth of both parties. Nike's marketing coupled with MJ's popularity, superstardom, and legend earned major profits for the partnership, which it still does to this day.</p>
        <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/20210316180312/GettyImages-74049528.jpg" alt="" />
        <p>The birth of the Jordan brand took their partnership to a different level and revolutionized the sneaker culture in the country and around the world. MJ reportedly gets a 5% share from every Jordan sneaker sold, which helped him make $150 million in 2022. Interestingly, it is more than his NBA career earnings.</p>
        <p>The Chicago Bulls legend also made some smart investments over the years that helped him become the first-ever ex-athlete to become a billionaire. He is the majority owner of the Charlotte Hornets in the NBA and 23XI Racing in NASCAR. According to reports, Jordan now has a reported net worth of $1.7 billion and is the richest retired athlete in the world.</p>
        <div className="s-line"></div>
        <h5>Michael Jordan's family, Kids, Wife, and Affairs</h5>
        <p>Michael Jordan and his ex-wife Juanita Vanoy tied the knot in 1989. They have three children together: Jeffrey, Marcus, and Jasmine. Jordan and Juanita filed for divorce, citing irreconcilable differences in 2002, but got back together after a short while. They filed for divorce again later and the decree was finalized in 2006. As per reports, MJ paid a divorce settlement, a mix of property and assets, worth $168 million.</p>
        <p>It was the largest ever celebrity settlement at the time. In 2013, the six-time NBA champion married Cuban-American model Yvette Prieto after a fateful meeting at a Miami club. A year later, the couple welcomed their twin daughters, Victoria and Ysabel.</p>
        <p>According to reports, Jordan had an affair with Karla Knafel before marrying Juanita and had to pay Knafel $250,000 to keep the relationship a secret. Also, reports suggested that before marrying Vanoy, the Bulls legend dated actress Robin Givens, who is the ex-wife of boxing legend Mike Tyson.</p>
        <p>Jeffrey and Marcus Jordan played basketball from a very young age and had their stints with college basketball. As of now, Jeffrey works for the Jordan brand and handles digital innovation. MJ's eldest son recently launched the sports apparel company Äktiiv with Nike veteran Tim Gobet. On the other hand, Marcus is the proud owner of the Trophy Room, a sneaker store that sells Air Jordan products. The brothers also co-founded the Heir Jordan foundation.</p>
        <p>Jordan's daughter Jasmine is currently a field representative at the Jordan brand and closely works with WNBA stars. She is very active on social media and engages with a wide audience regularly; she once shared a throwback picture of her parents cuddled up. She also broke the heart of her followers when she mourned the death of her beloved dog on Instagram.</p>
        <div className="s-line"></div>
        <h5>Michael Jordan's childhood & early life</h5>
        <p>Michael Jordan was born in Brooklyn, New York as the fourth child in a family of five children to Deloris and James R. Jordan Sr. He was brought up in Wilmington, North Carolina with his two older brothers and a sister, and one younger sister. From a very young age, Michael started playing basketball with his siblings in their grandparent's backyard. Since he was shorter than his older siblings, he would usually lose initially.</p>
        <p>This lighted the six-time NBA champion's legendary competitive fire. He talked about how his siblings pushed him early on in life during his Hall of Fame enshrinement speech as well. Once he grew up a bit and improved his skills, MJ started beating his siblings. However, he was still not very tall and this concerned him as a potential roadblock in a much-coveted basketball career.</p>
        </AnimatedPage>
    </div>
  )
}
