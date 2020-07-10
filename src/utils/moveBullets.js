import { GAME_CONFIG } from "./constate";

const bulletSpeed = 7;
const topLine = -100;
const bottomLine = GAME_CONFIG.height + 50;

const isOverBorder = (val) => {
  if (val > bottomLine) {
    return true;
  }

  if (val < topLine) {
    return true;
  }

  return false;
};

export const moveBullets = (bullets) => {
  bullets.forEach((bullet, index) => {
    const dir = bullet.dir;
    bullet.y += bulletSpeed * dir;
    if (isOverBorder(bullet.y)) {
      bullets.splice(index, 1);
    }
  });
};