import React from 'react'

import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

export const Education = () => {

    const { theme } = useContext(ThemeContext);

  return (
    <div className="education bg-[#212121] min-h-[100vh] " id="resume">
           
        <div className="education-body flex flex-row items-center justify-center w-full text-[hsla(117,56%,49%,0.702)] ">
            <div className="education-description w-full flex flex-[0.65] p-[2rem] flex-col items-start justify-center ml-[7%] ">
            <h1 className='text-[#f56539] text-[3.5rem] mb-[2rem] '>Education</h1>
                {educationData.map(edu => (
                    <EducationCard 
                        key={edu.id}
                        id={edu.id}
                        institution={edu.institution}
                        course={edu.course}
                        startYear={edu.startYear}
                        endYear={edu.endYear}
                    />
                ))}
            </div>
            <div className="education-image box-border p-[1rem] flex-[0.35] mt-[1rem] pointer-events-none  ">
                <img className='w-full ' src={theme.eduimg} alt=""/>
            </div>
        </div>
    </div>
  )
}
