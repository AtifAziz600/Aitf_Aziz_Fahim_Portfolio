import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "JobSphere - Premium Job Search & Hiring Portal",
    category: "Web Application / Job Portal",
    description:
      "A modern job hunting and hiring platform built for seamless candidate-recruiter matching, real-time job filtering, and instant application tracking.",
    image: "/images/project-jobsphere.png",
    link: "https://ostad-assignment-job-portal.vercel.app/",
    tags: ["React", "Vite", "TailwindCSS", "Job Portal"],
    accentColor: "#ec4899",
  },
  {
    id: 2,
    title: "Get Hyped - Social-First Content Agency",
    category: "Agency / Creative Showcase",
    description:
      "High-impact, high-converting modern agency platform engineered with dynamic interactions, bold typography, and smooth micro-animations.",
    image: "/images/project-devlook.png",
    link: "https://devloper-look.vercel.app/",
    tags: ["React", "GSAP", "TailwindCSS", "Creative UI"],
    accentColor: "#f97316",
  },
  {
    id: 3,
    title: "Xai - Intelligence Workspace",
    category: "AI SaaS / Data Intelligence",
    description:
      "An advanced AI-powered data intelligence workspace designed with immersive particle animations, live analytics, and modern dark aesthetics.",
    image: "/images/project-xaiproduct.png",
    link: "https://xai-prdduct.vercel.app/",
    tags: ["React", "AI SaaS", "TailwindCSS", "Dark UI"],
    accentColor: "#38bdf8",
  },
  {
    id: 4,
    title: "CogniPath - Career Choice Partner",
    category: "EdTech / Career Guidance",
    description:
      "Interactive career exploration and educational guidance platform helping students and professionals discover tailored learning pathways and career decisions.",
    image: "/images/project-cognipath.png",
    link: "https://cognipath.net",
    tags: ["Full-Stack", "EdTech", "Responsive Design", "Interactive"],
    accentColor: "#f59e0b",
  },
  {
    id: 5,
    title: "Salsabil Publications - Online Bookstore & Curriculum",
    category: "E-Commerce / Publishing Platform",
    description:
      "E-commerce and publication management platform for educational books, curriculum materials, syllabuses, and seamless direct online ordering.",
    image: "/images/project-salsabil.png",
    link: "https://salsabilpublications.com",
    tags: ["E-Commerce", "Publishing", "Catalog", "Online Orders"],
    accentColor: "#ef4444",
  },
  {
    id: 6,
    title: "Noor Alam Machineries - Marine & Industrial Engine Parts",
    category: "Enterprise B2B / Machinery Catalog",
    description:
      "Authorized dealership and industrial catalog for marine gearboxes, engine equipment, heavy machinery parts, and customer quotation requests.",
    image: "/images/project-nooralam.png",
    link: "https://nooralammachineries.com",
    tags: ["Enterprise B2B", "Industrial Catalog", "Quotation System", "Marine"],
    accentColor: "#3b82f6",
  },
  {
    id: 7,
    title: "Apagor - International Multi-Vendor Marketplace",
    category: "E-Commerce / Marketplace",
    description:
      "Scalable multi-vendor e-commerce platform supporting category management, seller onboarding, product catalogs, shopping cart, and cross-border orders.",
    image: "/images/project-apagor.png",
    link: "https://apagor.com",
    tags: ["Nuxt.js", "Vue", "TailwindCSS", "E-Commerce"],
    accentColor: "#dc2626",
  },
  {
    id: 8,
    title: "GearUp - Outdoor & Sports Gear Rental Platform",
    category: "Rental Marketplace / SaaS",
    description:
      "Modern on-demand equipment rental marketplace featuring verified vendor listings, instant booking schedules, Stripe protection, and catalog filtering.",
    image: "/images/project-phero-assign5.png",
    link: "https://programming-hero-assignment-5.vercel.app/",
    tags: ["React", "Rental Platform", "TailwindCSS", "Stripe"],
    accentColor: "#2563eb",
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cards animation
    projectRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: (index % 2) * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=60",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Selected Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            A curated showcase of production web applications, SaaS platforms, e-commerce solutions, and digital experiences I have built.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative rounded-2xl bg-[#121217] border border-white/10 hover:border-blue-500/40 transition-all duration-500 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Browser Window Bar Mockup */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d12] border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[11px] font-mono text-gray-400 truncate max-w-[200px] px-3 py-0.5 rounded-md bg-white/5 border border-white/5">
                  {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </div>
                <div className="w-8" />
              </div>

              {/* Project Image Container */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden bg-zinc-950 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Overlay Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium text-sm shadow-lg shadow-blue-600/50 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Visit Live Site <FaExternalLinkAlt className="text-xs" />
                  </span>
                </div>
              </a>

              {/* Project Info */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">0{project.id}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white-50 hover:text-blue-400 transition-colors group/link shrink-0"
                  >
                    <span>Live Demo</span>
                    <FaArrowRight className="text-xs transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
