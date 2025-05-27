import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Award,
  Droplets,
  Zap,
  Leaf,
  Settings,
  CheckCircle,
  Star,
  Brush,
  Layers,
  Aperture,
} from "lucide-react";

const productSlides = [
  {
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    title: "Premium Dampproof Solutions",
    description:
      "India's 1st scientifically engineered waterproof construction materials",
  },
  {
    image: "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg",
    title: "Advanced Wall Protection",
    description: "Lifetime guaranteed waterproofing technology",
  },
  {
    image: "https://images.pexels.com/photos/7218013/pexels-photo-7218013.jpeg",
    title: "Professional Grade Quality",
    description: "Factory-to-customer direct pricing with superior performance",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("wall-plaster");
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productCategories = [
    {
      id: "wall-plaster",
      name: "Dallas Wall Plaster",
      icon: "🏗️", // Using emoji as per existing style
      products: [
        "Ready Plast",
        "Ready Plaster (Non-Trade)",
        "0 Cure Plaster",
        "Dallas Grout",
        "Dallas Gypsum Plast",
      ],
    },
    {
      id: "wall-putty",
      name: "Dallas Wall Putty",
      icon: "🎨",
      products: ["Supreme White Dampproof Wallputty"],
    },
    {
      id: "wall-primer", // Added Wall Primer
      name: "Dallas Wall Primer",
      icon: "🖌️", // Conceptual icon
      products: ["Dallas DampResist Wall Primer"],
    },
    {
      id: "dr-proof",
      name: "Dr. Proof",
      icon: "💧",
      products: [
        "Waterproof Solutions",
        "Liquid Membranes",
        "Protective Coatings",
      ],
    },
    {
      id: "gypsum-plaster",
      name: "Gypsum Plaster",
      icon: "🔧",
      products: ["Professional Grade Gypsum Solutions"],
    },
    {
      id: "water-treater",
      name: "Water Treater",
      icon: "🌊",
      products: ["Dallas Watertreater Solutions"],
    },
  ];

  const whyChooseReasons = [
    "Direct Factory-to-Customer Pricing: Eliminates intermediaries",
    "Scientifically Engineered & Lifetime Guaranteed: Advanced research and testing",
    "Superior Waterproofing Technology: Prevents dampness, mold, and chemical damage",
    "Cost-Effective & High Performance: Excellent value with superior strength",
    "Continuous Innovation: Formula updates every six months",
    "Highly Equipped Manufacturing: Automated quality controls",
    "Customizable Solutions: Adapted to specific construction needs",
    "Eco-Friendly Production: Sustainable materials and processes",
  ];

  const technicalData = [
    {
      property: "Product Name",
      value: "Dallas Ready Plast (Waterproof Wall Plaster)",
      reference: "",
    },
    {
      property: "Manufacturer",
      value: "Dallas WellCare Pvt Ltd.",
      reference: "",
    },
    { property: "Product Code", value: "1001", reference: "" },
    { property: "Appearance", value: "Smooth, off-grey paste", reference: "" },
    { property: "Density", value: "1.6 g/cm³", reference: "IS 12269:2013" },
    { property: "Thickness", value: "Minimum 12 mm", reference: "" },
    { property: "Pot Life", value: "1-2 hours", reference: "" },
    { property: "Setting Time", value: "24-48 hours", reference: "" },
    { property: "Water Resistance", value: "> 95%", reference: "IS 3085:1986" },
    {
      property: "Compressive Strength",
      value: "> 9.5 MPa (after 28 days)",
      reference: "IS 4031:1988",
    },
    {
      property: "Thermal Conductivity",
      value: "0.1 - 0.2 W/m·K",
      reference: "IS 3362:1985",
    },
    { property: "pH Level", value: "7 - 9", reference: "" },
    { property: "Shelf Life", value: "12 months", reference: "" },
    {
      property: "Fire Resistance",
      value: "Non-combustible (Class A)",
      reference: "IS 3808:2009",
    },
    {
      property: "Coverage",
      value: "1.5 - 2.0 m² per kg (at 12 mm thickness)",
      reference: "",
    },
  ];

  const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [slides.length]);

    return (
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {slides.map((slide: { image: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl opacity-90">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_: any, index: string | number | bigint | ((prevState: number) => number) | null | undefined) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Slider */}
      <Slider slides={productSlides} />

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dallas Products
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our focus is on quality over quantity, offering high-performance
              materials such as waterproofing plasters, wall putty, gypsum
              plaster, waterproof polymers and protective coatings—each tailored
              to meet the diverse construction needs of the region.
            </p>
          </div>

          {/* Dallas Brand Banner */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 mb-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dallas - India's 1st Premium Dampproof Solutions
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Dallas Wallcare specializes in next-generation dampproof solutions
              that revolutionize construction standards across India. Our
              scientifically engineered products provide lifetime protection
              against water damage, mold, and environmental stress.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Main Product Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productCategories.map((category, index) => (
              <div
                key={category.id}
                className={`animate-on-scroll bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  activeCategory === category.id
                    ? "ring-2 ring-red-500 bg-red-50"
                    : ""
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setActiveCategory(category.id)} // This can be used to scroll to or highlight sections later
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      {/* Wall Plaster Section */}
      <section id="wall-plaster" className="py-16 bg-white">
        {" "}
        {/* Added ID for potential navigation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="Dallas Wall Plaster Application"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>

            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">
                Dallas Wall Plast – India's 1st Premium Dampproof Plaster
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">
                  Complete Package Contents:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-red-600 mr-3" />
                    Waterproof Wall Plaster Bag (30 KG)
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-red-600 mr-3" />
                    Waterproof 2X Plaster Bag (50 KG) for bathroom & highly damp
                    areas
                  </li>
                  <li className="flex items-center">
                    <Droplets className="w-5 h-5 text-blue-600 mr-3" />
                    Waterproof Liquid (for lintel area from DrProof)
                  </li>
                  <li className="flex items-center">
                    <Settings className="w-5 h-5 text-gray-600 mr-3" />
                    Dallas Waterproof Grout (50 KG)
                  </li>
                  <li className="flex items-center">
                    <Droplets className="w-5 h-5 text-blue-600 mr-3" />
                    Dallas Watertreater (20-Litre Container)
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-yellow-800">
                  Special Features:
                </h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>• No special tools or skilled labor required</li>
                  <li>• Reduces labor and overall plastering costs</li>
                  <li>• Surprise gift included in every Dallas bag</li>
                  <li>• Lifetime guarantee on waterproof performance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Application Procedure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <p className="text-sm">
                  Fill a 200-litre drum with clean water
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <p className="text-sm">
                  Add 2 litres of Dallas Watertreater to the water and mix
                  gently
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <p className="text-sm">
                  Add Dallas Ready Plaster with 16–20% of prepared water mixture
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <p className="text-sm">
                  Mix thoroughly and apply using standard plastering techniques
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div
              className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() =>
                setExpandedSection(expandedSection === "tds" ? null : "tds")
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  Technical Data Sheet (TDS)
                </h3>
                {expandedSection === "tds" ? <ChevronUp /> : <ChevronDown />}
              </div>

              {expandedSection === "tds" && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                          Property
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                          Value
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                          IS Code / Reference
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {technicalData.map((row, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="border border-gray-300 px-4 py-3 font-medium">
                            {row.property}
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            {row.value}
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-blue-600">
                            {row.reference}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Wall Putty Section */}
      <section id="wall-putty" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Dallas Supreme White – Dampproof Wallputty
              </h2>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Package Contents:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Dallas Waterproof Wallputty bag (40 KG)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Dallas Watertreater (10 or 20-Litre Container)
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    Surprise gift awaits in your Dallas bag
                  </li>
                </ul>
              </div>

              <div className="bg-red-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🎉 Special Offer!</h3>
                <p className="text-lg">
                  Dallas offers its waterproof wall putty at a{" "}
                  <strong>50% discount</strong> off the Maximum Retail Price
                  (MRP), allowing customers to purchase high-quality waterproof
                  wall putty at half the regular price.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="Dallas Wall Putty Application"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="animate-on-scroll mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Application Procedure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-600">Step 1</h4>
                <h5 className="font-semibold mb-2">Prepare W-Treated Water</h5>
                <p className="text-sm text-gray-600">
                  Fill 200-liter drum with clean water. Add 2 liters Dallas
                  Watertreater and mix gently.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-600">Step 2</h4>
                <h5 className="font-semibold mb-2">Prepare Special Grout</h5>
                <p className="text-sm text-gray-600">
                  Use W-Treated Water to mix with Dallas grout. Ensure thorough
                  mixing for consistency.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-600">Step 3</h4>
                <h5 className="font-semibold mb-2">Mix Dallas Wall Putty</h5>
                <p className="text-sm text-gray-600">
                  Add 28–30% W-Treated Water to putty. Mix until uniform,
                  lump-free consistency.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-600">Step 4</h4>
                <h5 className="font-semibold mb-2">Application Process</h5>
                <p className="text-sm text-gray-600">
                  Paint wall with grout, let set, then apply Dallas Wall Putty
                  (2-3 coats).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall Primer Section - NEW */}
      <section id="wall-primer" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2" // Placeholder image for primer
                alt="Dallas Wall Primer Application"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">
                Dallas DampResist Wall Primer
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A premium, breathable, water-based primer designed to provide
                excellent adhesion for topcoats on plastered surfaces,
                especially in moisture-prone areas. It helps in resisting
                efflorescence and enhances the life of the paint system.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Brush className="w-5 h-5 text-red-600 mr-3" />
                    Excellent penetration and adhesion
                  </li>
                  <li className="flex items-center">
                    <Layers className="w-5 h-5 text-red-600 mr-3" />
                    Resists dampness and efflorescence
                  </li>
                  <li className="flex items-center">
                    <Aperture className="w-5 h-5 text-red-600 mr-3" />
                    Breathable film, Low VOC
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Improves coverage & finish of topcoats
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-red-600 mr-3" />
                    Compatible with Dallas waterproofing systems
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-indigo-800">
                  Package Contents:
                </h3>
                <p className="text-gray-700">
                  Available in 1L, 4L, 10L, and 20L packs.
                </p>
                <h3 className="text-xl font-bold mt-4 mb-2 text-indigo-800">
                  Simplified Application:
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>
                    Ensure surface is clean, dry, and free from loose particles.
                  </li>
                  <li>Stir contents well before use.</li>
                  <li>Apply one coat using brush, roller, or spray.</li>
                  <li>Allow to dry for 4-6 hours before applying topcoat.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Proof Section - NEW / ENHANCED */}
      <section id="dr-proof" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Dr. Proof - Advanced Waterproofing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Proof offers a range of scientifically formulated
              liquid-applied waterproof solutions, polymers, and protective
              coatings designed for robust and durable protection against water
              ingress, chemical attacks, and environmental degradation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/5691623/pexels-photo-5691623.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2" // Placeholder image for liquid waterproofing
                alt="Dr. Proof Waterproofing Application"
                className="w-full h-auto max-h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                Key Applications & Features:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Droplets className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2 text-center">
                    Liquid Membranes
                  </h4>
                  <p className="text-sm text-gray-600 text-center">
                    Seamless & elastomeric protection for roofs, basements, and
                    wet areas.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Shield className="w-10 h-10 text-red-500 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2 text-center">
                    Protective Coatings
                  </h4>
                  <p className="text-sm text-gray-600 text-center">
                    Resists chemical damage and UV degradation for long-lasting
                    defense.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Layers className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2 text-center">
                    Crack Bridging
                  </h4>
                  <p className="text-sm text-gray-600 text-center">
                    Flexible solutions that accommodate minor structural
                    movements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Settings className="w-10 h-10 text-gray-500 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2 text-center">
                    Easy Application
                  </h4>
                  <p className="text-sm text-gray-600 text-center">
                    Designed for efficient application by professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gypsum Plaster Section */}
      <section id="gypsum-plaster" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Dallas Gypsum Plaster</h2>
            <p className="text-xl text-gray-600">
              Professional-grade gypsum plaster solutions designed for superior
              finish and durability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">
                High-Quality Formulation
              </h3>
              <p className="text-gray-600">
                Premium gypsum blend for optimal performance
              </p>
            </div>
            <div className="animate-on-scroll bg-white p-6 rounded-xl shadow-lg text-center">
              <Settings className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Superior Adhesion</h3>
              <p className="text-gray-600">
                Excellent workability and surface bonding
              </p>
            </div>
            <div className="animate-on-scroll bg-white p-6 rounded-xl shadow-lg text-center">
              <Star className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Smooth Finish</h3>
              <p className="text-gray-600">
                Professional-grade surface finish capability
              </p>
            </div>
            <div className="animate-on-scroll bg-white p-6 rounded-xl shadow-lg text-center">
              <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">System Compatible</h3>
              <p className="text-gray-600">
                Works seamlessly with Dallas waterproofing systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Water Treater Section - NEW / ENHANCED */}
      <section id="water-treater" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Dallas Watertreater Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A specialized additive to modify water for construction material
              preparation, enhancing workability, bonding, and the overall
              effectiveness of Dallas dampproofing systems.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Core Benefits:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <Zap className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                  Improves hydration and workability of plasters & putties.
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  Enhances bonding strength with various substrates.
                </li>
                <li className="flex items-center text-gray-700">
                  <Droplets className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                  Optimizes water demand in mixes for better consistency.
                </li>
                <li className="flex items-center text-gray-700">
                  <Shield className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                  Integral part of the Dallas lifetime guaranteed dampproof
                  system.
                </li>
              </ul>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Usage:</h4>
                <p className="text-gray-600">
                  Added to clean water as per product guidelines (e.g., 2 litres
                  per 200-litre drum for plaster/putty mix) to create W-Treated
                  water for material preparation.
                </p>
                <p className="text-gray-600 mt-2">
                  Available in 10L and 20L containers.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/3214700/pexels-photo-3214700.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2" // Placeholder image for water/chemical additive
                alt="Dallas Watertreater Solution"
                className="w-full h-auto max-h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dallas Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Dallas Products?
            </h2>
            <p className="text-xl text-gray-600">
              Eight compelling reasons to choose Dallas for your construction
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyChooseReasons.map((reason, index) => (
              <div
                key={index}
                className="animate-on-scroll flex h-full items-start gap-4 bg-white border border-gray-300 rounded-xl p-5 shadow-md transition-transform hover:scale-[1.02]"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-2 text-red-700 rounded-full shadow-md flex-shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium leading-relaxed tracking-wide flex-1">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
