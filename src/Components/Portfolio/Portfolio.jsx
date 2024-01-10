import React, {useEffect} from 'react'
import './portfolio.scss'

// Imported assets
import icon1 from '/Assets/icon-support.png'
import icon2 from '/Assets/icon-destination.png'
import icon3 from '/Assets/icon-chat.png'
import image from '/Assets/girdImage.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Portfolio = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])

  return (
    <div className="portifolio section container">
        <div className="secContainer grid">
            <div className="leftContent">
                <div className="secHeading">
                    <h3 data-aos="fade-up">Why Should You Choose Us</h3>
                    <p data-aos="fade-up">
                      We have extensive knowledge and experience
                      in the travel industry.
                    </p>
                </div>

                <div className="grid">
                    <div className="singlePortifolio flex">
                        <div className="iconDiv">
                            <img src={icon1} alt="" />
                        </div>

                        <div className="infor" data-aos="fade-up">
                            <h4 data-aos="fade-up">Safety and support</h4>
                            <p data-aos="fade-up">
                              Our top priority is the safety and
                              well-being of our clientes.
                              We maintain high safety standards and
                              have emergency support
                              available during the trip
                            </p>
                        </div>
                    </div>

                    <div className="singlePortifolio flex" data-aos="fade-up">
                        <div className="iconDiv">
                            <img src={icon2} alt="" />
                        </div>

                        <div className="infor">
                            <h4>Diverse Range of Destinations</h4>
                            <p>
                             Whether it's a domestic tour or an 
                             international adventure, we 
                             cover a wide range of destinations to
                             cater to different
                             interests and preferences.                 
                            </p>
                        </div>
                    </div>

                    <div className="singlePortifolio flex" data-aos="fade-up">
                        <div className="iconDiv">
                            <img src={icon3} alt="" />
                        </div>

                        <div className="infor">
                            <h4>24/7 Customer Support</h4>
                            <p>
                              Our dedicated customer support team is 
                              available round the 
                              clock to address any queries or 
                              concerns before, during, and 
                              after the trip.
                            </p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="rightContent" data-aos="fade-down">
                  <img src={image} alt="Image" />
              </div>
        </div>
    </div>
  )
}

export default Portfolio
