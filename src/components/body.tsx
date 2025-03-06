import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Portfolio from './portfolio'
import Contact from './contact'

const Body = () => {
  return (
    <div className="bg-gray-900 text-white px-8 py-16">
      {/* Hero Section */}
      <section id='hero-section'>
        <Hero/>
      </section>

      {/* About Section */}
      <section id='about'>
        <About/>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
      >
        <Contact />
      </section>
    </div>
  )
}

export default Body
