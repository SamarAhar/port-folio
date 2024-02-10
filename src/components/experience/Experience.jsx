import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';

export const Experience = () => {

    const { theme } = useContext(ThemeContext);

  return (
    <div className="experience min-h-[100vh] " id="experience" style={{backgroundColor: theme.secondary}}> 
        <div className="experience-body flex flex-row items-center justify-center w-full ">
            <div className="experience-image box-border p-[1rem] flex-[0.35] ml-[7%] mt-[1rem] pointer-events-none ">
                <img className='w-full pointer-events-none' src={theme.expimg} alt="" />
            </div>
            <div className="experience-description flex flex-[0.65] flex-col items-end justify-center mr-[2rem] p-[2rem] ">
            <h1 className='text-[3.5rem] mb-[2rem] font-bold font-sans ' style={{color:theme.primary}}>Experience</h1>
            {experienceData.map(exp =>(
                <ExperienceCard 
                    key={exp.id}
                    id={exp.id}
                    jobtitle={exp.jobtitle}
                    company={exp.company}
                    startYear={exp.startYear}
                    endYear={exp.endYear}/>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Experience;