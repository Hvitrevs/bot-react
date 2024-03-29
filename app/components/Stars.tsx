'use client'

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(900), {radius: 0.9})
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/100;
    ref.current.rotation.y -= delta/100;
  })

  return (
    <group rotation={[1, 3, Math.PI / 2]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="$fff"
                size={0.003}
                sizeAttenuation={true}
                dethWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[0]">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <Stars />
        </Suspense>
        </Canvas>
    </div>
  );

export default StarsCanvas;