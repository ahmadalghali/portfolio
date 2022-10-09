import Image from "next/image";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
type Props = {};

function Hero({}: Props) {
  const [showSecond, setShowSecond] = useState(false);

  const [text] = useTypewriter({
    words: ["Hi, I'm Ahmad Alghali.", "A Software engineer.", "Do fullstack web development."],
    delaySpeed: 2000,
    loop: 0,
    typeSpeed: 60,
  });

  return (
    <div className='flex flex-col items-center space-y-10 text-center justify-center'>
      <img src='/my-photo.jpg' alt='ahmad alghali' className='rounded-full w-52 h-52 md:w-80 md:h-80 object-cover ' />

      <h1 className='text-3xl md:text-4xl  lg:text-5xl text-white font-bold'>
        <span>{text}</span>
        <Cursor />
      </h1>
    </div>
  );
}

export default Hero;
