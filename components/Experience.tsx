import React from "react";
import ExperienceJob from "./ExperienceJob";

type Props = {};
export interface TJob {
  companyUrl: string;
  companyDisplayName: string;
  companyLogo: string;
  jobTitle: string;
  location: string;
  dateFrom: string;
  dateTo: string;
  highlights: string[];
  technologies: string[];
}

const jobs: TJob[] = [
  {
    companyUrl: "https://www.nhsbsa.nhs.uk/",
    companyDisplayName: "NHS Business Services Authority",
    dateFrom: "Jul 2022",
    dateTo: "Present",
    jobTitle: "Fullstack Software Developer",
    location: "London, UK",
    companyLogo: "nhsbsa.png",
    technologies: ["Java", " Spring Boot", " Thymeleaf"],
    highlights: [
      "Collaborating on the development of a greenfield submission system for NHS drugs and medications, to be utilized by leading pharmaceutical companies in the UK",
      "Built WCAG 2.1 compliant user interfaces using the NHS frontend toolkit adhering to accessibility standards",
      "Developing my skills in unit testing with JUnit 5 and ensuring a high level of code coverage",
      "Working with cross-functional teams in an agile manner to streamline development and improve project visibility",
      "Assisted in mentoring and pair programming with new team members to ensure a smooth onboarding process",
    ],
  },
  {
    companyUrl: "https://www.primeboard.org/",
    companyDisplayName: "Prime Board Limited",
    dateFrom: "Aug 2021",
    dateTo: "Jun 2022",
    jobTitle: "Junior Software Engineer",
    location: "London, UK",
    companyLogo: "primeboard.png",
    technologies: ["Nest.js ( Node.js )", " JavaScript / TypeScript", " TypeORM ( MySQL )", " Vue.js"],
    highlights: [
      "Collaborated with a team of developers to build web and hybrid mobile applications with Vue.js and Node.js",
      "Developed elegant and intuitive user interfaces, from both client-provided mockups and using my creativity",
      "Led the migration from Vue.js Options API and Vuex to the new Composition API and Pinia for improved TypeScript support, resulting in a notable improvement in productivity and developer experience",
      "Optimized and enhanced developer experience and productivity after migrating to Vue 3 and Pinia",
      "Supported colleagues and gave walkthrough of major changes and migrations to the company codebases",
    ],
  },
];

function Experience({}: Props) {
  return (
    <div className='container mx-auto max-w-5xl md:px-10'>
      <p className='text-3xl font-semibold text-center'>Experience</p>

      <div className='mt-10 space-y-20'>
        {jobs.map((job) => (
          <ExperienceJob job={job} key={job.companyUrl} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
