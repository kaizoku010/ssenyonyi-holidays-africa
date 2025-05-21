import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollPa.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollSections = () => {
  const containerRef = useRef([]);

  useEffect(() => {
    containerRef.current.forEach((section, i) => {
      const module = section.querySelector(".module");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      const fig = module.querySelector(".fig");
      tl.to(fig, {
        xPercent: 10,
        autoAlpha: 0,
        ease: "none",
        duration: 0.5,
      });

      const panels = module.querySelectorAll(".panel");
      const panelsWrapper = module.querySelector(".panels");

      // Show panels container
      tl.to(panelsWrapper, { autoAlpha: 1 }, "<");

      // Set random colors
      gsap.set(panels, {
        backgroundColor: () =>
          `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)})`,
      });

      panels.forEach((panel, idx) => {
        tl.fromTo(
          panel,
          {
            xPercent: idx === 0 ? 0 : -100,
          },
          {
            xPercent: idx === panels.length - 1 ? 0 : 100,
            duration: idx === 0 || idx === panels.length - 1 ? 0.5 : 1,
            ease: "none",
          },
          "-=0.5"
        );
      });

      tl.to({}, { duration: 1 }); // pause at the end
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <>
      {[0, 1].map((_, idx) => (
        <div
          className="sections container"
          key={idx}
          ref={(el) => (containerRef.current[idx] = el)}
        >
          <section className="module">
            <div className="row">
              <div className="col-lg">
                <h2>
                  This side should remain static while the right side slides in
                  each panel on scroll.
                </h2>
                <p>
                  This section can repeat more than once on the same page, so we
                  need to create an array of sections that animate the same way.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quis...
                </p>
              </div>
              <div className="col-lg">
                <figure className="fig"></figure>
                <div className="panels">
                  {Array.from({ length: 5 }).map((_, i) => (
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

export default ScrollSections;
