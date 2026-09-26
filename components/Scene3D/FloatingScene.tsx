"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { createBoltGeometries, createGearGeometry, createNutGeometry } from './geometries';

export type SceneVariant = 'hero' | 'banner';

type ItemType = 'gear' | 'smallGear' | 'nut' | 'bolt' | 'ring' | 'sphere';
type MaterialName = 'orange' | 'chrome' | 'dark' | 'peach';

interface Item {
  type: ItemType;
  material: MaterialName;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  spin: [number, number];
  floatSpeed: number;
  floatAmp: number;
  phase: number;
}

const TYPES: ItemType[] = ['gear', 'nut', 'sphere', 'bolt', 'smallGear', 'ring'];
const MATERIALS: MaterialName[] = ['orange', 'chrome', 'orange', 'peach', 'dark'];

const rand = (min: number, max: number) => min + Math.random() * (max - min);

interface Layout {
  halfWidth: number;
  halfHeight: number;
  pxPerUnit: number;
}

// Positions are fractions of the visible area and sizes are in screen pixels, so parts look the same
// whether the canvas is a short banner or a tall hero.
// Hero spreads parts to both sides of the centred content; banners keep them on the right, away from the title.
// On mobile the content fills the width, so parts are smaller and hug (or peek in from) the screen edges.
const SIZE_PX: Record<SceneVariant, { desktop: [number, number]; mobile: [number, number] }> = {
  hero: { desktop: [70, 150], mobile: [28, 52] },
  banner: { desktop: [40, 90], mobile: [22, 40] },
};

const X_RANGE: Record<SceneVariant, { desktop: [number, number]; mobile: [number, number] }> = {
  hero: { desktop: [0.72, 1], mobile: [0.85, 1.05] },
  banner: { desktop: [0.15, 0.95], mobile: [0.45, 0.95] },
};

// Desktop hero keeps a centred column (in screen px) free of parts so they never drift over the heading.
const HERO_CLEAR_PX = 980;
const CAMERA_Z = 8;

function createItems(variant: SceneVariant, count: number, isMobile: boolean, { halfWidth, halfHeight, pxPerUnit }: Layout): Item[] {
  const device = isMobile ? 'mobile' : 'desktop';
  const [minPx, maxPx] = SIZE_PX[variant][device];
  const [minX, maxX] = X_RANGE[variant][device];
  const px = (value: number) => value / pxPerUnit;

  return Array.from({ length: count }, (_, i) => {
    const side = variant === 'hero' ? (i % 2 === 0 ? -1 : 1) : 1;
    const z = rand(-2, 0.5);
    // Geometries are ~2 units across, so halve the target diameter.
    const scale = px(rand(minPx, maxPx)) / 2;
    let xMin = minX * halfWidth;
    if (variant === 'hero' && !isMobile) {
      // Parts further back project closer to the centre, so push them out by the perspective factor.
      // On narrow screens they peek in from the edges rather than cover the text.
      const clear = (px(HERO_CLEAR_PX / 2) + scale) * (CAMERA_Z - z) / CAMERA_Z;
      xMin = Math.max(xMin, Math.min(clear, halfWidth * 0.97));
    }
    const x = side * rand(xMin, Math.max(xMin, maxX * halfWidth));
    // Spread evenly from top to bottom, with jitter, so tall heroes don't leave empty bands.
    // Mobile banners keep to the top band: there the title and subtitle span nearly the full width below it.
    const y = variant === 'banner' && isMobile
      ? rand(0.35, 0.9) * halfHeight
      : ((i + rand(0.2, 0.8)) / count * 2 - 1) * halfHeight * 0.9;
    return {
      type: TYPES[i % TYPES.length],
      material: MATERIALS[i % MATERIALS.length],
      position: [x, y, z],
      rotation: [rand(0, Math.PI), rand(0, Math.PI), 0],
      scale,
      spin: [rand(-0.4, 0.4), rand(0.15, 0.5)],
      floatSpeed: rand(0.4, 1),
      floatAmp: px(rand(isMobile ? 6 : 10, isMobile ? 14 : 25)),
      phase: rand(0, Math.PI * 2),
    };
  });
}

function Environment() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    return () => {
      scene.environment = null;
      env.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);
  return null;
}

