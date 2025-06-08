// src/pages/ProductDetailsPage.tsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Shield,
  Award,
  Droplets,
  Zap,
  Leaf,
  Settings,
  Star,
  Brush,
  Package,
  IndianRupee,
  Phone,
  MessageSquare,
  ArrowLeft,
  Truck,
  HeartHandshake,
  Lightbulb,
  Layers,
  BadgeCheck,
  CheckCircle,
  Download, // Ensure Download icon is imported
} from "lucide-react";
import { allProducts } from "../data/productsData"; // Ensure productsData is correctly imported

// Define contact number for WhatsApp and Call
const contactNumber = "+9199942 55808"; // Replace with your actual phone number
const whatsappLink = `https://wa.me/${contactNumber.replace(/\D/g, "")}`; // Removes non-digits for WhatsApp URL
const callLink = `tel:${contactNumber}`;

// Component for displaying technical data table
const TechnicalDataTable = ({ data }: { data: any[] }) => (
  <div className="overflow-x-auto">
    <div className="mb-4 flex items-center justify-between">
      <h6 className="font-semibold text-gray-800">Technical Specifications</h6>
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

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find the selected product based on the productId from the URL
  const selectedProduct = allProducts.find((p) => p.id === productId);

  // Scroll to the top of the page when productId changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [productId]);

  // If no product is found, display a "Product Not Found" message
  if (!selectedProduct) {
    return (
      <div className="text-center py-20 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          Product Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          The product you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products List
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate("/products")}
        className="inline-flex items-center text-red-600 hover:text-red-800 mb-8 font-semibold"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Products
      </button>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 mb-8">
        {/* Product name moved to the top, above the image section, and now left-aligned and responsive font size */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-left mb-6">
          {selectedProduct.name}
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
          <div className="md:w-1/3 h-full flex items-center justify-center">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <div className="md:w-2/3 p-6 bg-white rounded-lg h-full flex flex-col">
            {/* Product name as a title below the image on the right content area, with responsive font size */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              {selectedProduct.name}
            </h3>
            {/* Tagline remains below the new heading */}
            <p className="text-xl text-gray-600 mb-6">
              {selectedProduct.tagline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {selectedProduct.price && (
                <div className="flex items-center text-lg font-bold text-red-600">
                  {selectedProduct.price}
                </div>
              )}

              {selectedProduct.discount && <div></div>}
            </div>

            {selectedProduct.flexibleServiceOptions && (
              <>
                <h5 className="font-semibold text-xl mb-4 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-indigo-700" />
                  Flexible Service Options to Suit Your Needs
                </h5>
                <div className="space-y-6 flex-grow">
                  {selectedProduct.flexibleServiceOptions.map((option, idx) => (
                    <div key={idx} className="border-b pb-4 last:border-b-0">
                      <h6 className="font-semibold text-lg text-gray-800 mb-2">
                        {option.title}
                      </h6>
                      <p className="text-gray-700 mb-2">{option.description}</p>
                      <ul className="list-none text-gray-700 space-y-1 mb-4">
                        {option.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-600 text-sm font-medium mb-4">
                        For enquiries or orders, feel free to get in touch.
                      </p>
                      <div className="flex space-x-4">
                        <a
                          href={callLink}
                          className="flex items-center px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-semibold"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call Us
                        </a>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-semibold"
                        >
                          <MessageSquare className="w-5 h-5 mr-2" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {selectedProduct.benefits && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-700" />
              Key Features
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {selectedProduct.nextGenFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <BadgeCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* {selectedProduct.features && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {selectedProduct.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )} */}

        {selectedProduct.applicationSteps && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h5 className="font-semibold text-xl mb-4 flex items-center">
              <Brush className="w-5 h-5 mr-2 text-green-700" />
              Application Steps
            </h5>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {selectedProduct.applicationSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {selectedProduct.specialFeatures && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h5 className="font-semibold text-xl mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-700" />
              Special Features
            </h5>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {selectedProduct.specialFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {selectedProduct.specialOffer && (
          <div className="p-6 bg-red-100 rounded-lg text-red-800 font-medium text-lg flex items-center shadow-md">
            {selectedProduct.specialOffer}
          </div>
        )}

        {/* Section for Download Brochures */}
        {/* This section will only render if selectedProduct.brochures exists and has at least one item */}
        {selectedProduct.brochures && selectedProduct.brochures.length > 0 && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h5 className="font-semibold text-xl mb-4 flex items-center">
              <Download className="w-5 h-5 mr-2 text-blue-700" />
              Download Product Brochure
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedProduct.brochures.map((brochure, idx) => (
                <a
                  key={idx}
                  href={brochure.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  // --- UPDATED CLASS NAMES FOR SMALLER BUTTONS AND FULL WIDTH ---
                  className="flex items-center justify-center w-full px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-center shadow-md text-sm"
                >
                  <Download className="w-4 h-4 mr-1 text-white" />{" "}
                  {/* Smaller icon */}
                  {brochure.language} Brochure
                </a>
              ))}
            </div>
          </div>
        )}

        {selectedProduct.hasTechData && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <TechnicalDataTable data={selectedProduct.techData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;