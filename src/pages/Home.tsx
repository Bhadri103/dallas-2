import React, { ReactNode } from "react";
import {
  ArrowRight,
  Shield,
  Star,
  Users,
  Award,
  Factory,
  Leaf,
  FlaskConical,
  Target,
  Eye,
  Zap,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import HomeSlider from "./HomeSlider";
import Slider from "../components/Slider";
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) => (
  <div
    className={`animate-fade-in ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);
const features = [
  {
    icon: Shield,
    title: "Scientifically Engineered",
    description:
      "Lifetime guaranteed products developed through advanced research and rigorous testing",
  },
  {
    icon: Star,
    title: "Superior Waterproofing Technology",
    description:
      "Effective protection against dampness, mold, microbial growth, and chemical damage",
  },
  {
    icon: Users,
    title: "Direct Factory-to-Customer",
    description:
      "Eliminates intermediaries, providing competitive pricing and consistent quality",
  },
  {
    icon: Award,
    title: "International Standards",
    description:
      "India's only manufacturer of Next-Gen buildings that meet international standards",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description:
      "World-class facilities with automated quality controls and proprietary polymer development",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Production",
    description:
      "Sustainable materials and energy-efficient processes that reduce environmental impact",
  },
];

const whyChooseReasons = [
  "Direct Factory-to-Customer Pricing",
  "Scientifically Engineered & Lifetime Guaranteed",
  "Superior Waterproofing Technology",
  "Cost-Effective & High Performance",
  "Continuous Innovation & Leadership",
  "Highly Equipped Manufacturing & Research Facilities",
  "Customizable Solutions",
  "Eco-Friendly Production",
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <HomeSlider />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 font-inter">
                Revolutionizing India's Construction Industry
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium font-inter">
                At Dallas Wall care Pvt. Ltd., we are dedicated to
                revolutionizing the construction industry in India with our
                premium waterproof wall care product,{" "}
                <strong className="text-[#E63946]">Dallas</strong>. Founded in
                2019...
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-white rounded-3xl shadow-lg p-10 mb-12 transition-transform hover:scale-[1.03] duration-300">
              <div className="text-center">
                <FlaskConical className="w-16 h-16 text-[#E63946] mx-auto mb-5" />
                <h3 className="text-2xl font-bold text-gray-900 font-inter mb-3">
                  Scientifically Made by Scientists
                </h3>
                <p className="text-gray-700 font-medium">
                  DALLAS, an international waterproof building product, is set
                  apart not just by endorsements from doctors or engineers—it's
                  a scientifically made scientist product.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">
            Our Vision & Mission
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex h-full">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-xl flex flex-col transition-transform transform hover:scale-[1.02] w-full">
                  <Eye className="w-12 h-12 text-red-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We aim to be the foremost leader in India's construction
                    materials sector by upholding a relentless dedication to
                    quality, sustainability, and ground-breaking innovation. Our
                    goal is to equip builders and contractors with superior
                    technologies that set new industry standards, ensuring every
                    project achieves exceptional performance and enduring
                    durability.
                  </p>
                  <div className="flex-grow" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex h-full">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-xl flex flex-col transition-transform transform hover:scale-[1.02] w-full">
                  <Target className="w-12 h-12 text-yellow-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At DALLAS WALLCARE, our mission is to pioneer
                    next-generation construction solutions that protect against
                    dampness, mold, chemical exposure, and environmental stress.
                    In a market flooded with unverified claims, we stand apart
                    through innovation, scientific research, and expert
                    manufacturing.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Builders across India are in search of a lifetime-guaranteed
                    solution—and{" "}
                    <strong className="text-red-600">Dallas</strong> delivers
                    with an advanced formulation that ensures exceptional
                    durability and long-term structural protection.
                  </p>
                  <div className="flex-grow" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Why <span className="text-red-600">Dallas Wallcare</span> Stands
              Apart
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <feature.icon className="w-12 h-12 text-red-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative z-10">
                Our <span className="text-red-600">Expertise</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left Text Content */}
              <AnimatedSection>
                <div className="space-y-6 bg-white rounded-xl shadow-lg p-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our manufacturing facility sets the gold standard for
                    quality and innovation. From high-purity imported minerals
                    to proprietary binders, every component is selected for
                    excellence.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With McGlasgo’s scientific backing, our labs ensure rigorous
                    multi-phase testing, certifying unmatched reliability and
                    high performance in every wall care product.
                  </p>
                  <div className="mt-6 border-t pt-6">
                    <p className="font-semibold text-gray-800">
                      Built on science. Driven by innovation. Trusted across
                      India.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right Highlight Card */}
              <AnimatedSection delay={0.3}>
                <div className="bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-3xl p-10 shadow-xl transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-red-700 text-white p-3 rounded-full shadow-md">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-white drop-shadow-md">
                      Innovation & Research
                    </h4>
                  </div>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm">
                    Through McGlasgo’s research center, our experts refine
                    formulas biannually— keeping Dallas Wallcare products on the
                    cutting edge of global construction technology.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </section>

      <section className="py-20 bg-gray-100 text-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 drop-shadow-sm">
              Why Choose <span className="text-red-600"> Dallas </span> Ready
              Plast?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyChooseReasons.map((reason, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 bg-white border border-gray-300 rounded-xl p-5 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="p-2  text-red-700 rounded-full shadow-md">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium leading-relaxed tracking-wide">
                    {reason}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Optional subtle gradient blur background effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] bg-yellow-400 opacity-10 rounded-full blur-3xl z-0" />
      </section>

      {/* Sustainability & Customer Focus */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex h-full">
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                  <Leaf className="w-12 h-12 text-green-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Commitment to Sustainability
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Environmental responsibility is at the core of our
                    operations. We adopt eco-conscious manufacturing methods and
                    energy-saving technologies that minimize our ecological
                    footprint without compromising product quality. Through
                    comprehensive life cycle assessments, we continuously align
                    our practices with our values of sustainability and
                    innovation.
                  </p>
                  <div className="flex-grow" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex h-full">
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                  <Users className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Customer-Centric Approach
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Customer satisfaction is paramount at Dallas Wallcare.
                    Beyond delivering superior products, we provide a lifetime
                    guarantee on our waterproof wall plaster, reflecting our
                    confidence in its durability and consistent performance over
                    time.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our commitment extends beyond product delivery. We offer
                    complimentary post-application support, with a dedicated
                    team monitoring completed projects and providing expert
                    technical assistance—ensuring builders and homeowners enjoy
                    peace of mind.
                  </p>
                  <div className="flex-grow" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Partner with Dallas Wallcare as we revolutionize the Indian
              construction industry. Discover unmatched quality, cutting-edge
              innovation, and proven scientific performance with Dallas Ready
              Plast—the benchmark for modern, durable construction materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/products"
                className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
              >
                Explore Our Products
                <ArrowRight className="ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-lg font-semibold"
              >
                Contact Us Today
                <Phone className="ml-2" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
