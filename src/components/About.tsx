import React, { useEffect } from 'react';
import { Building2, FlaskRound as Flask, Users, Leaf } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">About Dallas Wallcare</h2>
        <p className="text-gray-600 mt-4">Founded in 2019, backed by KKM Green and certified with ISO 9001:2015</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="animate-on-scroll">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow rounded-tl-3xl"></div>
            <img 
              src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg" 
              alt="Factory Operations" 
              className="w-full h-auto rounded-lg shadow-xl relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red rounded-br-3xl"></div>
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6">Our Legacy of Excellence</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Dallas Wallcare has played a vital role in the construction of nearly 15,000 residential and commercial structures across Kerala, Karnataka, and Tamil Nadu. With over 150 projects proudly bearing our name, we've established ourselves as a trusted brand in the construction industry.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Founded with support from the esteemed Manufacturing Research Centre, McGLASGO, we receive expert guidance and proprietary formulas. Our world-renowned scientists and skilled professionals bring a strong scientific foundation to every product and process.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red animate-on-scroll">
          <Building2 className="w-12 h-12 text-red mb-4" />
          <h4 className="text-xl font-bold mb-2">Modern Facility</h4>
          <p className="text-gray-600">Advanced automated systems and in-house testing labs near Coimbatore</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow animate-on-scroll">
          <Flask className="w-12 h-12 text-yellow mb-4" />
          <h4 className="text-xl font-bold mb-2">Scientific Approach</h4>
          <p className="text-gray-600">Research-driven development with continuous innovation</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red animate-on-scroll">
          <Users className="w-12 h-12 text-red mb-4" />
          <h4 className="text-xl font-bold mb-2">Expert Support</h4>
          <p className="text-gray-600">Technical guidance and custom solutions for seamless integration</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow animate-on-scroll">
          <Leaf className="w-12 h-12 text-yellow mb-4" />
          <h4 className="text-xl font-bold mb-2">Sustainability</h4>
          <p className="text-gray-600">Eco-conscious manufacturing and energy-efficient processes</p>
        </div>
      </div>
    </div>
  );
};

export default About;