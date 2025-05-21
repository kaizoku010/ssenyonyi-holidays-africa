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
    // Make sure all refs are populated and wait for DOM to be fully ready
    if (!sectionRef.current || panelsRef.current.length === 0) return;

    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Make sure all panels are visible initially for debugging
    gsap.set(panelsRef.current, { clearProps: "all" });

    // Create the timeline with better configuration
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Start when the top of the section hits the top of the viewport
        end: "+=400%", // Scroll duration - make it longer for smoother transitions
        scrub: true, // Smooth scrubbing effect
        pin: true, // Pin the section
        pinSpacing: true, // Add space for scrolling
        markers: true, // Enable markers for debugging
        anticipatePin: 1, // Helps with smoother pin start
        onEnter: () => console.log("Section entered"),
        onLeave: () => console.log("Section left"),
        onEnterBack: () => console.log("Section entered back"),
        onLeaveBack: () => console.log("Section left back"),
        onUpdate: (self) => console.log("Progress:", self.progress.toFixed(2)),
      }
    });

    // Set initial state - show first panel, hide others
    gsap.set(panelsRef.current[0], { xPercent: 0, opacity: 1 });
    gsap.set(panelsRef.current.slice(1), { xPercent: 100, opacity: 0 });

    // Create labels for each panel transition
    panelsRef.current.forEach((_, i) => {
      if (i > 0) {
        tl.addLabel(`panel${i}`, (i - 1) / (panelsRef.current.length - 1));
      }
    });

    // Animate each panel with better timing
    panelsRef.current.forEach((panel, i) => {
      if (i < panelsRef.current.length - 1) {
        // Calculate the progress point for this transition
        const progress = i / (panelsRef.current.length - 1);

        // Animate current panel out
        tl.to(panel, {
          xPercent: -100,
          opacity: 0,
          ease: "power2.inOut"
        }, progress);

        // Animate next panel in
        tl.fromTo(
          panelsRef.current[i + 1],
          { xPercent: 100, opacity: 0 },
          { xPercent: 0, opacity: 1, ease: "power2.inOut" },
          progress
        );
      }
    });

    // Log when the animation is complete
    tl.eventCallback("onComplete", () => console.log("Animation complete"));

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
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
              ref={el => panelsRef.current[index] = el}
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
