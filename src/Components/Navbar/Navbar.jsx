import React, {useState} from 'react'
import './navbar.scss'

//Import Icons
import { GiWinterGloves } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
// State to track and update navbar
  const [navBar, setNavBar] = useState('menu')
// Function to show navbar
  const showNavBar = () => {
    setNavBar('menu showNavbar')
  }
// Function to remove navbar
const removeNavBar = () => {
  setNavBar('menu')
}
  return (
    <div className="navBar">
        <div className="logoDiv">
            <GiWinterGloves className='icon' />
            <span>USA-Trips</span>
        </div>

        <div className={navBar}>
          <ul>
            <li className='navList'>
                Destination
            </li>
            <li className='navList'>
              About us
            </li>
            <li className='navList'>
              Testimonial
            </li>
            <li className='navList'>
              Gallery
            </li>
          </ul>

          {/* Icon remove Navbar*/}
          <AiFillCloseCircle className='closeIcon' onClick={removeNavBar} />
        </div>

        <button className="signUpBtn btn">Sign Up</button>

         {/* Icon to toggle Navbar*/}
        <PiDotsNineBold className='menuIcon' onClick={showNavBar}/>
    </div>
  )
}

export default Navbar
