
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Rentals from './pages/Rentals';
import BookingForm from './pages/BookingForm';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/rentals" element ={<Rentals/>}/>
        <Route path="/booking-form" element={<BookingForm/>}/>
      </Routes>
   
    </>
  );
}

export default App;
