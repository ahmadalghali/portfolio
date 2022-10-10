import Image from "next/image";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroCodePanel from "./HeroCodePanel";
type Props = {};

function Hero({}: Props) {
  const [showSecond, setShowSecond] = useState(false);

  const [text] = useTypewriter({
    words: ["Hi, I'm Ahmad Alghali.", "I'm a Software Engineer.", "I love to <code />."],
    delaySpeed: 2000,
    loop: 0,
    typeSpeed: 60,
  });

  return (
    <div className='mt-40 flex flex-col items-center space-y-10 text-center justify-center'>
      <Image
        src='/my-photo.jpg'
        alt='ahmad alghali'
        className='rounded-full w-52 h-52 md:w-80 md:h-80 object-cover'
        width='200'
        height='200'
      />

      <div className='w-full h-20'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-bold'>
          <code>{text}</code>
          <Cursor />
        </h1>
      </div>

      <div className='my-32'></div>

      <HeroCodePanel />
    </div>
  );
}

export default Hero;
