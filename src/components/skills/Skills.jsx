import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'
import Marquee from "react-fast-marquee";

export const Skills = () => {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

  return (
    <div className="skills flex flex-col items-center justify-start min-h-[60vh] p-[2.5rem_2rem_2rem_2rem] " style={{backgroundColor: theme.secondary}}>
        <div className="skillsHeader flex items-center justify-center">
            <h2 className='text-[3.5rem] font-bold text-center not-italic ' 
                style={{color: theme.primary}}>
                Skills
            </h2>
        </div>
        <div className="skillsContainer flex items-center justify-center w-full mt-[3.5rem] p-[0_2rem] ">
            <div className="skill--scroll w-full m-[0rem_2rem] ">
                <Marquee className='p-[3rem_0rem]'
                    gradient={false} 
                    speed={80} 
                    pauseOnHover={true}
                    pauseOnClick={true} 
                    delay={0}
                    play={true} 
                    direction="left"
                >
                    {skillsData.map((skill, id) => (
                        <div className="skill--box flex flex-col items-center justify-center w-[160px] h-[160px] m-[1.5rem] p-[2rem_1rem] rounded-[10px] bg-[#FAFAFA] shadow-[0px_10px_20px_rgba(0,0,0,0.12)] transition duration-300 ease-in-out hover:scale-[1.15] "
                            key={id} style={skillBoxStyle}>

                            <img className='h-[50px] pointer-events-none '
                            src={skillsImage(skill)} alt={skill} 
                            />

                            <h3 className=' not-italic font-[500] text-[22px] text-center mt-[1rem] '
                                style={{color: theme.tertiary}}>
                                {skill}
                            </h3>

                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    </div>
  )
}

export default Skills;
