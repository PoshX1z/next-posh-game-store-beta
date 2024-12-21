const jsObject = {
  elden_ring: {
    alt: "elden ring",
    title: "Elden Ring",
    price: 59.99,
    genre: "soul_like",
  },
  ff_origin: {
    alt: "final fantasy origin",
    title: "Final Fantasy Origin",
    price: 69.99,
    genre: "soul_like",
  },
  ff_vii_rebirth: {
    alt: "final fantasy vii rebirth",
    title: "Final Fantasy VII Rebirth",
    price: 69.99,
    genre: "fantasy",
  },
};
const convertToArray = Object.keys(jsObject).map((key) => ({
  name: key,
  ...jsObject[key],
}));
const fantasyGame = convertToArray.filter((game) => game.genre === "fantasy");
console.log(fantasyGame);
