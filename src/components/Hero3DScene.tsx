import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, TorusKnot, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#10b981" />
      <pointLight position={[0, -10, 5]} intensity={0.5} color="#f59e0b" />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />
    </>
  );
}

function CentralGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.1;
      wireRef.current.rotation.y = t * 0.15;
      wireRef.current.rotation.z = t * 0.08;
    }
  });

  return (
    <group>
      <TorusKnot ref={meshRef} args={[1.2, 0.35, 128, 32, 2, 3]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#0891b2"
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.25}
        />
      </TorusKnot>

      <Icosahedron ref={wireRef} args={[2.2, 0]}>
        <meshStandardMaterial
          color="#10b981"
          emissive="#059669"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.4}
        />
      </Icosahedron>

      <Icosahedron args={[3.2, 0]}>
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#d97706"
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.12}
        />
      </Icosahedron>
    </group>
  );
}

function FloatingNodes() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 4 - 2,
        ] as [number, number, number],
        scale: 0.08 + Math.random() * 0.12,
        speed: 0.5 + Math.random(),
        key: i,
      })),
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      const node = nodes[i];
      child.position.y += Math.sin(t * node.speed) * 0.002;
      child.rotation.x = t * 0.3 * node.speed;
      child.rotation.y = t * 0.4 * node.speed;
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node) => (
        <Float key={node.key} speed={node.speed * 2} rotationIntensity={1} floatIntensity={1.5}>
          <mesh position={node.position} scale={node.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={node.key % 2 === 0 ? '#22d3ee' : '#10b981'}
              emissive={node.key % 2 === 0 ? '#22d3ee' : '#10b981'}
              emissiveIntensity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const count = 800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] = (Math.random() - 0.5) * 18;
      arr[i3 + 1] = (Math.random() - 0.5) * 12;
      arr[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    const { mouse } = state;

    pointsRef.current.rotation.y = t * 0.03 + mouse.x * 0.3;
    pointsRef.current.rotation.x = mouse.y * 0.2;

    const geom = pointsRef.current.geometry;
    const posAttr = geom.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      arr[i + 1] += Math.sin(t * 0.5 + i) * 0.0008;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function MouseRig() {
  useFrame((state) => {
    const x = state.pointer.x * 0.3;
    const y = state.pointer.y * 0.3;
    state.camera.position.x += (x - state.camera.position.x) * 0.04;
    state.camera.position.y += (y - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function CanvasLoader() {
  return (
    <mesh>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.2} />
    </mesh>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <SceneLighting />
        <CentralGeometry />
        <FloatingNodes />
        <ParticleField />
        <MouseRig />
        <fog attach="fog" args={['#05060a', 6, 18]} />
      </Suspense>
    </Canvas>
  );
}
