import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Environment, MeshTransmissionMaterial, Float } from '@react-three/drei';

interface GlassShapeProps {
    isGenerating?: boolean;
}

export const GlassShape = ({ isGenerating = false }: GlassShapeProps) => {
    const mesh = useRef<THREE.Mesh>(null);
    const material = useRef<any>(null);

    useFrame((state, delta) => {
        if (!mesh.current || !material.current) return;

        // Rotate the shape
        const targetSpeed = isGenerating ? 4 : 1;
        mesh.current.rotation.x += delta * 0.1 * targetSpeed;
        mesh.current.rotation.y += delta * 0.15 * targetSpeed;

        // Animate material properties during generation
        const targetDistortion = isGenerating ? 0.8 : 0.2;
        const targetIridescence = isGenerating ? 1.0 : 0.3;

        material.current.distortion = THREE.MathUtils.lerp(material.current.distortion, targetDistortion, 0.05);
        material.current.iridescence = THREE.MathUtils.lerp(material.current.iridescence, targetIridescence, 0.05);

        // Pulse scale during generation
        if (isGenerating) {
            const pulse = 1 + Math.sin(state.clock.elapsedTime * 15) * 0.04;
            mesh.current.scale.set(pulse, pulse, pulse);
        } else {
            mesh.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }
    });

    return (
        <group>
            {/* Intense colored lights to reflect off the glass surface */}
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={4} color="#06B6D4" />
            <directionalLight position={[-10, -10, -10]} intensity={3} color="#8B5CF6" />
            <directionalLight position={[0, -10, 10]} intensity={3} color="#EC4899" />

            {/* Environment for realistic glass reflection */}
            <Environment preset="city" />

            {/* Floating animation for organic feel */}
            <Float speed={isGenerating ? 5 : 2} rotationIntensity={isGenerating ? 2 : 0.5} floatIntensity={isGenerating ? 3 : 1}>
                <mesh ref={mesh} position={[12, 0, -15]}>
                    <torusKnotGeometry args={[14, 4, 300, 80]} />
                    {/* Advanced refrective glass material. Optimized for Mobile GPU */}
                    <MeshTransmissionMaterial
                        ref={material}
                        background={new THREE.Color('#FAFAFA')}
                        backside
                        samples={2}
                        resolution={256}
                        thickness={3}
                        chromaticAberration={0.06}
                        anisotropy={0.1}
                        distortion={0.2}
                        distortionScale={0.3}
                        temporalDistortion={0.1}
                        iridescence={0.3}
                        iridescenceIOR={1.3}
                        iridescenceThicknessRange={[100, 400]}
                        clearcoat={1}
                        color="#ffffff"
                        transmission={1}
                        roughness={0.1}
                    />
                </mesh>
            </Float>
        </group>
    );
};
