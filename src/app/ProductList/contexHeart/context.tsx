"use client";

import React, { createContext, useContext, useState } from "react";

interface Product {
  id: number; // Ensure 'id' is always a number
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
 
}

interface CartContextType {
  heart: Product[];
  addToHeart: (product: Product) => void;
  removeFromCart: (productId: number) => void; // Ensure productId is a number
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const HeartProvider = ({ children }: { children: React.ReactNode }) => {
  const [heart, setHeart] = useState<Product[]>([]);

  const addToHeart = (product: Product) => {
    setHeart((prevHeart) => [...prevHeart, product]);
  };

  const removeFromCart = (id: number) => {
    console.log("Removing product with id:", id);

    setHeart((prevHeart) => {
      const updatedHeart = prevHeart.filter((product) => product.id !== id);
      console.log("Updated heart array:", updatedHeart);
      return updatedHeart;
    });
  };

  const clearCart = () => {
    setHeart([]);
  };

  // Calculate total number of items in the cart
  const cartCount = heart.length;

  // Calculate the total price of the cart
  const totalPrice = heart.reduce((total, product) => total + product.price, 0);

  return (
    <CartContext.Provider
      value={{ heart, addToHeart, removeFromCart, clearCart, cartCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartHeart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a HeartProvider");
  }
  return context;
};
