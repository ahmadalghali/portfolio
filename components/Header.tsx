import React from "react";
import { SocialIcon } from "react-social-icons";
import DocumentIcon from "./DocumentIcon";
type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className='px-5 pt-8 flex justify-between max-w-7xl mx-auto items-center  z-20'>
        <div className='space-x-4'>
          <SocialIcon
            target='_blank'
            url='https://www.linkedin.com/in/ahmad-alghali'
            bgColor='transparent'
            fgColor='white'
            className='p-4 text-white bg-[#121f3d] rounded-xl'
          />
          <SocialIcon
            target='_blank'
            url='https://www.github.com/ahmadalghali'
            bgColor='transparent'
            fgColor='white'
            className='p-4 text-white bg-[#121f3d] rounded-xl'
          />
        </div>

        <div className='p-3 text-white bg-[#121f3d] rounded-xl sm:hidden '>
          <a href='/ahmad-alghali-cv.pdf' download>
            <DocumentIcon className='w-7 h-7' />
          </a>
        </div>

        <a
          href='/ahmad-alghali-cv.pdf'
          download
          className='hidden sm:flex rounded-md btn text-white bg-[#121f3d] border-none'
        >
          CV / Resume
        </a>

        {/* <div className='flex items-center cursor-pointer hover:underline'>
          <SocialIcon network='email' bgColor='transparent' fgColor='white' />
          <p className='uppercase hidden lg:inline text-white font-bold  '>Get in touch</p>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
