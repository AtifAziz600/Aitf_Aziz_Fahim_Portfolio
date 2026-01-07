import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="section-padding my-10" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div ref={imageRef} className="flex justify-center">
          <img
            src="/images/me.jpg" 
            alt="Md. Atif Aziz"
            className="w-full max-w-sm rounded-lg object-cover shadow-lg border border-black-50"
          />
        </div>

        {/* Right Content */}
        <div ref={contentRef}>
          <h2 className="text-4xl font-bold text-white mb-3">
            ABOUT ME
          </h2>

          <p className="text-sm font-semibold text-blue-50 uppercase mb-5">
            Md. Atif Aziz – Frontend Developer Intern
          </p>

          <p className="text-white-50 leading-relaxed mb-8">
            I am an aspiring Full-Stack Developer with a strong foundation in
            frontend development, specializing in React.js, Tailwind CSS, and
            JavaScript. I have completed a 6-month internship where I worked on
            real-world projects such as LMS platforms, healthcare systems, and
            web dashboards.
            <br /><br />
            Currently, I am expanding my backend skills with Node.js and REST
            APIs while continuously improving my problem-solving and UI/UX
            development abilities. I am passionate about building responsive,
            user-friendly applications and eager to grow as a professional
            software engineer.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-white-50 text-xl">
            <a
              href="https://github.com/AtifAziz600"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/atif-aziz-916424336/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
