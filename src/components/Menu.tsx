"use client";

import React, { useState, useEffect } from "react";

import ProductCard from "./Productcard";
import Product from "@/pages/type";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  

  // Fetch products and initialize cart from localStorage
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Go to checkout
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url(/pizza11.jpg)",
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            DELICIOUS PIZZA IN OUR MENU
          </h1>
          <p className="text-xl text-white">
            Explore our selection of mouthwatering pizzas to order now
          </p>
        </div>

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          

          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                Your Cart Items
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center mb-4 space-x-4"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <span className="text-lg font-medium">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </span>
                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-green-600 py-3 px-6 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 text-white"
                      >
                        Proceed to Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="bg-red-600 py-3 px-6 rounded-lg ml-4 text-lg shadow-md hover:bg-red-700 transition duration-300 text-white"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-gray-600">Your cart is empty.</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout Modal */}
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Checkout
              </h2>
              <p className="text-lg text-gray-600">
                Please confirm your order before proceeding.
              </p>
              <ul className="mt-4">
                {cart.map((product, index) => (
                  <li
                    key={index}
                    className="flex justify-between mb-2"
                  >
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  $
                  {cart.reduce(
                    (total, product) => total + product.price,
                    0
                  )}
                </span>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() =>
                    alert(
                      "Order confirmed! Your pizza will be delivered soon."
                    )
                  }
                  className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
