import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Product } from '../data/products';

interface ProductComparisonProps {
  product1?: Product;
  product2?: Product;
}

export default function ProductComparison({ product1, product2 }: ProductComparisonProps) {
  if (!product1 || !product2) return null;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-3 gap-4 p-6">
        {/* Product 1 */}
        <div className="space-y-4">
          <img
            src={product1.image}
            alt={product1.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold">{product1.title}</h3>
          <p className="text-sm text-gray-600">{product1.description}</p>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-green-700">{product1.impact}</p>
          </div>
        </div>

        {/* Comparison Arrow */}
        <div className="flex items-center justify-center">
          <ArrowRight className="h-8 w-8 text-green-500" />
        </div>

        {/* Product 2 */}
        <div className="space-y-4">
          <img
            src={product2.image}
            alt={product2.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold">{product2.title}</h3>
          <p className="text-sm text-gray-600">{product2.description}</p>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-green-700">{product2.impact}</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6">
        <h4 className="text-lg font-semibold mb-4">Environmental Benefits</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
            <span>Reduced plastic waste</span>
          </li>
          <li className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
            <span>Lower carbon footprint</span>
          </li>
          <li className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
            <span>Sustainable materials</span>
          </li>
        </ul>
      </div>
    </div>
  );
}