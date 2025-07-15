// src/components/Navbar.jsx
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex gap-20 items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MiSitio</div>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home
            <span className="text-xs">▼</span>
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-500">Services
            <span className="text-xs">▼</span>
          </Link>
          <Link to="/details" className="text-gray-700 hover:text-blue-500">Details
            <span className="text-xs">▼</span>
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-blue-500">Features
            <span className="text-xs">▼</span>
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-500">Projects
            <span className="text-xs">▼</span>
          </Link>
          <Link to="/team" className="text-gray-700 hover:text-blue-500">Team
            <span className="text-xs">▼</span>
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact
            <span className="text-xs">▼</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
