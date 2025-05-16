// src/components/Footer.jsx
import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">SoftSell</h2>
          <p className="mt-2">
            123 Software Avenue, <br />
            Silicon City, TechLand, 56789
          </p>
          <p>Email: <a href="mailto:support@softsell.com" className="underline">support@softsell.com</a></p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 text-white mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:support@softsell.com"
            className="hover:text-blue-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
