import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaVuejs, FaLaravel, FaLaptopCode, FaCode } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiNuxtdotjs, SiMysql, SiNextdotjs, SiPostgresql, SiPhp, SiPostman, SiGithub } from 'react-icons/si';
import TitleHeader from "../component/TitleHeader";


const TechStack = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Vue.js", icon: FaVuejs, color: "text-emerald-500" },
        { name: "Nuxt.js", icon: SiNuxtdotjs, color: "text-green-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Laravel", icon: FaLaravel, color: "text-red-600" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Express", icon: SiExpress, color: "text-slate-200" },
        { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-red-500" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
        { name: "VS Code", icon: FaLaptopCode, color: "text-blue-500" },
        { name: "Cursor", icon: FaCode, color: "text-slate-200" },
      ]
    }
  ];

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Skills & Technologies"
          sub="Here are some of the technologies and tools I excel in, which enable me to deliver high-quality solutions."
        />

        <div className="flex flex-col gap-12 mt-12">
          {skillsData.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-white">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="card card-border rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow relative overflow-hidden"
                  >
                    <div className="glow"></div>
                    <div className={`text-4xl mb-4 ${skill.color}`}>
                      <skill.icon />
                    </div>
                    <p className="font-medium text-white relative z-10">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default TechStack;