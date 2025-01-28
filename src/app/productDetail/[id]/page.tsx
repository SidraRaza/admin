"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../../ProductList/context/CartContext";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/Header";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { IoMdStar } from "react-icons/io";
import { Button } from "../../../components/ui/button";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useCartHeart } from "../../../app/ProductList/contexHeart/context";
import Products from "../../../components/Products";
import Footer from "../../../components/Footer";
import { use } from "react"; // Required for unwrapping params
// import { EnvVarWarning } from '@/components/env-var-warning';
// import { hasEnvVars } from '../../../../utils/supabase/check-env-vars';
// import HeaderAuth from "@/components/header-auth";

interface Products {
  id: number;
  image: string;
  title: string;
  description: string;
  price1: number;
  price2: number;
  category: string;
  price: number;
}

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const Carddetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = use(params); // Unwrap params using `use`
  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { addToHeart } = useCartHeart();

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
            category: productData.category || "",
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

  const handleAddToHeart = () => {
    if (product) {
      addToHeart(product);
      toast.success("Product added to wishlist!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row py-4 justify-center items-center md:p-9">
        <div className="md:w-[40%] w-full flex flex-col gap-3 justify-center items-center md:justify-start">
          <div>
            <Image
              src={
                product?.image
                  ? urlFor(product.image).url()
                  : "/fallback-image.jpg"
              }
              alt={product?.title || "No Title"}
              width={400}
              height={550}
            />
          </div>
        </div>
        <div className="md:w-[60%] w-full text-[#858585] space-y-5 flex flex-col justify-center items-start md:justify-start px-4">
          <h1 className="font-bold">{product?.title}</h1>
          <p className="flex text-yellow-500 gap-2 items-center">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <span className="text-Text2">10 Reviews</span>
          </p>
          <span>
            <span className="text-yellow-500">$</span> {product?.price1 || "Price not available"}
          </span>
          <p>
            Availability : <span className="text-Button">In Stock</span>
          </p>
          <p className="border-b border-gray-500 pb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met
            sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
            venial consequent sent nostrum met.
          </p>
          <div className="flex gap-4 py-4">
            <p className="w-[30px] h-[30px] rounded-full bg-Button"></p>
            <p className="w-[30px] h-[30px] rounded-full bg-[#23856D]"></p>
            <p className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></p>
            <p className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></p>
          </div>
          <div className="flex gap-5 py-4 items-center">
            <Button className="bg-Button py-6 hover:bg-none text-black">
              Select Options
            </Button>
            <div className="flex gap-4">
              <CiHeart
                size={28}
                onClick={handleAddToHeart}
                className="bg-white cursor-pointer"
              />
              {/* {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
             
              <PiShoppingCartSimpleThin
                size={28}
                onClick={handleAddToCart}
                className="bg-white cursor-pointer"
              />
           
              <MdOutlineRemoveRedEye
                size={24}
                className="bg-white cursor-pointer"
              />
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
      <Products />
      <Footer />
    </>
  );
};

export default Carddetails;
