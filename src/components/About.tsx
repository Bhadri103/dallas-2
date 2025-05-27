import React, { useEffect } from 'react';
import { Users, Award, Target, Heart, Star, Building2 } from 'lucide-react';

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
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Magesh Matha PhD",
      position: "Research & Development Director",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    },
    {
      name: "Dr. Shankaran Matha PhD",
      position: "Chief Scientific Officer",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    },
    {
      name: "Mr. Shobana BE",
      position: "Engineering Manager",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    },
    {
      name: "Mr. N. Raju Nanja",
      position: "Operations Head",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    },
    {
      name: "Mr. ArulKumar BE",
      position: "Technical Manager",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    },
    {
      name: "Gokul Devaraj",
      position: "Business Development",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
     

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Dallas Wallcare</h2>
            <p className="text-xl text-gray-600">The Legacy Behind Dallas Wallcare: A Story of Grit and Growth</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-tl-3xl opacity-20"></div>
                <img 
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2" 
                  alt="Historical Mettupalayam Market" 
                  className="w-full h-96 object-cover rounded-lg shadow-xl relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500 rounded-br-3xl opacity-20"></div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Long before Coimbatore—one of India's foremost industrial hubs—emerged as a center for 
                construction-oriented manufacturing, the roots of Dallas Wallcare were quietly taking shape. 
                The story traces back to the late 1960s and 1970s in Mettupalayam, a historically rich town near Coimbatore.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                It was here that a determined individual, with no formal education or support system, began his journey 
                by trading vegetables in the local market. This remarkable man made the bold transition from agriculture 
                to bulk trading, gradually earning a reputation for integrity, courage, and unwavering hard work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Fueled by deep faith, sincerity, and a tireless spirit, he overcame every challenge—despite lacking 
                financial resources, academic credentials, or powerful connections. He stood strong, like a rock amidst a raging sea.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                What started as a modest trading venture eventually became the foundation of KKM—an identity forged through 
                resilience, principles, and perseverance. Today, that legacy has grown into a cutting-edge research and 
                development center, driving innovation in the construction materials industry.
              </p>

              <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-6 rounded-lg text-white">
                <p className="text-lg font-medium">
                  The same indomitable spirit that empowered <strong>K.K. Mathan, the Legend</strong>, now propels the growth of 
                  Dallas Wallcare, inspiring advancements in manufacturing and modern construction technologies.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2" 
                  alt="K.K. Mathan Legacy" 
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">K.K. Mathan</h3>
                  <p className="text-lg opacity-90">The Visionary Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Leadership That Drives Innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="animate-on-scroll bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.position}</p>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">Leadership Team</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scientific Backing */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Scientific Backing</h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                Backed by world-renowned scientists and skilled professionals from <strong>McGlasgo Research Centre</strong>, 
                we bring a strong scientific foundation to every product and process we develop. Our commitment to research 
                and innovation ensures that Dallas Wallcare remains at the forefront of construction technology advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">Continuously pushing boundaries in construction technology and materials science.</p>
            </div>

            <div className="animate-on-scroll bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '0.1s' }}>
              <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">Built on the foundation of honesty, transparency, and ethical business practices.</p>
            </div>

            <div className="animate-on-scroll bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '0.2s' }}>
              <Star className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">Committed to delivering superior quality in every product and service we offer.</p>
            </div>

            <div className="animate-on-scroll bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '0.3s' }}>
              <Building2 className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Legacy</h3>
              <p className="text-gray-600">Honoring our founder's vision while building for future generations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;