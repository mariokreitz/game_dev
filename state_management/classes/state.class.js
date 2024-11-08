/**
 * Enumeration of player states.
 * @enum {number}
 */
export const states = {
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1,
  SITTING_LEFT: 2,
  SITTING_RIGHT: 3,
  RUNNING_LEFT: 4,
  RUNNING_RIGHT: 5,
  JUMPING_LEFT: 6,
  JUMPING_RIGHT: 7,
  FALLING_LEFT: 8,
  FALLING_RIGHT: 9,
};

/**
 * Base class for a player state.
 * @class
 */
class State {
  /**
   * @param {string} state - The name of the state.
   */
  constructor(state) {
    this.state = state;
  }
}

/**
 * Class representing the standing left state.
 * @class
 * @extends {State}
 */
export class StandingLeft extends State {
  /**
   * @param {object} player - The player instance.
   */
  constructor(player) {
    super("STANDING LEFT");
    this.player = player;
  }

  /**
   * Enters the standing left state.
   */
  enter() {
    this.player.frameY = 1;
    this.player.speed = 0;
    this.player.maxFrame = 6;
  }

  /**
   * Handles input for the standing left state.
   * @param {string} input - The input command.
   */
  handleInput(input) {
    if (input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
    else if (input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
    else if (input === "PRESS down") this.player.setState(states.SITTING_LEFT);
    else if (input === "PRESS up") this.player.setState(states.JUMPING_LEFT);
  }
}

/**
 * Class representing the standing right state.
 * @class
 * @extends {State}
 */
export class StandinRight extends State {
  /**
   * @param {object} player - The player instance.
   */
  constructor(player) {
    super("STANDING RIGHT");
    this.player = player;
  }

  /**
   * Enters the standing right state.
   */
  enter() {
    this.player.frameY = 0;
    this.player.speed = 0;
    this.player.maxFrame = 6;
  }

  /**
   * Handles input for the standing right state.
   * @param {string} input - The input command.
   */
  handleInput(input) {
    if (input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
    else if (input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
    else if (input === "PRESS down") this.player.setState(states.SITTING_RIGHT);
    else if (input === "PRESS up") this.player.setState(states.JUMPING_RIGHT);
  }
}

/**
 * Class representing the sitting left state.
 * @class
 * @extends {State}
 */
export class SittingLeft extends State {
  /**
   * @param {object} player - The player instance.
   */
  constructor(player) {
    super("SITTING LEFT");
    this.player = player;
  }

  /**
   * Enters the sitting left state.
   */
  enter() {
    this.player.frameY = 9;
    this.player.speed = 0;
    this.player.maxFrame = 4;
  }

  /**
   * Handles input for the sitting left state.
   * @param {string} input - The input command.
   */
  handleInput(input) {
    if (input === "PRESS right") this.player.setState(states.SITTING_RIGHT);
    else if (input === "RELEASE down") this.player.setState(states.STANDING_LEFT);
  }
}

/**
 * Class representing the sitting right state.
 * @class
 * @extends {State}
 */
export class SittingRight extends State {
  /**
   * @param {object} player - The player instance.
   */
  constructor(player) {
    super("SITTING RIGHT");
    this.player = player;
  }

  /**
   * Enters the sitting right state.
   */
  enter() {
    this.player.frameY = 8;
    this.player.speed = 0;
    this.player.maxFrame = 4;
  }

  /**
   * Handles input for the sitting right state.
   * @param {string} input - The input command.
   */
  handleInput(input) {
    if (input === "PRESS left") this.player.setState(states.SITTING_LEFT);
    else if (input === "RELEASE down") this.player.setState(states.STANDING_RIGHT);
  }
}

/**
 * Class representing the running left state.
 * @class
 * @extends {State}
 */
export class RunningLeft extends State {
  /**
   * @param {object} player - The player instance.
   */
  constructor(player) {
    super("RUNNING LEFT");
    this.player = player;
  }

  /**
   * Enters the running left state.
   */
  enter() {
    this.player.frameY = 7;
    this.player.speed = -this.player.maxSpeed;
    this.player.maxFrame = 8;
  }

  /**
   * Handles input for the running left state.
   * @param {string} input - The input command.
   */
  handleInput(input) {
    if (input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
    else if (input === "RELEASE left") this.player.setState(states.STANDING_LEFT);
    else if (input === "PRESS up") this.player.setState(states.JUMPING_LEFT);
    else if (input === "PRESS down") this.player.setState(states.SITTING_LEFT);
  }
}

/**
 * Class representing the running right state.
 * @class
 * @extends {State}
 */
export class RunningRight extends State {
  /**
   * @param {object} player - The player instance.
   */
  constructor(player) {
    super("RUNNING RIGHT");
    this.player = player;
  }

  /**
   * Enters the running right state.
   */
  enter() {
    this.player.frameY = 6;
    this.player.speed = this.player.maxSpeed;
    this.player.maxFrame = 8;
  }

  /**
   * Handles input for the running right state.
   * @param {string} input - The input command.
   */
  handleInput(input) {
    if (input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
    else if (input === "RELEASE right") this.player.setState(states.STANDING_RIGHT);
    else if (input === "PRESS up") this.player.setState(states.JUMPING_RIGHT);
    else if (input === "PRESS down") this.player.setState(states.SITTING_RIGHT);
  }
}

/**
 * Class representing the jumping left state.
 * @class
 * @extends {State}
 */
export class JumpingLeft extends State {
  /**
   * @param {object} player - The player instance.
   */
  constructor(player) {
    super("JUMPING LEFT");
    this.player = player;
  }

  /**
   * Enters the jumping left state.
   */
  enter() {
    this.player.frameY = 3;
    if (this.player.onGround()) this.player.vy -= 40;
    this.player.speed = -this.player.maxSpeed * 0.5;
    this.player.maxFrame = 6;
  }

  /**
   * Handles input for the jumping left state.
   * @param {string} input - The input command.
   */
  handleInput(input) {
    if (input === "PRESS right") this.player.setState(states.JUMPING_RIGHT);
    else if (this.player.onGround()) this.player.setState(states.STANDING_LEFT);
    else if (this.player.vy > 0) this.player.setState(states.FALLING_LEFT);
  }
}

/**
 * Class representing the jumping right state.
 * @class
 * @extends {State}
 */
export class JumpingRight extends State {
  /**
   * @param {object} player - The player instance.
   */
  constructor(player) {
    super("JUMPING RIGHT");
    this.player = player;
  }

  /**
   * Enters the jumping right state.
   */
  enter() {
    this.player.frameY = 2;
    if (this.player.onGround()) this.player.vy -= 40;
    this.player.speed = this.player.maxSpeed * 0.5;
    this.player.maxFrame = 6;
  }

  /**
   * Handles input for the jumping right state.
   * @param {string} input - The input command.
   */
  handleInput(input) {
    if (input === "PRESS left") this.player.setState(states.JUMPING_LEFT);
    else if (this.player.onGround()) this.player.setState(states.STANDING_RIGHT);
    else if (this.player.vy > 0) this.player.setState(states.FALLING_RIGHT);
  }
}

/**
 * Class representing the falling left state.
 * @class
 * @extends {State}
 */
export class FallingLeft extends State {
  /**
   * @param {object} player - The player instance.
   */
  constructor(player) {
    super("FALLING LEFT");
    this.player = player;
  }

  /**
   * Enters the falling left state.
   */
  enter() {
    this.player.frameY = 5;
    this.player.maxFrame = 6;
  }

  /**
   * Handles input for the falling left state.
   * @param {string} input - The input command.
   */
  handleInput(input) {
    if (input === "PRESS right") this.player.setState(states.FALLING_RIGHT);
    else if (this.player.onGround()) this.player.setState(states.STANDING_LEFT);
  }
}

/**
 * Class representing the falling right state.
 * @class
 * @extends {State}
 */
export class FallingRight extends State {
  /**
   * @param {object} player - The player instance.
   */
  constructor(player) {
    super("FALLING LEFT");
    this.player = player;
  }

  /**
   * Enters the falling right state.
   */
  enter() {
    this.player.frameY = 4;
    this.player.maxFrame = 6;
  }

  /**
   * Handles input for the falling right state.
   * @param {string} input - The input command.
   */
  handleInput(input) {
    if (input === "PRESS left") this.player.setState(states.FALLING_LEFT);
    else if (this.player.onGround()) this.player.setState(states.STANDING_RIGHT);
  }
}
