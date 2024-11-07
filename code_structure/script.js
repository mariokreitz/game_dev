import { Game } from "./classes/game.class.js";

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 800;

  let lastTime = 0;

  const game = new Game(ctx, canvas.width, canvas.height);

  function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.update(deltaTime);
    game.draw();

    requestAnimationFrame(animate);
  }

  animate(0);
});
