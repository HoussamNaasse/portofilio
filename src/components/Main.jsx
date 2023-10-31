import React from 'react'
import Navbar from './Navbar'
import Me from '../img/me2.JPG'
import { LinkedIn,GitHub,Facebook, Mail } from '@mui/icons-material'
import RoomIcon from '@mui/icons-material/Room';
import GoogleIcon from '@mui/icons-material/Google';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

const Main = () => {

  // Hi, i'm <span>Houssame Naasse</span>,a passionate Full Stack Developer based in Marrakech.
  return (
    <section className='Main' id='Main'>
      <Navbar/>
      <div className="Content">
        <div className="left">
            <div className="introduction">
            Bonjour, je suis <span>Houssame Naasse</span>, un futur ingenieur Full Stack passionné basé à Marrakech
                <RoomIcon className='Marker'/>
            </div>
            <div className="followme">
                Follow Me : 
                <div className="socials">
                    <a href="https://github.com/HoussamNaasse" target='_blank'><GitHub className='social' /></a>
                    naassehoussam@gmail.com
                </div>
            </div>
        </div>
        <div className="right">
            {/* <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3,2,1]} />
                <Sphere args={[1,100,200]} scale={2.4} >
                    <MeshDistortMaterial
                    color="purple"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    />
                </Sphere>
            </Canvas> */}
            <img src={Me} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Main