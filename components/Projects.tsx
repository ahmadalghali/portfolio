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
    title: "Tutorly",
    theme: "teal-500",
    githubRepoUrl: "https://github.com/ahmadalghali/tutorly",
    description:
      "🧑‍🏫 📱 The platform for tuition academies to manage tutors and students with livechat and lesson booking.",
    image: "/tutorly.png",
  },
  {
    title: "Cambu",
    theme: "gray-800",
    githubRepoUrl: "https://github.com/ahmadalghali/cambu",
    description: "👟 Cambu, a fast-growing shoe brand.",
    image: "/cambu.png",
  },
];

function Projects({}: Props) {
  return (
    <div>
      <p className='text-3xl font-semibold text-center'>Projects</p>

      <div className='mt-10 space-y-20'>
        {projects.map((project) => (
          <Project project={project} key={project.githubRepoUrl} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