function useSharedAssets() {
  const assets = useMemo(() => {
    const bolt = createBoltGeometries();
    return {
      geometries: {
        gear: createGearGeometry(14),
        smallGear: createGearGeometry(9, 1, 0.75, 0.35, 0.4),
        nut: createNutGeometry(),
        ring: new THREE.TorusGeometry(0.8, 0.25, 24, 64),
        sphere: new THREE.SphereGeometry(0.8, 48, 48),
        boltHead: bolt.head,
        boltShaft: bolt.shaft,
      },
      materials: {
        orange: new THREE.MeshPhysicalMaterial({ color: '#ff7438', metalness: 0.55, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.1 }),
        chrome: new THREE.MeshPhysicalMaterial({ color: '#e9e9e9', metalness: 1, roughness: 0.15 }),
        dark: new THREE.MeshPhysicalMaterial({ color: '#232323', metalness: 0.8, roughness: 0.3, clearcoat: 0.6 }),
        peach: new THREE.MeshPhysicalMaterial({ color: '#ffcaa8', metalness: 0.2, roughness: 0.35, clearcoat: 1 }),
      },
    };
  }, []);

  useEffect(() => () => {
    Object.values(assets.geometries).forEach((g) => g.dispose());
    Object.values(assets.materials).forEach((m) => m.dispose());
  }, [assets]);

  return assets;
}

function FloatingItem({ item, assets }: { item: Item; assets: ReturnType<typeof useSharedAssets> }) {
  const ref = useRef<THREE.Group>(null);
  const material = assets.materials[item.material];

  useFrame((state, delta) => {
    const group = ref.current;
    if (!group) return;
    group.rotation.x += delta * item.spin[0];
    group.rotation.y += delta * item.spin[1];
    group.position.y = item.position[1] + Math.sin(state.clock.elapsedTime * item.floatSpeed + item.phase) * item.floatAmp;
  });

  return (
    <group ref={ref} position={item.position} rotation={item.rotation} scale={item.scale}>
      {item.type === 'bolt' ? (
        <>
          <mesh geometry={assets.geometries.boltHead} material={material} />
          <mesh geometry={assets.geometries.boltShaft} material={material} />
        </>
      ) : (
        <mesh geometry={assets.geometries[item.type]} material={material} />
      )}
    </group>
  );
}

function Particles({ count, layout }: { count: number; layout: Layout }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      array[i * 3] = rand(-1.1, 1.1) * layout.halfWidth;
      array[i * 3 + 1] = rand(-1.1, 1.1) * layout.halfHeight;
      array[i * 3 + 2] = rand(-3, 1);
    }
    return array;
  }, [count, layout]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach='attributes-position' args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color='#ff7438' size={4 / layout.pxPerUnit} transparent opacity={0.6} sizeAttenuation depthWrite={false} />
    </points>
  );
}

// Tilts the whole scene towards the pointer and rolls it slightly as the page scrolls.
function Rig({ children, pxPerUnit }: { children: React.ReactNode; pxPerUnit: number }) {
  const ref = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame(() => {
    const group = ref.current;
    if (!group) return;
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, pointer.current.x * 0.25, 0.05);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointer.current.y * 0.15, 0.05);
    group.position.y = THREE.MathUtils.lerp(group.position.y, (window.scrollY * 0.3) / pxPerUnit, 0.1);
  });

  return <group ref={ref}>{children}</group>;
}

function SceneContent({ variant, isMobile }: { variant: SceneVariant; isMobile: boolean }) {
  const assets = useSharedAssets();
  const viewport = useThree((state) => state.viewport);
  const size = useThree((state) => state.size);
  // Round to whole pixels so the scene only re-scatters on real resizes.
  const width = Math.round(size.width);
  const height = Math.round(size.height);
  const layout = useMemo<Layout>(() => ({
    halfWidth: viewport.width / 2,
    halfHeight: viewport.height / 2,
    pxPerUnit: height / viewport.height,
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [width, height]);
  const items = useMemo(() => {
    const count = variant === 'hero' ? (isMobile ? 6 : 14) : (isMobile ? 3 : 7);
    return createItems(variant, count, isMobile, layout);
  }, [variant, isMobile, layout]);

  return (
    <>
      <Environment />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[-4, -2, 3]} intensity={20} color='#ff7438' />
      <Rig pxPerUnit={layout.pxPerUnit}>
        {items.map((item, index) => (
          <FloatingItem key={index} item={item} assets={assets} />
        ))}
        <Particles count={isMobile ? 120 : 350} layout={layout} />
      </Rig>
    </>
  );
}

const FloatingScene: React.FC<{ variant: SceneVariant }> = ({ variant }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [ready, setReady] = useState(false);
  const [{ isMobile, reducedMotion }] = useState(() => ({
    isMobile: window.innerWidth < 768,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  }));

  // Stop rendering while the scene is scrolled out of view.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const frameloop = reducedMotion ? 'demand' : inView ? 'always' : 'never';

  return (
    <div ref={wrapperRef} className='w-full h-full transition-opacity duration-1000' style={{ opacity: ready ? 1 : 0 }}>
      <Canvas
        frameloop={frameloop}
        dpr={[1, isMobile ? 1.5 : 1.75]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={() => setReady(true)}
      >
        <SceneContent variant={variant} isMobile={isMobile} />
      </Canvas>
    </div>
  );
};

export default FloatingScene;
