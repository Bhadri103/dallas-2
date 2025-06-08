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

// Generic next-gen features for products where specific ones aren't defined
const nextGenFeatures_Generic = [
  "High Performance Formulation",
  "Eco-Friendly Composition",
  "Long-Lasting Durability",
  "Easy Application Process",
  "Cost-Effective Solution",
  "Quality Assured"
];

// Next-Gen features specific to waterproofing/primer
const nextGenFeatures_PrimerWaterproofing = [
  "Advanced Polymer Technology",
  "Excellent Penetration & Sealing",
  "Prevents Dampness & Efflorescence",
  "Enhances Adhesion of Topcoats",
  "Breathable & Flexible Film",
  "UV Resistant for Exterior Use"
];

// Next-Gen features specific to grouting
const nextGenFeatures_Grout = [
  "Waterproof & Stain Resistant Formula",
  "Durable & Long-Lasting Color",
  "Resistant to Mildew & Fungal Growth",
  "Easy to Clean & Maintain",
  "High Compressive Strength",
  "Flexible & Crack-Resistant"
];

// Next-Gen features specific to water treatment
const nextGenFeatures_WaterTreater = [
  "Optimizes Water Quality for Construction",
  "Improves Workability of Mixes",
  "Reduces Water Consumption",
  "Enhances Bonding Strength",
  "Prevents Efflorescence & Leaching",
  "Eco-Friendly & Non-Toxic"
];

// Next-Gen features specific to ceramic solutions
const nextGenFeatures_Ceramic = [
  "High-Performance Ceramic Binders",
  "Exceptional Hardness & Durability",
  "Superior Aesthetic Finish",
  "Scratch & Abrasion Resistant",
  "Easy to Apply & Polish",
  "Weatherproof for All Climates"
];


// Default brochure data to apply to products
const defaultBrochures = [
  { language: "English", url: "/brochures/default_english.pdf" },
  { language: "Malayalam", url: "/brochures/default_malayalam.pdf" },
  { language: "Telugu", url: "/brochures/default_telugu.pdf" },
  { language: "Kannada", url: "/brochures/default_kannada.pdf" },
];


