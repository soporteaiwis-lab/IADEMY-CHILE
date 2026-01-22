import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-slate-900 overflow-hidden">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Image & Gradient Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-80 z-10 mix-blend-multiply`}></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-2xl animate-[fadeInUp_1s_ease-out]">
              <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold mb-4 border border-cyan-500/30">
                Novedades IADEMY
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl">
                {slide.subtitle}
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg transform hover:-translate-y-1 transition-all shadow-lg shadow-cyan-500/30">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block">
        <ChevronLeft size={40} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block">
        <ChevronRight size={40} />
      </button>
    </div>
  );
};