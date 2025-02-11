"use client";
import React from 'react'
import Particles from 'react-particles'
import particlesConfig from '@/components/config/particlesConfig';

const particalesBackground = () => {
  return (
    <div>
      <Particles params={particlesConfig}>

      </Particles>
    </div>
  )
}

export default particalesBackground;