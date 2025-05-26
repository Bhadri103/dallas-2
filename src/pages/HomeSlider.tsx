import React from "react";
import Slider from "../components/Slider";
import AnimatedSection from "../components/AnimatedSection";
import { ArrowRight, Shield, Star, Users } from "lucide-react";

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

      <div className="container mx-auto px-6 py-20">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 leading-tight tracking-tight text-gray-900">
            Welcome to{" "}
            <span className="text-red-600 underline decoration-red-400 decoration-4">
              Dallas Wallcare
            </span>
          </h1>
          <p className="text-lg md:text-xl text-center max-w-4xl mx-auto text-gray-700 font-medium leading-relaxed">
            Founded in 2019, we are committed to transforming India's
            construction landscape with our premium waterproof wall care
            solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
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
        </div>

        <AnimatedSection className="mt-24 text-center">
          <a
            href="/products"
            className="inline-flex items-center justify-center bg-red-600 text-white text-lg font-semibold px-12 py-4 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 ease-in-out"
          >
            Explore Our Products
            <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;
