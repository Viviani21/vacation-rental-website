import React from 'react'
import './CarouselStyles.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstImg from '../assets/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg'
import SecondImg from '../assets/gene-giromini-5NhTtAK6NI0-unsplash.jpg'
import ThurdImg from '../assets/kilarov-zaneit-aXq37rUfotU-unsplash.jpg'

const UncontrolledCarousel = () => {
  
    return (
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage imgUrl={FirstImg} text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imgUrl={SecondImg} text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imgUrl={ThurdImg} text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

export default UncontrolledCarousel