import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/FeaturedExhibit.css';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

gsap.registerPlugin(ScrollTrigger);

const featuredExperiences = [
  {
    id: 1,
    title: 'Serengeti Safari Adventure',
    description: 'Embark on an unforgettable journey through the vast plains of the Serengeti. Witness the majestic wildlife in their natural habitat, from lions and elephants to giraffes and zebras.',
    additionalInfo: 'Our expert guides will ensure you experience the best of African wildlife while staying in luxurious safari lodges under the starlit sky.',
    features: [
      '7-day immersive safari experience',
      'Witness the Great Migration',
      'Luxury accommodations included',
      'Professional wildlife photography tips'
    ],
    image: kitandra2
  },
  {
    id: 2,
    title: 'Mountain Gorilla Expedition',
    description: 'Trek through the misty forests of Bwindi to encounter endangered mountain gorillas in their natural habitat. A once-in-a-lifetime wildlife experience.',
    additionalInfo: 'Our experienced trackers will guide you safely through the forest to observe these magnificent creatures up close in a responsible and sustainable way.',
    features: [
      'Official gorilla trekking permits',
      'Expert local guides and trackers',
      'Comfortable forest accommodations',
      'Conservation contribution included'
    ],
    image: kitandra
  },
  {
    id: 3,
    title: 'Cultural Immersion Tour',
    description: 'Experience the rich cultural heritage of East Africa through immersive village visits, traditional ceremonies, and authentic interactions with local communities.',
    additionalInfo: 'Learn traditional crafts, participate in dance ceremonies, and gain insights into the daily lives and customs of diverse ethnic groups across Uganda and Rwanda.',
    features: [
      'Village homestay experiences',
      'Traditional cooking lessons',
      'Craft workshops with local artisans',
      'Authentic cultural performances'
    ],
    image: kitandra2
  },
  {
    id: 4,
    title: 'Lake Victoria Adventure',
    description: 'Explore the shores and islands of Africa\'s largest lake with activities ranging from boat safaris to sport fishing and bird watching in this biodiverse ecosystem.',
    additionalInfo: 'Relax on pristine beaches, visit traditional fishing villages, and enjoy spectacular sunsets over the vast waters of this magnificent freshwater lake.',
    features: [
      'Island hopping boat tours',
      'Premium sport fishing excursions',
      'Lakeside luxury accommodations',
      'Bird watching with expert guides'
    ],
    image: kitandra
  }
];

const FeaturedExhibit = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current || panelsRef.current.length === 0) return;
  
    // Calculate dimensions
    const panelWidth = window.innerWidth;
    const totalWidth = panelWidth * featuredExperiences.length;
    const totalScrollDistance = totalWidth - panelWidth; // Exact scroll distance needed
  
    // Set container and panel dimensions
    gsap.set(containerRef.current, { width: totalWidth });
    panelsRef.current.forEach(panel => gsap.set(panel, { width: panelWidth }));
  
    // Create horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: +=`${totalScrollDistance}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false
      }
    });
  
    // Main container animation
    tl.to(containerRef.current, {
      x: -totalScrollDistance,
      ease: "none"
    });
  
    // Panel animations with proper timing
    const panelDuration = 0.6;
    const panelDelay = 0.3;
  
    panelsRef.current.forEach((panel, index) => {
      if (index > 0) {
        // Entry animation
        tl.fromTo(panel,
          { x: panelWidth, opacity: 1 },
          {
            x: 0,
            opacity: 1,
            duration: panelDuration,
            ease: "power2.out",
            delay: panelDelay
          },
          index * (panelDuration + panelDelay) - panelDuration
        );
  
        // Exit animation for previous panel
        if (index > 0) {
          tl.to(panelsRef.current[index - 1],
            {
              x: -panelWidth * 0.5,
              opacity: 1,
              duration: panelDuration * 0.8,
              ease: "power2.in"
            },
            index * (panelDuration + panelDelay) - panelDuration
          );
        }
      }
    });
  
    // Ensure last panel stays fully visible
    tl.to({}, { duration: 0.1 }); // Small padding at end
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section className="featured-exhibit" ref={sectionRef}>
      <div className="section-header">
        <h2>FEATURED EXPERIENCES</h2>
        <p>Discover our most extraordinary travel adventures</p>
      </div>

      <div className="exhibit-scroll-container">
        <div className="exhibit-scroll-wrapper" ref={containerRef}>
          {featuredExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className="exhibit-panel"
              ref={el => panelsRef.current[index] = el}
              style={{
                backgroundColor: [
                  '#f0f8ff', '#fff0f5', '#fff8dc'
                ][index % 4],
                zIndex: featuredExperiences.length - index
              }}
            >
              <div className="exhibit-content">
                <div className="exhibit-text">
                  <h2>FEATURED EXPERIENCE</h2>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                  <p>{experience.additionalInfo}</p>
                  <ul className="exhibit-features">
                    {experience.features.map((feature, i) => (
                      <li key={i}><i className="fas fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                  <button className="book-now-button">
                    Book This Adventure
                  </button>
                </div>
                <div className="exhibit-image">
                  <img src={experience.image} alt={experience.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExhibit