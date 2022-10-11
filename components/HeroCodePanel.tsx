import React from "react";

type Props = {};

function HeroCodePanel({}: Props) {
  return (
    <div className='pb-10 bg-gradient-to-b from-[#272727] to-darkBlue text-left p-4 rounded-tr-xl rounded-tl-xl text-sm  mx-5'>
      <div className='flex space-x-1'>
        <div className='rounded-full w-2 h-2  bg-red-500'></div>
        <div className='rounded-full w-2 h-2  bg-amber-500'></div>
        <div className='rounded-full w-2 h-2  bg-green-500'></div>
      </div>
      <hr className='bg-gray-900 mt-2  opacity-40 border-0 h-[2px]' />

      <div className='mt-5'>
        <code>
          <span className='text-sky-600'>const </span>
          <span className='text-sky-400'>ahmad </span>
          <span className=''>= </span>
          <span className='text-sky-600'>new </span>
          <span className='text-amber-100'>Developer</span>
          <span className='text-yellow-300'>(</span>
          <span className='text-sky-200'>skills, experience, projects</span>
          <span className='text-yellow-300'>)</span>
          <span>;</span>
        </code>
      </div>
      <div className='mt-5'>
        <code>
          <span className='text-sky-200'>console</span>
          <span>.</span>
          <span className='text-amber-100'>log</span>
          <span className='text-yellow-300'>(</span>
          <span className='text-sky-200'>ahmad</span>
          <span className='text-yellow-300'>)</span>
          <span>;</span>
        </code>
      </div>
      <div className='mt-10'>
        <hr className='bg-gray-700 opacity-40 mt-5 border-0  h-[1px]' />
      </div>
      <div className='mt-2'>
        <code>{`Output:`}</code>
      </div>
    </div>
  );
}

export default HeroCodePanel;
