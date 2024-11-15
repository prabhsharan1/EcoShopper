import React from 'react';
import { Lightbulb, Droplet, Leaf, Recycle } from 'lucide-react';

export default function EcoTips() {
  const tips = [
    {
      icon: Lightbulb,
      title: "Energy Saving",
      tips: [
        "Switch to LED bulbs",
        "Use natural light when possible",
        "Unplug unused electronics"
      ]
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      tips: [
        "Fix leaky faucets",
        "Install low-flow showerheads",
        "Collect rainwater for plants"
      ]
    },
    {
      icon: Leaf,
      title: "Sustainable Living",
      tips: [
        "Start composting",
        "Use reusable bags",
        "Buy local produce"
      ]
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      tips: [
        "Practice proper recycling",
        "Avoid single-use items",
        "Donate unused items"
      ]
    }
  ];

  return (
    <div className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Daily Eco Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <tip.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{tip.title}</h3>
              <ul className="space-y-2">
                {tip.tips.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}