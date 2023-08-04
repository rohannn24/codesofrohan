import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Homeright() {
  return (
    <div>
        <section class="home-right">
          <h3 className="hr-head">Start Web-Dev</h3><hr/>
          <h5 className="hr-topics"><Link to = ''>Html</Link></h5>
          <h5 className="hr-topics"><Link to = ''>CSS</Link></h5>
          <h5 className="hr-topics"><Link to = ''>JavaScript</Link></h5>
          <h5 className="hr-topics"><Link to = ''>React.js</Link></h5>
          <h5 className="hr-topics"><Link to = ''>Nobe.js</Link></h5>
          <h5 className="hr-topics"><Link to = ''>Next.js</Link></h5>
          <h5 className="hr-topics"><Link to = ''>Back-end</Link></h5>
        </section>
    </div>
  )
}
