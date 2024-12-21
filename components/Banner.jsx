"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const Banner = ({ src, alt, title, price }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    return setIsClicked(!isClicked);
  };
  return (
    <div className="p-6 rounded-lg bg-blue-600 w-72 text-white">
      <div className="w-60 h-80 relative overflow-hidden">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>

      <div className="relative pt-2">
        <p className="font-semibold text-xl absolute">{title}</p>
        <p className="text-red-300 font-semibold text-lg pt-20">${price}</p>
        <div className="flex gap-2">
          <button className="w-full border-4 border-blue-200 bg-blue-400 hover:bg-sky-400 active:bg-sky-900 transition-all">
            <div className="flex justify-center gap-2">
              <AddShoppingCartIcon className="text-green-200" />{" "}
              <span>Add To Cart</span>
            </div>
          </button>
          <button
            onClick={handleClick}
            className="text-red-500 border-4 border-red-200 hover:text-red-300 active:text-red-500"
          >
            {isClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
