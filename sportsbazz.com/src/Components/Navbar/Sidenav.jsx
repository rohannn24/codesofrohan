import './Navstyle.css'
import React from 'react'
import { Link } from "react-router-dom"
import AnimatedPage from '../Animation/Animatedpage';

export default function Sidenav() {
  return (
    <>
    <section className="f-sidenav">
        <section className="sidenav">
            <ul className="game-list">
                <Link to = '/'><li className="game-name" onClick={() => {if(document.getElementById('s-1').style.display === 'none') { document.getElementById('s-1').style.display = 'block'; document.getElementById('s-2').style.display = 'none';document.getElementById('s-3').style.display = 'none';document.getElementById('s-4').style.display = 'none';} else {document.getElementById('s-1').style.display = 'none'}}}><p className='s-name'>NFL</p> <p><i class="arrow right"></i></p></li></Link>
                <Link to = '/'><li className="game-name" onClick={() => {if(document.getElementById('s-2').style.display === 'none') { document.getElementById('s-1').style.display = 'none'; document.getElementById('s-2').style.display = 'block';document.getElementById('s-3').style.display = 'none';document.getElementById('s-4').style.display = 'none';} else {document.getElementById('s-2').style.display = 'none'}}}><p className='s-name'>NBA</p> <p><i class="arrow right"></i></p></li></Link>
                <Link to = '/'><li className="game-name" onClick={() => {if(document.getElementById('s-3').style.display === 'none') { document.getElementById('s-1').style.display = 'none'; document.getElementById('s-2').style.display = 'none';document.getElementById('s-3').style.display = 'block';document.getElementById('s-4').style.display = 'none';} else {document.getElementById('s-3').style.display = 'none'}}}><p className='s-name'>MMA</p> <p><i class="arrow right"></i></p></li></Link>
                <Link to = '/'><li className="game-name" onClick={() => {if(document.getElementById('s-4').style.display === 'none') { document.getElementById('s-1').style.display = 'none'; document.getElementById('s-2').style.display = 'none';document.getElementById('s-3').style.display = 'none';document.getElementById('s-4').style.display = 'block';} else {document.getElementById('s-4').style.display = 'none'}}}><p className='s-name'>CRICKET</p> <p><i class="arrow right"></i></p></li></Link>
            </ul>
        </section>
        <section className="sublist1" id = 's-1'>
            <ul className="game-list-sublist">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
            </ul>
        </section>
        <section className="sublist1" id = 's-2'>
            <ul className="game-list-sublist">
                <li>Lorem, ipsum dolor.1</li>
                <li>Lorem, ipsum dolor.1</li>
                <li>Lorem, ipsum dolor.1</li>
                <li>Lorem, ipsum dolor.1</li>
                <li>Lorem, ipsum dolor.1</li>
            </ul>
        </section>
        <section className="sublist1" id = 's-3'>
            <ul className="game-list-sublist">
                <li>Lorem, ipsum dolor.2</li>
                <li>Lorem, ipsum dolor.2</li>
                <li>Lorem, ipsum dolor.2</li>
                <li>Lorem, ipsum dolor.2</li>
                <li>Lorem, ipsum dolor.2</li>
            </ul>
        </section>
        <section className="sublist1" id = 's-4'>
            <ul className="game-list-sublist">
                <li>Lorem, ipsum dolor.3</li>
                <li>Lorem, ipsum dolor.3</li>
                <li>Lorem, ipsum dolor.3</li>
                <li>Lorem, ipsum dolor.3</li>
                <li>Lorem, ipsum dolor.3</li>
            </ul>
        </section>
    </section>
    </>
  )
}
