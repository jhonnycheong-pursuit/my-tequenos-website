import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: "Classic Cheese", description: "Our original recipe with gooey cheese", image: "/images/classic-cheese.jpeg" },
  { name: "Ham & Cheese", description: "A perfect blend of savory ham and melted cheese", image: "/images/ham-cheese.jpeg" },
  { name: "Chocolate", description: "A sweet twist on our classic tequeño", image: "/images/chocolate.jpeg" },
];

export default function MenuPreview() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-amber-800">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button className="bg-red-600 hover:bg-red-700">Add to Order</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/menu">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 