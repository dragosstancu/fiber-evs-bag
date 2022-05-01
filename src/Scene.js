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

// Lights
// function KeyLight({ brightness, color }) {
//     return (
//         <rectAreaLight
//             width={3}
//             height={3}
//             color={color}
//             intensity={brightness}
//             position={[-2, 0, 5]}
//             lookAt={[0, 0, 0]}
//             penumbra={1}
//             castShadow
//         />
//     );
// }
// function FillLight({ brightness, color }) {
//     return (
//         <rectAreaLight
//             width={3}
//             height={3}
//             intensity={brightness}
//             color={color}
//             position={[2, 1, 4]}
//             lookAt={[0, 0, 0]}
//             penumbra={2}
//             castShadow
//         />
//     );
// }

// function RimLight({ brightness, color }) {
//     return (
//         <rectAreaLight
//             width={2}
//             height={2}
//             intensity={brightness}
//             color={color}
//             position={[1, 4, -2]}
//             rotation={[0, 180, 0]}
//             castShadow
//         />
//     );
// }

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
                    autoRotateSpeed={0.1}
                    // maxPolarAngle={Math.PI / 2.3}
                    // minPolarAngle={Math.PI / 2.3}
                    enableZoom={true}
                    enablePan={false}
                />
                <Suspense fallback={null}>
                    {/* <FillLight brightness={2.6} color={"#bdefff"} />
                    <RimLight brightness={54} color={"#fff"} />
                    <KeyLight brightness={5.6} color={"#ffc9f9"} /> */}
                    <ambientLight intensity={.5}/>
                    <pointLight intensity={.7} decay={1} position={[-1, 1, 1]} distance={0} />
                    <pointLight intensity={.7} decay={1} position={[1, 1, 1]} distance={0}/>
                    {/* <spotLight color="#ffffff" intensity={1} position="{[10,10,10]}" decay="2" /> */}
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
                    <Bag scale={1} />
                    {/* <Bg /> */}
                    <Cam position={[.4, 0, 0]} fov="50" />
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
