import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Factory } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Service", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contacts", path: "/contact" },
  ];

  const productItems = [
    { label: "Wall Plaster", path: "/products" },
    { label: "Wall Putty", path: "/products" },
    { label: "Wall Primer", path: "/products" },
    { label: "Dr. Proof", path: "/products" },
    { label: "Gypsum Plaster", path: "/products" },
    { label: "Water Treater", path: "/products" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity duration-300"
            >
              <Factory size={32} className="text-red-600" />
              <span className="text-2xl font-bold">
                <span className="text-red-600">DALLAS</span>
                <span className="text-yellow-500">WALLCARE</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Innovative wall solutions crafted with sustainability, durability, and customer satisfaction at the core.
            </p>
    
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={`footer-nav-${index}`}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-white hover:text-red-600 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
              Our Products
            </h3>
            <ul className="space-y-3">
              {productItems.map((item, index) => (
                <li key={`footer-product-${index}`}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-white hover:text-red-600 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates, industry
              insights, and product information.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <button
                type="button"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Dallas Wallcare. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white hover:text-red-600 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white hover:text-red-600 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white hover:text-red-600 transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;