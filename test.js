import games from "./game store datas/data/data";

const gameArrays = Object.keys(games).map((key) => ({
  name: key,
  ...games[key],
}));

const total = gameArrays.reduce((sum, game) => sum + game.price, 0);

console.log(total);
