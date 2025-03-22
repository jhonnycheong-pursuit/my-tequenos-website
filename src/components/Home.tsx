import React from 'react';
import { Button } from './ui/button';
import TestimonialCard from './testimonial-card';
import { MenuPreview } from './menu-preview';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <img
          src="/images/hero-tequenos.jpeg"
          alt="Crispy tequeños with melted cheese"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-4">Tequeños Delight</h1>
          <p className="text-3xl mb-4">Crispy, Cheesy, Irresistible</p>
          <p className="text-2xl mb-8">The Best Tequeños in Town!</p>
          <Link to="/order">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Order Now
            </Button>
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-amber-800">About Us</h2>
          <p className="text-gray-700 mb-8">
            We're passionate about bringing authentic Venezuelan tequeños to our community. 
            Our family recipe has been passed down through generations, and we're proud to 
            share these delicious treats with you.
          </p>
          <Link to="/about">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Menu Preview */}
      <MenuPreview />

      {/* Special Offers */}
      <section className="py-16 px-4 bg-amber-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-amber-800">Special Offers</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Buy 5, Get 1 Free!</h3>
            <p className="text-gray-700 mb-6">
              Indulge in our crispy delights and get rewarded. Purchase any 5 tequeños and enjoy an extra one on us. The
              perfect excuse to try all our flavors!
            </p>
            <Link to="/order">
              <Button className="bg-red-600 hover:bg-red-700">Claim Offer</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-amber-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Maria S."
              comment="These tequeños transported me back to Venezuela. Absolutely delicious!"
              rating={5}
            />
            <TestimonialCard
              name="John D."
              comment="The cheese pull is insane! My new favorite snack in town."
              rating={5}
            />
            <TestimonialCard
              name="Laura M."
              comment="Perfect crispy exterior, gooey cheesy interior. What more could you want?"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">How to Order</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Flavors</h3>
                <p className="text-gray-700">Browse our menu and select your favorite tequeños.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Place Your Order</h3>
                <p className="text-gray-700">Order online through our website or give us a call.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enjoy!</h3>
                <p className="text-gray-700">Pick up your order or have it delivered right to your doorstep.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/order">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-amber-800">Find Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg max-w-[800px] mx-auto">
              <img 
                src="/images/map-placeholder.jpeg" 
                alt="Our Location" 
                className="w-full h-[400px] object-cover" 
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <svg className="text-red-600 mr-4 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700">123 Crispy Lane, Cheesetown, CT 12345</p>
              </div>
              <div className="flex items-center">
                <svg className="text-red-600 mr-4 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700">(555) 123-4567</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://facebook.com/tequenosdelight" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://instagram.com/tequenosdelight" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Tequeños Delight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 