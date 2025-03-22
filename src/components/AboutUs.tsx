import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-12">Our Story</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Our Journey</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2023, Tequeños Delight began as a family recipe passed down through generations. 
              Our founder, Maria Rodriguez, brought her grandmother's authentic Venezuelan tequeño recipe 
              to the United States, sharing the joy of these delicious treats with our community.
            </p>
            <p className="text-gray-700">
              What started as a small family business has grown into a beloved local favorite, 
              serving the best tequeños in town while maintaining the authentic flavors and 
              traditional cooking methods that make our tequeños special.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Tequeños Delight, we're passionate about bringing authentic Venezuelan flavors 
              to our community. Our mission is to share the joy of traditional tequeños while 
              creating new, innovative flavors that delight our customers.
            </p>
            <p className="text-gray-700">
              We believe in using only the finest ingredients, maintaining traditional recipes, 
              and providing exceptional service to ensure every customer enjoys the perfect tequeño experience.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Quality: We use only the finest ingredients in every tequeño</li>
              <li>Authenticity: We maintain traditional recipes and cooking methods</li>
              <li>Innovation: We create new flavors while respecting tradition</li>
              <li>Community: We're proud to be part of our local community</li>
              <li>Service: We provide exceptional customer service</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Our Team</h2>
            <p className="text-gray-700 mb-4">
              Our team is made up of passionate individuals who love what they do. 
              From our experienced chefs who prepare each tequeño with care, to our 
              friendly staff who ensure every customer leaves with a smile, we're 
              dedicated to providing the best experience possible.
            </p>
          </div>
        </div>

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