export const wallPlasterTechData = [
  { property: "Product Name", value: "Ready Plaster (Waterproof Wall Plaster)", isCode: "" },
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
    name: "DALLAS Ready Plaster",
    tagline: "Next-Gen Wallcare. Global Quality.",
    image: DallasReadyPlaster,
    icon: "🏗️",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹520/bag",
    savings: "₹70 per bag",
    mainProducts: ["Ready Plast Waterproof Formula", "Self-curing Technology"],
    features: ["Ready Plast Waterproof Formula", "Self-curing Technology", "3X Waterproof & Weather-Proof"], // Added features
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
    flexibleServiceOptions: flexibleServiceOptions,
    nextGenFeatures: nextGenFeatures_WallPlaster,
    brochures: defaultBrochures,
  },
  {
    id: "wall-putty",
    name: "DALLAS Wall Putty",
 tagline: "Next-Gen Wallcare. Global Quality.",
    image: DallasWallutty,
    icon: "🎨",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹640/bag",
    savings: "₹320 per bag",
    discount: "50% OFF",
    features: ["Supreme White Finish", "Dampproof Formula", "Smooth Texture"],
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
    techData: [], // Explicitly set as empty array if no tech data
    flexibleServiceOptions: flexibleServiceOptions,
    nextGenFeatures: nextGenFeatures_WallPutty,
    brochures: defaultBrochures,
  },
  {
    id: "m1-bond",
    name: "Dr M1 Bond",
  tagline: "Next-Gen Wallcare. Global Quality.",
    image: DallasDrM1Bond,
    icon: "🖌️",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹220/L",
    savings: "₹40 per litre",
    features: ["Water-based Formula", "Excellent Penetration", "Damp-proof Primer"],
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
    applicationSteps: [ // Added placeholder
      "Clean the surface thoroughly.",
      "Dilute the primer as per instructions (if needed).",
      "Apply 1-2 coats evenly with a brush or roller.",
      "Allow sufficient drying time between coats.",
      "Ensure proper ventilation during application."
    ],
    specialFeatures: [ // Added placeholder
      "Deep penetrating formula",
      "Excellent alkali resistance",
      "Reduces paint consumption",
      "Fungal and algal resistant"
    ],
    warranty: "3 Year Guarantee",
    deliveryTime: "Same day",
    hasTechData: false,
    techData: [], // Explicitly set as empty array if no tech data
    flexibleServiceOptions: flexibleServiceOptions,
    nextGenFeatures: nextGenFeatures_PrimerWaterproofing, // Used specific next-gen features
    brochures: defaultBrochures,
  },
  {
    id: "gypsum-plaster",
    name: "DALLAS Gypsum Plaster",
 tagline: "Next-Gen Wallcare. Global Quality.",
    image: DallasGypsumPlasty,
    icon: "🔧",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹450/bag",
    savings: "₹70 per bag",
    features: ["High-quality Gypsum", "Superior Adhesion", "Smooth Finish"],
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
    applicationSteps: [ // Added placeholder
      "Ensure surface is clean and free from loose particles.",
      "Mix plaster with recommended water ratio to form a smooth paste.",
      "Apply evenly using a trowel.",
      "Finish to desired smoothness.",
      "Allow to dry completely (no curing required)."
    ],
    specialFeatures: [ // Added placeholder
      "Lightweight formulation",
      "Crack-resistant",
      "Fire-resistant properties",
      "Sound insulation benefits"
    ],
    warranty: "2 Year Guarantee",
    deliveryTime: "2-3 days",
    hasTechData: false,
    techData: [], // Explicitly set as empty array if no tech data
    flexibleServiceOptions: flexibleServiceOptions,
    nextGenFeatures: nextGenFeatures_GypsumPlaster,
    brochures: defaultBrochures,
  },
  // {
  //   id: "supreme-gyplast",
  //   name: "DALLAS Supreme Gyplast",
  //   tagline: "Premium Gypsum Plaster Solution",
  //   image: SupremeGplast,
  //   icon: "⭐",
  //   price: "For bulk order discount upto 40 %",
  //   originalPrice: "₹490/bag",
  //   savings: "₹70 per bag",
  //   features: ["Premium Gypsum Formula", "Superior Finish Quality", "Quick Application"],
  //   benefits: [
  //     "Excellent finish",
  //     "Time saving",
  //     "Cost effective",
  //     "Easy application",
  //     "Durable results",
  //     "Professional quality",
  //   ],
  //   packageContents: [
  //     "Supreme Gypsum Plaster (25 KG bag)",
  //     "Premium mixing guide",
  //     "Quality certificate",
  //   ],
  //   applicationSteps: [
  //     "Ensure surface is clean and free from loose particles.",
  //     "Mix plaster with recommended water ratio to form a smooth paste.",
  //     "Apply evenly using a trowel.",
  //     "Finish to desired smoothness.",
  //     "Allow to dry completely (no curing required)."
  //   ],
  //   specialFeatures: [
  //     "International Standard quality",
  //     "3X Waterproof & Weather-Proof",
  //     "No special tools or skilled labor required",
  //     "Saves time and labor costs"
  //   ],
  //   warranty: "3 Year Guarantee",
  //   deliveryTime: "2-3 days",
  //   hasTechData: false,
  //   techData: [],
  //   flexibleServiceOptions: flexibleServiceOptions,
  //   nextGenFeatures: nextGenFeatures_SupremeGyplast,
  //   brochures: defaultBrochures,
  // },
  // {
  //   id: "supreme-gyplast-white",
  //   name: "DALLAS Supreme Gyplast (White)",
  //   tagline: "Ultra-White Gypsum Plaster Solution",
  //   image: DallasSupremeGyplast,
  //   icon: "✨",
  //   price: "For bulk order discount upto 40 %",
  //   originalPrice: "₹420/bag",
  //   savings: "₹70 per bag",
  //   features: ["Ultra-White Finish", "Smooth Application", "High Coverage"],
  //   benefits: [
  //     "Brilliant white finish",
  //     "Enhances paint aesthetics",
  //     "Easy to apply",
  //     "Durable and strong",
  //     "Reduces paint consumption",
  //   ],
  //   packageContents: [
  //     "Supreme Gypsum Plaster White (25 KG bag)",
  //     "Application guide",
  //   ],
  //   applicationSteps: [
  //     "Prepare surface: clean, dry, and free of dust.",
  //     "Mix with water to a lump-free consistency.",
  //     "Apply first coat evenly.",
  //     "Allow to dry before applying second coat.",
  //     "Achieve desired smooth finish."
  //   ],
  //   specialFeatures: [
  //     "Superior whiteness for brighter interiors",
  //     "Excellent crack resistance",
  //     "Reduces need for extra paint coats",
  //     "Provides a perfect base for all types of paints"
  //   ],
  //   warranty: "3 Year Guarantee",
  //   deliveryTime: "2-3 days",
  //   hasTechData: false,
  //   techData: [],
  //   flexibleServiceOptions: flexibleServiceOptions,
  //   nextGenFeatures: nextGenFeatures_SupremeGyplast, // Assuming similar to other Supreme Gyplast
  //   brochures: defaultBrochures,
  // },
  {
    id: "grout-plus",
    name: "DALLAS Grout Plus",
 tagline: "Next-Gen Wallcare. Global Quality.",
    image: DallasGroutPlus,
    icon: "🔲",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹350/bag",
    savings: "₹70 per bag",
    features: ["Waterproof Grout Formula", "Stain Resistant", "Color Consistency"],
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
    applicationSteps: [ // Added placeholder
      "Ensure tile joints are clean and dry.",
      "Mix grout powder with water to a smooth, workable paste.",
      "Apply grout into joints using a rubber float.",
      "Remove excess grout with a damp sponge.",
      "Allow to cure as per instructions before foot traffic."
    ],
    specialFeatures: [ // Added placeholder
      "Anti-fungal and anti-bacterial properties",
      "Shrinkage-compensated formula",
      "Wide range of color options",
      "Suitable for interior and exterior use"
    ],
    warranty: "5 Year Guarantee",
    deliveryTime: "1-2 days",
    hasTechData: false,
    techData: [], // Explicitly set as empty array if no tech data
    flexibleServiceOptions: flexibleServiceOptions,
    nextGenFeatures: nextGenFeatures_Grout, // Used specific next-gen features
    brochures: defaultBrochures,
  },
  {
    id: "tile-adhesive",
    name: "DALLAS Tile Adhesive",
 tagline: "Next-Gen Wallcare. Global Quality.",
    image: DallasTileAdhensive,
    icon: "🔧",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹480/bag",
    savings: "₹60 per bag",
    features: ["High Bond Strength", "Water Resistant", "Anti-Slip Formula"],
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
    applicationSteps: [
      "Prepare surface: clean, level, and dry.",
      "Mix adhesive powder with water to a consistent paste.",
      "Apply adhesive using a notched trowel.",
      "Press tiles firmly into the adhesive.",
      "Allow to set before grouting."
    ],
    specialFeatures: [
      "Suitable for various tile types (ceramic, porcelain, vitrified)",
      "Ideal for both floor and wall applications",
      "Long open time for easier adjustments",
      "High shear strength for secure bonding"
    ],
    warranty: "3 Year Guarantee",
    deliveryTime: "2-3 days",
    hasTechData: false,
    techData: [],
    flexibleServiceOptions: flexibleServiceOptions,
    nextGenFeatures: nextGenFeatures_TileAdhesive,
    brochures: defaultBrochures,
  },
  {
    id: "water-treater",
    name: "DALLAS Watertreater",
 tagline: "Next-Gen Wallcare. Global Quality.",
    image: Aafee,
    icon: "🌊",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹850/10L", // Added placeholder
    savings: "₹150/10L", // Added placeholder
    discount: "Custom discounts available", // Added placeholder
    features: ["Water Modification System", "Enhanced Workability", "Improved Mix Quality"],
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
    applicationSteps: [ // Added placeholder
      "Dilute Watertreater with water as per specific product instructions.",
      "Use the treated water for mixing with Dallas products (e.g., plaster, putty, grout).",
      "Ensure consistent mixing ratios for optimal results.",
      "Store unused Watertreater in a cool, dry place.",
      "Follow safety guidelines during handling."
    ],
    specialFeatures: [ // Added placeholder
      "Optimizes hydration of cementitious materials",
      "Reduces efflorescence",
      "Enhances durability of finished surface",
      "Non-toxic and environmentally safe"
    ],
    warranty: "1 Year Quality Guarantee",
    deliveryTime: "Same day",
    hasTechData: false,
    techData: [], // Explicitly set as empty array if no tech data
    flexibleServiceOptions: flexibleServiceOptions,
    nextGenFeatures: nextGenFeatures_WaterTreater, // Used specific next-gen features
    brochures: defaultBrochures,
  },
];

