import { Canvas } from '@react-three/fiber'
import React from 'react'
import Pc from './Pc'
import { OrbitControls, Stage } from '@react-three/drei'
import Scss from '../img/scss.svg'
import Reactt from '../img/react.svg'
import Js from '../img/js.svg'
import Mysql from '../img/mysql.svg'
import Nodejs from '../img/nodejs.svg'
import Spring from '../img/spring.svg'
import Mongo from '../img/mongo.svg'
import Express from '../img/express.svg'
import Next from '../img/next.svg'
import Me from '../img/me3.JPG'
const Whoami = () => {
  return (
    <section className='Whoami' id="whoami">
      <div className="Content">
        <div className="left">
          {/* <Canvas>
            <Stage environment="city" intensity={0.6}>
              <Pc/>
            </Stage>
            <OrbitControls enableZoom={false} />
          </Canvas> */}
          <img src={Me} alt="" />
        </div>
        <div className="right">
          <div className="title">About Me</div>
          <div className="aboutme">
          Je suis un étudiant en cycle d'ingénieur développement et réseau .Et j'ai choisi de poursuivre mes études dans ce domaine pour en faire mon métier. J'ai pris une superbe expérience dans plusieurs langages de programmation. En plus de mes compétences en développement, j'ai également pris des connaissances en administration . Je pense que ces compétences me permettront de varier mon travaille sur les projets , nécessitant une expertise technique approfondie. J'ai un bon sens de l'écoute et je suis très à l'écoute des besoins des clients. Je suis un professionnel polyvalent et motivé, qui aime résoudre des problèmes et trouver des solutions innovantes. J'aime travailler en équipe. Je suis sûr que ma passion pour l'informatique et mes compétences techniques feront de moi un contributeur précieux pour toute entreprise qui souhaite innover dans le domaine de la technologie.
          </div>
          {/* <div className="aboutme">As a junior Developer , I possess an impressive arsenal of skills in My Kit . I excel in designing and maintaining responsive websites that offer a smooth user experience . Me expertise lies in crafting dynamic , engaging interfaces through writing clean and optimized and utilizing cutting-edge development tools and techniques . I am also a team player who thrives in collaborating with cross-functional teams to produce outstading web applications.</div> */}
          <div className="techstack">
            Tech Stack <span>|</span>
            <div className="techs">
              {/* <img src={Scss} alt="" /> */}
              <img src={Reactt} alt="" />
              {/* <img src={Js} alt="" /> */}
              <img src={Mysql} alt="" />
              <img src={Mongo} alt="" />
              <img src={Nodejs} alt="" />
              <img src={Spring} alt="" />
              <img src={Express} alt="" />
              <img src={Next} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whoami
