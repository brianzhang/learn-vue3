import { Application } from 'pixi.js';
import { GAME_CONFIG } from './utils/constate'

const game = new Application(GAME_CONFIG)

document.body.appendChild(game.view)

export function getCanvasRootContainer() {
  return game.stage
}

export function getGame() {
  return game;
}