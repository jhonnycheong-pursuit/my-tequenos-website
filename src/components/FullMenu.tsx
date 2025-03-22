import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const menuCategories = [
  {
    name: "Classic Tequeños",
    items: [
      { name: "Classic Cheese", description: "Our original recipe with gooey cheese", price: "$8.99", image: `${process.env.PUBLIC_URL}/images/classic-cheese.jpeg` },
      { name: "Ham & Cheese", description: "A perfect blend of savory ham and melted cheese", price: "$9.99", image: `${process.env.PUBLIC_URL}/images/ham-cheese.jpeg` },
      { name: "Three Cheese Blend", description: "A combination of mozzarella, cheddar, and cream cheese", price: "$10.99", image: `${process.env.PUBLIC_URL}/images/classic-cheese.jpeg` },
    ]
  },
  {
    name: "Sweet Tequeños",
    items: [
      { name: "Chocolate", description: "A sweet twist on our classic tequeño", price: "$8.99", image: `${process.env.PUBLIC_URL}/images/chocolate.jpeg` },
      { name: "Nutella & Banana", description: "Creamy Nutella with fresh banana slices", price: "$9.99", image: `${process.env.PUBLIC_URL}/images/chocolate.jpeg` },
      { name: "Guava & Cheese", description: "Traditional Venezuelan guava paste with cheese", price: "$9.99", image: `${process.env.PUBLIC_URL}/images/classic-cheese.jpeg` },
    ]
  },
  {
    name: "Specialty Tequeños",
    items: [
      { name: "Buffalo Chicken", description: "Spicy buffalo chicken with blue cheese", price: "$10.99", image: `${process.env.PUBLIC_URL}/images/ham-cheese.jpeg` },
      { name: "Spinach & Artichoke", description: "Creamy spinach and artichoke dip", price: "$9.99", image: `${process.env.PUBLIC_URL}/images/classic-cheese.jpeg` },
      { name: "BBQ Pulled Pork", description: "Tender pulled pork with BBQ sauce", price: "$11.99", image: `${process.env.PUBLIC_URL}/images/ham-cheese.jpeg` },
    ]
  }
];

export default function FullMenu() {
  return (
    <div className="min-h-screen bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-12">Our Full Menu</h1>
        
        {menuCategories.map((category) => (
          <div key={category.name} className="mb-16">
            <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <div key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold text-red-600">{item.price}</span>
                      <Link to="/order">
                        <Button className="bg-red-600 hover:bg-red-700">Add to Order</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Link to="/">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 