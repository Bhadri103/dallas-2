// productsData.ts

// Correct Image Imports: Make sure to import images from src/assets/images
import Aafee from "../images/Aafee.png";
import Banner from "../images/Banner.jpeg";
import Ceramikha from "../images/Ceramikha.png";
import DallasGroutPlus from "../images/GroutPlus.png";
import DallasWallutty from "../images/DallasWallutty.png";
import DallasDrM1Bond from "../images/DallasDrM1Bond.jpeg";
import DallasGypsumPlasty from "../images/DallasGypsmPlasty.png";
import DallasReadyPlaster from "../images/DallasReadyPlasty.png";
import DallasSupremeGyplast from "../images/SupremeGplastSingle.png";
import DallasTileAdhensive from "../images/DallasTileAdhensive.png";
import SupremeGplast from "../images/SupremeGplastWhite.png";


// Define Flexible Service Options
const flexibleServiceOptions = [
  {
    title: "Option 1: Full Service (Material + Labour)",
    description: "We provide complete wall plastering solutions with our trained professionals, site supervisors, and qualified engineers, using Dallas Waterproof Wall-Plaster.",
    points: [
      "Charged per square foot",
      "Quick, clean, and reliable execution"
    ]
  },
  {
    title: "Option 2: Material Supply Only",
    description: "If you have your own team, you can purchase our Dallas Waterproof Wall-Plaster separately.",
    points: [
      "Available in 30kg and 50kg bags",
      "Factory-direct pricing"
    ]
  }
];

// Define common Next-Gen features for various products
const nextGenFeatures_GypsumPlaster = [
  "3X Waterproof & Weather-Resistant",
  "Supreme White, Smooth Finish",
  "Quick-Set – No Curing, No Cracks",
  "No Special Tools or Skilled Labour",
  "Saves Time & Labour Costs",
  "Factory Direct – No Middlemen",
  "Lifetime Warranty & Support",
  "Safe for Children & Families – Green Building Friendly",
  "Made with Imported Materials & Eco Binders",
  "Lightweight, Fire-Resistant & Lab-Tested"
];

const nextGenFeatures_TileAdhesive = [
  "Next-Gen Polymer-Enhanced Adhesive for Tiles",
  "Strong Grip with 3X Bonding Strength",
  "Suitable for Floor & Wall Tiles.",
  "Weatherproof, Crack-Resistant & Anti-Slip",
  "Ready to Use – Just Mix with Water",
  "No Shrinkage, No Hollow Sound",
  "Saves Time, Labour & Material Costs",
  "Ideal for Bathrooms, Kitchens, Exteriors & Interiors",
  "Strong Scientific backroud & Quality Testing"
];

const nextGenFeatures_WallPlaster = [
  "3X Waterproof & Weather-Proof",
  "Ready to Use – Just Add Water",
  "No Special Tools or Labour",
  "Saves Time & Costs",
  "Crack-Free, Shrink-Free Finish",
  "Factory Direct – No Middlemen",
  "Lifetime Warranty & Support",
  "Strong Scientific background",
  "Made with River Sand, Quartz & Clinker",
  "Reduces Heat & Fungal Growth"
];

const nextGenFeatures_SupremeGyplast = [
    "International Standard",
    "3X Waterproof & Weather-Proof",
    "No Special Tools or Labour",
    "Cuts Time & Costs",
    "Lifetime Warranty",
    "After-Sales Support",
    "Factory Direct – No Middlemen",
    "Strong Scientific Backroud",
    "Supreme White",
    "Uses Imported raw-materials , Modern Green Binders etc."
];

const nextGenFeatures_WallPutty = [
    "International Standard",
    "3X Waterproof & Weather-Proof",
    "No Special Tools or Labour",
    "Cuts Time & Costs",
    "Lifetime Warranty",
    "After-Sales Support",
    "Factory Direct – No Middlemen",
    "Strong Scientific Backroud",
    "Supreme White",
    "Uses Imported raw-material , white Clinker , Binders etc"
];


export const wallPlasterTechData = [
  { property: "Product Name", value: "Ready Plast (Waterproof Wall Plaster)", isCode: "" },
  { property: "Manufacturer", value: "Dallas WellCare Pvt Ltd.", isCode: "" },
  { property: "Product Code", value: "1001", isCode: "" },
  { property: "Appearance", value: "Smooth, off-grey paste", isCode: "" },
  { property: "Density", value: "1.6 g/cm³", isCode: "IS 12269:2013" },
  { property: "Thickness", value: "Minimum 12 mm", isCode: "" },
  { property: "Pot Life", value: "1-2 hours", isCode: "" },
  { property: "Setting Time", value: "24-48 hours", isCode: "" },
  { property: "Water Resistance", value: "> 95%", isCode: "IS 3085:1986" },
  { property: "Compressive Strength", value: "> 9.5 MPa (after 28 days)", isCode: "IS 4031:1988" },
  { property: "Tensile Strength", value: "> 2.5 MPa", isCode: "IS 5816:1999" },
  { property: "Thermal Conductivity", value: "0.1 - 0.2 W/m·K", isCode: "IS 3362:1985" },
  { property: "pH Level", value: "7 - 9", isCode: "" },
  { property: "Shelf Life", value: "12 months", isCode: "" },
  { property: "Fire Resistance", value: "Non-combustible (Class A)", isCode: "IS 3808:2009" },
  { property: "Coverage", value: "1.5 - 2.0 m² per kg (at 12 mm thickness)", isCode: "" },
  { property: "Drying Time", value: "6-8 hours (surface dry)", isCode: "" },
  { property: "Working Temperature", value: "5°C to 40°C", isCode: "" },
];

