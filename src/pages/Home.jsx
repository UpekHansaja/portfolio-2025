import { React, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'

const Home = () => {

    const [isRotating, setIsRotating] = useState(false);

    const adjustIslandForScreen = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.2, 4.75, -0.1];

        if (window.innerWidth < 768) {
            screenScale = [0.035, 0.035, 0.035];
        } else {
            screenScale = [.05, .05, .05];
        }

        return [screenScale, screenPosition, rotation];
    }
    const adjustPlaneForScreen = () => {
        let screenScale = null;
        let screenPosition = null;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreen();
    const [planeScale, planePosition] = adjustPlaneForScreen();

    return (
        <section className='w-full h-screen relative'>


            {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                POPUP
            </div> */}
            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>

                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.6} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor={'#000000'} />

                    <Bird />
                    <Sky />

                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Plane
                        isRotating={isRotating}
                        planeScale={planeScale}
                        planePosition={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home