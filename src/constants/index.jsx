import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
// import projectImage5 from "../assets/project5.jpeg";
// import projectImage6 from "../assets/project6.jpeg";

import { RiBootstrapFill, RiCss3Fill, RiHtml5Fill, RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiMysql } from "react-icons/si";
import { DiJava, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoGithub, BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  { label: "Social Media", href: "#footer" },
];

export const HERO = {
  name: "MANISH  KARNE",
  greet: "Hello there! 👋🏻",
  description:
    "As a Full-Stack Developer, I specialize in building dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I create seamless user experiences and robust server-side solutions. I work with modern frameworks and languages like HTML, CSS, JavaScript, Node.js, and more to deliver complete, end-to-end solutions that meet user needs and business goals.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/kd1-86698-manishk/portfolio-manish",
    live: "",
  },
  {
    id: 2,
    name: "Tasty-Coffee-Delivery",
    description:
    "An food delivery website developed using JavaScript,Bootstrap and React  featuring a comprehensive product Menu, shopping cart.",
    image: projectImage2,
    githubLink: "https://github.com/kd1-86698-manishk/tasty-coffee-react",
    live: "",
  },
  {
    id: 3,
    name: "Swiggy Clone App",
    description:
    "This Swiggy Clone App provides a seamless and interactive food ordering experience with a stylish UI. ",
    image: projectImage3,
    githubLink: "https://github.com/kd1-86698-manishk/swiggy-clone-app",
    live: "",
  },
  {
    id: 4,
    name: "Health Club Managment System",
    description:
    "The Health Club Management System is a web-based application designed to streamline health club operations, including member management,trainer assign dietplan.",
    image: projectImage4,
    githubLink: "https://github.com/kd1-86698-manishk/HealthClubManagement",
    live: "",
  },
  // {
  //   id: 5,
  //   name: "Blog Platform",
  //   description:
  //     "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
  //   image: projectImage5,
  //   githubLink: "https://github.com/user/blog-platform",
  // },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/user/chat-application",
  // },
];

export const BIO = [
  "I am a passionate Full-Stack Developer with a Bachelor's degree in Computer Engineering and a Postgraduate Diploma in Advanced Computing. With a strong foundation in computer science and cutting-edge technologies, I specialize in developing scalable and efficient web applications. My expertise spans both front-end and back-end development, and I continuously explore new tools and frameworks to create innovative solutions. I am committed to delivering high-quality code and ensuring seamless user experiences.",
  "I specialize in building dynamic, scalable web applications. I am proficient in a variety of technologies, including Java, and constantly explore new tools and frameworks to deliver high-quality solutions. My focus is on creating efficient, user-centric applications that meet both technical and business needs.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "",
  },
  {
    icon: <RiHtml5Fill className="text-4xl text-orange-400 lg:text-5xl" />,
    name: "HTML",
    experience: "",
  },
  {
    icon: <RiCss3Fill className="text-4xl text-sky-600 lg:text-5xl" />,
    name: "CSS",
    experience: "",
  },
  {
    icon: <RiBootstrapFill className="text-4xl text-fuchsia-500 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "MySql",
    experience: "",
  },
  {
    icon: <DiJava className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Java",
    experience: "",
  },
  {
    icon: <BiLogoSpringBoot className="text-4xl text-green-600 lg:text-5xl" />,
    name: "SpringBoot",
    experience: "",
  },
  {
    icon: <BiLogoGithub className="text-4xl text-black-700 lg:text-5xl" />,
    name: "Github",
    experience: "",
  },
];

// export const EXPERIENCES = [
//   {
//     title: "Lead Frontend Developer",
//     company: "Innovative Tech Solutions",
//     duration: "July 2020 - Present",
//     description:
//       "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
//   },
//   {
//     title: "Frontend Engineer",
//     company: "Digital Creations",
//     duration: "February 2016 - June 2020",
//     description:
//       "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
//   },
//   {
//     title: "Junior Web Developer",
//     company: "Bright Future Technologies",
//     duration: "August 2014 - January 2016",
//     description:
//       "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
//   },
// ];

export const EDUCATION = [
  {
    degree: "Post Graduation Diploma In Advance Computing ",
    institution: "Sunbeam Institute of Information Technology",
    duration: "August 2024 - February 2025",
    description:
      "With 72.12 %",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Savitribai Phule Pune University ",
    duration: "June 2017 - June 2022",
    description:
      "With 72.30 %",
  },
  {
    degree: "HSC",
    institution: "R.R.Shinde Jr College Pune",
    duration: "June 2016 - February 2017",
    description:
      "With 61.23 %",
  },
  {
    degree: "SSC",
    institution: "Sadhana Vidyalaya Hadapsar Pune",
    duration: "June 2014 - March 2015",
    description:
      "With 80.20 %",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/manish.karne.9/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/manishkarne_0829/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/i/flow/login",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/kd1-86698-manishk",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/manish-karne-198683176/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
