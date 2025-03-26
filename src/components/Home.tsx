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
          src={`${process.env.PUBLIC_URL}/images/hero-tequenos.jpeg`}
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
                src={`${process.env.PUBLIC_URL}/images/map-placeholder.jpeg`} 
                alt="Our Location" 
                className="w-full h-[400px] object-cover rounded-lg shadow-lg" 
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

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/14155238886"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Tequeños Delight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 