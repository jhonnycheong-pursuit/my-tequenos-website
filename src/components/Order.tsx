import React, { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const menuItems = [
  { name: "Classic Cheese", price: 8.99, image: "/images/classic-cheese.jpeg" },
  { name: "Ham & Cheese", price: 9.99, image: "/images/ham-cheese.jpeg" },
  { name: "Chocolate", price: 8.99, image: "/images/chocolate.jpeg" },
  { name: "Three Cheese Blend", price: 10.99, image: "/images/classic-cheese.jpeg" },
  { name: "Nutella & Banana", price: 9.99, image: "/images/chocolate.jpeg" },
  { name: "Guava & Cheese", price: 9.99, image: "/images/classic-cheese.jpeg" },
  { name: "Buffalo Chicken", price: 10.99, image: "/images/ham-cheese.jpeg" },
  { name: "Spinach & Artichoke", price: 9.99, image: "/images/classic-cheese.jpeg" },
  { name: "BBQ Pulled Pork", price: 11.99, image: "/images/ham-cheese.jpeg" },
];

export default function Order() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryInstructions: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Validate email as user types
    if (name === 'email') {
      if (!value) {
        setErrors(prev => ({ ...prev, email: 'Email is required' }));
      } else if (!validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      }
    }
  };

  const addToCart = (item: { name: string; price: number }) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName: string) => {
    setCart(prevCart => prevCart.filter(item => item.name !== itemName));
  };

  const updateQuantity = (itemName: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: !formData.name ? 'Name is required' : '',
      email: !formData.email ? 'Email is required' : (!validateEmail(formData.email) ? 'Please enter a valid email address' : ''),
      phone: !formData.phone ? 'Phone is required' : '',
      address: !formData.address ? 'Address is required' : ''
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    // If no errors, proceed with order submission
    console.log('Order submitted:', { cart, formData });
    alert('Order placed successfully!');
    setCart([]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      deliveryInstructions: '',
    });
  };

  return (
    <div className="min-h-screen bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-12">Place Your Order</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Menu Section */}
          <div>
            <h2 className="text-2xl font-bold text-amber-800 mb-6">Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <div key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-red-600 font-bold">${item.price.toFixed(2)}</p>
                    <Button
                      onClick={() => addToCart(item)}
                      className="mt-2 bg-red-600 hover:bg-red-700 w-full"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart and Order Form */}
          <div className="space-y-8">
            {/* Cart */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Your Cart</h2>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.name} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-red-600">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                        >
                          +
                        </Button>
                        <Button
                          onClick={() => removeFromCart(item.name)}
                          className="bg-red-100 hover:bg-red-200 text-red-600"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <p className="text-xl font-bold text-right">
                      Total: ${calculateTotal().toFixed(2)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Delivery Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
                      errors.address ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Delivery Instructions</label>
                  <textarea
                    value={formData.deliveryInstructions}
                    onChange={(e) => setFormData({ ...formData, deliveryInstructions: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    rows={2}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={cart.length === 0}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Place Order
                </Button>
              </div>
            </form>
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