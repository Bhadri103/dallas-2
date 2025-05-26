import React from 'react';
import { Building2, FlaskRound as Flask, Users, Leaf, Award, Factory } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Dallas Wallcare</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Established in 2019 by a visionary team of scientists and industry veterans, we are committed to transforming India's construction landscape with our premium waterproof wall care solutions.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <AnimatedSection>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 rounded-tl-3xl"></div>
            <img 
              src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg" 
              alt="Manufacturing Facility" 
              className="w-full h-auto rounded-lg shadow-xl relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 rounded-br-3xl"></div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <h3 className="text-2xl font-bold mb-6">Our Legacy of Excellence</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Dallas Wallcare has played a vital role in the construction of nearly 15,000 residential and commercial structures across Kerala, Karnataka, and Tamil Nadu. With over 150 projects proudly bearing our name, we've established ourselves as a trusted brand in the construction industry.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Founded with support from the esteemed Manufacturing Research Centre, McGLASGO, we receive expert guidance and proprietary formulas. Our world-renowned scientists and skilled professionals bring a strong scientific foundation to every product and process.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <AnimatedSection>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Award className="w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-bold mb-3">Vision</h4>
            <p className="text-gray-600">
              To be the foremost leader in India's construction materials sector through quality, sustainability, and innovation.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Target className="w-12 h-12 text-yellow-500 mb-4" />
            <h4 className="text-xl font-bold mb-3">Mission</h4>
            <p className="text-gray-600">
              Developing pioneering solutions that guard against dampness, fungus, and environmental challenges.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Flask className="w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-bold mb-3">Innovation</h4>
            <p className="text-gray-600">
              Continuous research and development to keep our products at the cutting edge of construction technology.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Join Us on Our Journey</h3>
              <p className="mb-6">
                Partner with Dallas Wallcare as we revolutionize the Indian construction industry with unmatched quality and innovation.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg" 
                alt="Construction Site" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;