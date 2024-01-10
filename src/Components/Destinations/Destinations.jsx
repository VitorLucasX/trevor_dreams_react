import React, {useEffect} from 'react'
import './destinations.scss'

// Imported Icons
import { MdLocationPin } from 'react-icons/md'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { TiLocation } from 'react-icons/ti'

import image1 from '/Assets/img1.jpg'
import image2 from '/Assets/img2.jpg'
import image3 from '/Assets/img3.jpg'
import image4 from '/Assets/img4.jpg'
import image5 from '/Assets/img5.jpg'
import image6 from '/Assets/img6.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const destinations = [
  {
    id: 1,
    img: image1,
    name: 'Moscow',
    location: 'Russia',
    rating: 4.6,
  },
  {
    id: 2,
    img: image2,
    name: 'Pequim',
    location: 'China',
    rating: 4.9,
  },
  {
    id: 3,
    img: image3,
    name: 'Jakarta',
    location: 'Indonesia',
    rating: 4.6,
  },
  {
    id: 4,
    img: image4,
    name: 'Honolulu',
    location: 'Havaí',
    rating: 4.8,
  },
  {
    id: 5,
    img: image5,
    name: 'Tokyo',
    location: 'Japão',
    rating: 4.8,
  },
  {
    id: 6,
    img: image6,
    name: 'Rio de Janeiro',
    location: 'Brasil',
    rating: 4.6,
  }
]

const Destinations = () => {
  
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="destination section container">
        <div className="secContainer">
            
            <div className="secTitl">
                <span className="redText" data-aos= 'fade-right'>EXPLORE NOW</span>
                <h3 data-aos= 'fade-right'>Find Your Dream Destination</h3>
                <p data-aos= 'fade-right'>Fill in the fields below to find the best
                  spot for your next tour.
                </p>
            </div>

            <div className="searchField grid">
                <div className="inputField flex" data-aos= 'fade-up'>
                    <MdLocationPin className="icon"/>
                    <input type="text" placeholder='Location' />
                </div>

                <div className="inputField flex" data-aos= 'fade-up'>
                    <BsFillCreditCardFill className="icon"/>
                    <input type="text" placeholder='Budget' />
                </div>

                <div className="inputField flex" data-aos= 'fade-up'>
                    <BsFillCalendarDateFill className="icon"/>
                    <input type="text" placeholder='Date' />
                </div>

                <button className="btn flex" data-aos= 'fade-up'>
                  <BiSearchAlt className="icon"/>
                  Search
                </button>
            </div>

            <div className="secMenu">
                <ul className="flex">
                    <li className="active">All</li>
                    <li>Recommended</li>
                    <li>Beach</li>
                    <li>Park</li>
                    <li>Nature</li>
                    <li>Mountain</li>
                </ul>
            </div>

            <div className="destinationContainer grid">
                {destinations.map(destination => {
                  return (
                    <div className="singleDestination" key={destination.id} data-aos= 'fade-up'>
                    <div className="imgDiv" data-aos= 'fade-up'>
                        <img src={destination.img} alt="Destination Image" />
                        
                        <div className="descInfo flex">
                            <div className="text">
                              <span className="name">{destination.name}</span>
                              <p className='flex'>
                                <TiLocation className="icon"/>
                                {destination.location}
                              </p>
                            </div>
                            <span className="rating">{destination.rating}</span>
                        </div>
                    </div>
                </div>
                  )
                })}
            </div>

        </div>
    </div>
  )
}

export default Destinations
