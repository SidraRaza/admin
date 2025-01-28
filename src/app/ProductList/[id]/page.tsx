'use client';
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { use } from "react";

interface Products {
  id: number;
  image: string;
  title: string;
  description: string;
  price1: number;
  price2: number;
  price: number;
  category: string;
}
 

const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source);
}


const Carddetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await client.fetch(
          `*[_type == "product" && id == $id][0]`,
          { id: resolvedParams.id }
        );

        if (productData) {
          const product: Products = {
            id: productData.id.toString(),
            title: productData.title,
            description: productData.description,
            price1: productData.price,
            price2: productData.discountedPrice || productData.price,
            image: productData.image,
            price: productData.price,
            category: productData.category ||""

          };
          setProduct(product);
        } else {
          setError("Product not found.");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [resolvedParams.id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-xl">Loading product details...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success("Product added to cart!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 flex flex-col lg:flex-row justify-center h-screen items-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src={
                product?.image ? urlFor(product.image).url() : "/fallback-image.jpg"
              }
              alt={product?.title || "No Title"}
              width={400}
              height={300}
              className="rounded-lg w-[600px] h-[400px]"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product?.title}
          </h1>
          <p className="text-gray-600 mb-6">{product?.description}</p>
          <p className="text-lg">
            {product?.price1 !== product?.price2 ? (
              <>
                <span className="line-through text-gray-400 mr-2">
                  ${product?.price1}
                </span>
                <span className="text-green-500 font-semibold">
                  ${product?.price2}
                </span>
              </>
            ) : (
              <span>${product?.price1}</span>
            )}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Carddetails;
