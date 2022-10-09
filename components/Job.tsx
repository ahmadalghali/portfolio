import React from "react";
import { TJob } from "./Experience";

type Props = {
  job: TJob;
};

function Job({ job }: Props) {
  const technologies = job.technologies.map((tech) => tech + "").toString();
  return (
    <div>
      <p className='flex justify-between'>
        <span className='font-semibold text-xl'>{job.jobTitle}</span>
        <span className='self-end font-medium'>
          {job.dateFrom} - {job.dateTo}
        </span>
      </p>
      <div className='flex space-x-5 items-center mt-3'>
        <img src={job.companyLogo} alt={job.companyName} className='w-10 bg-white' />
        <p className='text-xl italic'>{job.companyName}</p>
      </div>

      <ul className='list-disc px-5 my-5 space-y-4'>
        {job.highlights.map((point) => (
          <li>{point}</li>
        ))}
      </ul>

      <p className='mt-5 text-xl'>Technologies:</p>
      <p className='text-lg mt-1'>{technologies}</p>
    </div>
  );
}

export default Job;
