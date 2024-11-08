export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameHeight;
    this.gameHeight = gameHeight;
    this.state = [];
    this.currentState = this.state[0];
    this.image = document.getElementById("dogImage");
    this.width = 200;
    this.height = 181.83;
    this.x = 0;
    this.y = 0;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y);
  }
}
