/**
 * @module
 * @description State management
 * @requires ./classes/player.class.js
 * @requires ./classes/input.class.js
 * @requires ./classes/utils.class.js
 */
import Player from "./classes/player.class.js";
/**
 * Player class
 * @type {Player}
 */
import InputHandler from "./classes/input.class.js";
/**
 * InputHandler class
 * @type {InputHandler}
 */
import { drawStatusText } from "./classes/utils.class.js";
/**
 * drawStatusText function
 * @type {function}
 * @param {CanvasRenderingContext2D} ctx - The canvas context
 * @param {InputHandler} input - The input handler
 * @param {Player} player - The player
 * @description Draws the status text on the canvas
 * @since 1.0.0
 */

window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.classList.add("d_none");

  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height);
  const input = new InputHandler();

  let lastTime = 0;

  /**
   * The animate function
   * @type {function}
   * @param {number} timeStamp - The timestamp
   * @description Animates the game
   */
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update(input.lastKey);
    player.draw(ctx, deltaTime);
    drawStatusText(ctx, input, player);
    requestAnimationFrame(animate);
  }
  animate(0);
});
