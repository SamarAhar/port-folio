import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'
import './Experience.css'

export const ExperienceCard = ({id, company, jobtitle, startYear, endYear}) => {

    const { theme } = useContext(ThemeContext);

  return (
    <div className='w-full flex items-end justify-end'>
        <div key={id} className='experience-card flex flex-row items-start justify-start w-[90%] h-[140px] p-[1.5rem] mb-[1.5rem] rounded-[20px] bg-[#f565394d] hover:bg-[#f5653980] transition-[bg] duration-200ms ease-in-out '>
            <div className="expcard-img rounded-[50%] w-[55px] h-[55px] flex items-center justify-center flex-shrink-0 " style={{backgroundColor: theme.primary}}>
                <img className='w-[36px] pointer-events-none' src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
            </div>
            <div className="experience-details ml-[0.6rem] ">
                <h6 className='text-[0.85rem] font-[700] mb-[0.5rem] ' style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                <h4 className='text-[1.225rem] font-[600] ' style={{color: theme.tertiary}}>{jobtitle}</h4>
                <h5 className='text-[1.15rem] font-[600] ' style={{color: theme.tertiary80}}>{company}</h5>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard;
