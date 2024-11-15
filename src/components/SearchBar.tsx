import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '../data/products';

interface SearchBarProps {
  onSearch: (results: typeof products) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const handleSearch = (searchQuery: string, category: string | null) => {
    const filtered = products.filter(product => {
      const matchesQuery = searchQuery === '' || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = !category || product.category === category;

      return matchesQuery && matchesCategory;
    });
    onSearch(filtered);
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    handleSearch(newQuery, selectedCategory);
  };

  const handleCategoryClick = (category: string) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    handleSearch(query, newCategory);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="relative group">
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Search for eco-friendly alternatives..."
            className="w-full px-6 py-4 text-lg rounded-full border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none transition-all duration-300 pl-14"
          />
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-green-500 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}