export const dallasProducts = [
  {
    id: "wall-plaster",
    name: "DALLAS Ready Plast",
    tagline: "India's 1st Premium Dampproof Plaster",
    image: DallasReadyPlaster,
    icon: "🏗️",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹520/bag",
    savings: "₹70 per bag",
    mainProducts: ["Ready Plast Waterproof Formula", "Self-curing Technology"],
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
      "Superior adhesion",
      "Weather resistant",
      "Crack-resistant formula",
    ],
    hasTechData: true,
    techData: wallPlasterTechData,
    warranty: "Lifetime Guarantee",
    deliveryTime: "2-3 days",
    flexibleServiceOptions: flexibleServiceOptions, // Added
    nextGenFeatures: nextGenFeatures_WallPlaster, // Added
  },
  {
    id: "wall-putty",
    name: "DALLAS Wall Putty",
    tagline: "Supreme White Dampproof Wallputty",
    image: DallasWallutty,
    icon: "🎨",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹640/bag",
    savings: "₹320 per bag",
    discount: "50% OFF",
    features: ["Supreme White Finish", "Dampproof Formula"],
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
    specialOffer: "Dallas offers its waterproof wall putty at a 50% discount off the Maximum Retail Price (MRP)",
    warranty: "5 Year Guarantee",
    deliveryTime: "1-2 days",
    hasTechData: false,
    flexibleServiceOptions: flexibleServiceOptions, // Added
    nextGenFeatures: nextGenFeatures_WallPutty, // Added
  },
  {
    id: "m1-bond",
    name: "Dr M1 Bond",
    tagline: "DampResist Wall Primer Solutions",
    image: DallasDrM1Bond,
    icon: "🖌️",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹220/L",
    savings: "₹40 per litre",
    features: ["Water-based Formula", "Excellent Penetration"],
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
    hasTechData: false,
    flexibleServiceOptions: flexibleServiceOptions, // Added
  },
  {
    id: "gypsum-plaster",
    name: "DALLAS Gypsum Plaster",
    tagline: "Professional Grade Gypsum Solutions",
    image: DallasGypsumPlasty,
    icon: "🔧",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹450/bag",
    savings: "₹70 per bag",
    features: ["High-quality Gypsum", "Superior Adhesion"],
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
    hasTechData: false,
    flexibleServiceOptions: flexibleServiceOptions, // Added
    nextGenFeatures: nextGenFeatures_GypsumPlaster, // Added
  },
  {
    id: "supreme-gyplast",
    name: "DALLAS Supreme Gyplast",
    tagline: "Premium Gypsum Plaster Solution",
    image: SupremeGplast,
    icon: "⭐",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹490/bag",
    savings: "₹70 per bag",
    features: ["Premium Gypsum Formula", "Superior Finish Quality"],
    benefits: [
      "Excellent finish",
      "Time saving",
      "Cost effective",
      "Easy application",
      "Durable results",
      "Professional quality",
    ],
    packageContents: [
      "Supreme Gypsum Plaster (25 KG bag)",
      "Premium mixing guide",
      "Quality certificate",
    ],
    warranty: "3 Year Guarantee",
    deliveryTime: "2-3 days",
    hasTechData: false,
    flexibleServiceOptions: flexibleServiceOptions, // Added
    nextGenFeatures: nextGenFeatures_SupremeGyplast, // Added
  },
  {
    id: "wall-putty", // This ID is duplicated, but the product name is "DALLAS Supreme Gyplast".
                  // Assuming this is a different product but shares an ID, or a typo.
                  // If it's a distinct product, consider giving it a unique ID like "supreme-gyplast-white".
    name: "DALLAS Supreme Gyplast", // Changed to match "Ultra-White Gypsum Plaster Solution" provided
    tagline: "Ultra-White Gypsum Plaster Solution",
    image: DallasSupremeGyplast,
    icon: "✨",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹420/bag",
    savings: "₹70 per bag",
    features: ["Ultra-White Finish", "Smooth Application"],
    benefits: [
      "Brilliant white finish",
      "Enhances paint aesthetics",
      "Easy to apply",
      "Durable and strong",
      "Reduces paint consumption",
    ],
    packageContents: [
      "Supreme Gypsum Plaster White (25 KG bag)",
      "Application guide",
    ],
    warranty: "3 Year Guarantee",
    deliveryTime: "2-3 days",
    hasTechData: false,
    flexibleServiceOptions: flexibleServiceOptions, // Added
    nextGenFeatures: nextGenFeatures_SupremeGyplast, // Assuming similar to other Supreme Gyplast
  },
  {
    id: "grout-plus",
    name: "DALLAS Grout Plus",
    tagline: "Advanced Tile Grouting Solution",
    image: DallasGroutPlus,
    icon: "🔲",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹350/bag",
    savings: "₹70 per bag",
    features: ["Waterproof Grout Formula", "Stain Resistant"],
    benefits: [
      "Long-lasting color",
      "Easy maintenance",
      "Professional finish",
      "Water resistance",
      "Durability",
      "Versatile application",
    ],
    packageContents: [
      "Waterproof Grout (25 KG bag)",
      "Color consistency guide",
      "Application tools",
    ],
    warranty: "5 Year Guarantee",
    deliveryTime: "1-2 days",
    hasTechData: false,
    flexibleServiceOptions: flexibleServiceOptions, // Added
  },
  {
    id: "tile-adhesive",
    name: "DALLAS Tile Adhesive",
    tagline: "Superior Bonding Solutions",
    image: DallasTileAdhensive,
    icon: "🔧",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹480/bag",
    savings: "₹60 per bag",
    features: ["High Bond Strength", "Water Resistant"],
    benefits: [
      "Superior adhesion",
      "Crack resistance",
      "Weather proof",
      "Easy application",
      "Cost effective",
      "Professional grade",
    ],
    packageContents: [
      "Tile Adhesive (25 KG bag)",
      "Mixing ratio guide",
      "Application notched trowel",
    ],
    warranty: "3 Year Guarantee",
    deliveryTime: "2-3 days",
    hasTechData: false,
    flexibleServiceOptions: flexibleServiceOptions, // Added
    nextGenFeatures: nextGenFeatures_TileAdhesive, // Added
  },
  {
    id: "water-treater",
    name: "DALLAS Watertreater",
    tagline: "Water Treatment Solutions",
    image: Aafee,
    icon: "🌊",
    price: "For bulk order discount upto 40 %",
    features: ["Water Modification System", "Enhanced Workability"],
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
    hasTechData: false,
    flexibleServiceOptions: flexibleServiceOptions, // Added
  },
];

