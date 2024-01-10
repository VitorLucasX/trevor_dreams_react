import React, {useEffect} from 'react'
import './home.scss'

// Imported Assets
import Video from '/Assets/video.mp4'
import imag1 from '/Assets/imag1.jpg'
import imag2 from '/Assets/imag2.jpg'
import imag3 from '/Assets/imag3.jpg'
import imag4 from '/Assets/imag4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Imported Icons
import { AiOutlineSwapRight } from 'react-icons/ai'

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="Home">
        <div className="videoBg">
            <video src={Video} autoPlay loop muted></video>
        </div>

        <div className="sectionText">
          <h1 data-aos= 'fade-up'>Unlock Your Travel Dreams With Us!</h1>
          <p data-aos= 'fade-up'>Discover the world's most adventurous nature,
            life is so short for a trip.</p>
          <button className='btn flex' data-aos= 'fade-up'>
            GET STARTED <AiOutlineSwapRight 
            className="icon"/>
          </button>
        </div>

        <div className="popularPlaces">
            <div className="content">
                <h3 data-aos= 'fade-up'>Popular Places</h3>
                <div className="images flex" data-aos= 'fade-left'>
                    <img src={imag1} alt="Destination Images" />
                    <img src={imag2} alt="Destination Images" />
                    <img src={imag3} alt="Destination Images" />
                    <img src={imag4} alt="Destination Images" />
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Home
