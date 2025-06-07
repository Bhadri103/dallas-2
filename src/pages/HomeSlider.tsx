import React from "react";
import Slider from "../components/Slider";
import AnimatedSection from "../components/AnimatedSection";
import { ArrowRight, Shield, Star, Users } from "lucide-react";
import HomeProducts from "../components/HomeProducts";
const homeSlides = [
  {
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    title: "India's 1st Next-Gen Damp Proof Wall Care Products",
    description:
      "Revolutionizing construction with innovative waterproof solutions",
  },
  {
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    title: "Scientific Excellence",
    description: "Backed by advanced research and cutting-edge technology",
  },
  {
    image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg",
    title: "Trusted by Thousands",
    description: "Over 15,000 successful projects across South India",
  },
];

const features = [
  {
    icon: Shield,
    title: "Scientifically Engineered",
    description:
      "Lifetime guaranteed products developed through advanced research",
  },
  {
    icon: Star,
    title: "Superior Technology",
    description:
      "Effective protection against dampness, mold, and chemical damage",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description:
      "Direct factory-to-customer pricing with personalized solutions",
  },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen">
      <Slider slides={homeSlides} effect="fade" />

      <div className="container mx-auto px-6 py-20 ">
       <AnimatedSection>
  <div className="w-4/5 mx-auto">
    <div className="marquee-container pl-6 mb-6">
      <p className="marquee text-md text-blue-500 font-bold">
        Recognized as India's only manufacturer of Next-Gen buildings
        that meet international standards
      </p>
    </div>

    <div className="pl-6">
      <p className="text-[16px] text-center  bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
        DALLAS, an international waterproof building product, is set
        apart not just by endorsements from doctors or engineers—it's a
        scientifically made scientist product
      </p>
    </div>
  </div>
</AnimatedSection>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-default">
                <feature.icon className="w-14 h-14 text-red-600 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-3 text-center text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div> */}
        <HomeProducts />
      </div>
    </div>
  );
};

export default Home;
