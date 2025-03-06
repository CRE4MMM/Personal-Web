import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Portfolio = () => {
    const projects = [
        {
            title: 'Personal Finance Tracker App',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
            details: {
            situation:
                'Users needed an easy-to-use app to track expenses and set financial goals with real-time data.',
            task: 'Designed and developed a web app with interactive charts, budget categories, and authentication.',
            action:
                'Built the front-end with Next.js, used Firebase for authentication & database, and added data visualization.',
            result:
                'Received over 5,000 downloads in the first month with high engagement from users managing their finances.',
            },
        },
        {
            title: 'Next.js Blogging Platform with User Authentication',
            technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Prisma',
            'PostgreSQL',
            ],
            details: {
            situation:
                'Content creators needed a lightweight and efficient blogging platform with user authentication, dynamic content management, and SEO optimization.',

            task: 'Built a full-stack blogging platform with Next.js, allowing users to register, log in, write, edit, and publish blog posts while ensuring fast performance.',

            action:
                'Implemented authentication using NextAuth.js, managed data with Prisma and PostgreSQL, and optimized SEO with dynamic meta tags. Designed a clean and responsive UI using Tailwind CSS.',

            result:
                'The platform enabled creators to publish content efficiently, leading to increased engagement and improved discoverability. It also supported markdown editing and real-time content updates.',
            },
        },
    ]

    return (
        <div className="bg-gray-900 min-h-screen py-12">
            <section className="w-full px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
                    Portfolio
                </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card
                    key={index}
                    className="bg-[#1F2A40] border border-gray-700 rounded-2xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-white"
                    >
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-white">
                        {project.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, techIndex) => (
                            <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full"
                            >
                            {tech}
                            </Badge>
                        ))}
                        </div>
                    </CardHeader>
                    <CardContent>
                        {Object.entries(project.details).map(
                        ([section, content], sectionIndex) => (
                            <div key={sectionIndex} className="mb-4 last:mb-0">
                            <h4 className="text-lg font-semibold text-gray-300 capitalize mb-2">
                                {section}:
                            </h4>
                            <p className="text-gray-400">{content}</p>
                            </div>
                        )
                        )}
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
            </section>
        </div>
    )
}

export default Portfolio
