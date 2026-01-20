export interface Experience {
  title: string;
  company: string;
  date: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    title: 'Associate Software Engineer',
    company: 'L3Harris Technologies',
    date: 'Feb 2024 - Present',
    highlights: [
      'Designed, implemented, maintained, and tested mission critical embedded software in C++ on real-time Linux based environments.',
      'Led the design initiative on five critical new Python-based products for prospective clients.',
      'Demonstrated working prototypes to clients to secure future funding for our team.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Up-Rev',
    date: 'Jul 2023 - Jan 2024',
    highlights: [
      'Maintained a web-based app, utilized by senior managers for accurate project cost estimation, ensuring functionality and user satisfaction through continuous development and performance improvements.',
      'Transitioned the app\'s backend from a PHP-based API to a Python-based RESTful API utilizing FastAPI, resulting in enhanced data processing speed and improved integration capabilities with other systems.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'L3Harris Technologies',
    date: 'May 2023 - Jul 2023',
    highlights: [
      'Engineered a Streamlit full-stack web app using Python, to enable user interaction with open-source large language models. This application was uniquely fine-tuned with internal company data to enhance performance and accuracy, demonstrating a pivotal step towards integrating AI into business processes.',
      'Directed and optimized the Agile project management of six interns using Atlassian\'s Jira, meticulously documenting progress and milestones.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Up-Rev Inc',
    date: 'Aug 2022 - May 2023',
    highlights: [
      'Spearheaded the development of full-stack, cross-platform applications utilizing Angular, MySQL, PHP, and Docker, focusing on crafting responsive, user-centric designs and ensuring seamless data management.',
      'Orchestrated and streamlined code deployment processes to both local build servers and production environments, leveraging automation tools such as Jenkins and Ansible to enhance efficiency and reliability of releases.',
    ],
  },
];
