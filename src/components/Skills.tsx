import React from 'react'

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaMobileAlt,
} from 'react-icons/fa'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'

interface Skill {
    name: string
    icon: React.ReactNode
    bgColor: string
}

const skills: Skill[] = [
    { name: 'HTML', icon: <FaHtml5 />, bgColor: 'bg-gray-800' },
    { name: 'CSS', icon: <FaCss3Alt />, bgColor: 'bg-gray-800' },
    { name: 'JavaScript', icon: <FaJs />, bgColor: 'bg-gray-800' },
    { name: 'TypeScript', icon: <SiTypescript />, bgColor: 'bg-gray-800' },
    { name: 'React', icon: <FaReact />, bgColor: 'bg-gray-800' },
    { name: 'Git & GitHub', icon: <FaGitAlt />, bgColor: 'bg-gray-800' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, bgColor: 'bg-gray-800' },
    { name: 'Responsive Design', icon: <FaMobileAlt />, bgColor: 'bg-gray-800' },
]

const Skills: React.FC = () => {
    return (
        <div className="p-10 bg-gray-900 text-white flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
            Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`${skill.bgColor} p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:bg-orange-500 transition duration-300 w-full`}
                >
                    <span className="text-5xl mb-3">{skill.icon}</span>
                    <p className="text-lg font-semibold">{skill.name}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Skills
