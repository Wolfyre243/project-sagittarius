'use client'

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  buildWireframeBuilding,
  BuildingDimensions,
  WindowLayout,
  BuildingStyle,
} from "./build-wireframe-building";

export interface WireframeBuildingProps {
  /** Building proportions (floors, floor height, width, depth). */
  dimensions?: Partial<BuildingDimensions>;
  /** Window columns per floor on the front/back and left/right facades. */
  windows?: Partial<WindowLayout>;
  /** Line color/opacity of the wireframe. */
  lineStyle?: Partial<BuildingStyle>;
  /** Cuts a ground-floor door into one front window column. Default true. */
  showGroundFloorDoor?: boolean;
  /** Draws a thin plinth slab under the building footprint. Default true. */
  showBasePlate?: boolean;
  /** Slowly spin the building on its own. Default true. */
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  /** Allow drag-to-orbit / scroll-to-zoom. Default true. */
  enableUserControl?: boolean;
  className?: string;
  /** Extra styles merged onto the (transparent, 100%-sized) container div. */
  containerStyle?: React.CSSProperties;
}

/**
 * Minimalist white wireframe of a multi-storey building, rendered with
 * Three.js on a fully transparent background. The container is sized at
 * 100% x 100% of its parent, so drop it into any flexible layout
 * (flex/grid child, fixed box, etc.) and it will resize with it.
 */
export default function WireframeBuilding({
  dimensions,
  windows,
  lineStyle,
  showGroundFloorDoor = true,
  showBasePlate = true,
  autoRotate = true,
  autoRotateSpeed = 3,
  enableUserControl = false,
  className,
  containerStyle,
}: WireframeBuildingProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;
    // Re-bind to a non-nullable const: TypeScript's control-flow narrowing
    // above doesn't carry into the nested closures below.
    const container: HTMLDivElement = containerEl;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(5.5, 4.5, 6.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // fully transparent background
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const building = buildWireframeBuilding({
      dimensions,
      windows,
      style: lineStyle,
      showGroundFloorDoor,
      showBasePlate,
    });
    scene.add(building);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 4;
    controls.maxDistance = 20;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = autoRotateSpeed;
    controls.enabled = enableUserControl;

    function resize() {
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    }
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let frameId = 0;
    function animate() {
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      building.traverse((obj) => {
        if (obj instanceof THREE.LineSegments) {
          obj.geometry.dispose();
          (obj.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
    // Rebuild the whole scene if any of these change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dimensions,
    windows,
    lineStyle,
    showGroundFloorDoor,
    showBasePlate,
    autoRotate,
    autoRotateSpeed,
    enableUserControl,
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        minWidth: 0,
        minHeight: 0,
        background: "transparent",
        ...containerStyle,
      }}
    />
  );
}