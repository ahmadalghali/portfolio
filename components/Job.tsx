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

function Job({ job }: Props) {
  const technologies = job.technologies.map((tech) => tech + "").toString();
  return (
    <div
      className='tracking-normal rounded-2xl p-6 shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-r  from-[#030c37] via-[#19234c] to-[#1a2344] cursor-pointer'
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
        <a className='text-md font-medium' target='_blank' href={job.companyUrl}>
          {job.companyDisplayName}
        </a>
      </div>

      <ul className='list-disc px-5 my-5 space-y-4  leading-5 tracking-tight text-base font-medium'>
        {job.highlights.map((point) => (
          <li key={job.companyUrl}>{point}</li>
        ))}
      </ul>

      <p className='mt-10 text-lg font-medium'>Technologies:</p>
      <p className='text-md mt-1 font-medium'>{technologies}</p>
    </div>
  );
}

export default Job;
