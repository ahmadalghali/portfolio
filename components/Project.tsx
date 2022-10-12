import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { TProject } from "./Projects";
type Props = {
  project: TProject;
};

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function Project({ project }: Props) {
  return (
    <div
      className={`flex flex-col rounded-xl pt-5 pb-10  px-5 shadow-2xl bg-[#11141e] text-white cursor-pointer max-w-md mx-auto hover:scale-105 transition-all duration-200`}
      onClick={() => openInNewTab(project.githubRepoUrl)}
    >
      <div className='flex justify-between items-center'>
        <p className={`text-2xl font-bold `}>{project.title}</p>
        <SocialIcon url={project.githubRepoUrl} target='_blank' bgColor='transparent' fgColor='white' />
      </div>
      <a href={project.githubRepoUrl} target='_blank' rel='noreferrer' className='text-sm font-medium break-all'>
        {project.githubRepoUrl}
      </a>

      <div className='rounded-2xl mt-10 mb-4 self-center aspect-w-1'>
        <Image src={project.image} width='600' height='600' className='rounded-xl object-cover' />
      </div>
      <p>{project.description}</p>
    </div>
  );
}

export default Project;
