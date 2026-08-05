import * as THREE from "three";

/** Overall proportions of the building box. */
export interface BuildingDimensions {
  floors: number;
  floorHeight: number;
  /** Wide facade (front/back), in the x direction. */
  width: number;
  /** Narrow facade (left/right), in the z direction. */
  depth: number;
}

/** How many window columns each pair of facades gets, per floor. */
export interface WindowLayout {
  /** Windows per floor on the front (+z) and back (-z) facades. */
  frontColumns: number;
  /** Windows per floor on the left (-x) and right (+x) facades. */
  sideColumns: number;
}

export interface BuildingStyle {
  color: THREE.ColorRepresentation;
  opacity: number;
}

export interface BuildingOptions {
  dimensions?: Partial<BuildingDimensions>;
  windows?: Partial<WindowLayout>;
  style?: Partial<BuildingStyle>;
  /** Cuts a door-height opening into one ground-floor window column. */
  showGroundFloorDoor?: boolean;
  /** Draws a thin plinth slab under the building footprint. */
  showBasePlate?: boolean;
}

const DEFAULT_DIMENSIONS: BuildingDimensions = {
  floors: 7,
  floorHeight: 1,
  width: 2.4,
  depth: 1.6,
};

const DEFAULT_WINDOWS: WindowLayout = {
  frontColumns: 2,
  sideColumns: 2,
};

const DEFAULT_STYLE: BuildingStyle = {
  color: "#ffffff",
  opacity: 0.9,
};

function pushSegment(
  points: number[],
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number
) {
  points.push(ax, ay, az, bx, by, bz);
}

/** Rectangle outline in a plane of constant z (front/back facades). */
function pushRectXY(
  points: number[],
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  z: number
) {
  pushSegment(points, xMin, yMin, z, xMax, yMin, z);
  pushSegment(points, xMax, yMin, z, xMax, yMax, z);
  pushSegment(points, xMax, yMax, z, xMin, yMax, z);
  pushSegment(points, xMin, yMax, z, xMin, yMin, z);
}

/** Rectangle outline in a plane of constant x (left/right facades). */
function pushRectZY(
  points: number[],
  zMin: number,
  zMax: number,
  yMin: number,
  yMax: number,
  x: number
) {
  pushSegment(points, x, yMin, zMin, x, yMin, zMax);
  pushSegment(points, x, yMin, zMax, x, yMax, zMax);
  pushSegment(points, x, yMax, zMax, x, yMax, zMin);
  pushSegment(points, x, yMax, zMin, x, yMin, zMin);
}

/** Rectangle outline in a horizontal plane of constant y (floor/roof/plate). */
function pushRectXZ(
  points: number[],
  xMin: number,
  xMax: number,
  zMin: number,
  zMax: number,
  y: number
) {
  pushSegment(points, xMin, y, zMin, xMax, y, zMin);
  pushSegment(points, xMax, y, zMin, xMax, y, zMax);
  pushSegment(points, xMax, y, zMax, xMin, y, zMax);
  pushSegment(points, xMin, y, zMax, xMin, y, zMin);
}

/** Diagonal cross-brace across a horizontal rectangle, to read as "closed". */
function pushCrossXZ(
  points: number[],
  xMin: number,
  xMax: number,
  zMin: number,
  zMax: number,
  y: number
) {
  pushSegment(points, xMin, y, zMin, xMax, y, zMax);
  pushSegment(points, xMax, y, zMin, xMin, y, zMax);
}

/** Evenly spaced window columns (with margins/gaps) across a span centered on 0. */
function computeColumns(
  count: number,
  span: number,
  marginRatio: number,
  gapRatio: number
): Array<[number, number]> {
  const margin = span * marginRatio;
  const gap = span * gapRatio;
  const usable = span - 2 * margin - gap * Math.max(count - 1, 0);
  const colWidth = usable / count;
  const columns: Array<[number, number]> = [];
  for (let i = 0; i < count; i++) {
    const start = -span / 2 + margin + i * (colWidth + gap);
    columns.push([start, start + colWidth]);
  }
  return columns;
}

