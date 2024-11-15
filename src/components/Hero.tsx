import React from 'react';
import { TreePine } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-green-600 pt-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
          alt="Eco-friendly products"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <TreePine className="h-16 w-16 mx-auto text-white mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Shop Smarter, Live Greener
        </h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
          Discover eco-friendly alternatives to everyday products and make sustainable choices for a better tomorrow.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-50 to-transparent"></div>
    </div>
  );
}