export const drProofProducts = [
  {
    id: "dr-proof-m1-bond",
    name: "Dr. M1 Bond",
    tagline: "Advanced Waterproofing Solutions",
    image: DallasDrM1Bond,
    icon: "💧",
    price: "For bulk order discount upto 40 %",
    features: ["Liquid Membranes", "Protective Coatings"],
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
      "Crack Bridging Technology",
      "Chemical Resistance",
      "UV Stable Formula",
    ],
    packageContents: [
      "Liquid Membrane System",
      "Professional application kit",
      "Technical consultation",
      "Installation guide",
    ],
    warranty: "10 Year Guarantee",
    deliveryTime: "3-5 days",
    hasTechData: false,
    flexibleServiceOptions: flexibleServiceOptions, // Added
  },
];

export const ceramikhaProducts = [
  {
    id: "ceramikha-gypsum-plaster",
    name: "Ceramikha Gypsum Plaster",
    tagline: "Advanced Ceramic Solutions",
    image: Ceramikha,
    icon: "🏺",
    price: "For bulk order discount upto 40 %",
    features: ["Ceramic Technology", "High Durability"],
    benefits: [
      "Premium quality",
      "Low maintenance",
      "Aesthetic value",
      "Durability",
      "Weather resistance",
      "Cost effective",
    ],
    specialFeatures: [
      "Advanced ceramic formulation",
      "Superior aesthetic appeal",
      "Long-lasting performance",
      "Weather resistant coating",
    ],
    packageContents: [
      "Ceramic coating system",
      "Application kit",
      "Color guide",
      "Maintenance instructions",
    ],
    warranty: "5 Year Guarantee",
    deliveryTime: "3-5 days",
    hasTechData: false,
    flexibleServiceOptions: flexibleServiceOptions, // Added
  },
];

export const allProducts = [
  ...dallasProducts,
  ...drProofProducts,
  ...ceramikhaProducts,
];

// Hero slider data for the main products page
export const heroSlides = [
  {
    image: Banner, // Use the imported Banner variable
    title: "Lifetime Guaranteed Protection",
    subtitle: "Advanced Engineering Meets Quality",
  },
  {
    image: Banner, // Use the imported Banner variable
    title: "Factory Direct Pricing",
    subtitle: "Superior Performance, Unmatched Value",
  },
  {
    image: Banner, // Use the imported Banner variable
    title: "Trusted by 10,000+ Customers",
    subtitle: "Quality Construction Solutions Since 2015",
  },
];

// Data for brand categories on the main products page
export const brandCategories = [
  {
    id: "dallas",
    name: "Dallas",
    tagline: "Premium Construction Solutions",
    image: Banner,
    description: "India's leading waterproof construction materials",
  },
  {
    id: "Ceramikha",
    name: "Ceramikha",
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