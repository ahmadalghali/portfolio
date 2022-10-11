import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { TProject } from "./Projects";
type Props = {
  project: TProject;
};

function Project({ project }: Props) {
  return (
    <div className={`flex flex-col rounded-xl py-3  px-5 shadow-2xl bg-[#11141e] text-white cursor-pointer`}>
      <div className='flex justify-between items-center'>
        <p className={`text-2xl font-bold `}>{project.title}</p>
        <SocialIcon url={project.githubRepoUrl} target='_blank' bgColor='transparent' fgColor='white' />
      </div>
      <a href={project.githubRepoUrl} target='_blank' rel='noreferrer' className='text-sm font-medium'>
        {project.githubRepoUrl}
      </a>

      <div className='rounded-2xl mt-10 mb-4 self-center'>
        <Image src={project.image} width='300' height='300' className='rounded-xl' />
      </div>
      <p>{project.description}</p>
    </div>
  );
}

export default Project;
