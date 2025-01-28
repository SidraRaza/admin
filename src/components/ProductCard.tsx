import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: string;
  price: string;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
      default:
        return null;
    }
  };

  // Remove the dollar sign and convert to number
  const numericPrice = parseInt(price.replace("$", ""));

  return (
    <div className="px-4 border bordor-gray-200 rounded-xl max-w-[400px] shadow-lg ">
      <div>
        <Image
          className="w-full h-[200px]"
          src={img}
          alt={title}
          width={200}
          height={300}
        />
      </div>
      <div className="space-y-2 py-2 w-[200px] h-[200px] ">
        <h2 className="font-medium uppercase text-accent ">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(Number(rating))}</div>
        <h3 className="font-bold flex gap-4">
          {price}
          <del className="text-gray-500 font-normal">${numericPrice + 40}.00</del>
        </h3>
        
      </div>
    </div>
  );
};

export default ProductCard;
