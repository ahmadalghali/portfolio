import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroCodePanel from "./HeroCodePanel";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ["Hi, I'm Ahmad Alghali.", "I'm a Software Engineer.", "I love to <Code/>."],
    delaySpeed: 2000,
    loop: 0,
    typeSpeed: 60,
  });

  return (
    <div className='mt-40 flex flex-col items-center space-y-10 text-center justify-center'>
      <div className='relative h-52 w-52  md:w-80 md:h-80  drop-shadow-2xl'>
        <Image priority src='/my-photo.jpg' alt='ahmad alghali' className='rounded-full object-cover' layout='fill' />
      </div>

      <div className='w-11/12 h-20'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold'>
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
