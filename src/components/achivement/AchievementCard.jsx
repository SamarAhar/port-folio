import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css'

export const AchievementCard = ({id, title, details, date, field, image}) => {

    const { theme } = useContext(ThemeContext);

  return (
    <div className='w-full'>
        <div key={id} className='achievement-card relative flex flex-row items-start justify-between w-full h-[170px] p-[1.5rem] rounded-[20px] mb-[1.5rem] ml-[1.5rem] bg-[#f565394d] hover:bg-[#f5653980] transition duration-200 ease-in-out '>
            <div className="achievecard-content flex flex-col items-start justify-around w-[65%] ">
                <div className="achievecard-details1">
                    <h2 style={{color: theme.tertiary}}>{title}</h2>
                    <p style={{color: theme.tertiary80}}>{details}</p>
                </div>
                <div className="achievecard-details2 flex flex-row w-[50%] items-center absolute text-[18px] bottom-[7px] left-[25px] " style={{color: theme.primary}}>
                    <h5 className='w-[50%]' >{date}</h5>
                    <div className="achievecard-field w-[50%] flex flex-row items-center ">
                        <AiOutlineFolder />
                        <h5>{field}</h5>
                    </div>   
                </div>
            </div> 
            <div className="achievecard-imgcontainer">
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AchievementCard;
