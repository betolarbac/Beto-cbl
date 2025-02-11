'use client'
import { motion } from "framer-motion";
import Image from 'next/image'
import logoNext from "../../../../public/icons-nextjs.svg"
import logoNode from "../../../../public/logos--nodejs-icon-alt.svg";
import logoJS from "../../../../public/logos--js.svg";



const ProjectsData = [
  {
    id: 1,
    name: "Shop List ",
    description: "Shop List is a project designed to simplify supermarket shopping management, allowing real-time visualization of product prices and the total purchase value, preventing surprises at checkout and eliminating the need for paper notes. Additionally, it offers the functionality to record product expiration dates and monitor those nearing expiration, enabling more efficient utilization.",
    link: "https://github.com/betolarbac/shop-list",
    image: logoNext.src,
  },
  {
    id: 2,
    name: "Course Manager",
    description: "Course Manager is a project developed in Electron to assist with studying using local content. The application serves as a content management tool, making it easier to organize course modules, track the number of lessons watched, and see how many are remaining.",
    link: "https://github.com/betolarbac/course-manager",
    image: logoJS.src,
  },
  {
    id: 3,
    name: "micro-saas-todo",
    description: "The project proposes a micro-SaaS task management app for streamlined task creation, real-time sync across devices, priority management, ",
    link: "https://github.com/betolarbac/micro-saas-todo",
    image: logoNext.src,
  },
  {
    id: 4,
    name: "ProjectHub-API",
    description: "Node.js Express API for project management. Create, update, and delete projects effortlessly. Simplify your workflow with intuitive endpoints and seamless integration.",
    link: "https://github.com/betolarbac/ProjectHub-API",
    image: logoNode.src,
  },
  {
    id: 5,
    name: "vtex-bot",
    description: "Discord bot for VTEX status analysis. Get real-time updates on platform status.",
    link: "https://github.com/betolarbac/vtex-bot",
    image: logoJS.src,
  }
];


export default function Projects() {
  return (
    <div>
      <div className="grid w-full grid-cols-2 gap-x-10 md:grid-cols-3">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg border-gray-400 dark:border"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                  {project.description}
                </div>
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}
