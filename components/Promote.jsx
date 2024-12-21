"use client";
import Image from "next/image";
import React, { useState } from "react";
import likeadragon from "../game store datas/data/images/games/Yakuza Like A Dragon.jpg";
const Promote = () => {
  return (
    <div className="promote w-full h-[700px] bg-blue-400 relative ">
      <Image
        src={likeadragon}
        alt="yakuza like a dragon"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-0 left-1/2 transfrom -translate-x-1/2">
        <h1 className="text-red-500 font-extrabold text-7xl">OUT NOW</h1>
      </div>
    </div>
  );
};

export default Promote;
