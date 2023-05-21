import React from "react";
import Project from "./Project";

type Props = {};

export interface TProject {
  title: string;
  githubRepoUrl: string;
  image: string;
  description: string;
  theme?: string;
}
const projects: TProject[] = [
  {
    title: "HousePal",
    githubRepoUrl: "https://github.com/ahmadalghali/housepal",
    image: "/housepal.png",
    description: "A chore management tool to track, log, and distribute responsibilities among household members.",
  },
  {
    title: "Sherpa",
    githubRepoUrl: "https://github.com/ahmadalghali/sherpa",
    image: "/sherpa.png",
    description: "🏆 The one and only app to track your progress and achieve your goals!",
  },
  {
    title: "Cambu",
    theme: "gray-800",
    githubRepoUrl: "https://github.com/ahmadalghali/cambu",
    description: "👟 An online ecommerce store for a fast-growing footwear brand.",
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
  {
    title: "Timeshare",
    githubRepoUrl: "https://github.com/ahmadalghali/timeshare",
    image: "/timeshare.png",
    description:
      "📚 🧠 A skill sharing hub, teach what you're good at, earn tokens and spend them to learn other skills!",
  },
];

function Projects({}: Props) {
  return (
    <div className='max-w-5xl mx-auto'>
      <p className='text-3xl font-semibold text-center'>Projects</p>

      <div className='mt-10 space-y-20 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
        {projects.map((project) => (
          <Project project={project} key={project.githubRepoUrl} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
