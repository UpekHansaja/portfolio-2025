import React, { useEffect, useRef } from 'react'

import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, ...props }) => {

    const ref = useRef();
    const { scene, animation } = useGLTF(planeScene);
    const { actions } = useAnimations(animation, ref);

    useEffect(() => {
        if (isRotating) {
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop();
        }
    }, [actions, isRotating]);

    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane