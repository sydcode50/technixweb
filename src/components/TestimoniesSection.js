import React from 'react';
import TestimonyCard from './TestimonyCard'; // Import the TestimonyCard component
import '../styles/TestimoniesSection.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

  const testimonies = [
    {
      imageSrc: 'path-to-image1.jpg',
      name: 'John Doe',
      date: 'August 15, 2023',
      testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
      imageSrc: 'path-to-image1.jpg',
      name: 'John Doe',
      date: 'August 15, 2023',
      testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
      imageSrc: 'path-to-image1.jpg',
      name: 'John Doe',
      date: 'August 15, 2023',
      testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
      imageSrc: 'path-to-image1.jpg',
      name: 'John Doe',
      date: 'August 15, 2023',
      testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
      imageSrc: 'path-to-image1.jpg',
      name: 'John Doe',
      date: 'August 15, 2023',
      testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more testimonies...
  ];

  const TestimoniesSection = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      
      <div className='testimonies-section'>
        <div className="title">
          <h2>OVER 100 SATISFIED CUSTOMERS</h2>
          <div className="stars">
            {/* SVG stars go here */}
            </div>
        </div>
        <div className='TestimoniesSlider'>
          <Slider {...settings}>
          {testimonies.map((testimony, index) => (
            <TestimonyCard
              key={index}
              imageSrc={testimony.imageSrc}
              name={testimony.name}
              date={testimony.date}
              testimony={testimony.testimony}
            />
          ))}
          </Slider>
        </div>
        
      </div>
    );
  }

export default TestimoniesSection;