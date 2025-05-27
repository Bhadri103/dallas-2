import React, { useState, useEffect } from "react";
import {
  Shield,
  Award,
  Droplets,
  Zap,
  Leaf,
  Settings,
  CheckCircle,
  Star,
  Brush,
  Package,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

const ProductsPage = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  // Hero carousel data
  const heroSlides = [
    {
      image:
        "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600",
      title: "Dallas Premium Dampproof Solutions",
      subtitle: "India's #1 Waterproofing Innovation",
    },
    {
      image:
        "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600",
      title: "Lifetime Guaranteed Protection",
      subtitle: "Advanced Engineering Meets Quality",
    },
    {
      image:
        "https://images.pexels.com/photos/7218013/pexels-photo-7218013.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600",
      title: "Factory Direct Pricing",
      subtitle: "Superior Performance, Unmatched Value",
    },
  ];

  // Product categories with images
  const products = [
    {
      id: "wall-plaster",
      name: "Dallas Wall Plaster",
      tagline: "India's 1st Premium Dampproof Plaster",
      image:
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "🏗️",
      price: "Starting from ₹450/bag",
      features: [
        "Waterproof Wall Plaster Bag (30 KG)",
        "Waterproof 2X Plaster (50 KG)",
        "Waterproof Liquid (DrProof)",
        "Dallas Waterproof Grout (50 KG)",
        "Dallas Watertreater (20L)",
      ],
      benefits: [
        "No special tools required",
        "Reduces labor costs",
        "Lifetime guarantee",
        "Surprise gift included",
      ],
    },
    {
      id: "wall-putty",
      name: "Dallas Wall Putty",
      tagline: "Supreme White Dampproof Wallputty",
      image:
        "https://images.pexels.com/photos/4792513/pexels-photo-4792513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "🎨",
      price: "50% OFF MRP - ₹320/bag",
      discount: "50% OFF",
      features: [
        "Dallas Waterproof Wallputty (40 KG)",
        "Dallas Watertreater (10-20L)",
        "Special W-Treated Water System",
        "Premium White Finish",
      ],
      benefits: [
        "Superior adhesion",
        "Damp resistance",
        "Easy application",
        "Long-lasting finish",
      ],
    },
    {
      id: "wall-primer",
      name: "Dallas Wall Primer",
      tagline: "DampResist Wall Primer Solutions",
      image:
        "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "🖌️",
      price: "Starting from ₹180/L",
      features: [
        "Water-based formula",
        "Excellent penetration",
        "Multiple pack sizes (1L-20L)",
        "Low VOC content",
      ],
      benefits: [
        "Resists efflorescence",
        "Breathable film",
        "Improves topcoat coverage",
        "Quick drying",
      ],
    },
    {
      id: "dr-proof",
      name: "Dr. Proof",
      tagline: "Advanced Waterproofing Solutions",
      image:
        "https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "💧",
      price: "Custom pricing available",
      features: [
        "Liquid Membranes",
        "Protective Coatings",
        "Crack Bridging Technology",
        "Chemical Resistance",
      ],
      benefits: [
        "Seamless protection",
        "UV resistance",
        "Flexible application",
        "Professional grade",
      ],
    },
    {
      id: "gypsum-plaster",
      name: "Gypsum Plaster",
      tagline: "Professional Grade Solutions",
      image:
        "https://images.pexels.com/photos/7031602/pexels-photo-7031602.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "🔧",
      price: "Starting from ₹380/bag",
      features: [
        "High-quality gypsum blend",
        "Superior workability",
        "Smooth finish capability",
        "System compatible",
      ],
      benefits: [
        "Excellent adhesion",
        "Professional finish",
        "Easy to work with",
        "Durable results",
      ],
    },
    {
      id: "water-treater",
      name: "Water Treater",
      tagline: "Specialized Construction Additive",
      image:
        "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "🌊",
      price: "₹120/10L, ₹220/20L",
      features: [
        "Water modification system",
        "Enhanced workability",
        "Better hydration",
        "Optimized consistency",
      ],
      benefits: [
        "Improves bonding",
        "Better material flow",
        "System integration",
        "Quality assurance",
      ],
    },
  ];

  const whyChoose = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Factory Direct Pricing",
      description: "Eliminates intermediaries for best value",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Lifetime Guarantee",
      description: "Scientifically engineered solutions",
    },
    {
      icon: <Droplets className="w-8 h-8 text-cyan-500" />,
      title: "Superior Waterproofing",
      description: "Prevents dampness & mold",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "High Performance",
      description: "Cost-effective with superior strength",
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: "Continuous Innovation",
      description: "Formula updates every 6 months",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Eco-Friendly",
      description: "Sustainable materials & processes",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="  py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#E63946]">Products</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quality over quantity - High-performance construction materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.discount}
                    </div>
                  )}
                  <div className="absolute top-4 left-4 text-3xl bg-white/90 rounded-full p-2">
                    {product.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.tagline}</p>
                  <div className="text-lg font-bold text-red-600 mb-4">
                    {product.price}
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm text-gray-800">
                      Key Features:
                    </h4>
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setActiveProduct(
                        activeProduct === product.id ? null : product.id
                      )
                    }
                    className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 px-4 rounded-lg hover:from-red-700 hover:to-orange-600 transition-colors flex items-center justify-center"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>

                  {/* Expandable Details */}
                  {activeProduct === product.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="mb-3">
                        <h5 className="font-semibold text-sm mb-2">
                          Complete Package:
                        </h5>
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600 mb-1"
                          >
                            <Package className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div>
                        <h5 className="font-semibold text-sm mb-2">
                          Benefits:
                        </h5>
                        {product.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600 mb-1"
                          >
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dallas */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-[#E63946]">Dallas </span>?
            </h2>
            <p className="text-xl text-gray-600">
              Eight compelling reasons to trust Dallas for your construction
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Construction Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get lifetime guaranteed waterproofing solutions at factory-direct
            prices
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Get Quote
            </button>
          </div>

          <div className="mt-8 text-sm opacity-80">
            <p>Lifetime guarantee on waterproof performance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
