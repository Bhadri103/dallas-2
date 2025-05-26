import React, { useEffect } from 'react';

const productData = [
  {
    id: 1,
    name: "Dallas Wall Plast",
    description: "India's 1st Premium Dampproof Plaster with advanced waterproofing technology and lifetime guarantee.",
    image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg"
  },
  {
    id: 2,
    name: "Dallas Groutt",
    description: "Advanced Dampproof Grouting Solution designed for superior waterproofing and durability.",
    image: "https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg"
  },
  {
    id: 3,
    name: "Dallas Supreme White",
    description: "Premium Dampproof Wallputty offering exceptional finish and protection against moisture.",
    image: "https://images.pexels.com/photos/6474041/pexels-photo-6474041.jpeg"
  },
  {
    id: 4,
    name: "DrProof Series",
    description: "Specialized waterproofing solutions for critical areas and high-moisture environments.",
    image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg"
  },
  {
    id: 5,
    name: "Gypsum Plaster",
    description: "High-quality gypsum-based plaster for smooth, durable interior finishes.",
    image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg"
  },
  {
    id: 6,
    name: "Water Treater",
    description: "Advanced water treatment solution for enhanced product performance and longevity.",
    image: "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg"
  }
];

const Products = () => {
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">Our Products</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover our extensive range of high-quality plastic products designed to meet the diverse needs of various industries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((product, index) => (
          <div 
            key={product.id} 
            className="product-card bg-white rounded-lg overflow-hidden shadow-md animate-on-scroll card-hover"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="h-60 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <button className="mt-4 px-4 py-2 bg-red text-white rounded hover:bg-red-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a href="#contact" className="inline-block btn-primary px-8 py-3 rounded-md text-lg font-medium">
          Request Custom Solutions
        </a>
      </div>
    </div>
  );
};

export default Products;