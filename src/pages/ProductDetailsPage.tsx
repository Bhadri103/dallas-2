import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Star,
  Brush,
  Phone,
  MessageSquare,
  ArrowLeft,
  Layers,
  BadgeCheck,
  CheckCircle,
  XCircle,
  MinusCircle,
  Download,
  Table, // Added for the comparison table section header
} from "lucide-react";
import { allProducts } from "../data/productsData"; // Ensure productsData is correctly imported

// Define contact number for WhatsApp and Call
const contactNumber = "+9199942 55808"; // Replace with your actual phone number
const whatsappLink = `https://wa.me/${contactNumber.replace(/\D/g, "")}`; // Removes non-digits for WhatsApp URL
const callLink = `tel:${contactNumber}`;

// Define interfaces for better type safety (optional but recommended)
interface Brochure {
  name: string;
  url: string;
  language: string; // Assuming you have a language property
}

interface TechDataRow {
  property: string;
  value: string;
  isCode: string;
}

interface FlexibleServiceOption {
  title: string;
  description: string;
  points: string[];
}

interface ComparisonTableRow {
  [key: string]: string; // Allows dynamic access like row["Properties"]
}

interface ComparisonTableData {
  headers: string[];
  rows: ComparisonTableRow[];
}

interface Product {
  id: string;
  name: string;
  category: string;
  productTagline?: string;
  tagline?: string;
  image: string;
  icon?: string;
  price?: string;
  originalPrice?: string;
  savings?: string;
  discount?: string;
  features?: string[];
  benefits?: string[];
  specialFeatures?: string[];
  packageContents?: string[];
  applicationSteps?: string[];
  warranty?: string;
  deliveryTime?: string;
  hasTechData?: boolean;
  techData?: TechDataRow[];
  flexibleServiceOptions?: FlexibleServiceOption[];
  nextGenFeatures?: string[];
  brochures?: Brochure[];
  description?: string; // Multi-line string for description
  comparisonTable?: ComparisonTableData; // For the comparison table
}

// Component for displaying technical data table
const TechnicalDataTable = ({ data }: { data: TechDataRow[] }) => (
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
  const selectedProduct = allProducts.find((p) => p.id === productId) as
    | Product
    | undefined; // Type assertion

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

  // Helper function to render the description as a list
  const renderDescription = () => {
    if (!selectedProduct.description) {
      return null;
    }

    // Split the description by double newline characters to get individual paragraphs/points.
    const descriptionPoints = selectedProduct.description
      .split("\n\n")
      .map((point) => point.trim()) // Trim whitespace from each point
      .filter((point) => point.length > 0); // Remove any empty points

    if (descriptionPoints.length === 0) {
      return null;
    }

    return (
      <div className="p-6 rounded-lg mb-6">
        <h4 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-700" />
          Product Overview
        </h4>
        <ul className="list-none text-gray-700 space-y-2">
          {descriptionPoints.map((point, idx) => (
            <li key={idx} className="flex items-start">
              {/* <BadgeCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> */}
              <p>{point}</p>
         </li>
          ))}
        </ul>
      </div>
    );
  };

  // Helper function to render the comparison table with icons
  const renderComparisonTable = () => {
    if (!selectedProduct.comparisonTable) {
      return null;
    }

    const { headers, rows } = selectedProduct.comparisonTable;

    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h4 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
          <Table className="w-5 h-5 mr-2 text-blue-700" />{" "}
          {/* Using Table icon */}
          Product Comparison
        </h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="py-3 px-4 text-left text-sm font-semibold text-gray-600 border-b border-gray-200"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {headers.map((headerKey, colIndex) => {
                    const value = row[headerKey];
                    let displayContent;
                    let textAlignClass = "text-left";
                    if (
                      headerKey === "MCG WATER TREATER" ||
                      headerKey === "NORMAL WATER"
                    ) {
                      textAlignClass = "text-center";
                      if (value === "Yes" || value.includes("Yes (")) {
                        // Handle "Yes (3X)"
                        displayContent = (
                          <CheckCircle
                            className="w-5 h-5 text-green-500 mx-auto"
                            title={value}
                          />
                        );
                      } else if (value === "No") {
                        displayContent = (
                          <XCircle
                            className="w-5 h-5 text-red-500 mx-auto"
                            title={value}
                          />
                        );
                      } else if (value === "-") {
                        displayContent = (
                          <MinusCircle
                            className="w-5 h-5 text-gray-400 mx-auto"
                            title="Not Applicable"
                          />
                        );
                      } else if (value === "High" || value.includes("High (")) {
                        // Handle "High (10-15%)", "High (20-30%)"
                        displayContent = (
                          <span className="text-green-600 font-medium">
                            {value}
                          </span>
                        );
                      } else if (value === "Low" || value.includes("Low (")) {
                        // Handle "Low"
                        displayContent = (
                          <span className="text-red-600 font-medium">
                            {value}
                          </span>
                        );
                      } else {
                        displayContent = value; // Default to text for "0 TDS", "500-1000 TDS" etc.
                      }
                    } else {
                      displayContent = value;
                    }

                    return (
                      <td
                        key={colIndex}
                        className={`py-3 px-4 text-sm text-gray-700 border-b border-gray-200 ${textAlignClass}`}
                      >
                        {displayContent}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
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
        {selectedProduct.category && (
          <div className="mb-4">
            <h1 className="text-3xl font-extrabold text-red-600 underline text-center mb-2 tracking-wide">
              {selectedProduct.category.toUpperCase()}{" "}
            </h1>
            <p className="text-xl text-gray-600 mt-2 text-center">
              {selectedProduct.tagline}
            </p>
          </div>
        )}
        {renderDescription()}
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row items-start lg:items-stretch gap-8">
          <div className="lg:w-2/5 flex flex-col items-start text-start">
            <div className="flex-grow flex flex-col justify-start items-start p-4">
              <h1 className="text-2xl sm:text-2xl font-extrabold text-start text-blue-800 mb-2">
                {selectedProduct.category.toUpperCase()}{" "}
              </h1>
              <h2 className="text-3xl sm:text-2xl font-bold text-start text-gray-800 mb-2">
                {selectedProduct.name}
              </h2>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/5  bg-white rounded-lg h-full flex flex-col">
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
                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                          href={callLink}
                          className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-semibold"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call Us
                        </a>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-semibold"
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
              {selectedProduct.nextGenFeatures?.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <BadgeCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

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

        {selectedProduct.hasTechData &&
          selectedProduct.techData && ( // Check if techData exists
            <div className="p-6 bg-white rounded-lg shadow-md">
              <TechnicalDataTable data={selectedProduct.techData} />
            </div>
          )}
        {selectedProduct.comparisonTable && renderComparisonTable()}
        {selectedProduct.brochures && selectedProduct.brochures.length > 0 && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h5 className="font-semibold text-xl mb-4 flex items-center">
              <Download className="w-5 h-5 mr-2 text-blue-700" />
              Download Product Brochure
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedProduct.brochures.map((brochure, idx) => (
                <a
                  key={idx}
                  href={brochure.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-center shadow-md text-sm"
                >
                  <Download className="w-3 h-3 mr-1 text-white" />{" "}
                  {brochure.language} Brochure
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
