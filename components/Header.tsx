import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className='p-5 flex justify-between max-w-5xl mx-auto  z-20'>
        <div className='space-x-4'>
          <SocialIcon
            target='_blank'
            url='https://www.linkedin.com/in/ahmad-alghali'
            bgColor='transparent'
            fgColor='white'
          />
          <SocialIcon target='_blank' url='https://www.github.com/ahmadalghali' bgColor='transparent' fgColor='white' />
        </div>

        <a href='/ahmad-alghali-cv.pdf' download className='rounded-md btn bg-sky-900  '>
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
