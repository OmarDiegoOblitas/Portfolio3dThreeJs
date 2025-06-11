import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionref = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const projects = [
    project1Ref.current,
    project2Ref.current,
    project3Ref.current,
  ];

  useGSAP(() => {
    gsap.fromTo(
      sectionref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  projects.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3 * (index + 1),
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  return (
    <section id="work" ref={sectionref} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper w-full h-128 overflow-hidden">
              <img src="/images/project1.png" alt="Ryde" className="w-full h-full object-cover"></img>
            </div>
            <div className="text-content">
              <h2>
                Web project for The Tasteat restaurant, developed with Angular and Sass for a fast and responsive visual experience.
              </h2>
              <p className="text-white-50 md:text-xl">
                Currently being integrated with a backend built in Laravel and a PostgreSQL database, which will allow for real-time management of orders, menus, and reservations.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Plataform"
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
