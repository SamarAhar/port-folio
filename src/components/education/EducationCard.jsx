import React from 'react'

import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

export const EducationCard = ({ id, institution, course, startYear, endYear }) => {

    const { theme } = useContext(ThemeContext);

  return (
    <div className='w-full'>
        <div className='education-card bg-[#f565394d] hover:bg-[#f5653980] flex flex-row items-start justify-start w-[90%] h-[140px] p-[1.5rem] rounded-[20px] mb-[1.5rem] transition-[background-color] duration-[200ms] ease-out ' key={id}>
            <div className="educard-img bg-[#f56539] rounded-[50%] w-[55px] h-[55px] flex items-center justify-center flex-shrink-0 ">
                <img className='w-[40px]' src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
            </div>
            <div className="education-details ml-[0.6rem] ">
                <h6 className='text-[#f56539] text-[0.85rem] font-[700] mb-[0.5rem] '>{startYear}-{endYear}</h6>
                <h4 className='text-[#eaeaea] text-[1.225rem] font-[600] '>{course}</h4>
                <h5 className='text-[#eaeaeacc] text-[1.15rem] font-[600] '>{institution}</h5>
            </div>
        </div>
    </div>
  )
}
export default EducationCard;
