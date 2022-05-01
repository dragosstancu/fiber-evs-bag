import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls } from '@react-three/drei';

// import Box from './components/Box';
import Cam from './components/Cam';
import Text from './components/Text';
// import Bg from './components/Bg';
// import Info from './components/Info';

// import Curiosity from './models/Curiosity';
import Bag from './models/Bag';

// const GH_REPO = 'https://github.com/wswoodruff/three-fiber-lab';
// const PROGRAMMER_RED = 'rgb(255, 0, 0)';
// const PROGRAMMER_GREEN = 'rgb(10,10,10)';
// const PROGRAMMER_BLUE = 'rgb(10,10,20)';

// const gridHelperConfig = {
//     // args: [ size, divisions, centerLineColor, gridColor ]
//     args: [50, 40, PROGRAMMER_BLUE, PROGRAMMER_GREEN]
// };

export default function Scene() {
    // const Curiosity = useGLTF('models/glb/curiosity.glb');

    // console.log("Curiosity", Curiosity);
    // const curiosity = ModelManager('/models/glb/curiosity.glb', {
    //     //
    // });
    return (
        <>
            <Canvas shadows dpr={[1, 2]}>
                <OrbitControls
                    makeDefault
                    autoRotate
                    autoRotateSpeed={0.3}
                    // maxPolarAngle={Math.PI / 2.3}
                    // minPolarAngle={Math.PI / 2.3}
                    enableZoom={true}
                    enablePan={false}
                />
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight color="#ffffff" intensity={1} position="{[10,10,10]}" decay="2"/>
                    {/* <spotLight position={[10, 10, 10]} angle={0.15} shadow-mapSize={[2048, 2048]} castShadow /> */}
                    {/* <PresentationControls
                        global
                        config={{ mass: 2, tension: 500 }}
                        snap={{ mass: 4, tension: 1500 }}
                        rotation={[0, 0.3, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                        <Bag scale={30} />
                    </PresentationControls> */}
                    <Bag scale={30} />
                    {/* <Bg /> */}
                    <Cam position={[12, 0, 0]} fov="50" />
                    {/* <Box position={[0, 3, 0]} /> */}
                    <Text
                        color="#000"
                        fontSize="1"
                        // _onClick={() => window.open(_GH_REPO)}
                        position={[0, 1, -10]}
                    >
                        ElleVet Hemp CBD + CBDA Chews
                    </Text>
                    {/* <!--<Curiosity scale={2.4} /> */}

                    {/* <gridHelper {...gridHelperConfig} /> */}
                    {/* <Info /> */}
                </Suspense>
            </Canvas>
            <Loader />
        </>
    );
};
