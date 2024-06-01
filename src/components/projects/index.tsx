'use client'
import { motion } from "framer-motion";
import Image from 'next/image'
import logoNext from "../../../public/icons-nextjs.svg";
import logoVite from "../../../public/logos--vitejs.svg";
import logoNode from "../../../public/logos--nodejs-icon-alt.svg";
import logoJS from "../../../public/logos--js.svg";



const ProjectsData = [
  {
    id: 1,
    name: "Shopping-List ",
    description: "The project proposes a dynamic shopping list app that updates the total cost in real-time as items are added, providing users with instant, accurate expense tracking.",
    link: "https://github.com/betolarbac/Shopping-List",
    image: logoVite.src,
  },
  {
    id: 2,
    name: "micro-saas-todo",
    description: "The project proposes a micro-SaaS task management app for streamlined task creation, real-time sync across devices, priority management, ",
    link: "https://github.com/betolarbac/micro-saas-todo",
    image: logoNext.src,
  },
  {
    id: 3,
    name: "ProjectHub-API",
    description: "Node.js Express API for project management. Create, update, and delete projects effortlessly. Simplify your workflow with intuitive endpoints and seamless integration.",
    link: "https://github.com/betolarbac/ProjectHub-API",
    image: logoNode.src,
  },
  {
    id: 4,
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
