import Player from "./classes/player.class.js";
import InputHandler from "./classes/input.class.js";

window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.classList.add("d_none");

  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height);
  player.draw(ctx);
  const input = new InputHandler();
  console.log(input.lastKey);
});
