import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    quote: 'My trip to the Swiss Alps was absolutely breathtaking. The guides were knowledgeable and the accommodations were perfect. I can\'t wait to book my next adventure!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    quote: 'The Kilimanjaro trek was challenging but incredibly rewarding. The team made sure we were safe and comfortable throughout the journey. A life-changing experience!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Madrid, Spain',
    quote: 'The culinary tour through Italy exceeded all my expectations. I learned so much about local cuisine and made memories that will last a lifetime.',
    rating: 4
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <div className="section-header">
        <h2>What Our Travelers Say</h2>
        <p>Real experiences from our satisfied customers</p>
      </div>
      
      <div className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
          >
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i} 
                  className={`fas fa-star ${i < testimonial.rating ? 'filled' : ''}`}
                ></i>
              ))}
            </div>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="testimonial-indicators">
        {testimonials.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
            onClick={() => setCurrentTestimonial(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
