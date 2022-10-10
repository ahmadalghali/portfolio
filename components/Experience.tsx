import React from "react";
import Job from "./Job";

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
    jobTitle: "Software Developer",
    location: "London, UK",
    companyLogo: "nhsbsa.png",
    technologies: ["Spring Boot", " Spring Framework", " Java"],
    highlights: [
      "Collaborated with team of developers to create a web application for NHS drug and medicine submissions",
      "Wrote unit tests for before deployment to ensure system reliability",
      "Participated in daily standups and fortnightly sprint planning meetings to assess project progress",
    ],
  },
  {
    companyUrl: "https://www.primeboard.org/",
    companyDisplayName: "Prime Board Limited",
    dateFrom: "Aug 2021",
    dateTo: "Jun 2022",
    jobTitle: "Junior Developer",
    location: "London, UK",
    companyLogo: "primeboard.png",
    technologies: ["Nest.js ( Node.js )", " TypeScript", " TypeORM ( MySQL )", " Vue.js"],
    highlights: [
      "Owned features fully by developing on the backend in Node.js and the Frontend in Vue.js in TypeScript",
      "Adopted an agile scrum approach and used project management tools like Jira",
      "Reviewed colleague’s PR’s and also received feedback on my own work",
      "Optimized and enhanced developer experience and productivity after migrating to Vue 3 and Pinia",
      "Mentored colleague to make sure they were confident knowing where to continue before moving on to my next role",
    ],
  },
];

function Experience({}: Props) {
  return (
    <div className='container mx-auto max-w-5xl md:px-10'>
      <p className='text-3xl font-semibold text-center'>Experience</p>

      <div className='mt-10 space-y-20 px-3'>
        {jobs.map((job) => (
          <Job job={job} key={job.companyUrl} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
