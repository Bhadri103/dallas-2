import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "India's First Next-Gen",
    highlightWords: ["Damp Proof", "Wall Care Product"],
    text: "Recognized as India's only manufacturer of next-generation buildings that meet international standards, we're setting new benchmarks in construction excellence.",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
  },
  {
    title: "Scientifically Engineered,",
    highlightWords: ["Not Just", "Endorsed"],
    text: "DALLAS, our international waterproof building product, is set apart not just by endorsements from doctors or engineers—it's a scientifically crafted solution made by scientists.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
  },
  {
    title: "Over 15,000 Projects",
    highlightWords: ["Across", "South India"],
    text: "From Thiruvananthapuram to Kannur in Kerala, and throughout Karnataka and Tamil Nadu, we've successfully completed thousands of projects with lifetime guarantees.",
    image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg"
  }
];

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative min-h-screen">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={(swiper) => {
          // Attach refs after initialization
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative min-h-screen flex items-center justify-center"
              style={{
                backgroundImage: `url("${slide.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/70 z-0" />

              <div className="relative z-10 text-center px-6 max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                  {slide.title}{' '}
                  {slide.highlightWords.map((word, i) => (
                    <span key={i} className="text-primary">
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 animate-fade-in-up delay-200">
                  {slide.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full transition duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full transition duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;