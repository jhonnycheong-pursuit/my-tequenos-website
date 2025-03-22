import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: 'Classic Cheese',
    description: 'Our signature tequeño with premium Venezuelan cheese',
    price: '$12.99',
    image: `${process.env.PUBLIC_URL}/images/classic-cheese.jpeg`
  },
  {
    name: 'Ham & Cheese',
    description: 'A perfect blend of ham and cheese wrapped in our crispy dough',
    price: '$14.99',
    image: `${process.env.PUBLIC_URL}/images/ham-cheese.jpeg`
  },
  {
    name: 'Chocolate',
    description: 'Sweet tequeños filled with rich chocolate',
    price: '$13.99',
    image: `${process.env.PUBLIC_URL}/images/chocolate.jpeg`
  }
];

export function MenuPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Most Popular Tequeños</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">{item.price}</span>
                  <Link to="/order">
                    <Button className="bg-red-600 hover:bg-red-700">Add to Order</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 