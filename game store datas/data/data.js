//images, list of games, genre, price, platform all in here.
import eldenring from "./images/games/Elden Ring.jpg";
import fforigin from "./images/games/FF Origin.png";
import ffviirebirth from "./images/games/FF VII Rebirth.png";
import ffviiremake from "./images/games/FF VII Remake.png";
import ffx from "./images/games/FF X HD Remaster.png";
import ffxv from "./images/games/FF XV.jpg";
import ffxvi from "./images/games/FF XVI.png";
import gears5 from "./images/games/Gears 5.png";
import ghostoftsushima from "./images/games/Ghost Of Tsushima.png";
import godofwar from "./images/games/God Of War.jpg";
import hellblade from "./images/games/Hellblade.jpg";
import horizonforbiddenwest from "./images/games/Horizon Forbidden West.png";
import justcause4 from "./images/games/Just Cause 4.png";
import likeadragongaiden from "./images/games/Like A Dragon Gaiden.png";
import metalgearsrising from "./images/games/Metal Gears Rising Revengence.png";
import minecraft from "./images/games/Minecraft.jpg";
import mirroredgecatalyst from "./images/games/Mirror Edge Catalyst.png";
import mirroredge from "./images/games/Mirror Edge.png";
import mhrise from "./images/games/Monster Hunter Rise Sunbreak.png";
import mhw from "./images/games/Monster Hunter World Iceborne.png";
import rachetandclank from "./images/games/Rachet & Clank Rift Apart.png";
import reddeadredemption2 from "./images/games/Red Dead Redemption 2.jpg";
import remnent2 from "./images/games/Remnent 2.png";
import seaofstars from "./images/games/Sea Of Stars.png";
import starfield from "./images/games/Star Field.png";
import starwarjedisurvior from "./images/games/Star Wars Jedi Survivor.png";
import thelastofusremake from "./images/games/The Last Of Us Remake.png";
import thewitcher3 from "./images/games/The Witcher 3.jpg";
import tinytinawonderland from "./images/games/Tiny Tina wonderlands.png";
import yakuzalikeadragon from "./images/games/Yakuza Like A Dragon.jpg";

const games = {
  elden_ring: {
    src: eldenring,
    alt: "elden ring",
    title: "Elden Ring",
    price: 59.99,
    genre: "soul_like",
  },
  ff_origin: {
    src: fforigin,
    alt: "final fantasy origin",
    title: "Final Fantasy Origin",
    price: 69.99,
    genre: "soul_like",
  },
  ff_vii_rebirth: {
    src: ffviirebirth,
    alt: "final fantasy vii rebirth",
    title: "Final Fantasy VII Rebirth",
    price: 69.99,
    genre: "fantasy",
  },
  ff_vii_remake: {
    src: ffviiremake,
    alt: "final fantasy vii remake",
    title: "Final Fantasy VII Remake",
    price: 59.99,
    genre: "fantasy",
  },
  ff_x: {
    src: ffx,
    alt: "final fantasy x hd remaster",
    title: "Final Fantasy X HD Remaster",
    price: 29.99,
    genre: "fantasy",
  },
  ff_xv: {
    src: ffxv,
    alt: "final fantasy xv",
    title: "Final Fantasy XV",
    price: 29.99,
    genre: "fantasy",
  },
  ff_xvi: {
    src: ffxvi,
    alt: "final fantasy xvi",
    title: "Final Fantasy XVI",
    price: 49.99,
    genre: "fantasy",
  },
  gears_5: {
    src: gears5,
    alt: "gears 5",
    title: "Gears 5",
    price: 19.99,
    genre: "fps",
  },
  ghost_of_tsushima: {
    src: ghostoftsushima,
    alt: "ghost of tsushima",
    title: "Ghost of Tsushima",
    price: 59.99,
    genre: "action",
  },
  god_of_war: {
    src: godofwar,
    alt: "god of war",
    title: "God of War",
    price: 39.99,
    genre: "action",
  },
  hellblade: {
    src: hellblade,
    alt: "hellblade",
    title: "Hellblade",
    price: 19.99,
    genre: "action",
  },
  horizon_forbidden_west: {
    src: horizonforbiddenwest,
    alt: "horizon forbidden west",
    title: "Horizon Forbidden West",
    price: 59.99,
    genre: "open_world",
  },
  just_cause_4: {
    src: justcause4,
    alt: "just cause 4",
    title: "Just Cause 4",
    price: 29.99,
    genre: "fps",
  },
  like_a_dragon_gaiden: {
    src: likeadragongaiden,
    alt: "like a dragon gaiden",
    title: "Like a Dragon Gaiden",
    price: 29.99,
    genre: "action",
  },
  metal_gear_rising: {
    src: metalgearsrising,
    alt: "metal gear rising revengeance",
    title: "Metal Gear Rising Revengeance",
    price: 9.99,
    genre: "action",
  },
  minecraft: {
    src: minecraft,
    alt: "minecraft",
    title: "Minecraft",
    price: 29.99,
    genre: "open_world",
  },
  mirror_edge_catalyst: {
    src: mirroredgecatalyst,
    alt: "mirror edge catalyst",
    title: "Mirror Edge Catalyst",
    price: 5.99,
    genre: "action",
  },
  mirror_edge: {
    src: mirroredge,
    alt: "mirror edge",
    title: "Mirror Edge",
    price: 4.99,
    genre: "action",
  },
  mh_rise: {
    src: mhrise,
    alt: "monster hunter rise sunbreak",
    title: "Monster Hunter Rise Sunbreak",
    price: 29.99,
    genre: "action",
  },
  mh_world: {
    src: mhw,
    alt: "monster hunter world iceborne",
    title: "Monster Hunter World Iceborne",
    price: 19.99,
    genre: "action",
  },
  rachet_and_clank: {
    src: rachetandclank,
    alt: "rachet and clank rift apart",
    title: "Rachet & Clank Rift Apart",
    price: 30.99,
    genre: "action",
  },
  red_dead_redemption_2: {
    src: reddeadredemption2,
    alt: "red dead redemption 2",
    title: "Red Dead Redemption 2",
    price: 40.99,
    genre: "open_world",
  },
  remnant_2: {
    src: remnent2,
    alt: "remnant 2",
    title: "Remnant 2",
    price: 19.99,
    genre: "soul_like",
  },
  sea_of_stars: {
    src: seaofstars,
    alt: "sea of stars",
    title: "Sea of Stars",
    price: 2.99,
    genre: "action",
  },
  starfield: {
    src: starfield,
    alt: "starfield",
    title: "Starfield",
    price: 69.99,
    genre: "fps",
  },
  star_wars_jedi_survior: {
    src: starwarjedisurvior,
    alt: "star wars jedi survivor",
    title: "Star Wars Jedi Survivor",
    price: 49.99,
    genre: "action",
  },
  the_last_of_us_remake: {
    src: thelastofusremake,
    alt: "the last of us remake",
    title: "The Last of Us Remake",
    price: 49.99,
    genre: "action",
  },
  the_witcher_3: {
    src: thewitcher3,
    alt: "the witcher 3",
    title: "The Witcher 3",
    price: 19.99,
    genre: "open_world",
  },
  tiny_tina_wonderland: {
    src: tinytinawonderland,
    alt: "tiny tina wonderlands",
    title: "Tiny Tina Wonderlands",
    price: 9.99,
    genre: "action",
  },
  yakuza_like_a_dragon: {
    src: yakuzalikeadragon,
    alt: "yakuza like a dragon",
    title: "Yakuza Like a Dragon",
    price: 39.99,
    genre: "action",
  },
};
export default games;
