import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  sqlite,
  docker,
  python,
  mitxpro1,
  mitxpro2,
  mitxpro3,
  mitxpro4,
  brainwaveAI,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "sqlite",
    icon: sqlite,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    school_name: "Mitxpro",
    icon: mitxpro1,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Studying and understanding web applications using React.js and other related technologies at MITxPro.",
      "Collaborating with fellow students and instructors at MITxPro to enhance learning and understanding.",
      "Implementing responsive design and ensuring cross-browser compatibility as part of MITxPro coursework.",
      "Participating in peer reviews and providing constructive feedback to fellow students at MITxPro.",
    ],
  },
  {
    title: "React Native Developer",
    school_name: "Mitxpro",
    icon: mitxpro2,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "As a student at MITxPro, I develop and maintain web applications using React.js and other related technologies. I collaborate with cross-functional teams, including designers, product managers, and other developers, as well as my fellow classmates who are developers, to create high-quality products. This dynamic environment not only enhances our learning but also provides valuable real-world experience in teamwork and project management.",
    ],
  },
  {
    title: "Web Developer",
    school_name: "Mitxpro",
    icon: mitxpro3,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "As a web developer student at MITxPro, I am honing my skills in developing and maintaining web applications using React.js and other related technologies. Collaborating with cross-functional teams, including designers, product managers, and fellow developers, including my classmates, I contribute to creating high-quality products. My focus includes implementing responsive design and ensuring cross-browser compatibility. Engaging in code reviews, I provide constructive feedback to enhance the team's overall performance, including my classmates. Our classroom activities simulate real-world scenarios, preparing us for professional development processes..",
    ],
  },
  {
    title: "Full stack Developer",
    school_name: "Mitxpro",
    icon: mitxpro4,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "As a student at MITxPro, I am learning to become a full stack developer, developing and maintaining web applications using React.js and other related technologies. Together with my classmates, we collaborate with cross-functional teams, including designers, product managers, and other developers, to create high-quality products. Additionally, we implement responsive design and ensure cross-browser compatibility. We also participate in code reviews and provide constructive feedback to each other, aiming to improve our skills and create better solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "As a student at MITxPro, I thought it was impossible to make a website as beautiful as our product, but Alex proved me wrong.",
    name: "Faith Lee",
    designation: "owner",
    restaurant: "faith's kitchen",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "As a student at MITxPro, I've had the privilege of witnessing Alex exceptional dedication to his clients' success. His passion for creating impactful and user-friendly web solutions is truly inspiring.",
    name: "Jesu Reyes",
    designation: "owner",
    restaurant: "delicious food",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "As a student at MITxPro, Alex learning skills in website optimization has had a profound impact on our online presence. Following his optimizations, our website's traffic surged by an impressive 50%. Alex dedication and skill have truly made a difference, and we are incredibly grateful for his contributions.",
    name: "Lisa Wong",
    designation: "manager",
    company: "techsoft",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Brainwave AI",
    description:
      "Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    live_site_link: "https://brainwave-ai-gamma.vercel.app/",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: brainwaveAI,
    source_code_link: "https://github.com/Troy2727/brainwave-AI.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    live_site_link: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
