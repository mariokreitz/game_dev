/**
 * Class representing an enemy
 * @class
 */
export class Enemy {
  /**
   * Creates an enemy
   * @param {Game} game - The game object
   */
  constructor(game) {
    /**
     * The game object
     * @type {Game}
     */
    this.game = game;

    /**
     * Whether the enemy is marked for deletion
     * @type {boolean}
     */
    this.markedForDeletion = false;

    /**
     * The current frame of the enemy's animation
     * @type {number}
     */
    this.frameX;

    /**
     * The maximum number of frames in the enemy's animation
     * @type {number}
     */
    this.maxFrame = 5;

    /**
     * The interval between frames in the enemy's animation
     * @type {number}
     */
    this.frameInterval = 100;

    /**
     * The timer for the enemy's animation
     * @type {number}
     */
    this.frameTimer = 0;
  }

  /**
   * Updates the enemy's position and animation
   * @param {number} deltaTime - The time elapsed since the last frame
   */
  update(deltaTime) {
    this.x -= this.vx * deltaTime;
    if (this.x < 0 - this.width) this.markedForDeletion = true;
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;

      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }

  /**
   * Draws the enemy on the canvas
   * @param {CanvasRenderingContext2D} ctx - The canvas context
   */
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

/**
 * Class representing a worm enemy
 * @class
 * @extends {Enemy}
 */
export class Worm extends Enemy {
  /**
   * Creates a worm enemy
   * @param {Game} game - The game object
   */
  constructor(game) {
    super(game);
    /**
     * The width of the worm's sprite
     * @type {number}
     */
    this.spriteWidth = 229;

    /**
     * The height of the worm's sprite
     * @type {number}
     */
    this.spriteHeight = 171;

    /**
     * The width of the worm
     * @type {number}
     */
    this.width = this.spriteWidth / 2;

    /**
     * The height of the worm
     * @type {number}
     */
    this.height = this.spriteHeight / 2;

    /**
     * The x position of the worm
     * @type {number}
     */
    this.x = this.game.width;

    /**
     * The y position of the worm
     * @type {number}
     */
    this.y = this.game.height - this.height;

    /**
     * The image of the worm
     * @type {HTMLImageElement}
     */
    this.image = worm;

    /**
     * The velocity of the worm
     * @type {number}
     */
    this.vx = Math.random() * 0.1 + 0.1;
  }
}

/**
 * Class representing a ghost enemy
 * @class
 * @extends {Enemy}
 */
export class Ghost extends Enemy {
  /**
   * Creates a ghost enemy
   * @param {Game} game - The game object
   */
  constructor(game) {
    super(game);
    /**
     * The width of the ghost's sprite
     * @type {number}
     */
    this.spriteWidth = 261;

    /**
     * The height of the ghost's sprite
     * @type {number}
     */
    this.spriteHeight = 209;

    /**
     * The width of the ghost
     * @type {number}
     */
    this.width = this.spriteWidth / 2;

    /**
     * The height of the ghost
     * @type {number}
     */
    this.height = this.spriteHeight / 2;

    /**
     * The x position of the ghost
     * @type {number}
     */
    this.x = this.game.width;

    /**
     * The y position of the ghost
     * @type {number}
     */
    this.y = Math.random() * this.game.height * 0.6;

    /**
     * The image of the ghost
     * @type {HTMLImageElement}
     */
    this.image = ghost;

    /**
     * The velocity of the ghost
     * @type {number}
     */
    this.vx = Math.random() * 0.2 + 0.1;

    /**
     * The angle of the ghost's movement
     * @type {number}
     */
    this.angle = 0;

    /**
     * The curve of the ghost's movement
     * @type {number}
     */
    this.curve = Math.random() * 3;
  }

  /**
   * Updates the ghost's position and animation
   * @param {number} deltaTime - The time elapsed since the last frame
   */
  update(deltaTime) {
    super.update(deltaTime);
    this.y += Math.sin(this.angle) * this.curve;
    this.angle += 0.04;
  }

  /**
   * Draws the ghost on the canvas
   * @param {CanvasRenderingContext2D} ctx - The canvas context
   */
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = 0.7;
    super.draw(ctx);
    ctx.restore();
  }
}

/**
 * Class representing a spider enemy
 * @class
 * @extends {Enemy}
 */
export class Spider extends Enemy {
  /**
   * Creates a spider enemy
   * @param {Game} game - The game object
   */
  constructor(game) {
    super(game);
    /**
     * The width of the spider's sprite
     * @type {number}
     */
    this.spriteWidth = 310;

    /**
     * The height of the spider's sprite
     * @type {number}
     */
    this.spriteHeight = 175;

    /**
     * The width of the spider
     * @type {number}
     */
    this.width = this.spriteWidth / 2;

    /**
     * The height of the spider
     * @type {number}
     */
    this.height = this.spriteHeight / 2;

    /**
     * The x position of the spider
     * @type {number}
     */
    this.x = Math.random() * this.game.width;

    /**
     * The y position of the spider
     * @type {number}
     */
    this.y = 0 - this.height;

    /**
     * The image of the spider
     * @type {HTMLImageElement}
     */
    this.image = spider;

    /**
     * The velocity of the spider
     * @type {number}
     */
    this.vx = 0;

    /**
     * The vertical velocity of the spider
     * @type {number}
     */
    this.vy = Math.random() * 0.1 + 0.1;

    /**
     * The maximum length of the spider's web
     * @type {number}
     */
    this.maxLength = Math.random() * this.game.height;
  }

  /**
   * Updates the spider's position and animation
   * @param {number} deltaTime - The time elapsed since the last frame
   */
  update(deltaTime) {
    super.update(deltaTime);
    if (this.y < 0 - this.height) this.markedForDeletion = true;
    this.y += this.vy * deltaTime;
    if (this.y > this.maxLength) this.vy *= -1;
  }

  /**
   * Draws the spider and its web on the canvas
   * @param {CanvasRenderingContext2D} ctx - The canvas context
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x + this.width * 0.5, 0);
    ctx.lineTo(this.x + this.width * 0.5, this.y + 10);
    ctx.stroke();
    super.draw(ctx);
  }
}
