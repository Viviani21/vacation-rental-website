import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import UncontrolledCarousel from '../components/UncontrolledCarousel'


import RentalsList from '../components/RentalsList';


const Rentals = () => {

  return (
    <div>
        <NavBar/>
        <UncontrolledCarousel/>
        <RentalsList/>
        <Footer/>
    </div>
  )
}

export default Rentals