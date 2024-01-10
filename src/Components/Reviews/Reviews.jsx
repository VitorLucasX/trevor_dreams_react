import React, {useEffect} from 'react'
import './reviews.scss'

// Imported Icons
import { AiFillStar } from 'react-icons/ai';

// Imported Images
import image1 from '/Assets/Image1.jpg'
import image2 from '/Assets/Image2.jpg'
import image3 from '/Assets/Image3.jpg'
import image4 from '/Assets/Image4.jpg'
import image5 from '/Assets/Image5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="reviews section container">
        <div className="secContainer grid">
            <div className="textDiv">
                <span className="redText" data-aos="fade-up">
                  FROM OUR CLIENTES
                </span>
                <h3 data-aos="fade-up">Real Travel History From Our Beloved Clients</h3>
                <p data-aos="fade-up">
                  By choosing us as their tour agency,
                  customers can expect an 
                  enriching and enjoyable travel experience,
                  filled with unforgettable
                  memories that will last a lifetime.
                </p>
                <span className="stars flex" data-aos="fade-up">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </span>

                <div className="clientImages flex" data-aos="fade-up">
                  <img src={image1} alt="Client Image" />
                  <img src={image2} alt="Client Image" />
                  <img src={image3} alt="Client Image" />
                  <img src={image4} alt="Client Image" />
                </div>
            </div>
            <div className="imgDiv" data-aos="fade-down">
                <img src={image5} alt="Div image" />
            </div>
        </div>
    </div>
  )
}

export default Reviews
