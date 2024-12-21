"use client";
import React, { useState } from "react";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import { UserProfile } from "./UserProfile";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    return setIsClicked(!isClicked);
  };
  return (
    <header className="header flex justify-between items-center gap-20">
      <div className="flex items-center gap-10" style={{ flex: 5 }}>
        <Link href="/">
          <span className="text-white font-extrabold text-4xl">POSH STORE</span>
        </Link>
        <div className="flex-1">
          <input
            type="text"
            placeholder="type something..."
            className="p-1.5 pl-5 w-full border-none rounded-3xl focus:outline-0 placeholder:text-purple-400 placeholder:font-normal text-purple-500 font-semibold"
          ></input>
        </div>
      </div>

      <div className="flex gap-20" style={{ flex: 1 }}>
        {/* <Link href="/cart">
           <Cart /> 
        </Link> */}
        <ShoppingCartIcon
          fontSize="large"
          className="text-white"
          onClick={handleClick}
        />
        {isClicked && <Cart />}

        <Link href="/purchase">
          <PurchaseHistory />
        </Link>
        <Link href="userProfile">
          <UserProfile />
        </Link>
      </div>
    </header>
  );
};

export default Header;
