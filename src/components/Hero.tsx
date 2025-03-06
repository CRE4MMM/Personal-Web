import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <section id="hero-section" className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-6 md:space-x-12">
                    <div>
                    <p className="text-lg tracking-wide">I&apos;M</p>
                    <h1 className="text-5xl font-extrabold text-orange-500 drop-shadow-lg">
                        Haidar Iqbaal
                    </h1>
                    <p className="text-xl mt-3 text-gray-300">Front-End Web Developer</p>
                    <button className="mt-6 px-6 py-3 border border-orange-500 text-orange-500 rounded-lg transition duration-300 hover:bg-orange-500 hover:text-gray-900 shadow-lg">
                        Contact Me
                    </button>
                    </div>
                    <div className="relative">
                    <Image
                        src="/images/profile.jpg"
                        alt="Profile Picture"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-2xl"
                    />
                    </div>
                </section>
        </div>
    )
}

export default Hero