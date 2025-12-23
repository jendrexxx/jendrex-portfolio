import { useState } from "react";
import logo from "/logo/testlogo-removebg-preview.png";

interface NavbarProps {
  onNavClick?: (id: string) => void;
}

function Navbar({ onNavClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    onNavClick?.(id); // notify App to trigger animation
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain rounded-xl shadow-lg" />
        </a>

        <ul className="hidden md:flex space-x-8 items-center text-white font-semibold">
          <li><button onClick={() => handleClick("home")} className="hover:text-green-400 transition">Home</button></li>
          <li><button onClick={() => handleClick("about")} className="hover:text-green-400 transition">About</button></li>
          <li><button onClick={() => handleClick("projects")} className="hover:text-green-400 transition">Projects</button></li>
          <li><button onClick={() => handleClick("education")} className="hover:text-green-400 transition">Education</button></li>
          <li><button onClick={() => handleClick("contact")} className="hover:text-green-400 transition">Contact</button></li>
        </ul>

        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-2">
          <button onClick={() => handleClick("home")} className="block py-2 hover:text-green-400">Home</button>
          <button onClick={() => handleClick("about")} className="block py-2 hover:text-green-400">About</button>
          <button onClick={() => handleClick("projects")} className="block py-2 hover:text-green-400">Projects</button>
          <button onClick={() => handleClick("education")} className="block py-2 hover:text-green-400">Education</button>
          <button onClick={() => handleClick("contact")} className="block py-2 hover:text-green-400">Contact</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
