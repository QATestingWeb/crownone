import * as THREE from 'three';

const BEVEL = { bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.04, bevelSegments: 3, curveSegments: 32 };

const circlePath = (radius: number) => {
  const path = new THREE.Path();
  path.absarc(0, 0, radius, 0, Math.PI * 2, true);
  return path;
};

// Spur gear: alternating root/tip points around the circle, with a centre hole.
export function createGearGeometry(teeth = 12, outer = 1, root = 0.8, hole = 0.3, depth = 0.3) {
  const shape = new THREE.Shape();
  const step = (Math.PI * 2) / teeth;

  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const points: [number, number][] = [
      [root, a],
      [outer, a + step * 0.2],
      [outer, a + step * 0.45],
      [root, a + step * 0.65],
      [root, a + step * 0.85],
    ];
    points.forEach(([r, angle], j) => {
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0 && j === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    });
  }
  shape.closePath();
  shape.holes.push(circlePath(hole));

  const geometry = new THREE.ExtrudeGeometry(shape, { depth, ...BEVEL });
  geometry.center();
  return geometry;
}

// Hex nut with a threaded-looking centre hole.
export function createNutGeometry(radius = 1, hole = 0.5, depth = 0.55) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  shape.holes.push(circlePath(hole));

  const geometry = new THREE.ExtrudeGeometry(shape, { depth, ...BEVEL });
  geometry.center();
  return geometry;
}

export function createBoltGeometries() {
  const head = new THREE.CylinderGeometry(0.55, 0.55, 0.35, 6);
  head.translate(0, 0.9, 0);
  const shaft = new THREE.CylinderGeometry(0.25, 0.25, 1.8, 24);
  return { head, shaft };
}
