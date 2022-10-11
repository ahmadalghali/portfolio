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
            className='p-4 bg-slate-900 rounded-xl'
          />
          <SocialIcon
            target='_blank'
            url='https://www.github.com/ahmadalghali'
            bgColor='transparent'
            fgColor='white'
            className='p-4 bg-slate-900 rounded-xl'
          />
        </div>

        <div className='p-3 bg-slate-900 rounded-xl sm:hidden '>
          <DocumentIcon className='w-7 h-7' />
        </div>

        <a
          href='/ahmad-alghali-cv.pdf'
          download
          className='hidden sm:flex rounded-md btn bg-neutral border-none  shadow-2xl '
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
