import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/FeaturedExhibit.css';
import kitandra2 from '../media/vic_.jpg';
import Sere from "../media/gef.jpg"
import Mount from "../media/mount.jpg"
import Dance from "../media/danc.JPG"

gsap.registerPlugin(ScrollTrigger);

const FeaturedExhibit = () => {
  const { t } = useTranslation();

  const featuredExperiences = [
    {
      id: 1,
      title: t('featuredExhibit.experiences.serengeti.title'),
      description: t('featuredExhibit.experiences.serengeti.description'),
      additionalInfo: t('featuredExhibit.experiences.serengeti.additionalInfo'),
      features: t('featuredExhibit.experiences.serengeti.features', { returnObjects: true }),
      image: Sere
    },
    {
      id: 2,
      title: t('featuredExhibit.experiences.gorilla.title'),
      description: t('featuredExhibit.experiences.gorilla.description'),
      additionalInfo: t('featuredExhibit.experiences.gorilla.additionalInfo'),
      features: t('featuredExhibit.experiences.gorilla.features', { returnObjects: true }),
      image: Mount
    },
    {
      id: 3,
      title: t('featuredExhibit.experiences.cultural.title'),
      description: t('featuredExhibit.experiences.cultural.description'),
      additionalInfo: t('featuredExhibit.experiences.cultural.additionalInfo'),
      features: t('featuredExhibit.experiences.cultural.features', { returnObjects: true }),
      image: Dance
    },
    {
      id: 4,
      title: t('featuredExhibit.experiences.victoria.title'),
      description: t('featuredExhibit.experiences.victoria.description'),
      additionalInfo: t('featuredExhibit.experiences.victoria.additionalInfo'),
      features: t('featuredExhibit.experiences.victoria.features', { returnObjects: true }),
      image: kitandra2
    }
  ];
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    let scrollTriggerInstance;

    const setupScrollAnimation = () => {
      // Kill any existing ScrollTrigger instances
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }

      if (!sectionRef.current || !containerRef.current || panelsRef.current.length === 0) return;

      // Calculate dimensions
      const panelWidth = window.innerWidth;
      const totalWidth = panelWidth * featuredExperiences.length;
      const totalScrollDistance = totalWidth - panelWidth;

      // Set container and panel dimensions
      gsap.set(containerRef.current, { width: totalWidth });
      panelsRef.current.forEach(panel => gsap.set(panel, { width: panelWidth }));

      // Create horizontal scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalScrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false
        }
      });

      // Store the ScrollTrigger instance
      scrollTriggerInstance = ScrollTrigger.getAll().pop();

      // Main container animation
      tl.to(containerRef.current, {
        x: -totalScrollDistance,
        ease: "none"
      });
    };

    // Initial setup
    setupScrollAnimation();

    // Handle resize events
    const handleResize = () => {
      // Debounce resize events
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(() => {
        setupScrollAnimation();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [featuredExperiences.length]);
  return (
    <section className="featured-exhibit" ref={sectionRef}>
      <div className="section-header">
        <h2>{t('featuredExhibit.header.title')}</h2>
        <p>{t('featuredExhibit.header.subtitle')}</p>
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
                  '#f0f8ff', '#fff0f5', '#fff8dc', '#f0fff0'
                ][index],
                zIndex: featuredExperiences.length - index
              }}
            >
              <div className="exhibit-content">
                <div className="exhibit-text">
                  <h2>{t('featuredExhibit.featuredExperience')}</h2>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                  <p>{experience.additionalInfo}</p>
                  <ul className="exhibit-features">
                    {experience.features.map((feature, i) => (
                      <li key={i}><i className="fas fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                  <Link>
                  <button className="book-now-button">
                    {t('featuredExhibit.bookButton')}
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




