import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Shield, Droplet, Brush, Flask, Package, WaterIcon } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Dallas Wall Plast",
    description: "India's 1st Premium Dampproof Plaster with advanced waterproofing technology",
    image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg",
    icon: Shield,
    features: ["30KG Waterproof Wall Plaster Bag", "50KG 2X Plaster Bag", "Waterproof Liquid", "Grout", "Watertreater"]
  },
  {
    id: 2,
    name: "Dallas Groutt",
    description: "Advanced Dampproof Grouting Solution for superior waterproofing",
    image: "https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg",
    icon: Droplet,
    features: ["50KG Waterproof Groutt", "20L Watertreater", "Surprise Gift"]
  },
  {
    id: 3,
    name: "Dallas Supreme White",
    description: "Premium Dampproof Wallputty for exceptional finish",
    image: "https://images.pexels.com/photos/6474041/pexels-photo-6474041.jpeg",
    icon: Brush,
    features: ["40KG Waterproof Wallputty", "Watertreater", "Special Wall Putty Grout"]
  },
  {
    id: 4,
    name: "DrProof Series",
    description: "Specialized waterproofing solutions for critical areas",
    image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg",
    icon: Flask,
    features: ["Advanced Formula", "High Performance", "Professional Grade"]
  },
  {
    id: 5,
    name: "Gypsum Plaster",
    description: "High-quality gypsum-based plaster for smooth finishes",
    image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg",
    icon: Package,
    features: ["Premium Quality", "Smooth Finish", "Easy Application"]
  },
  {
    id: 6,
    name: "Water Treater",
    description: "Advanced water treatment solution for enhanced performance",
    image: "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg",
    icon: WaterIcon,
    features: ["20L Container", "Scientific Formula", "Universal Compatibility"]
  }
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Discover our range of scientifically engineered construction solutions designed for superior performance and lasting durability.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <AnimatedSection key={product.id} delay={index * 0.1}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <product.icon className="w-6 h-6 text-red-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="mt-16 text-center">
          <a 
            href="/contact" 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Request Custom Solutions
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Products;