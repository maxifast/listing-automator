import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleCloudProps {
    count?: number;
    speed?: number;
    isGenerating?: boolean;
}

export const ParticleCloud: React.FC<ParticleCloudProps> = ({ count = 2000, speed = 1, isGenerating = false }) => {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const light = useRef<THREE.PointLight>(null);

    // Generate random data for particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const time = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speedParam = 0.01 + Math.random() / 200;
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;

            // Different colors based on theme
            const colorOptions = [
                new THREE.Color('#06B6D4'), // Cyan
                new THREE.Color('#8B5CF6'), // Purple
                new THREE.Color('#EC4899'), // Pink
                new THREE.Color('#94a3b8')  // Slate
            ];
            const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];

            temp.push({ time, factor, speed: speedParam, x, y, z, color });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);
    const colorArray = useMemo(() => {
        const arr = new Float32Array(count * 3);
        particles.forEach((p, i) => {
            p.color.toArray(arr, i * 3);
        });
        return arr;
    }, [particles, count]);

    useFrame((state) => {
        if (!mesh.current) return;

        // Base rotation
        const baseSpeed = isGenerating ? speed * 5 : speed;

        // Rotate entire particle cloud slowly
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * Math.PI * 0.2;
        mesh.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.05) * Math.PI * 0.2;

        particles.forEach((particle, i) => {
            let { time, factor, speed: particleSpeed, x, y, z } = particle;

            // Update time
            time = particle.time += particleSpeed / 2 * baseSpeed;

            // Calculate position
            const t = isGenerating ? time * 3 : time; // Flow faster during generation
            const s = Math.cos(t);
            const c = Math.sin(t);

            // Swirling calculation
            const dx = x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10;
            const dy = y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10;
            const dz = z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10;

            // Pull towards center if generating
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            const pullFactor = isGenerating ? Math.max(0.1, 1 - dist / 30) : 0;

            const px = dx * (1 - pullFactor);
            const py = dy * (1 - pullFactor);
            const pz = dz * (1 - pullFactor);

            dummy.position.set(px, py, pz);

            // Scale pulsing
            const scaleBase = isGenerating ? 0.3 : 0.15;
            const scale = scaleBase + (Math.sin(t) * 0.05);
            dummy.scale.set(scale, scale, scale);
            dummy.rotation.set(s * 5, c * 5, 0);
            dummy.updateMatrix();

            mesh.current!.setMatrixAt(i, dummy.matrix);
        });

        mesh.current.instanceMatrix.needsUpdate = true;

        if (light.current) {
            // Move light smoothly with cursor
            light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, (state.pointer.x * 10), 0.05);
            light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, (state.pointer.y * 10), 0.05);
        }
    });

    return (
        <group>
            <pointLight ref={light} distance={40} intensity={isGenerating ? 8 : 4} color="#06b6d4" />
            <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
                <icosahedronGeometry args={[0.2, 0]}>
                    <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
                </icosahedronGeometry>
                <meshStandardMaterial
                    vertexColors
                    transparent
                    opacity={0.8}
                    roughness={0.2}
                    metalness={0.8}
                />
            </instancedMesh>
        </group>
    );
};
