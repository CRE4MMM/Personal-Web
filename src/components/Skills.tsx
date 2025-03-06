import React from "react";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaMobileAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

interface Skill {
    name: string;
    icon: React.ReactNode;
    bgColor: string;
    iconColor: string;
}

const skills: Skill[] = [
    { name: "HTML", icon: <FaHtml5 />, bgColor: "bg-gray-800", iconColor: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, bgColor: "bg-gray-800", iconColor: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, bgColor: "bg-gray-800", iconColor: "text-yellow-500" },
    { name: "TypeScript", icon: <SiTypescript />, bgColor: "bg-gray-800", iconColor: "text-blue-400" },
    { name: "React", icon: <FaReact />, bgColor: "bg-gray-800", iconColor: "text-cyan-400" },
    { name: "Git & GitHub", icon: <FaGitAlt />, bgColor: "bg-gray-800", iconColor: "text-red-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, bgColor: "bg-gray-800", iconColor: "text-teal-400" },
    { name: "Responsive Design", icon: <FaMobileAlt />, bgColor: "bg-gray-800", iconColor: "text-purple-400" },
];

const Skills: React.FC = () => {
    return (
        <div className="p-10 bg-gray-900 text-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
            Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
            {skills.map((skill, index) => (
            <div
                key={index}
                className={`${skill.bgColor} p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg w-full
                transition duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:scale-105`}
            >
                <span className={`${skill.iconColor} text-5xl mb-3 transition duration-300`}>
                {skill.icon}
                </span>
                <p className="text-lg font-semibold">{skill.name}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Skills;
