'use client';
import imageUrlBuilder from "@sanity/image-url";
import React from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import {client} from "@/sanity/lib/client";


const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source);
}

const HeartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Your Cart is Empty</h1>
          <p className="mt-4">Start shopping and add some items to your cart!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
        Your Cart
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <Image
              width={300}
              height={300}
              src={urlFor(product.image).url()}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-center mb-2 text-indigo-800">
              {product.title}
            </h2>
            <p className="text-green-600 text-lg font-bold mb-4">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-full w-full mt-2 transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={clearCart}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default HeartPage;
