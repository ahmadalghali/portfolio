import React from "react";
import { TJob } from "./Experience";
import Image from "next/image";
type Props = {
  job: TJob;
};

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function ExperienceJob({ job }: Props) {
  const technologies = job.technologies.map((tech) => tech + "").toString();
  return (
    <div
      className='tracking-normal rounded-2xl py-6 px-8 shadow-2xl bg-darkBlue cursor-pointer'
      onClick={() => openInNewTab(job.companyUrl)}
    >
      {/* <div className='flex justify-between items-center '>
        <p className='font-semibold text-lg'>{job.jobTitle}</p>
        <p className='font-medium text-sm'>
          {job.dateFrom} - {job.dateTo}
        </p>
      </div> */}

      <p className='font-semibold text-xl'>{job.jobTitle}</p>
      <p className='font-medium text-sm  '>
        {job.dateFrom} - {job.dateTo}
      </p>

      <div className='flex space-x-5 items-center mt-5 cursor-pointer'>
        <Image src={"/" + job.companyLogo} alt={job.companyUrl} className='w-10 bg-white' width='40' height='40' />
        <p className='text-md font-medium'>{job.companyDisplayName}</p>
      </div>

      <ul className='list-disc my-5 space-y-4 leading-5  text-sm font-medium'>
        {job.highlights.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <p className='mt-10 font-medium'>Technologies:</p>
      <p className='text-sm mt-1 font-medium'>{technologies}</p>
    </div>
  );
}

export default ExperienceJob;
