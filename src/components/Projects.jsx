import React, { useState } from 'react'
import { GitHub } from '@mui/icons-material'
import LaunchIcon from '@mui/icons-material/Launch'

const projects=[
  {
    "name":"Tic Tac Toe",
    "gitlink":"https://github.com/HoussamNaasse/tictao-vercel",
    "desc":"Un petit jeu de tictao  de deux adversaires.",
    "techs":"React Css"
  },
  {
    "name":"GMachine",
    "gitlink":"https://github.com/HoussamNaasse/Gmachine",
    "desc":"un mini projet a propos de gestion de machine.",
    "techs":"Java JDBC NetBeans"
  },
]




const Projects = () => {
  const [project,setProject]=useState(projects[0])


  const ProjectDetails=()=>{
    return(
      <>
      <div className="title">
      {project.name}
    </div>
    <div className="desc">
      {project.desc}
    </div>
    <div className="techs">
      {project.techs}
    </div>
    <div className="links">
      <div className="link">
        <a href={project.gitlink} target="_blank">Code</a>
        <GitHub className='icon' />
      </div>
      {/* <div className="link">
        Live Demo
        <LaunchIcon className='icon' />
      </div> */}
    </div>
    </>
    )
  }



  return (
    <section className='Projects' id='Projects'>
      <div className="Content">
          <div className="left">
            <ul>
              {projects.map((project)=>(
                <li key={project.gitlink} onClick={()=>setProject(project)}>
                  {project.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <ProjectDetails />
          </div>
        </div>
    </section>
  )
}

export default Projects
