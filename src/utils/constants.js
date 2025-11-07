import { Mail, Code} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const PERSONAL_INFO ={
    name: "Ananya Vishwakarma",
    title: "Software Developer",
    email: "vananya557@gmail.com",
    location: "Varanasi, India",

    //Social Links
    github: "https://github.com/AnanyaVishwakarma",
    linkedin: "https://linkedin.com/in/AnanyaVishwakarma",
    leetcode: "https://leetcode.com/u/ananya707/",
    gmail: "mailto:vananya557@gmail.com",
};
export const SOCIAL_ICONS = {
    github: SiGithub,
    linkedin: SiLinkedin,
    leetcode: Code,
    gmail: Mail,
};
export const PROJECT = [
    {
    id: 1,
    title: "Pomodoro",
    description:  "A productivity timer with task management built using HTML, CSS, and JavaScript. Helps users manage work sessions and breaks effectively.",
    technologies: ["React", "TailwindCSS"],
    image: "/images/pomodoro.png",
    liveUrl: null,
    githubUrl: "https://ananyavishwakarma.github.io/Pomodoro/",
    featured: true,
    
},
{
    id: 2,
    title: "Todo App",
    description: "This is a clean and intuitive task management application built entirely with front-end technologies. The goal was to create a fast, user-friendly single-page application(SPA) to help manage daily tasks directly in the browser.", 
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/todo-app.png",
    liveUrl: null,
    githubUrl: "https://ananyavishwakarma.github.io/Todo-App/",
    featured: true,
},
{
    id:3,
    title: "Portfolio-Website",
    description: "My personal developer portfolio showcasing projects, skills and contact information. Built with React and styld with TailwindCSS.",
    technologies: ["React", "TailwindCSS"],
    liveUrl: null,
    featured: false,
},
];