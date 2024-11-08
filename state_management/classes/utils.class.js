/**
 * Draws the status text on the canvas.
 * @param {CanvasRenderingContext2D} ctx - The 2D drawing context of the canvas.
 * @param {Object} input - The input object with the last key.
 * @param {Player} player - The player object with the current state.
 */
export function drawStatusText(ctx, input, player) {
  ctx.font = "20px Helvetica";
  ctx.fillText(`Last input: ${input.lastKey}`, 20, 50);
  ctx.fillText(`Active state: ${player.currentState.state}`, 20, 80);
}
