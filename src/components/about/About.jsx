import React from 'react'
import { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'


export const About = () => {

    const { theme } = useContext(ThemeContext);

  return (
    <div className="about bg-[#212121] min-h-[100vh] relative " id="about">
        <div className="line-styling absolute top-[50px] left-[50%] transform translate-x-[-50%] h-[50px] w-[85%] flex items-center justify-between ">
            <div className="style-circle bg-[#f56539] w-[10px] h-[10px] rounded-[50%] " ></div>
            <div className="style-circle bg-[#f56539] w-[10px] h-[10px] rounded-[50%] " ></div>
            <div className="style-line bg-[#f56539] w-[95%] h-[5px] rounded-[10px] " ></div>
        </div>
        <div className="about-body flex flex-row items-center justify-around h-fit pt-[8rem] ">
            <div className="about-description flex flex-col items-start justify-evenly flex-[0.5] w-[100%] h-fit ">
                <h2 className='text-[#f56539] mb-[40px] text-[3.5rem] font-bold '>{aboutData.title}</h2>
                <p className='text-[#eaeaeacc] text-[1.25rem] '>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
            </div>
            <div className="about-img mt-[40px] pointer-events-none ">
                <img className='w-[380px] flex-[0.5] '
                    src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                    alt="" 
                />
            </div>
        </div>
    </div>
  )
}

export default About;