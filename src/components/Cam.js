import {
    PerspectiveCamera,
    // CubeCamera,
    OrbitControls,
    GizmoHelper as AxisGizmoHelper,
    GizmoViewport as AxisGizmoViewport
} from '@react-three/drei';

export default function Cam(props) {
    const {
        orbit = true,
        autoRotate = true,
        autoRotateSpeed = .3,
        position = [10, 0, 0],
    } = props;
    return (
        <>
            <PerspectiveCamera makeDefault position={position} />
            {orbit && <OrbitControls
                autoRotate={autoRotate}
                autoRotateSpeed={autoRotateSpeed}
            />}
            <AxisGizmoHelper
                alignment="bottom-right" // widget alignment within scene
                margin={[80, 80]} // widget margins (X, Y)
            // onUpdate={ called during camera animation }
            // onTarget={ return current camera target (e.g. from orbit controls) to center animation }
            >
                <AxisGizmoViewport
                    axisColors={['red', 'green', 'blue']}
                    labelColor={'black'}
                />
            </AxisGizmoHelper>
        </>
    );
}
