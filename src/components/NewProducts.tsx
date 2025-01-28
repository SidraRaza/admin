import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const productData = [
    {
      id: 0,
      img: "/3.jpg",
      title: "T-Shirt",
      desc: "Opna Women's Short Sleeve.",
      rating: "5",
      price: "$80",
    },
    {
      id: 1,
      img: "/4.jpg",
      title: "Summer Sale",
      desc: "Mens Casual Slim Fit T-Shirts.",
      rating: "3",
      price: "$50",
    },
    {
      id: 2,
      img: "/5.jpg",
      title: "Jacket",
      desc: "Mens Cotton Jacket for Winter .",
      rating: "4",
      price: "$90",
    },
    {
      id: 3,
      img: "/6.jpg",
      title: "jewelery Sale",
      desc: "White Gold Plated Princess.",
      rating: "2",
      price: "$150",
    },
    {
      id: 4,
      img: "/th (1).jpeg" ,
      title: "Summer Sale",
      desc: "MBJ Women's Solid Short Sleeve Boat Neck V.",
      rating: "5",
      price: "$40",
    },
    {
      id: 5,
      img: "/8.jpg",
      title: "Electronic Sale",
      desc: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra.",
      rating: "3",
      price: "$350",
    },
    {
      id: 6,
      img: "/9.jpg",
      title: "Electronic Sale",
      desc: "Samsung 49-Inch CHG90 144Hz Curved Gaming .",
      rating: "5",
      price: "$500",
    },
    {
      id: 7,
      img: "/OIP.jpeg",
      title: "Electronic Sale",
      desc: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra.",
      rating: "2",
      price: "$40",
    },
    {
      id: 8,
      img: "/3.jpg",
      title: "summer Sale",
      desc: "Opna Women's Short Sleeve Moisture.",
      rating: "4",
      price: "$70",
    },
    {
      id: 9,
      img: "/OIP (1).jpeg",
      title: "Electronic Sale",
      desc: "Samsung 49-Inch CHG90 144Hz Curved Gaming.",
      rating: "5",
      price: "$90",
    },
    {
      id: 10,
      img: "/10.jpg",
      title: "Women Sale",
      desc: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket .",
      rating: "5",
      price: "$50",
    },
    {
      id: 11,
      img: "/OIP (3).jpeg",
      title: "T-Shirt Sale",
      desc: "Shirt PNG  Transparent Shirt for summer",
      rating: "3",
      price: "$60",
    },
  ];
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start  sm:grid-cols-2  xl:grid-cols-4
         lg:grid-cols-4 md:grid-cols-3 gap-20 xl:gap-x-20 xl:gap-y-10"
        >
          {productData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
