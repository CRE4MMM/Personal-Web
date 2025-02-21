import Image from 'next/image'
import Skills from './Skills'
import Portfolio from './portfolio'
import Contact from './contact'

const Body = () => {
    return (
        <div className="bg-gray-900 px-6 py-12">
            <div
            id="hero-section"
            className="flex items-center justify-center px-10 bg-gray-900 text-white space-x-10"
            >
            <div className="max-w-lg text-center">
                <p className="text-lg">
                I&apos;M
                <span className="text-orange-500 text-4xl font-bold">
                    Haidar Iqbaal
                </span>
                </p>
                <p className="text-xl mt-2">Front-End Web Developer</p>

                <button
                className="mt-6 px-6 py-3 text-orange-500 border border-orange-500 rounded-xl bg-transparent 
                                                    hover:bg-orange-500 hover:text-gray-900 transition duration-300"
                >
                Contact Me
                </button>
            </div>

            <div className="relative">
                <Image
                src="/images/profile.jpg"
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-lg"
                />
            </div>
            </div>

            <div className="w-full bg-gray-900 px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                <h2 className="text-3xl font-bold text-orange-500">About</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                    distinctio aperiam temporibus in asperiores, libero ea veniam
                    assumenda totam, iure dolor, modi accusamus odio perferendis
                    magni! Quam veritatis quidem aliquam laudantium cum iure minima,
                    ad quibusdam debitis minus reiciendis placeat, corrupti optio
                    perferendis vitae itaque enim culpa repellendus dolorum!
                    Maiores!
                </p>
                </div>
            </div>
            </div>

            <div id="skills-section" className="px-2 py-2">
            <Skills />
            </div>

            <div id="portfolio-section" className="px-2 py-2">
            <Portfolio />
            </div>

            <div id="contact-section" className="px-2 py-2">
            <Contact />
            </div>
        </div>
    )
}

export default Body
