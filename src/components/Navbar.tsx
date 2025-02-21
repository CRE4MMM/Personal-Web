const Navbar = () => {
    return (
        <div className="bg-gray-900 p-6">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="text-orange-500 text-3xl font-bold">Logo</h1>
                <ul className="flex space-x-8 text-white text-lg">
                <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200 py-2">
                    About
                </li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200 py-2">
                    Skills
                </li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200 py-2">
                    Portfolio
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