/**
 * Builds a THREE.Group containing a single THREE.LineSegments wireframe of
 * a boxy multi-storey building: closed roof and floor (outline + cross
 * brace), a divider at every floor slab, a configurable window grid on all
 * four facades, an optional ground-floor door, and an optional base plinth.
 * Centered at the origin.
 */
export function buildWireframeBuilding(options: BuildingOptions = {}): THREE.Group {
  const { floors, floorHeight, width, depth } = {
    ...DEFAULT_DIMENSIONS,
    ...options.dimensions,
  };
  const { frontColumns, sideColumns } = { ...DEFAULT_WINDOWS, ...options.windows };
  const { color, opacity } = { ...DEFAULT_STYLE, ...options.style };
  const showGroundFloorDoor = options.showGroundFloorDoor ?? true;
  const showBasePlate = options.showBasePlate ?? true;

  const halfW = width / 2;
  const halfD = depth / 2;
  const height = floors * floorHeight;

  const points: number[] = [];

  // Outer shell: 4 vertical corner edges.
  const corners: Array<[number, number]> = [
    [-halfW, -halfD],
    [halfW, -halfD],
    [halfW, halfD],
    [-halfW, halfD],
  ];
  for (const [cx, cz] of corners) {
    pushSegment(points, cx, 0, cz, cx, height, cz);
  }

  // Closed floor and roof: outline + diagonal cross brace.
  pushRectXZ(points, -halfW, halfW, -halfD, halfD, 0);
  pushRectXZ(points, -halfW, halfW, -halfD, halfD, height);
  pushCrossXZ(points, -halfW, halfW, -halfD, halfD, 0);
  pushCrossXZ(points, -halfW, halfW, -halfD, halfD, height);

  // Window sizing.
  const windowMarginY = floorHeight * 0.18;
  const frontCols = computeColumns(frontColumns, width, 0.12, 0.06);
  const sideCols = computeColumns(sideColumns, depth, 0.16, 0.1);

  for (let floor = 0; floor < floors; floor++) {
    const floorBase = floor * floorHeight;

    // Floor slab divider (ground and roof already drawn above).
    if (floor > 0) {
      pushRectXZ(points, -halfW, halfW, -halfD, halfD, floorBase);
    }

    const windowY0 = floorBase + windowMarginY;
    const windowY1 = floorBase + floorHeight - windowMarginY;

    // Front (+z) and back (-z) facades.
    frontCols.forEach(([x0, x1], colIndex) => {
      const isDoor = showGroundFloorDoor && floor === 0 && colIndex === frontCols.length - 1;
      const doorY0 = floorBase; // door reaches all the way down to ground level
      pushRectXY(points, x0, x1, isDoor ? doorY0 : windowY0, windowY1, halfD);
      pushRectXY(points, x0, x1, windowY0, windowY1, -halfD);
    });

    // Left (-x) and right (+x) facades.
    for (const [z0, z1] of sideCols) {
      pushRectZY(points, z0, z1, windowY0, windowY1, halfW);
      pushRectZY(points, z0, z1, windowY0, windowY1, -halfW);
    }
  }

  // Optional thin plinth slab under the footprint.
  if (showBasePlate) {
    const plateMargin = Math.max(width, depth) * 0.18;
    const plateThickness = floorHeight * 0.08;
    const pxMin = -halfW - plateMargin;
    const pxMax = halfW + plateMargin;
    const pzMin = -halfD - plateMargin;
    const pzMax = halfD + plateMargin;

    pushRectXZ(points, pxMin, pxMax, pzMin, pzMax, 0);
    pushRectXZ(points, pxMin, pxMax, pzMin, pzMax, -plateThickness);
    const plateCorners: Array<[number, number]> = [
      [pxMin, pzMin],
      [pxMax, pzMin],
      [pxMax, pzMax],
      [pxMin, pzMax],
    ];
    for (const [cx, cz] of plateCorners) {
      pushSegment(points, cx, 0, cz, cx, -plateThickness, cz);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));

  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
  });

  const lines = new THREE.LineSegments(geometry, material);
  lines.position.y = -height / 2; // center vertically on the origin

  const group = new THREE.Group();
  group.add(lines);
  return group;
}