// ScrollPanels.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './ScrollPanels.css'; // Add your CSS here

gsap.registerPlugin(ScrollTrigger);

const ScrollPanels = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      const modules = section.querySelectorAll('.module');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: '+=300%',
          scrub: 1,
          pin: true,
        },
      });

      modules.forEach((module) => {
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
        gsap.set(panels, {
          backgroundColor: () =>
            `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
        });

        panels.forEach((panel, i) => {
          tl.fromTo(
            panel,
            {
              xPercent: i ? -100 : 0,
            },
            {
              xPercent: i === panels.length - 1 ? 0 : 100,
              duration: i === 0 || i === panels.length - 1 ? 0.5 : 1,
              ease: 'none',
            },
            '-=0.5'
          );
        });

        tl.to({}, { duration: 1 }); // buffer
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {[...Array(2)].map((_, index) => (
        <div
          className="sections container"
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          <section className="module">
            <div className="row">
              <div className="col-lg">
                <h2>This side remains static while right side slides in on scroll.</h2>
                <p>This section can repeat more than once on the page.</p>
                <p>Lorem ipsum dolor sit amet consectetur...</p>
              </div>
              <div className="col-lg">
                <figure className="fig"></figure>
                <div className="panels">
                  {[...Array(5)].map((_, i) => (
                    <div className="panel" key={i}></div>
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

export default ScrollPanels;
