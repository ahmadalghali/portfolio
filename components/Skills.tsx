import React from "react";
import Image from "next/image";

type Props = {};

function Skills({}: Props) {
  const skills = [
    { title: "TypeScript", img: "typescript.png" },
    { title: "JavaScript", img: "javascript.png" },
    { title: "Node.js", img: "nodejs.png" },
    { title: "Nest.js", img: "nestjs.png" },
    { title: "React.js", img: "react.png" },
    { title: "Vue.js", img: "vuejs.png" },
    { title: "Java", img: "java.webp" },
    { title: "Spring Boot", img: "spring-boot.png" },
    { title: "SQL", img: "sql-no-bg.png" },
    { title: "Git", img: "git.png" },
    { title: "C#", img: "c-sharp.png" },
    { title: ".NET", img: "dotnet.png" },
    // { title: "Next.js", img: "nextjs-logo.png", class: "bg-white w-20 rounded-full   border-black" },
  ];
  return (
    <div className='container mx-auto max-w-4xl'>
      <p className='text-3xl font-semibold text-center'>Skills</p>
      <div className='mt-10 grid grid-cols-2 text-center gap-y-8 place-items-center justify-items-center sm:grid-cols-3 md:grid-cols-4'>
        {skills.map((skill) => (
          <div key={skill.title} className='drop-shadow-2xl'>
            <Image src={`/${skill.img}`} alt={skill.title} className={"w-20 "} width='80' height='80' />
            <p className='font-semibold mt-2'>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