export const drProofProducts = [
  {
    id: "dr-proof-m1-bond",
    name: "Dr. M1 Bond",
 tagline: "Next-Gen Wallcare. Global Quality.",
    image: DallasDrM1Bond,
    icon: "💧",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹250/L", // Added placeholder
    savings: "₹50 per litre", // Added placeholder
    discount: "Bulk Order Benefits", // Added placeholder
    features: ["Liquid Membranes", "Protective Coatings", "Crack Bridging"],
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
    applicationSteps: [ // Added placeholder
      "Clean and prepare the surface, ensuring it's dry and free of contaminants.",
      "Apply the first coat of Dr. M1 Bond evenly with a brush or roller.",
      "Allow to dry as per instructions, then apply a second coat if required.",
      "Ensure proper ventilation during application.",
      "Conduct a water ponding test for final verification (if applicable)."
    ],
    warranty: "10 Year Guarantee",
    deliveryTime: "3-5 days",
    hasTechData: false,
    techData: [], // Explicitly set as empty array if no tech data
    flexibleServiceOptions: flexibleServiceOptions,
    nextGenFeatures: nextGenFeatures_PrimerWaterproofing, // Used specific next-gen features
    brochures: defaultBrochures,
  },
];

export const ceramikhaProducts = [
  {
    id: "ceramikha-gypsum-plaster",
    name: "Ceramikha Gypsum Plaster",
 tagline: "Next-Gen Wallcare. Global Quality.",
    image: Ceramikha,
    icon: "🏺",
    price: "For bulk order discount upto 40 %",
    originalPrice: "₹550/bag", // Added placeholder
    savings: "₹80 per bag", // Added placeholder
    discount: "Custom Discounts", // Added placeholder
    features: ["Ceramic Technology", "High Durability", "Smooth Finish"],
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
    applicationSteps: [ // Added placeholder
      "Prepare surface by cleaning and leveling.",
      "Mix Ceramikha Gypsum Plaster with water to a consistent paste.",
      "Apply uniformly using appropriate tools.",
      "Ensure proper drying and finishing for optimal results.",
      "Follow product specific guidelines for best performance."
    ],
    warranty: "5 Year Guarantee",
    deliveryTime: "3-5 days",
    hasTechData: false,
    techData: [], // Explicitly set as empty array if no tech data
    flexibleServiceOptions: flexibleServiceOptions,
    nextGenFeatures: nextGenFeatures_Ceramic, // Used specific next-gen features
    brochures: defaultBrochures,
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
 tagline: "Next-Gen Wallcare. Global Quality.",
    image: Banner,
    description: "India's leading waterproof construction materials",
  },
  {
    id: "Ceramikha",
    name: "Ceramikha",
 tagline: "Next-Gen Wallcare. Global Quality.",
    image: Ceramikha,
    description: "High-quality ceramic and finishing products",
  },
  {
    id: "drproof",
    name: "Dr. Proof",
 tagline: "Next-Gen Wallcare. Global Quality.",
    image: DallasDrM1Bond,
    description: "Professional waterproofing solutions",
  },
];