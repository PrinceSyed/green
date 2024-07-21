import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Experience from '../components/Experience';

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
       Hi, Im Spike. 
      </div> */}

      <Canvas className='w-full bg-transparent h-screen relative' camera={{near: 0.1, far: 1000}}>

        <Suspense fallback={Loader}>

        </Suspense>

        <Experience />

      </Canvas>

    </section>
  )
}

export default Home