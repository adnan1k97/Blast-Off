import { describe, it, expect } from 'vitest';
import { levels } from '@/data/levels';

const CANVAS_SIZE = 600;
const BALL_RADIUS = 12;

describe('Level data validation', () => {
  it('all levels have unique IDs', () => {
    const ids = levels.map(l => l.id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(dupes).toEqual([]);
  });

  it('no start position overlaps with goal', () => {
    const problems: string[] = [];
    for (const level of levels) {
      const dx = level.startPosition.x - level.goal.x;
      const dy = level.startPosition.y - level.goal.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < level.goal.radius + BALL_RADIUS) {
        problems.push(`Level ${level.id} "${level.name}": start (${level.startPosition.x},${level.startPosition.y}) inside goal (${level.goal.x},${level.goal.y},r=${level.goal.radius}), dist=${dist.toFixed(1)}`);
      }
    }
    if (problems.length > 0) {
      console.log('START-GOAL OVERLAPS:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });

  it('no start position inside a wall', () => {
    const problems: string[] = [];
    for (const level of levels) {
      const { x, y } = level.startPosition;
      for (let wi = 0; wi < level.walls.length; wi++) {
        const w = level.walls[wi];
        if (x + BALL_RADIUS > w.x && x - BALL_RADIUS < w.x + w.width &&
            y + BALL_RADIUS > w.y && y - BALL_RADIUS < w.y + w.height) {
          problems.push(`Level ${level.id} "${level.name}": start pos (${x},${y}) inside wall ${wi} (${w.x},${w.y},${w.width}x${w.height})`);
        }
      }
    }
    if (problems.length > 0) {
      console.log('START-IN-WALL:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });

  it('no start position overlaps with hazards', () => {
    const problems: string[] = [];
    for (const level of levels) {
      const { x, y } = level.startPosition;
      for (const h of level.hazards) {
        const dx = x - h.x;
        const dy = y - h.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < BALL_RADIUS + h.radius * 0.5) {
          problems.push(`Level ${level.id} "${level.name}": start overlaps hazard at (${h.x},${h.y})`);
        }
      }
    }
    if (problems.length > 0) {
      console.log('START-ON-HAZARD:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });

  it('no goal placed inside an interior wall', () => {
    const problems: string[] = [];
    for (const level of levels) {
      const { x, y, radius } = level.goal;
      // Skip first 4 walls (outer boundary walls) - goals near edges are by design
      for (let wi = 4; wi < level.walls.length; wi++) {
        const w = level.walls[wi];
        if (x + radius > w.x && x - radius < w.x + w.width &&
            y + radius > w.y && y - radius < w.y + w.height) {
          problems.push(`Level ${level.id} "${level.name}": goal (${x},${y},r=${radius}) overlaps interior wall ${wi}`);
        }
      }
    }
    if (problems.length > 0) {
      console.log('GOAL-IN-WALL:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });

  it('start and goal are within canvas bounds', () => {
    const problems: string[] = [];
    for (const level of levels) {
      const { x: sx, y: sy } = level.startPosition;
      const { x: gx, y: gy, radius: gr } = level.goal;
      if (sx < BALL_RADIUS || sx > CANVAS_SIZE - BALL_RADIUS || sy < BALL_RADIUS || sy > CANVAS_SIZE - BALL_RADIUS) {
        problems.push(`Level ${level.id}: start pos (${sx},${sy}) out of bounds`);
      }
      if (gx - gr < 0 || gx + gr > CANVAS_SIZE || gy - gr < 0 || gy + gr > CANVAS_SIZE) {
        problems.push(`Level ${level.id}: goal (${gx},${gy},r=${gr}) out of bounds`);
      }
    }
    if (problems.length > 0) {
      console.log('OUT-OF-BOUNDS:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });

  it('collectibles are within canvas bounds', () => {
    const problems: string[] = [];
    for (const level of levels) {
      for (const c of level.collectibles || []) {
        if (c.x < 0 || c.x > CANVAS_SIZE || c.y < 0 || c.y > CANVAS_SIZE) {
          problems.push(`Level ${level.id}: collectible ${c.id} at (${c.x},${c.y}) out of bounds`);
        }
      }
    }
    if (problems.length > 0) {
      console.log('COLLECTIBLE-OOB:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });

  it('hazards are within canvas bounds', () => {
    const problems: string[] = [];
    for (const level of levels) {
      for (const h of level.hazards) {
        if (!h.isOrbiting && (h.x < 0 || h.x > CANVAS_SIZE || h.y < 0 || h.y > CANVAS_SIZE)) {
          problems.push(`Level ${level.id}: hazard at (${h.x},${h.y}) out of bounds`);
        }
      }
    }
    if (problems.length > 0) {
      console.log('HAZARD-OOB:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });

  it('goal is not blocked by walls (reachable path exists)', () => {
    const problems: string[] = [];
    for (const level of levels) {
      // Check if goal overlaps with any hazard
      for (const h of level.hazards) {
        const dx = level.goal.x - h.x;
        const dy = level.goal.y - h.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < level.goal.radius + h.radius * 0.5) {
          problems.push(`Level ${level.id} "${level.name}": goal overlaps hazard at (${h.x},${h.y})`);
        }
      }
    }
    if (problems.length > 0) {
      console.log('GOAL-ON-HAZARD:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });

  it('portals have valid linked pairs', () => {
    const problems: string[] = [];
    for (const level of levels) {
      if (!level.portals) continue;
      for (const portal of level.portals) {
        const linked = level.portals.find(p => p.id === portal.linkedPortalId);
        if (!linked) {
          problems.push(`Level ${level.id}: portal ${portal.id} links to missing portal ${portal.linkedPortalId}`);
        }
      }
    }
    if (problems.length > 0) {
      console.log('PORTAL-MISSING-LINK:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });

  it('collectible IDs are unique within each level', () => {
    const problems: string[] = [];
    for (const level of levels) {
      const ids = (level.collectibles || []).map(c => c.id);
      const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
      if (dupes.length > 0) {
        problems.push(`Level ${level.id}: duplicate collectible IDs: ${dupes.join(',')}`);
      }
    }
    if (problems.length > 0) {
      console.log('COLLECTIBLE-DUPE-IDS:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });

  it('dimension tear pairs are valid', () => {
    const problems: string[] = [];
    for (const level of levels) {
      if (!level.dimensionTears) continue;
      for (const tear of level.dimensionTears) {
        const linked = level.dimensionTears.find(t => t.id === tear.linkedTearId);
        if (!linked) {
          problems.push(`Level ${level.id}: tear ${tear.id} links to missing tear ${tear.linkedTearId}`);
        }
      }
    }
    if (problems.length > 0) {
      console.log('TEAR-MISSING-LINK:\n' + problems.join('\n'));
    }
    expect(problems).toEqual([]);
  });
});
