import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/FeaturedExhibit.css';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Sample featured experiences data
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
  const panelsRef = useRef([]);

  useEffect(() => {
    // Wait for component to mount and refs to be populated
    const initAnimation = () => {
      if (!sectionRef.current || panelsRef.current.length === 0 ||
          panelsRef.current.some(panel => !panel)) {
        // If refs aren't ready yet, try again in a moment
        setTimeout(initAnimation, 100);
        return;
      }

      // Clear any existing ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Create the main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%", // Start a bit earlier
          end: `+=${(panelsRef.current.length) * 200}%`, // Double the scroll distance for each panel
          scrub: 1, // Slower scrub for smoother transitions
          pin: true, // Pin the section
          pinSpacing: true, // Add space for scrolling
          markers: false, // Set to true for debugging, false for production
          anticipatePin: 1, // Smoother pin start
        }
      });

      // Reset all panels to their initial state
      panelsRef.current.forEach((panel, i) => {
        if (i === 0) {
          // First panel is visible
          gsap.set(panel, { xPercent: 0, opacity: 1 });
        } else {
          // Other panels are hidden off-screen
          gsap.set(panel, { xPercent: 100, opacity: 0 });
        }
      });

      // Create the panel transitions with longer viewing time
      const panelCount = panelsRef.current.length;

      // Each panel transition happens at specific scroll points
      // with plateaus in between for reading
      for (let i = 0; i < panelCount - 1; i++) {
        // Calculate transition points with plateaus in between
        const startTransition = i / (panelCount * 2); // Start transition
        const midTransition = startTransition + 0.1; // Middle of transition

        // Move current panel out to the left
        tl.to(panelsRef.current[i], {
          xPercent: 0, // Stay in place initially
          opacity: 1,
          duration: 0.2,
          ease: "none"
        }, startTransition);

        // Then start moving out
        tl.to(panelsRef.current[i], {
          xPercent: -100,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut"
        }, midTransition);

        // Bring next panel in from the right
        tl.fromTo(
          panelsRef.current[i + 1],
          { xPercent: 100, opacity: 0 },
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut"
          },
          midTransition
        );
      }

    };

    // Start the initialization process
    initAnimation();

    // Clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Initialize the refs array
  useEffect(() => {
    // Reset the refs array to ensure it's empty before populating
    panelsRef.current = [];
  }, []);

  return (
    <section className="featured-exhibit" ref={sectionRef}>
      <div className="exhibit-container">
        <div className="section-header">
          <h2>FEATURED EXPERIENCES</h2>
          <p>Discover our most extraordinary travel adventures</p>
        </div>

        <div className="exhibit-scroll-section">
          {featuredExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className="exhibit-panel"
              ref={el => {
                // Ensure we're not adding null elements to the refs array
                if (el) panelsRef.current[index] = el;
              }}
              style={{
                // Set initial visibility for debugging
                // First panel visible, others hidden
                opacity: index === 0 ? 1 : 0,
                transform: `translateX(${index === 0 ? 0 : 100}%)`,
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

export default FeaturedExhibit;
