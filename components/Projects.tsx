import React from "react";
import Project from "./Project";

type Props = {};

export interface TProject {
  title: string;
  theme: string;
  githubRepoUrl: string;
  image: string;
  description: string;
}
const projects: TProject[] = [
  {
    title: "Cambu",
    theme: "gray-800",
    githubRepoUrl: "https://github.com/ahmadalghali/cambu",
    description: "👟 Cambu, a fast-growing shoe brand.",
    image: "/cambu.png",
  },
  {
    title: "Tutorly",
    theme: "teal-500",
    githubRepoUrl: "https://github.com/ahmadalghali/tutorly",
    description:
      "🧑‍🏫 📱 The platform for tuition academies to manage tutors and students with livechat and lesson booking.",
    image: "/tutorly.png",
  },
];

function Projects({}: Props) {
  return (
    <div className='max-w-5xl mx-auto'>
      <p className='text-3xl font-semibold text-center'>Projects</p>

      <div className='mt-10 space-y-20 md:space-y-0 md:grid md:grid-cols-2 md:gap-8'>
        {projects.map((project) => (
          <Project project={project} key={project.githubRepoUrl} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
