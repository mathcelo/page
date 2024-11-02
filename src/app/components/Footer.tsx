import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-slate-900 text-gray-400 py-3 text-sm flex justify-center items-center gap-2">
            <p className="text-center">
                © {new Date().getFullYear()} Marcelo Morales
            </p>
            {/* LinkedIn Icon */}
            <a
                href="https://www.linkedin.com/in/marcelo-morales-547138190/" // Replace with your actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition duration-300"
                aria-label="LinkedIn Profile"
            >
                <FaLinkedin size={18} />
            </a>
        </footer>
    );
};

export default Footer;