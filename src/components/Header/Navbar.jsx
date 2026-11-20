import { message } from "antd"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }
    return (
        <nav className="w-full bg-white text-gray-700 border-b border-orange-100 sticky top-0 z-50 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo / Brand */}
                    <Link to="/" onClick={closeMenu} className="text-xl font-bold tracking-wider text-gray-900 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2">
                        {/* <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span> */}
                        Quetta Cafe
                    </Link>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 py-2 font-medium">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 py-2 font-medium">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 py-2 font-medium">Contact</Link>
                        </li>
                    </ul>

                    {/* Desktop Action Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        
                                <Link to="/login" className="text-gray-700 hover:text-orange-600 px-5 py-2.5 rounded-full font-medium transition-colors duration-300 text-center text-sm border border-gray-200 hover:border-orange-300 hover:bg-orange-50/50">
                                    Login
                                </Link>
                                <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-300 text-center text-sm shadow-sm shadow-orange-500/25">
                                    Register
                                </Link>
                    </div>

                    {/* Mobile Menu Hamburger Button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
                        >
                            {isOpen ? (
                                // Close 'X' icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-orange-100 px-4 pt-4 pb-6 space-y-4 shadow-lg">
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <Link to="/" onClick={closeMenu} className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 font-medium">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={closeMenu} className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 font-medium">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMenu} className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 font-medium">Contact</Link>
                        </li>
                    </ul>

                    <div className="pt-4 border-t border-orange-100 flex flex-col gap-2.5">
                     
                                <Link to="/login" onClick={closeMenu} className="w-full text-center border border-gray-200 hover:border-orange-300 text-gray-700 hover:bg-orange-50 hover:text-orange-600 py-2.5 rounded-full font-medium transition-colors duration-300 text-sm">
                                    Login
                                </Link>
                                <Link to="/register" onClick={closeMenu} className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-full font-medium transition-colors duration-300 text-sm shadow-sm shadow-orange-500/25">
                                    Register
                                </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
