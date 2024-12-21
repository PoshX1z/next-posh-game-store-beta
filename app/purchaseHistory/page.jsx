import React from "react";
import games from "@/game store datas/data/data";
import BannerCart from "@/components/BannerCart";

const page = () => {
  //turn into array so it can map with them
  const gameArrays = Object.keys(games).map((key) => ({
    name: key,
    ...games[key],
  }));
  return (
    <div className="flex gap-20 pt-8">
      <div className="w-full min-h-screen bg-sky-800">
        <h1 className="text-white text-2xl font-extrabold p-3">
          Here's Your Purchase History:
        </h1>
        {gameArrays.map((game, index) => (
          <BannerCart
            key={index}
            count={index + 1}
            src={game.src}
            alt={game.alt}
            title={game.title}
            price={game.price}
            purchaseHistory="Buy At"
            purchaseDate="12/23/24"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
