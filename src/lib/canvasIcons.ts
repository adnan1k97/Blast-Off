/**
 * Canvas-drawn icons to replace emoji text rendering.
 * Each function draws an icon centered at (0, 0) within a given size.
 */

export function drawShieldIcon(ctx: CanvasRenderingContext2D, size: number, color = '#fff') {
  const s = size / 2;
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo(s * 0.8, -s * 0.7, s, -s * 0.3, s, 0);
  ctx.bezierCurveTo(s, s * 0.5, s * 0.5, s * 0.85, 0, s);
  ctx.bezierCurveTo(-s * 0.5, s * 0.85, -s, s * 0.5, -s, 0);
  ctx.bezierCurveTo(-s, -s * 0.3, -s * 0.8, -s * 0.7, 0, -s);
  ctx.closePath();
  ctx.fill();
  // Inner highlight
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.65);
  ctx.bezierCurveTo(s * 0.5, -s * 0.45, s * 0.6, -s * 0.15, s * 0.6, s * 0.05);
  ctx.bezierCurveTo(s * 0.6, s * 0.35, s * 0.3, s * 0.55, 0, s * 0.65);
  ctx.bezierCurveTo(-s * 0.3, s * 0.55, -s * 0.6, s * 0.35, -s * 0.6, s * 0.05);
  ctx.bezierCurveTo(-s * 0.6, -s * 0.15, -s * 0.5, -s * 0.45, 0, -s * 0.65);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export function drawLightningIcon(ctx: CanvasRenderingContext2D, size: number, color = '#fff') {
  const s = size / 2;
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(s * 0.15, -s);
  ctx.lineTo(-s * 0.5, s * 0.1);
  ctx.lineTo(-s * 0.05, s * 0.1);
  ctx.lineTo(-s * 0.15, s);
  ctx.lineTo(s * 0.5, -s * 0.1);
  ctx.lineTo(s * 0.05, -s * 0.1);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export function drawMultiplierIcon(ctx: CanvasRenderingContext2D, size: number, color = '#fff') {
  ctx.save();
  ctx.fillStyle = color;
  ctx.font = `bold ${size}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('×2', 0, 0);
  ctx.restore();
}

export function drawWarningIcon(ctx: CanvasRenderingContext2D, size: number, color = '#fff') {
  const s = size / 2;
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.lineTo(s, s);
  ctx.lineTo(-s, s);
  ctx.closePath();
  ctx.fill();
  // Exclamation mark
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(-s * 0.1, -s * 0.4, s * 0.2, s * 0.7);
  ctx.beginPath();
  ctx.arc(0, s * 0.6, s * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function drawSnowflakeIcon(ctx: CanvasRenderingContext2D, size: number, color = '#fff') {
  const s = size / 2;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 0.1;
  ctx.lineCap = 'round';
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    ctx.save();
    ctx.rotate(angle);
    // Main arm
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -s);
    ctx.stroke();
    // Branch
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.55);
    ctx.lineTo(s * 0.25, -s * 0.75);
    ctx.moveTo(0, -s * 0.55);
    ctx.lineTo(-s * 0.25, -s * 0.75);
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();
}

export function drawWindIcon(ctx: CanvasRenderingContext2D, size: number, color = '#fff') {
  const s = size / 2;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 0.1;
  ctx.lineCap = 'round';
  // Three curved wind lines
  for (let i = -1; i <= 1; i++) {
    const y = i * s * 0.45;
    ctx.beginPath();
    ctx.moveTo(-s, y);
    ctx.quadraticCurveTo(0, y - s * 0.2, s * (0.6 + i * 0.15), y - s * 0.3);
    ctx.stroke();
  }
  ctx.restore();
}

export function drawRockIcon(ctx: CanvasRenderingContext2D, size: number, color = '#fff') {
  const s = size / 2;
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(-s * 0.3, -s);
  ctx.lineTo(s * 0.5, -s * 0.7);
  ctx.lineTo(s, -s * 0.1);
  ctx.lineTo(s * 0.7, s * 0.6);
  ctx.lineTo(s * 0.1, s);
  ctx.lineTo(-s * 0.6, s * 0.8);
  ctx.lineTo(-s, s * 0.2);
  ctx.lineTo(-s * 0.8, -s * 0.5);
  ctx.closePath();
  ctx.fill();
  // Crack detail
  ctx.strokeStyle = 'rgba(0,0,0,0.3)';
  ctx.lineWidth = size * 0.06;
  ctx.beginPath();
  ctx.moveTo(-s * 0.2, -s * 0.4);
  ctx.lineTo(s * 0.1, s * 0.1);
  ctx.lineTo(-s * 0.1, s * 0.5);
  ctx.stroke();
  ctx.restore();
}

export function drawArrowIcon(ctx: CanvasRenderingContext2D, size: number, direction: string, color = '#fff') {
  const s = size / 2;
  ctx.save();
  ctx.fillStyle = color;
  const angles: Record<string, number> = { right: 0, down: Math.PI / 2, left: Math.PI, up: -Math.PI / 2 };
  ctx.rotate(angles[direction] || 0);
  ctx.beginPath();
  ctx.moveTo(s, 0);
  ctx.lineTo(s * 0.1, -s * 0.6);
  ctx.lineTo(s * 0.1, -s * 0.25);
  ctx.lineTo(-s, -s * 0.25);
  ctx.lineTo(-s, s * 0.25);
  ctx.lineTo(s * 0.1, s * 0.25);
  ctx.lineTo(s * 0.1, s * 0.6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/** Draw the appropriate power-up icon on canvas */
export function drawPowerUpIcon(ctx: CanvasRenderingContext2D, type: string, size: number, color = '#fff') {
  switch (type) {
    case 'shield': drawShieldIcon(ctx, size, color); break;
    case 'speed': drawLightningIcon(ctx, size, color); break;
    case 'multiplier': drawMultiplierIcon(ctx, size, color); break;
  }
}

/** Draw a warning + directional indicator for wind/blizzard/wave */
export function drawDirectionalWarning(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  direction: string,
  variant: 'wind' | 'snow' | 'wave' | 'rock',
  size = 16,
) {
  ctx.save();
  ctx.translate(x, y);
  // Warning triangle
  drawWarningIcon(ctx, size * 0.8, ctx.fillStyle as string);
  // Directional arrow next to it
  ctx.translate(size * 1.1, 0);
  if (variant === 'snow') {
    drawSnowflakeIcon(ctx, size * 0.7, ctx.fillStyle as string);
  } else if (variant === 'rock') {
    drawRockIcon(ctx, size * 0.7, ctx.fillStyle as string);
  } else {
    drawWindIcon(ctx, size * 0.7, ctx.fillStyle as string);
  }
  ctx.restore();
}
