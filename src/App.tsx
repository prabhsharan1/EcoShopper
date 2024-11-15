import React, { useState } from 'react';
import { Search, Leaf, ShoppingBag, Info, Calculator } from 'lucide-react';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FeaturedProducts from './components/FeaturedProducts';
import EcoTips from './components/EcoTips';
import EcoCalculator from './components/EcoCalculator';
import ProductComparison from './components/ProductComparison';
import { products as initialProducts } from './data/products';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState<{
    product1?: typeof initialProducts[0];
    product2?: typeof initialProducts[0];
  }>({});

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center group">
              <Leaf className="h-8 w-8 text-green-600 transform transition-transform duration-300 group-hover:rotate-12" />
              <span className="ml-2 text-xl font-semibold text-gray-900">EcoShopper</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#search" className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300">
                  <Search className="h-4 w-4 mr-1" />
                  Search
                </a>
                <a href="#products" className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300">
                  <ShoppingBag className="h-4 w-4 mr-1" />
                  Products
                </a>
                <a href="#calculator" className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300">
                  <Calculator className="h-4 w-4 mr-1" />
                  Calculator
                </a>
                <a href="#tips" className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300">
                  <Info className="h-4 w-4 mr-1" />
                  Eco Tips
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <SearchBar onSearch={setProducts} />
        <FeaturedProducts 
          products={products}
          onCompare={(product1, product2) => setSelectedProducts({ product1, product2 })}
        />
        {selectedProducts.product1 && selectedProducts.product2 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Product Comparison
            </h2>
            <ProductComparison
              product1={selectedProducts.product1}
              product2={selectedProducts.product2}
            />
          </div>
        )}
        <EcoCalculator />
        <EcoTips />
      </main>

      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center group">
                <Leaf className="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-12" />
                <span className="ml-2 text-lg font-semibold">EcoShopper</span>
              </div>
              <p className="mt-4 text-green-200">
                Making sustainable shopping choices easier for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-green-200">
                <li><a href="#search" className="hover:text-white transition-colors duration-300">Search Products</a></li>
                <li><a href="#calculator" className="hover:text-white transition-colors duration-300">Eco Calculator</a></li>
                <li><a href="#tips" className="hover:text-white transition-colors duration-300">Eco Tips</a></li>
                <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p className="text-green-200">
                Join our community of eco-conscious shoppers and make a positive impact on the environment.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-800 text-center text-green-200">
            <p>&copy; {new Date().getFullYear()} EcoShopper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;