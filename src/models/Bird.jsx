import { React, useEffect, useRef } from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, []);

    useFrame(({ clock, camera }) => {
        // Update the bird's Y position simulate the bird-like motion using a sin wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // Check if the bird is reached a certain end point of the camera
        if (birdRef.current.position.x > camera.position.x + 10) {
            // Change direction to backward & rotate the bird 180 degrees
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
            // Change direction to forward & reset the bird's rotation
            birdRef.current.rotation.y = 0;
        }

        // Update the bird's X and Z position based on the direction
        if (birdRef.current.rotation.y === 0) {
            // Move the bird forward
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            // Move the bird forward
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }

    });

    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird