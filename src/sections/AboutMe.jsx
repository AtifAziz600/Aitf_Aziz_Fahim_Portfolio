import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDownload,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "6+", label: "Months Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
];

const socialLinks = [
  { href: "https://github.com/AtifAziz600", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/atif-aziz-916424336/", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "#", icon: <FaTwitter />, label: "Twitter" },
  { href: "#", icon: <FaInstagram />, label: "Instagram" },
];

const AboutMe = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { x: -60, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".about-stat",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="about-section section-padding my-10" id="about">
      {/* Background decorative blobs */}
      <div className="about-blob about-blob-1" />
      <div className="about-blob about-blob-2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* ── Left: Image Column ── */}
          <div ref={imageRef} className="about-image-col">
            <div className="about-image-frame">
              {/* Decorative ring */}
              <div className="about-ring" />
              {/* Glow behind image */}
              <div className="about-glow" />
              <img
                src="/images/me.jpeg"
                alt="Md. Atif Aziz"
                className="about-photo"
              />
              {/* Floating badge */}
              <div className="about-badge">
                <span className="about-badge-dot" />
                Available for work
              </div>
            </div>

            {/* Stats row below image */}
            <div ref={statsRef} className="about-stats">
              {stats.map(({ value, label }) => (
                <div key={label} className="about-stat">
                  <span className="about-stat-value">{value}</span>
                  <span className="about-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Content Column ── */}
          <div ref={contentRef} className="about-content">
            {/* Tag */}
            <span className="about-tag">Who I am</span>

            <h2 className="about-heading">
              About <span className="about-heading-accent">Me</span>
            </h2>

            <p className="about-role">
              Md. Atif Aziz — Frontend Developer Intern
            </p>

            <p className="about-bio">
              I'm an aspiring <strong>Full-Stack Developer</strong> with a strong
              foundation in frontend development, specializing in{" "}
              <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
              <strong>JavaScript</strong>.
            </p>
            <p className="about-bio">
              I completed a <strong>6-month internship</strong> building real-world
              projects — including LMS platforms, healthcare systems, and web
              dashboards. Currently expanding my backend skills with{" "}
              <strong>Node.js</strong> and REST APIs while crafting responsive,
              user-friendly experiences.
            </p>

            {/* Skills pills */}
            <div className="about-skills">
              {["React.js", "Tailwind CSS", "JavaScript", "Node.js", "REST APIs", "Git"].map((skill) => (
                <span key={skill} className="about-skill-pill">{skill}</span>
              ))}
            </div>

            {/* CTA + Socials */}
            <div className="about-actions">
              <a href="/images/MD_ATIF_AZIZ CV.pdf" download className="about-download-btn">
                <FaDownload />
                Download CV
              </a>

              <div className="about-socials">
                {socialLinks.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="about-social-icon"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
