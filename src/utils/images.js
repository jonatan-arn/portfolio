import truc from "../assets/image/truc.png";
import onfood from "../assets/image/onfood.png";
const images = new Map();

images.set("truc.png", truc);
images.set("onfood.png", onfood);

export const getImage = (name) => {
  return images.get(name);
};
