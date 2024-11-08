import {
  StandingLeft,
  StandinRight,
  SittingLeft,
  SittingRight,
  RunningLeft,
  RunningRight,
  JumpingLeft,
  JumpingRight,
  FallingLeft,
  FallingRight,
} from "./state.class.js";

/**
 * @class Player
 * @description The player class that handles player movement and state.
 * @param {number} gameWidth - The width of the game.
 * @param {number} gameHeight - The height of the game.
 */
export default class Player {
  /**
   * @constructor
   * @param {number} gameWidth - The width of the game.
   * @param {number} gameHeight - The height of the game.
   */
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.states = [
      new StandingLeft(this),
      new StandinRight(this),
      new SittingLeft(this),
      new SittingRight(this),
      new RunningLeft(this),
      new RunningRight(this),
      new JumpingLeft(this),
      new JumpingRight(this),
      new FallingLeft(this),
      new FallingRight(this),
    ];
    this.currentState = this.states[1];
    this.image = document.getElementById("dogImage");
    this.width = 200;
    this.height = 181.83;
    this.x = this.gameWidth / 2 - this.width / 2;
    this.y = this.gameHeight - this.height;
    this.vy = 0;
    this.weight = 1;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 6;
    this.speed = 0;
    this.maxSpeed = 15;
    this.fps = 30;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;
  }

  /**
   * @function draw
   * @description Draw the player on the canvas.
   * @param {CanvasRenderingContext2D} ctx - The canvas context.
   * @param {number} deltaTime - The time since the last frame.
   */
  draw(ctx, deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
      this.frameTimer = 0;
    } else this.frameTimer += deltaTime;
    ctx.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  /**
   * @function update
   * @description Update the player position and state.
   * @param {Object} input - The input from the user.
   */
  update(input) {
    this.currentState.handleInput(input);
    //horizontal movement
    this.x += this.speed;
    if (this.x <= 0) this.x = 0;
    else if (this.x >= this.gameWidth - this.width) this.x = this.gameWidth - this.width;

    //vertical movement
    this.y += this.vy;
    if (!this.onGround()) this.vy += this.weight;
    else this.vy = 0;

    //fallback for onGround check
    if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
  }

  /**
   * @function setState
   * @description Set the player state.
   * @param {number} state - The index of the state to set.
   */
  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }

  /**
   * @function onGround
   * @description Check if the player is on the ground.
   * @returns {boolean} True if the player is on the ground.
   */
  onGround() {
    return this.y >= this.gameHeight - this.height;
  }
}
