import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


const RentalsList = () => {
    const [rentals, setRentals] = useState([]);
    const { rentalId } = useParams();
    const navigate = useNavigate();

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
  

  
    const handleBooking=(rentalId)=>{
      navigate(`/booking-form/${rentalId}`)
  
    }

  return (
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
                <button className="btn btn-rentals" onClick={()=>handleBooking(rental.id)}>Book Now</button>
              </div>                 
            </div>               
          </div>
         
       
      ))}
    </div>
    </div>
  )
}

export default RentalsList