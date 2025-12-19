import { useEffect, useState } from "react";
import logo from "/logo/testlogo-removebg-preview.png"; // adjust path according to your project structure

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load theme on first render
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Update theme when toggled
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex-shrink-5">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain rounded-xl shadow-lg"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 items-center text-white font-semibold">
          <li><a href="#home" className="hover:text-green-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-green-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-2">
          <a href="#home" className="block py-2 hover:text-green-400">Home</a>
          <a href="#about" className="block py-2 hover:text-green-400">About</a>
          <a href="#projects" className="block py-2 hover:text-green-400">Projects</a>
          <a href="#contact" className="block py-2 hover:text-green-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
