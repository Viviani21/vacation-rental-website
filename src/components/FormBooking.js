import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FormBookingStyles.css';
import DatePicker from 'react-datepicker'; // Stelle sicher, dass du die entsprechende Bibliothek installiert hast
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';




const FormBooking = () => {

  const { rentalId } = useParams(); 
  console.log(rentalId);
const navigate =useNavigate()
  
   const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/rentals/${rentalId}`);
        setBookingData(response.data);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };
    fetchBookingData();
  }, [rentalId]);
  console.log(bookingData);

  useEffect(() => {
    // Wenn bookingData vorhanden ist, setze die Werte in das Formular
    if (bookingData) {
      setFormData({
        ...formData,
        propertyId: bookingData.id || '',
        propertyTitle: bookingData.title || '',
        propertyDescription: bookingData.description || '',
      });
    }
  }, [bookingData]);
  
  const [formData, setFormData] = useState({
    propertyId: '',
    propertyTitle: '',
    propertyDescription: '',
    startDate: null,
    endDate: null,
    tenantFirstName: '',
    tenantSecondName: '',
    tenantEmail: '',
    tenantPhone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleStartDateChange = (date) => {
    setFormData({ ...formData, startDate: date });
  };

  const handleEndDateChange = (date) => {
    setFormData({ ...formData, endDate: date });
  };

  const handleSubmit = async (e) => {
    try {e.preventDefault();
      await axios.post('http://localhost:3001/bookings', formData);

      
      setFormData({
        propertyId: '',
        propertyTitle: '',
        propertyDescription: '',
        startDate: null,
        endDate: null,
        tenantFirstName: '',
        tenantSecondName: '',
        tenantEmail: '',
        tenantPhone: '',})
    alert("You have successfully booked your vacation!")
navigate("/rentals")
    } catch (error) {
      console.error('Error making booking:', error);
    }
    
  };

  return (
    <div className='booking-form'>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
       
        <input type="hidden" name="propertyId"  value={bookingData.id} />
        <br />
        <label>Rental Title:</label>
        <input type="text" name="propertyTitle" value={bookingData.title} />
        <br />
        <label>Rental Description:</label>
        <input type="text" name="propertyDescription" value={bookingData.description} />
        <br />
        
        <label> Start Date: </label>
        <DatePicker
          selected={formData.startDate}
          onChange={handleStartDateChange}
          dateFormat="yyyy-MM-dd"
          required/>
        
        <label>End Date: </label>
        <DatePicker
          selected={formData.endDate}
          onChange={handleEndDateChange}
          dateFormat="yyyy-MM-dd"
          required/>
        <br />
        <label>Tenant First Name:</label>
        <input type="text" name="tenantFirstName" onChange={handleChange} required/>
        <br />
        <label>Tenant Second Name:</label>   
        <input type="text" name="tenantSecondName" onChange={handleChange} required/>
        <br />
        <label>Tenant E-Mail:</label>   
        <input type="email" name="tenantEmail" onChange={handleChange} required/>
        <br />
        <label>Tenant Phone:</label>   
        <input type="phone" name="tenantPhone" onChange={handleChange} required/>
        <br />
      
        <button type="submit" className='btn'>Book Now</button>
      </form>
    </div>
  );
};

export default FormBooking