import React, { useState, useEffect } from "react";
import { MapPin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 md:py-48 w-full">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute transform -rotate-45 -translate-x-1/2 -translate-y-1/2 bg-white/5 w-[40rem] h-[40rem] top-1/2 left-1/4"></div>
        <div className="absolute transform rotate-45 translate-x-1/2 -translate-y-1/2 bg-white/5 w-[40rem] h-[40rem] top-1/2 right-1/4"></div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            Can Akar
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-blue-100 font-light mb-12">
            IT Specialist
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Basel, Switzerland</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <Mail className="w-5 h-5" />
              <span className="text-lg">akarcan.business@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
