import React, { useState } from 'react';
import { Calculator, Droplet, Trash2 } from 'lucide-react';

interface SavingsData {
  water: number;
  plastic: number;
  co2: number;
}

export default function EcoCalculator() {
  const [habits, setHabits] = useState({
    reusableBottle: false,
    reusableBags: false,
    shortShowers: false,
  });

  const calculateSavings = (): SavingsData => {
    let savings = { water: 0, plastic: 0, co2: 0 };
    
    if (habits.reusableBottle) {
      savings.plastic += 156; // bottles per year
      savings.co2 += 82.8; // kg of CO2 per year
    }
    
    if (habits.reusableBags) {
      savings.plastic += 500; // bags per year
      savings.co2 += 6; // kg of CO2 per year
    }
    
    if (habits.shortShowers) {
      savings.water += 7300; // liters per year
      savings.co2 += 50; // kg of CO2 per year
    }
    
    return savings;
  };

  const savings = calculateSavings();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Calculator className="h-8 w-8 text-green-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Eco Savings Calculator</h2>
        </div>
        
        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Daily Habits</h3>
          <div className="space-y-4">
            {Object.entries({
              reusableBottle: 'I use a reusable water bottle',
              reusableBags: 'I bring my own shopping bags',
              shortShowers: 'I take short showers (5 minutes or less)',
            }).map(([key, label]) => (
              <label key={key} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={habits[key as keyof typeof habits]}
                  onChange={(e) => setHabits(prev => ({ ...prev, [key]: e.target.checked }))}
                  className="form-checkbox h-5 w-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                />
                <span className="text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Droplet className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Water Saved</h4>
            <p className="text-3xl font-bold text-blue-600">{savings.water.toLocaleString()}</p>
            <p className="text-gray-600">Liters per year</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Trash2 className="h-8 w-8 text-purple-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Plastic Reduced</h4>
            <p className="text-3xl font-bold text-purple-600">{savings.plastic.toLocaleString()}</p>
            <p className="text-gray-600">Items per year</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Calculator className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">CO₂ Reduced</h4>
            <p className="text-3xl font-bold text-green-600">{savings.co2.toLocaleString()}</p>
            <p className="text-gray-600">kg per year</p>
          </div>
        </div>
      </div>
    </div>
  );
}