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

import { RiCss3Fill, RiHtml5Fill, RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiMysql } from "react-icons/si";
import { DiJava, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoGithub, BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";

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
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/kd1-86698-manishk/portfolio-manish",
  },
  {
    id: 2,
    name: "Tasty-Coffee-Delivery",
    description:
      "An food delivery website developed using JavaScript,Bootstrap and React  featuring a comprehensive product Menu, shopping cart.",
    image: projectImage2,
    githubLink: "https://github.com/kd1-86698-manishk/tasty-coffee-react",
  },
  {
    id: 3,
    name: "Swiggy Clone App",
    description:
      "This Swiggy Clone App provides a seamless and interactive food ordering experience with a stylish UI. It is a great project for learning React, Bootstrap customization, and frontend development best practices.",
    image: projectImage3,
    githubLink: "https://github.com/kd1-86698-manishk/swiggy-clone-app",
  },
  {
    id: 4,
    name: "Health Club Managment System",
    description:
      "The Health Club Management System is a web-based application designed to streamline health club operations, including member management, class scheduling, trainer assignments, dietplan & workout plan, and password reset.",
    image: projectImage4,
    githubLink: "https://github.com/kd1-86698-manishk/HealthClubManagement",
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
  "Manish Karne studied computer engineering at the Savitribai Phule Pune University ,from Pune graduated in 2022. B.E Computer, he honed his craft and expertise over the course of 4 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
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
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Savitribai Phule Pune University ",
    duration: "June 2017 - June 2022",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
  {
    degree: "HSC",
    institution: "R.R.Shinde Jr College Pune",
    duration: "June 2016 - February 2017",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
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
