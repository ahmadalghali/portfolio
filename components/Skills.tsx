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
    // { title: "Next.js", img: "nextjs-logo.png", class: "bg-white w-20 rounded-full   border-black" },
  ];
  return (
    <div className='container mx-auto'>
      <p className='text-3xl font-semibold text-center'>Skills</p>
      <div className='mt-10 grid grid-cols-2 text-center gap-y-8 place-items-center justify-items-center sm:grid-cols-3 md:grid-cols-4'>
        {skills.map((skill) => (
          <div>
            <Image src={`/${skill.img}`} alt={skill.title} className={skill.class ? `${skill.class}` : "w-20"} />
            <p className='font-bold mt-2'>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
