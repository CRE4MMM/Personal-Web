import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Portfolio = () => {
    const projects = [
        {
            title: 'E-commerce Platform for XYZ Retail',
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
            details: {
                situation:
                    'XYZ Retail, an established retail company, sought to expand into e-commerce to reach a wider audience and streamline its sales processes. They needed a scalable, user-friendly platform to support both desktop and mobile users with features like product browsing, user reviews, secure checkout, and real-time inventory updates.',
                task: 'I was responsible for building the front-end and back-end components of the platform, ensuring seamless integration with the client&apos;s inventory and payment systems. The project goal was to create an efficient, high-performing application with a smooth user experience.',
                action:
                    'Using React for the front-end, I designed a responsive, intuitive UI focused on user engagement and easy navigation. On the back end, I developed RESTful APIs with Node.js and MongoDB for data management. Additionally, I integrated the platform with AWS to optimize loading times and set up a CI/CD pipeline for faster deployment and testing. I worked closely with designers and QA to address usability and accessibility standards.',
                result:
                    'The project was completed on time, leading to a 35% increase in online sales within the first three months. User feedback highlighted the site&apos;s speed and ease of use, and the client reported a substantial reduction in manual inventory management tasks.',
            },
        },
    ]

    return (
        <div className="bg-gray-900">
            <section className="w-full py-8 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-orange-500 mb-4">Portfolio</h2>
                        <p className="text-gray-300">
                            The portfolio showcases projects that demonstrate the developer&apos;s
                            expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="bg-[#1F2A40] border-2 border-white rounded-lg hover:shadow-xl transition-shadow duration-300 text-white"
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
                                                className="bg-gray-700 text-gray-100"
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
                                                <h4 className="text-lg font-semibold text-gray-200 capitalize mb-2">
                                                    {section}:
                                                </h4>
                                                <p className="text-gray-300">{content}</p>
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