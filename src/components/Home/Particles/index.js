"use client";
import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from '@/components/config/particlesConfig';

const particalesBackground = () => {
  return (
    <div className='z-50'>
      <Particles params={particlesConfig}>

      </Particles>
    </div>
  )
}

export default particalesBackground;