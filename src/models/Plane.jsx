import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene); // Correctly destructuring useGLTF
    const { actions } = useAnimations(animations, ref); // Correctly passing animations to useAnimations

    useEffect(() => {
        if (actions && actions['Take 001']) { // Ensure the action exists
            if (isRotating) {
                actions['Take 001'].play(); // Play the animation if isRotating is true
            } else {
                actions['Take 001'].stop(); // Stop the animation if isRotating is false
            }
        }
    }, [actions, isRotating]);

    return (
        <mesh {...props}>
            <primitive object={scene} ref={ref} /> {/* Attach the ref here */}
        </mesh>
    );
};

export default Plane;
