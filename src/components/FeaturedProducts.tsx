import React from 'react';
import { Recycle, Droplet, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Personal Care':
        return Droplet;
      case 'Kitchen':
        return ShoppingBag;
      default:
        return Recycle;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Eco-Friendly Alternatives
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => {
          const Icon = getIcon(product.category);
          return (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-green-500 rounded-full p-2 transform transition-transform duration-300 hover:rotate-12 hover:scale-110">
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="bg-green-50 rounded-lg p-4 transform transition-all duration-300 hover:scale-102">
                  <p className="text-green-700 text-sm">
                    <strong>Environmental Impact:</strong> {product.impact}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}