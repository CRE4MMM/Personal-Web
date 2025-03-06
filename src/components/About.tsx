import React from 'react'

const About = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 px-6">
        <section className="max-w-4xl text-center bg-gray-800 p-10 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            About Me
            </h2>
            <p className="text-gray-300 mt-6 leading-relaxed text-lg px-4 md:px-0">
            I am a frontend developer dedicated to creating responsive,
            interactive, and dynamic web applications. Experienced in using HTML,
            CSS, JavaScript, and modern frameworks such as React and Next.js to
            build engaging and functional user experiences. I have always been
            interested in the latest web technologies and am constantly learning
            to improve my skills in UI/UX design, performance optimization, and
            accessibility.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed text-lg">
            My goal is to create an interface that is not only visually appealing,
            but also provides the best possible experience for users on a variety
            of devices.
            </p>
        </section>
        </div>
    )
}

export default About
