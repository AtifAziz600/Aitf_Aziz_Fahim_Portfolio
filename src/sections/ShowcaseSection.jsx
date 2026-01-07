import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      image: "/images/project1.png",
      title: "Ryde - On-Demand Rides App",
      description: "Built with React Native, Expo, & TailwindCSS for seamless user experience.",
    },
    {
      id: 2,
      image: "/images/project2.png",
      title: "Library Management Platform",
      description: "Efficient platform for managing library resources and operations.",
    },
    {
      id: 3,
      image: "/images/project3.png",
      title: "YC Directory - Startup Showcase",
      description: "Interactive app showcasing innovative startups in a sleek interface.",
    },
    {
      id: 4,
      image: "/images/project1.png", 
      title: "Project 4 Title",
      description: "Description for your fourth project.",
    },
    {
      id: 5,
      image: "/images/project2.png", 
      title: "Project 5 Title",
      description: "Description for your fifth project.",
    },
    {
      id: 6,
      image: "/images/project3.png", 
      title: "Project 6 Title",
      description: "Description for your sixth project.",
    },
  ];

  useGSAP(() => {

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    projectRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-20 bg-black-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white-50 mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white-50 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
