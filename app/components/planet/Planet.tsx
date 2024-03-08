/* eslint-disable react/no-unknown-property */

'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import type { RefObject } from 'react';
import { useMemo, useRef, useState } from 'react';
import type { Mesh } from 'three';
import { TextureLoader } from 'three';

import styles from './Planet.module.css';

interface PlanetMotion {
  light: number;
  position: number;
}

const Geometry = () => {
  const planetRef = useRef<Mesh>(null);
  const cloudsRef = useRef<Mesh>(null);

  const rotateObject = (ref: RefObject<Mesh>, delta: number, speed: number) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed;
      ref.current.rotation.y += delta * speed;
      ref.current.rotation.z += delta * speed;
    }
  };

  useFrame((state, delta) => {
    rotateObject(planetRef, delta, 0.05);
    rotateObject(cloudsRef, delta, 0.051);
  });

  const planet = useMemo(
    () => useLoader(TextureLoader, '4k_ceres_fictional.jpg'),
    [],
  );
  const clouds = useMemo(
    () => useLoader(TextureLoader, '2k_earth_clouds.jpg'),
    [],
  );
  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshLambertMaterial map={planet} />
      </mesh>
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshLambertMaterial
          depthWrite={false}
          map={clouds}
          opacity={0.1}
          transparent
        />
      </mesh>
    </>
  );
};

const Planet = () => {
  const [planetMotion, setPlanetMotion] = useState<PlanetMotion>({
    light: 2,
    position: 2,
  });

  useLenis(({ scroll }) => {
    const { innerHeight } = window;
    const lightValue = Math.min(2 + (scroll / innerHeight) * 4, 12);
    const positionValue = Math.min(2.5 + (scroll / innerHeight) * 20, 1000);

    const calculatedMotion: PlanetMotion = {
      light: lightValue,
      position: positionValue,
    };

    setPlanetMotion(calculatedMotion);
    // console.log(calculatedMotion);
  });

  return (
    <ReactLenis root>
      <div className={styles.container}>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: planetMotion.position,
            position: [0, 0, 2.5],
          }}
          dpr={2}
        >
          <pointLight
            intensity={1200}
            position={[10, 10, planetMotion.light]}
          />
          <Geometry />
        </Canvas>
      </div>
    </ReactLenis>
  );
};

export default Planet;
