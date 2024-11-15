export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  impact: string;
  category: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Bamboo Toothbrush",
    description: "Replace plastic toothbrushes with this biodegradable alternative",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80",
    impact: "Reduces plastic waste by 4.7 billion brushes annually",
    category: "Personal Care",
    tags: ["bathroom", "plastic-free", "biodegradable"]
    
  },
  {
    id: 2,
    title: "Reusable Water Bottle",
    description: "Eliminate single-use plastic bottles with a durable alternative",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80",
    impact: "Saves 156 plastic bottles per year per person",
    category: "Kitchen",
    tags: ["hydration", "plastic-free", "reusable"]
  },
  {
    id: 3,
    title: "Cotton Produce Bags",
    description: "Skip plastic produce bags with these washable mesh alternatives",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80",
    impact: "Eliminates hundreds of plastic bags annually",
    category: "Household",
    tags: ["shopping", "plastic-free", "reusable"]
  },
  {
    id: 4,
    title: "Beeswax Food Wraps",
    description: "Natural alternative to plastic wrap for food storage",
    image: "https://homesteadingfamily.com/wp-content/uploads/2021/12/Sandwich-Wrapped-Beeswax_HF.jpg?auto=format&fit=crop&q=80",
    impact: "Reduces plastic wrap waste by 100%",
    category: "Kitchen",
    tags: ["food storage", "plastic-free", "reusable"]
  },
  {
    id: 5,
    title: "Organic Cotton Tote",
    description: "Stylish and sustainable shopping bag for daily use",
    image: "https://images.squarespace-cdn.com/content/v1/65a47f0e14f9de54a7742ce9/1705311208666-9AWWUMQIM9QL0FU676QE/Artwork+Karl.jpg?auto=format&fit=crop&q=80",
    impact: "Replaces 500+ plastic bags over its lifetime",
    category: "Fashion",
    tags: ["shopping", "plastic-free", "reusable"]
  }
];