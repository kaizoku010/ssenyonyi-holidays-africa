import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './ScrollPane.css'; // you must include the original styles

gsap.registerPlugin(ScrollTrigger);

const ScrollSections = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      const module = section.querySelector('.module');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: '+=300%',
          scrub: 1,
          pin: true,
        },
      });

      const figures = module.querySelectorAll('.fig');
      tl.to(figures, {
        xPercent: 10,
        autoAlpha: 0,
        ease: 'none',
        duration: 0.5,
        stagger: 0.5,
      });

      tl.to(module.querySelectorAll('.panels'), { autoAlpha: 1 }, '<');

      const panels = module.querySelectorAll('.panel');

      // Randomize color just like original
      gsap.set(panels, {
        backgroundColor: () =>
          `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
      });

      panels.forEach((panel, i) => {
        tl.fromTo(
          panel,
          { xPercent: i ? -100 : 0 },
          {
            xPercent: i === panels.length - 1 ? 0 : 100,
            duration: i === 0 || i === panels.length - 1 ? 0.5 : 1,
            ease: 'none',
          },
          '-=0.5'
        );
      });

      tl.to({}, { duration: 1 });
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <>
      {[0, 1].map((_, index) => (
        <div
          className="sections container"
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          <section className="module">
            <div className="row">
              <div className="col-lg">
                <h2>This side should remain static while the right side slides in each panel on scroll.</h2>
                <p>This section can repeat more than once on the same page, so we need to create an array of sections that animate the same way.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
              <div className="col-lg">
                <figure className="fig"></figure>
                <div className="panels">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="panel"></div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default ScrollSections;
