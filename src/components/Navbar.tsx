const Navbar = () => {
  return (
    <div className="bg-blue-900 py-3 px-6 fixed top-0 left-0 w-full shadow-md z-50">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-white text-2xl font-semibold">
          <a href="#">MyPortfolio</a>
        </h1>
        <ul className="flex space-x-6 text-white text-base">
          <li>
            <a
              href="#about"
              className="hover:text-blue-300 cursor-pointer transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-300 cursor-pointer transition-colors duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-blue-300 cursor-pointer transition-colors duration-200"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-300 cursor-pointer transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
