import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className='fixed top-0 left-0 right-0 p-5 flex justify-between max-w-5xl mx-auto bg-[#10142c] z-20'>
        <div className='space-x-4'>
          <SocialIcon url='https://www.linkedin.com/in/ahmad-alghali' bgColor='transparent' fgColor='white' />
          <SocialIcon url='https://www.github.com/ahmadalghali' bgColor='transparent' fgColor='white' />
        </div>

        <div className='flex items-center cursor-pointer hover:underline'>
          <SocialIcon network='email' bgColor='transparent' fgColor='white' />
          <p className='uppercase hidden lg:inline text-white font-bold  '>Get in touch</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
