"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

// Define types for the data structures
interface Product {
  _id: string;
  id: string;
  image: string;
  title: string;
  description: string;
  price1: number;
  price2: number;
  category: string;
  price: number;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface CartInteraction {
  id: string;
  userId: string;
  productId: string;
}

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [addToCartStats, setAddToCartStats] = useState<CartInteraction[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [editingProduct, setEditingProduct] = useState<{
    id: string | null;
    productName: string | null;
    description: string | null;
    price: number | null;
    image: string | null;
  }>({
    id: null,
    productName: null,
    description: null,
    price: null,
    image: null,
  });

  // Fetch Data from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        const usersData = await client.fetch('*[_type == "user"]');
        setUsers(usersData);

        const cartData = await client.fetch('*[_type == "cartInteraction"]');
        setAddToCartStats(cartData);

        const productsData = await client.fetch('*[_type == "product"]');
        setProducts(productsData);
      } catch (error) {
        console.log(error);
        
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleEditProduct = async (
    productId: string,
    updatedData: Partial<Product>
  ) => {
    try {
      // Perform the update
      await client
        .patch(productId)
        .set(updatedData)
        .commit();
  
      // Update the state to reflect changes
      setProducts((prevProducts) =>
        prevProducts.map((prod) =>
          prod._id === productId ? { ...prod, ...updatedData } : prod
        )
      );
  
      // Reset editing state
      setEditingProduct({
        id: null,
        productName: null,
        description: null,
        price: null,
        image: null,
      });
    } catch (error) {
      console.log(error);
      setError("Failed to update product");
    }
  };
  

  const handleCancelEdit = () => {
    setEditingProduct({
      id: null,
      productName: null,
      description: null,
      price: null,
      image: null,
    });
  };
  const handleSignOut = () => {
     
    document.cookie = "adminLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    
    
    window.location.href = "/login";
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditingProduct({
        ...editingProduct,
        image: imageUrl,
      });
    }
  };

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error)
    return <div className="text-center text-xl text-red-600">{error}</div>;

  return (
    <>
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">
        Dashboard
      </h1>
      <div className="flex justify-end mb-6">
        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Sign Out
        </button>
      </div>
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-gray-600">
            Users Today
          </h2>
          <p className="text-4xl text-blue-600">{users.length}</p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-gray-600">
            Products Added to Cart
          </h2>
          <p className="text-4xl text-green-600">{addToCartStats.length}</p>
        </div>
      </div>

      {/* Products List */}
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">
        Products List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <div className="relative w-full h-64 mb-6">
              <Image
                src={urlFor(product.image).url()}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              {editingProduct.id === product._id ? (
                <label htmlFor="productName">Product Name 
                <input
                  type="text"
                  value={editingProduct.productName || product.title}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      productName: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
                />
                </label>
              ) : (
                product.title
              )}
            </h3>

            <p className="text-gray-600 mb-4">
              {editingProduct.id === product._id ? (
                <label htmlFor="description">Description 
                <textarea
                  value={editingProduct.description || product.description}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
                </label>
              ) : (
                product.description
              )}
            </p>

            <div className="text-lg font-semibold text-gray-800 mb-4">
              {editingProduct.id === product._id ? (
                <label htmlFor="price">Price
                <input
                  type="number"
                  value={editingProduct.price || product.price}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      price: Number(e.target.value),
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
                />
                </label>
              ) : (
                product.price
              )}
            </div>

            {/* Image Upload */}
            <div className="text-lg font-semibold text-gray-800 mb-4">
              {editingProduct.id === product._id ? (
                <>
                  <label>
                    Image Upload:
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                  {editingProduct.image && (
                    <div className="mt-4">
                      <Image
                        src={editingProduct.image}
                        alt="New image preview"
                        width={200}
                        height={200}
                        className="rounded-lg hidden"
                      />
                    </div>
                  )}
                </>
              ) : (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="rounded-lg hidden"
                />
              )}
            </div>

            {/* Action Buttons */}
            {editingProduct.id === product._id ? (
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() =>
                    handleEditProduct(product._id, {
                      title:
                        editingProduct.productName ?? product.title,
                      description:
                        editingProduct.description ?? product.description,
                      price: editingProduct.price ?? product.price,
                      image: editingProduct.image ?? product.image,
                    })
                  }
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() =>
                  setEditingProduct({
                    id: product._id,
                    productName: product.title,
                    description: product.description,
                    price: product.price,
                    image: product.image,
                  })
                }
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
              >
                Edit Product
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}