import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowDown, Sparkles, Zap, Shield, Award, Lock } from 'lucide-react';

const slides = [
  {
    id: 1,
    backgroundImage: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    title: "India's First Next-Gen",
    highlightWords: ["Damp Proof", "Wall Care Product"],
    subtitle: "Recognized as India's only manufacturer of next-generation buildings that meet international standards, we're setting new benchmarks in construction excellence.",
    gradient: "from-black/80 via-purple-900/60 to-black/70",
    accentColor: "text-yellow-400",
    icon: Award,
    primaryBtn: "Explore Products",
    secondaryBtn: "Contact Us"
  },
  {
    id: 2,
    backgroundImage: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg",
    title: "Scientifically Engineered,",
    highlightWords: ["Not Just", "Endorsed"],
    subtitle: "DALLAS, our international waterproof building product, is set apart not just by endorsements from doctors or engineers—it's a scientifically crafted solution made by scientists.",
    gradient: "from-black/80 via-blue-900/60 to-black/70",
    accentColor: "text-cyan-400",
    icon: Sparkles,
    primaryBtn: "Our Science",
    secondaryBtn: "Learn More"
  },
  {
    id: 3,
    backgroundImage: "https://images.pexels.com/photos/3862154/pexels-photo-3862154.jpeg",
    title: "Over 15,000 Projects",
    highlightWords: ["Across", "South India"],
    subtitle: "From Thiruvananthapuram to Kannur in Kerala, and throughout Karnataka and Tamil Nadu, we've successfully completed thousands of projects with lifetime guarantees.",
    gradient: "from-black/80 via-green-900/60 to-black/70",
    accentColor: "text-emerald-400",
    icon: Shield,
    primaryBtn: "Our Projects",
    secondaryBtn: "Get Quote"
  }
];

// Rest of the component code remains the same...