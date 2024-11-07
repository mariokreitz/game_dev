/**
 * Import all enemy classes
 * @module
 * @private
 * @requires ./enemies.class.js
 */
import { Worm, Ghost, Spider } from "./enemies.class.js";

/**
 * @class Game
 * @classdesc Main game class that handles game logic and rendering
 * @param {CanvasRenderingContext2D} ctx - The canvas context
 * @param {number} width - The width of the canvas
 * @param {number} height - The height of the canvas
 */
export class Game {
  /**
   * @constructor
   * @param {CanvasRenderingContext2D} ctx - The canvas context
   * @param {number} width - The width of the canvas
   * @param {number} height - The height of the canvas
   */
  constructor(ctx, width, height) {
    /**
     * The canvas context
     * @type {CanvasRenderingContext2D}
     */
    this.ctx = ctx;

    /**
     * The width of the canvas
     * @type {number}
     */
    this.width = width;

    /**
     * The height of the canvas
     * @type {number}
     */
    this.height = height;

    /**
     * The array of enemies
     * @type {Array.<Enemy>}
     */
    this.enemies = [];

    /**
     * The interval between enemy spawns
     * @type {number}
     */
    this.enemyInterval = 500;

    /**
     * The timer for the enemy spawn interval
     * @type {number}
     */
    this.enemyTimer = 0;

    /**
     * The types of enemies to spawn
     * @type {Array.<string>}
     */
    this.enemyTypes = ["worm", "ghost", "spider"];
  }

  /**
   * Updates the game state
   * @param {number} deltaTime - The time elapsed since the last frame
   */
  update(deltaTime) {
    this.enemies = this.enemies.filter((object) => !object.markedForDeletion);
    if (this.enemyTimer > this.enemyInterval) {
      this._addNewEnemy();
      this.enemyTimer = 0;
    } else this.enemyTimer += deltaTime;

    this.enemies.forEach((object) => object.update(deltaTime));
  }

  /**
   * Renders all game elements onto the canvas
   */
  draw() {
    this.enemies.forEach((object) => object.draw(this.ctx));
  }

  /**
   * Spawns a new enemy
   * @private
   * @returns {void}
   */
  _addNewEnemy() {
    const randomEnemy = this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
    switch (randomEnemy) {
      case "worm":
        this.enemies.push(new Worm(this));
        break;
      case "ghost":
        this.enemies.push(new Ghost(this));
        break;
      case "spider":
        this.enemies.push(new Spider(this));
        break;
    }
  }
}
