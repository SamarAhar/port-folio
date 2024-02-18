import React,{ useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";

import './Projects.css'
import SingleProject from './singleProject/SingleProject';

export const Projects = () => {

    const { theme } = useContext(ThemeContext);

  return (
    <div className=''>
        {projectsData.length > 0 && (
            <div className="projects flex flex-col items-center justify-start h-[100vh] overflow-x-hidden p-[2rem] " id="projects" style={{backgroundColor: theme.secondary}}>
                <div className="projects--header flex items-center justify-center w-full m-[1rem] ">
                    <h1 className='mb-[40px] text-[3.5rem] ' style={{color: theme.primary}}>Projects</h1>
                </div>
                <div className="projects--body w-full flex items-center justify-center flex-col ">
                    <div className="projects--bodyContainer flex items-center justify-center w-full gap-[4.5rem]">
                        {projectsData.slice(0, 3).map(project => (
                            <SingleProject
                                theme={theme}
                                key={project.id}
                                id={project.id}
                                pName={project.projectName}
                                desc={project.projectDesc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                image={project.image}
                            />
                        ))}
                    </div> 

                    {projectsData.length > 3 && (
                        <div className="projects--viewAll flex items-center justify-end p-[2rem] mt-[2rem] w-full ">
                            <a href='https://github.com/SamarAhar?tab=repositories' target='blank' >
                                <button className='bg-[#f56539] text-[#eaeaea] pr-[0.25rem] transition duration-200 hover:text-[#212121] hover:bg-[#f56539] '>
                                    View All
                                    <HiArrowRight className='text-[#eaeaea] bg-[#212121b3] w-[40px] h-[40px] p-[0.5rem] text-[1.05rem] rounded-[50%] cursor-pointer transition duration-200 hover:text-[#eaeaea] hover:bg-[#212121] ' />
                                </button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )}
    </div>
  )
}

export default Projects;
