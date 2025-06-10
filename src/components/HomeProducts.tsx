import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Aafee = "./images/Aafee.png";
const Banner = "./images/Banner.jpeg";
const Ceramikha = "./images/Ceramikha.png";
const DallasGroutPlus = "./images/GroutPlus.png";
const DallasWallutty = "./images/DallasWallutty.png";
const DallasDrM1Bond = "./images/DallasDrM1Bond.jpeg";
const DallasGypsumPlasty = "./images/DallasGypsmPlasty.png";
const DallasReadyPlaster = "./images/DallasReadyPlasty.png";
const DallasSupremeGyplast = "./images/SupremeGplastSingle.png";
const DallasTileAdhensive = "./images/DallasTileAdhensive.png";
const SupremeGplastWhite = "./images/SupremeGplastWhite.png";

const ProductsPage = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  // Brand Categories (no changes as per request)
  const brandCategories = [
    {
      id: "dallas",
      name: "Dallas",
      tagline: "Premium Construction Solutions",
      image: Banner,
      description: "India's leading waterproof construction materials",
    },
    {
      id: "ceramica",
      name: "Ceramica",
      tagline: "Advanced Ceramic Solutions",
      image: Ceramikha,
      description: "High-quality ceramic and finishing products",
    },
    {
      id: "drproof",
      name: "Dr. Proof",
      tagline: "Waterproofing Specialists",
      image: DallasDrM1Bond,
      description: "Professional waterproofing solutions",
    },
  ];
  const dallasProducts = [
      {
      id: "wall-plaster", // Consistent ID, assuming this is "Ready Plaster"
      name: "Wall-Plaster",
      image: DallasReadyPlaster,
      price: "₹450/bag",
    },
    {
      id: "wall-putty",  
      name: "Wall-Putty",
      image: SupremeGplastWhite,
      price: "₹350/bag",
    },
    {
      id: "gypsum-plaster",
      name: " Gypsum-Plaster",
      image: DallasGypsumPlasty,
      price: "₹380/bag",
    },
    {
    id: "tile-adhesive",
      name: " Tile-Adhesive",
      image: DallasTileAdhensive,
      price: "₹350/bag",
    },
    {
    id: "grout-plus",
      name: " Grout-Plus",
      image: DallasGroutPlus,
      price: "₹280/bag",
    },
  
  ];

  // Ceramica Products - Added click handler
  const ceramicaProducts = [
    {
      id: "ceramica-gypsum-plaster",
      name: "Ceramikha",
      image: Ceramikha,
      price: "₹420/bag",
    },
  ];

  // DrProof Products - Added click handler
  const drProofProducts = [
    {
      id: "m1-bond",
      name: "Dr. M1 Bond",
      image: DallasDrM1Bond,
      price: "₹580/bag",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-600">Product Brands</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quality over quantity - High-performance construction materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {brandCategories.map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-48 object-contain"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
                      <p className="text-sm">{brand.tagline}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-600">Dallas</span> Products
              </h3>
              <p className="text-gray-600">
                Premium waterproof construction solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dallasProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white pt-3 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col" // Added flex flex-col for button positioning
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between"> {/* Added flex-grow and justify-between */}
                    <h4 className="font-semibold text-center text-gray-800 text-lg mb-4">
                      {product.name}
                    </h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card's onClick from firing
                        navigate(`/products/${product.id}`);
                      }}
                      className="mt-auto inline-flex items-center justify-center bg-red-600 text-white text-md font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 self-center" // Centered button
                    >
                      Know More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-600">Ceramica</span> Products
              </h3>
              <p className="text-gray-600">
                Advanced ceramic and finishing solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ceramicaProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <h4 className="font-semibold text-center text-gray-800 text-lg mb-4">
                      {product.name}
                    </h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.id}`);
                      }}
                      className="mt-auto inline-flex items-center justify-center bg-red-600 text-white text-md font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 self-center"
                    >
                      Know More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-600">Dr. Proof</span> Products
              </h3>
              <p className="text-gray-600">
                Professional waterproofing specialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {drProofProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-5 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <h4 className="font-semibold text-center text-gray-800 text-lg mb-4">
                      {product.name}
                    </h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.id}`);
                      }}
                      className="mt-auto inline-flex items-center justify-center bg-red-600 text-white text-md font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 self-center"
                    >
                      Know More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center justify-center bg-red-600 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Explore All Products
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;