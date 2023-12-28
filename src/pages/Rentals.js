import React, { useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import UncontrolledCarousel from '../components/UncontrolledCarousel'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Rentals = () => {

  const [rentals, setRentals] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.get('http://localhost:3001/rentals');
        setRentals(response.data);
      }catch(error){
        console.error('Error fetching Rentals:', error);

      }
    };
    fetchData();
  },[]);

  const navigate = useNavigate();

  const handleBooking=((rental)=>{
    navigate("/booking-form");

  })

  
  return (
    <div>
        <NavBar/>
        <UncontrolledCarousel/>
        <div className='rentals'>
        <h2>Rentals List</h2>
        <div className='row'>
          {rentals.map((rental)=>(
           
             
              <div className = 'col-md-6 col-lg-3 d-flex align-items-center justify-content-center mb-5'key={rental.id} >
                <div className="card product-card h-100 d-flex justify-content-center" >
                  <img className="card-img-top img-thumbnail" src= {rental.image} alt = "rental"/>
                  <div className="card-body" >
                    <h5 className="card-title">{rental.title}</h5>
                    <p className="card-text" > {rental.description}</p>
                    <button className="btn" onClick={()=>handleBooking(rental)}>Booking</button>
                  </div>                 
                </div>               
              </div>
             
           
          ))}
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Rentals