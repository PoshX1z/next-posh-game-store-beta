"use client";

import React, { useEffect, useState } from "react";
import { Banner } from "./Banner";
import games from "@/game store datas/data/data";
const Recommend = () => {
  //random function, take data structure object then convert them to array and then shuffle it and pick first 10 games to display it
  const getRandomGames = (games, count) => {
    const gameArrays = Object.keys(games).map((key) => ({
      name: key,
      ...games[key],
    }));
    const shuffled = gameArrays.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const [randomGames, setRandomGames] = useState([]); //store games in array

  //random games on startup
  useEffect(() => {
    const randomBanner = getRandomGames(games, 12);
    setRandomGames(randomBanner);
  }, []);

  return (
    <div>
      <span className="recommend text-white font-bold text-3xl">
        Recommend:
      </span>
      <div className="flex flex-wrap pt-5 gap-10 justify-center">
        {randomGames.map((game, index) => (
          <Banner
            key={index}
            src={game.src}
            alt={game.alt}
            title={game.title}
            price={game.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommend;
