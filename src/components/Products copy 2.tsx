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
  ChevronDown,
  ChevronUp,
  FileText,
  Clock,
  Thermometer,
  Activity,
  Target,
  Download,
  MapPin,
  Users,
  Truck,
  HeartHandshake,
  BadgeCheck,
  Calendar,
  IndianRupee,
} from "lucide-react";

const ProductsPage = () => {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [activeTechData, setActiveTechData] = useState<any[] | null>(null);
  const [activeApplication, setActiveApplication] = useState<string | null>(
    null
  );
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Hero carousel data
  const heroSlides = [
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
    {
      image:
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600",
      title: "Trusted by 10,000+ Customers",
      subtitle: "Quality Construction Solutions Since 2015",
    },
  ];

  // Customer testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Chennai, Tamil Nadu",
      project: "Residential Villa",
      rating: 5,
      comment:
        "Dallas waterproof plaster has been amazing. No dampness issues for 3 years now. The lifetime guarantee gives great peace of mind.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    },
    {
      name: "Priya Sharma",
      location: "Bangalore, Karnataka",
      project: "Commercial Building",
      rating: 5,
      comment:
        "Used Dallas products for our office building. The application was easy and the finish quality is excellent. Highly recommended!",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    },
    {
      name: "Vikram Patel",
      location: "Mumbai, Maharashtra",
      project: "Apartment Complex",
      rating: 5,
      comment:
        "Factory direct pricing saved us significant costs. The technical support team was very helpful throughout the project.",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    },
  ];

  // Technical Data for Wall Plaster
  const wallPlasterTechData = [
    {
      property: "Product Name",
      value: "Dallas Ready Plast (Waterproof Wall Plaster)",
      isCode: "",
    },
    { property: "Manufacturer", value: "Dallas WellCare Pvt Ltd.", isCode: "" },
    { property: "Product Code", value: "1001", isCode: "" },
    { property: "Appearance", value: "Smooth, off-grey paste", isCode: "" },
    { property: "Density", value: "1.6 g/cm³", isCode: "IS 12269:2013" },
    { property: "Thickness", value: "Minimum 12 mm", isCode: "" },
    { property: "Pot Life", value: "1-2 hours", isCode: "" },
    { property: "Setting Time", value: "24-48 hours", isCode: "" },
    { property: "Water Resistance", value: "> 95%", isCode: "IS 3085:1986" },
    {
      property: "Compressive Strength",
      value: "> 9.5 MPa (after 28 days)",
      isCode: "IS 4031:1988",
    },
    {
      property: "Tensile Strength",
      value: "> 2.5 MPa",
      isCode: "IS 5816:1999",
    },
    {
      property: "Thermal Conductivity",
      value: "0.1 - 0.2 W/m·K",
      isCode: "IS 3362:1985",
    },
    { property: "pH Level", value: "7 - 9", isCode: "" },
    { property: "Shelf Life", value: "12 months", isCode: "" },
    {
      property: "Fire Resistance",
      value: "Non-combustible (Class A)",
      isCode: "IS 3808:2009",
    },
    {
      property: "Coverage",
      value: "1.5 - 2.0 m² per kg (at 12 mm thickness)",
      isCode: "",
    },
    { property: "Drying Time", value: "6-8 hours (surface dry)", isCode: "" },
    { property: "Working Temperature", value: "5°C to 40°C", isCode: "" },
  ];

  // Technical Data for Wall Putty
  const wallPuttyTechData = [
    {
      property: "Product Name",
      value: "Dallas Supreme White Wallputty",
      isCode: "",
    },
    { property: "Base", value: "Cement based", isCode: "" },
    { property: "Appearance", value: "White powder", isCode: "" },
    { property: "Density", value: "1.4 g/cm³", isCode: "" },
    { property: "Coverage", value: "8-12 m² per kg", isCode: "" },
    { property: "Drying Time", value: "4-6 hours", isCode: "" },
    { property: "Recoat Time", value: "6-8 hours", isCode: "" },
    { property: "Water Resistance", value: "> 90%", isCode: "" },
    { property: "pH Level", value: "8-10", isCode: "" },
    { property: "Shelf Life", value: "12 months", isCode: "" },
  ];

  // Certifications and standards
  const certifications = [
    {
      name: "BIS Certification",
      code: "IS 269",
      icon: <BadgeCheck className="w-6 h-6" />,
    },
    {
      name: "ISO 9001:2015",
      code: "Quality Management",
      icon: <Award className="w-6 h-6" />,
    },
    {
      name: "CE Marking",
      code: "European Conformity",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      name: "Green Building",
      code: "IGBC Approved",
      icon: <Leaf className="w-6 h-6" />,
    },
  ];

  // Product categories with comprehensive data
  const products = [
    {
      id: "wall-plaster",
      name: "Dallas Wall Plaster",
      tagline: "India's 1st Premium Dampproof Plaster",
      image:
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "🏗️",
      price: "Starting from ₹450/bag",
      originalPrice: "₹520/bag",
      savings: "₹70 per bag",
      mainProducts: [
        "Ready Plast",
        "Ready Plaster (Non-Trade)",
        "0 Cure Plaster",
        "Dallas Grout",
        "Dallas Gypsum Plast",
      ],
      packageContents: [
        "Waterproof Wall Plaster Bag (30 KG)",
        "Waterproof 2X Plaster Bag (50 KG) for bathroom & other highly dampen areas",
        "Waterproof Liquid (for lintel area from DrProof)",
        "Dallas Waterproof Grout (50 KG)",
        "Dallas Watertreater (20-Litre Container)",
      ],
      applicationSteps: [
        "Fill a 200-litre drum with clean water",
        "Add 2 litres of Dallas Watertreater to the water and mix gently",
        "Measure the required amount of Dallas Ready Plaster and gradually add 16–20% of the prepared water mixture",
        "Mix thoroughly until a uniform consistency is achieved",
        "Apply using standard plastering techniques",
        "Allow to cure for 24-48 hours for optimal strength",
      ],
      specialFeatures: [
        "No special tools or skilled labor required",
        "Reduces labor and overall plastering costs",
        "Surprise gift included in every Dallas bag",
        "Lifetime guarantee on waterproof performance",
        "Self-curing technology",
        "Crack-resistant formula",
      ],
      benefits: [
        "No special tools required",
        "Reduces labor costs",
        "Lifetime guarantee",
        "Surprise gift included",
        "Superior adhesion",
        "Weather resistant",
      ],
      hasTechData: true,
      techData: wallPlasterTechData,
      warranty: "Lifetime Guarantee",
      deliveryTime: "2-3 days",
    },
    {
      id: "wall-putty",
      name: "Dallas Wall Putty",
      tagline: "Supreme White Dampproof Wallputty",
      image:
        "https://images.pexels.com/photos/4792513/pexels-photo-4792513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "🎨",
      price: "50% OFF MRP - ₹320/bag",
      originalPrice: "₹640/bag",
      savings: "₹320 per bag",
      discount: "50% OFF",
      packageContents: [
        "Dallas Waterproof Wallputty bag (40 KG)",
        "Dallas Watertreater (10 or 20-Litre Container)",
        "Surprise gift awaits in your Dallas bag",
        "Application guide and tools",
      ],
      applicationSteps: [
        "Step 1: Fill a 200-liter drum with clean water and add 2 liters of Dallas Watertreater, mix gently",
        "Step 2: Use the same W-Treated Water to mix with Dallas grout preparation for consistent grout mixture",
        "Step 3: Measure required Dallas Wall Putty and gradually add 28–30% of the prepared W-Treated Water",
        "Step 4: Paint/spray wall with Special Wall Putty Grout, let set, then apply Dallas Wall Putty (2-3 coats)",
        "Step 5: Allow each coat to dry completely before applying the next",
      ],
      benefits: [
        "Superior adhesion",
        "Damp resistance",
        "Easy application",
        "Long-lasting finish",
        "Excellent coverage",
        "Smooth texture",
      ],
      specialOffer:
        "Dallas offers its waterproof wall putty at a 50% discount off the Maximum Retail Price (MRP)",
      // hasTechData: true,
      // techData: wallPuttyTechData,
      warranty: "5 Year Guarantee",
      deliveryTime: "1-2 days",
    },
    {
      id: "wall-primer",
      name: "Dallas Wall Primer",
      tagline: "DampResist Wall Primer Solutions",
      image:
        "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "🖌️",
      price: "Starting from ₹180/L",
      originalPrice: "₹220/L",
      savings: "₹40 per litre",
      features: [
        "Water-based formula",
        "Excellent penetration",
        "Multiple pack sizes (1L-20L)",
        "Low VOC content",
        "Anti-fungal properties",
        "Quick drying formula",
      ],
      benefits: [
        "Resists efflorescence",
        "Breathable film",
        "Improves topcoat coverage",
        "Quick drying",
        "Prevents peeling",
        "Long-lasting protection",
      ],
      packageContents: [
        "Wall Primer (Various sizes: 1L, 4L, 10L, 20L)",
        "Application brush included (for 4L+ packs)",
        "Detailed instruction manual",
      ],
      warranty: "3 Year Guarantee",
      deliveryTime: "Same day",
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
        "UV Stable Formula",
        "Flexible Application Methods",
      ],
      benefits: [
        "Seamless protection",
        "UV resistance",
        "Flexible application",
        "Professional grade",
        "Long-term durability",
        "Multiple surface compatibility",
      ],
      specialFeatures: [
        "Professional installation service available",
        "Customized solutions for unique requirements",
        "Technical consultation included",
      ],
      warranty: "10 Year Guarantee",
      deliveryTime: "3-5 days",
    },
    {
      id: "gypsum-plaster",
      name: "Gypsum Plaster",
      tagline: "Professional Grade Solutions",
      image:
        "https://images.pexels.com/photos/7031602/pexels-photo-7031602.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "🔧",
      price: "Starting from ₹380/bag",
      originalPrice: "₹450/bag",
      savings: "₹70 per bag",
      features: [
        "High-quality gypsum formulation",
        "Superior adhesion and workability",
        "Smooth finish capability",
        "Compatible with Dallas waterproofing systems",
        "Quick setting time",
        "Excellent coverage",
      ],
      benefits: [
        "Excellent adhesion",
        "Professional finish",
        "Easy to work with",
        "Durable results",
        "Cost-effective",
        "Environmentally friendly",
      ],
      packageContents: [
        "Premium Gypsum Plaster (25 KG bag)",
        "Mixing guide and ratio chart",
        "Quality assurance certificate",
      ],
      warranty: "2 Year Guarantee",
      deliveryTime: "2-3 days",
    },
    {
      id: "water-treater",
      name: "Water Treater",
      tagline: "Dallas Watertreater Solutions",
      image:
        "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: "🌊",
      price: "₹120/10L, ₹220/20L",
      features: [
        "Water modification system",
        "Enhanced workability",
        "Better hydration",
        "Optimized consistency",
        "Compatible with all Dallas products",
        "Eco-friendly formula",
      ],
      benefits: [
        "Improves bonding",
        "Better material flow",
        "System integration",
        "Quality assurance",
        "Extended working time",
        "Reduced water consumption",
      ],
      packageContents: [
        "Water Treater Solution (10L or 20L)",
        "Measuring cup included",
        "Usage instructions",
      ],
      warranty: "1 Year Quality Guarantee",
      deliveryTime: "Same day",
    },
  ];

  const whyChoose = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Direct Factory-to-Customer Pricing",
      description: "Eliminates intermediaries for best value",
      stat: "Up to 40% savings",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Scientifically Engineered & Lifetime Guaranteed",
      description: "Advanced research and testing",
      stat: "15+ years R&D",
    },
    {
      icon: <Droplets className="w-8 h-8 text-cyan-500" />,
      title: "Superior Waterproofing Technology",
      description: "Prevents dampness, mold, and chemical damage",
      stat: ">95% water resistance",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Cost-Effective & High Performance",
      description: "Excellent value with superior strength",
      stat: "2x stronger than regular plaster",
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: "Continuous Innovation",
      description: "Formula updates every six months",
      stat: "6-month update cycle",
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-500" />,
      title: "Highly Equipped Manufacturing",
      description: "Automated quality controls",
      stat: "99.8% quality rate",
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Customizable Solutions",
      description: "Adapted to specific construction needs",
      stat: "1000+ custom projects",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Eco-Friendly Production",
      description: "Sustainable materials and processes",
      stat: "Carbon neutral by 2025",
    },
  ];

  // Service areas
  const serviceAreas = [
    "Chennai",
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);

  const TechnicalDataTable = ({ data }: { data: any[] }) => (
    <div className="overflow-x-auto">
      <div className="mb-4 flex items-center justify-between">
        <h6 className="font-semibold text-gray-800">
          Technical Specifications
        </h6>
        {/* <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
          <Download className="w-4 h-4 mr-1" />
          Download PDF
        </button> */}
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-3 font-semibold">Property</th>
            <th className="text-left p-3 font-semibold">Value</th>
            <th className="text-left p-3 font-semibold">IS Code / Reference</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="p-3 font-medium">{row.property}</td>
              <td className="p-3">{row.value}</td>
              <td className="p-3 text-blue-600">{row.isCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroSlides[currentSlide].image}
            alt="Dallas Products"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === idx ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">99.8%</div>
              <div className="text-gray-600">Quality Rate</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Product Overview */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Product Overview</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our focus is on quality over quantity, offering high-performance
              materials such as waterproofing plasters, wall putty, gypsum
              plaster, waterproof polymers and protective coatings—each tailored
              to meet the diverse construction needs of the region.
            </p>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-6">
              Certifications & Standards
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-4 rounded-lg text-center"
                >
                  <div className="text-blue-600 mb-2 flex justify-center">
                    {cert.icon}
                  </div>
                  <div className="font-semibold text-sm">{cert.name}</div>
                  <div className="text-xs text-gray-600">{cert.code}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Products Section */}
      <section className="py-16">
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
              <div key={product.id} className="relative">
                {/* Base Card - Fixed Height */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
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
                    {product.originalPrice && (
                      <div className="absolute bottom-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs">
                        Save {product.savings}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-3">{product.tagline}</p>

                    <div className="mb-4">
                      <div className="text-lg font-bold text-red-600">
                        {product.price}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          MRP: {product.originalPrice}
                        </div>
                      )}
                    </div>

                    {/* Product Info Cards */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-blue-50 p-2 rounded text-center">
                        <Shield className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                        <div className="text-xs font-semibold">
                          {product.warranty}
                        </div>
                      </div>
                      <div className="bg-green-50 p-2 rounded text-center">
                        <Truck className="w-4 h-4 mx-auto mb-1 text-green-600" />
                        <div className="text-xs font-semibold">
                          {product.deliveryTime}
                        </div>
                      </div>
                    </div>

                    {/* Standardized Features Section - Always show exactly 2 items */}
                    <div className="space-y-2 mb-4 flex-grow">
                      <h4 className="font-semibold text-sm text-gray-800">
                        Key Highlights:
                      </h4>
                      {/* Get features from mainProducts, features, or benefits - always show exactly 2 */}
                      {(() => {
                        const items =
                          product.mainProducts ||
                          product.features ||
                          product.benefits ||
                          [];
                        const displayItems = items.slice(0, 2);

                        // If we have less than 2 items, pad with generic ones
                        while (displayItems.length < 2) {
                          displayItems.push(
                            `${product.warranty} warranty included`
                          );
                        }

                        return displayItems.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </div>
                        ));
                      })()}
                    </div>

                    {/* Button stays at bottom */}
                    <button
                      onClick={() =>
                        setActiveProduct(
                          activeProduct === product.id ? null : product.id
                        )
                      }
                      className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 px-4 rounded-lg hover:from-red-700 hover:to-orange-600 transition-colors flex items-center justify-center mt-auto"
                    >
                      <span>
                        {activeProduct === product.id
                          ? "Hide Details"
                          : "View Details"}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 ml-2 transition-transform ${
                          activeProduct === product.id ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Expandable Details - Positioned Absolutely */}
                {activeProduct === product.id && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-2xl border border-blue-200 z-10 animate-fadeIn animate-highlight">
                    <div className="p-6 space-y-4 relative overflow-hidden">
                      {/* Animated background highlight */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent animate-shimmer"></div>
                      {/* Package Contents */}
                      {product.packageContents && (
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h5 className="font-semibold text-sm mb-2 flex items-center">
                            <Package className="w-4 h-4 mr-2 text-blue-700" />
                            Package Contents
                          </h5>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {product.packageContents.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Application Steps */}
                      {product.applicationSteps && (
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h5 className="font-semibold text-sm mb-2 flex items-center">
                            <Brush className="w-4 h-4 mr-2 text-green-700" />
                            Application Steps
                          </h5>
                          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                            {product.applicationSteps.map((step, idx) => (
                              <li key={idx}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Benefits */}
                      {product.benefits && (
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h5 className="font-semibold text-sm mb-2 flex items-center">
                            <HeartHandshake className="w-4 h-4 mr-2 text-purple-700" />
                            Key Benefits
                          </h5>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {product.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Special Features */}
                      {product.specialFeatures && (
                        <div className="p-4 bg-yellow-50 rounded-lg">
                          <h5 className="font-semibold text-sm mb-2 flex items-center">
                            <Star className="w-4 h-4 mr-2 text-yellow-700" />
                            Special Features
                          </h5>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {product.specialFeatures.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Special Offer for Wall Putty */}
                      {product.specialOffer && (
                        <div className="p-4 bg-red-100 rounded-lg text-red-800 font-medium text-sm flex items-center">
                          <IndianRupee className="w-4 h-4 mr-2" />
                          {product.specialOffer}
                        </div>
                      )}

                      {/* Technical Data Link/Button */}
                      {product.hasTechData && (
                        <button
                          onClick={() => setActiveTechData(product.techData)}
                          className="w-full bg-blue-100 text-blue-800 py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors text-sm font-semibold"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          View Technical Data Sheet
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes highlight {
              0% {
                box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.4);
                transform: scale(1);
              }
              50% {
                box-shadow: 0 0 30px 10px rgba(255, 170, 0, 0.3);
                transform: scale(1.02);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(255, 68, 68, 0);
                transform: scale(1);
              }
            }

            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
              100% {
                transform: translateX(100%);
                opacity: 0;
              }
            }

            @keyframes glow {
              0%,
              100% {
                background: linear-gradient(
                  135deg,
                  #fff700 0%,
                  /* Bright Yellow */ #ff8800 50%,
                  /* Orange */ #ff0000 100% /* Red */
                );
              }
              // 50% {
              //   background: linear-gradient(
              //     135deg,
              //     #ffe066 0%,
              //     #ffae42 50%,
              //     #ff4d4d 100%
              //   );
              // }
            }

            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out;
            }

            .animate-highlight {
              animation: highlight 0.8s ease-out, glow 2s ease-in-out infinite;
            }

            .animate-shimmer {
              animation: shimmer 2s ease-in-out infinite;
            }
          `}</style>
        </div>
      </section>

      {/* Technical Data Modal */}
      {activeTechData && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold text-gray-800">
                Technical Data Sheet
              </h3>
              <button
                onClick={() => setActiveTechData(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <TechnicalDataTable data={activeTechData} />
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Dallas Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-[#E63946]">Dallas?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Unmatched Quality, Value, and Innovation in Construction Materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                {/* <p className="text-red-600 font-semibold">{item.stat}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#E63946]">Service Areas</span>
            </h2>
            <p className="text-xl text-gray-600">
              Expanding our reach across India, bringing quality products closer
              to you.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-red-50 text-black-800 px-6 py-3 rounded-full flex items-center shadow-sm"
              >
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 text-lg mb-4">
              Don't see your city listed? Contact us to inquire about delivery
              to your location!
            </p>
            <a
              href="tel:+919342216880"
              className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-[#E63946]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common queries about our products and
              services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What makes Dallas Wall Plaster waterproof?",
                a: "Dallas Wall Plaster is formulated with advanced polymer additives and specific hydrophobic agents that create a dense, non-porous structure, preventing water penetration and ensuring lasting dampness resistance. This unique composition is a result of over 15 years of R&D.",
              },
              {
                q: "Do I need special tools or skilled labor for application?",
                a: "No! One of the key advantages of Dallas products like Wall Plaster and Wall Putty is their ease of application. They are designed for standard construction practices and do not require specialized tools or highly skilled labor, saving you time and cost.",
              },
              {
                q: "How does the lifetime guarantee work for Dallas Wall Plaster?",
                a: "Our Lifetime Guarantee for Dallas Wall Plaster covers its waterproof performance for the entire lifespan of the structure. In the unlikely event of dampness returning due to product failure, we commit to providing material replacement and re-application support, subject to our terms and conditions.",
              },
              {
                q: "What is the 'Dallas Watertreater' and why is it important?",
                a: "Dallas Watertreater is a proprietary water modification solution designed to optimize the performance of our products. When mixed with water used for our plasters and putties, it enhances workability, improves hydration, and ensures better bonding and overall strength of the final application. It is crucial for achieving optimal results.",
              },
              {
                q: "Are Dallas products eco-friendly?",
                a: "Yes, Dallas is committed to sustainable practices. Our products are manufactured with environmentally conscious materials and processes, striving for low VOC (Volatile Organic Compounds) content. We are working towards achieving carbon neutrality by 2025.",
              },
              {
                q: "Can I get a customized solution for a large project?",
                a: "Absolutely. For large-scale or unique construction projects, Dallas offers customized product solutions and technical consultation. Our team of experts can work with you to tailor specific formulations and application strategies to meet your project's precise requirements. Contact our sales team for more details.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <button
                  className="flex justify-between items-center w-full text-left font-bold text-gray-800 text-lg"
                  onClick={() =>
                    setActiveApplication(
                      activeApplication === `faq-${index}`
                        ? null
                        : `faq-${index}`
                    )
                  }
                >
                  {faq.q}
                  {activeApplication === `faq-${index}` ? (
                    <ChevronUp className="w-5 h-5 text-red-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {activeApplication === `faq-${index}` && (
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
            
    </div>
  );
};

export default ProductsPage;
