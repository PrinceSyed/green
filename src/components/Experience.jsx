import { OrbitControls } from "@react-three/drei";
import React from 'react'
import { Monster } from "./Monster";
import Wiggle from "./Wiggle";

const Experience = () => {
    return (
        <>
            <ambientLight intensity={2} />
            <pointLight position={[10, 10, 10]} color="lightblue" intensity={5.5} />
            <OrbitControls 
                minPolarAngle={Math.PI / 4} // Limit vertical rotation
                maxPolarAngle={Math.PI / 2} 
                minAzimuthAngle={-Math.PI / 4} // Limit horizontal rotation
                maxAzimuthAngle={Math.PI / 4} 
                minDistance={2} // Limit zoom in
                maxDistance={10} // Limit zoom out
            />
            {/* <Monster /> */}
            <Wiggle />
        </>
    )
}

export default Experience