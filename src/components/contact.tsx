import React from 'react'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-6">
        <section className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Contact Me</h2>
            <p className="text-gray-300 text-lg mb-8">
            Feel free to connect with me on social media or send a message!
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6">
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 text-4xl hover:text-orange-400 transition duration-300"
            >
                <FaInstagram />
            </a>

            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-4xl hover:text-green-400 transition duration-300"
            >
                <FaWhatsapp />
            </a>

            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-4xl hover:text-blue-400 transition duration-300"
            >
                <FaLinkedin />
            </a>

            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-4xl hover:text-gray-300 transition duration-300"
            >
                <FaGithub />
            </a>
            </div>
        </section>
        </div>
    )
}

export default Contact
