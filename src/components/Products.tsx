import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/lib/client";

const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source);
}

interface Product {
  id: number;
  title: string;
  description: string;
  price1: number;
  price2: number;
  image: string;
}

async function fetchProducts(): Promise<Product[]> {
  try {
    const fetchedProducts = await client.fetch('*[_type == "product"]');
    return fetchedProducts;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    })();
  }, []);

  return (
    <>
    <div className=" mt-[15px] flex flex-col w-full text-center mx-auto border-b border-gray-300 pb-3 max-w-[463px]">
    <h1 className="font-bold text-Text2 text-3xl">BESTSELLER PRODUCTS</h1>
  </div>
    <div className="lg:w-[1049px]  mx-auto lg:h-[1130px] w-[328px] h-[2550px] flex justify-center sm:flex-row flex-col items-center gap-[30px] mt-[50px] lg:mt-0">
      <div className="w-full max-w-[1048px] flex flex-wrap justify-center lg:justify-between items-center gap-6 mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card w-[90%] sm:w-[200px] md:w-[238px] h-auto flex flex-col items-center"
          >
            <div className="hover:shadow-lg hover:scale-105 w-[200px] md:w-[238px] mx-auto transition-transform duration-300 ease-in-out">
              <Link href={`/productDetail/${product.id}`}>
                <Image
                  src={urlFor(product.image)?.url() || "/placeholder.jpg"}
                  alt={product.title}
                  width={239}
                  height={300}
                  className="w-[200px] h-[220px] sm:w-[150px] sm:h-[170px] md:w-[239px] md:h-[300px] object-cover"
                />
                <div className="w-[90%] sm:w-[239px] h-auto pt-4 sm:pt-[25px] px-4 sm:px-[25px] pb-6 sm:pb-[35px] flex justify-center items-center flex-col gap-2 sm:gap-[10px]">
                  <h1 className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-bold text-[#252B42] text-center">
                    {product.title}
                  </h1>
                  <h1 className="text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-[#737373] text-center">
                    {product.description}
                  </h1>
                  <div className="flex justify-center items-center w-auto sm:w-[108px] h-[34px] gap-2 sm:gap-[5px]">
                    <p className="text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[24px] text-[#BDBDBD]">
                      {product.price1}
                    </p>
                    -
                    <p className="text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[24px] text-[#23856D]">
                      {product.price2}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-2 sm:gap-[6.08px]">
                    <span className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] bg-[#23A6F0] rounded-full"></span>
                    <span className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] bg-[#23856D] rounded-full"></span>
                    <span className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] bg-[#E77C40] rounded-full"></span>
                    <span className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] bg-black rounded-full"></span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Products;
