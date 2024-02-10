import React, { useContext} from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';

export const Achivement = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {achievementData.achievements.length > 0 && (
          <div className="achievement min-h-[100vh] flex flex-row items-start justify-start p-[3rem] " 
          id="achievement" style={{backgroundColor: theme.secondary}}>
          <div className="achievement-body flex items-start justify-evenly flex-col flex-[0.4] w-[90%] ">
              <h1 className='text-[3.5rem] mb-[1.5rem]' style={{color: theme.primary}}>Achievements</h1>
              <h4 className='text-[1.75rem] font-[400] font-[caveat,cursive] ' style={{color:theme.tertiary}}>{achievementData.bio}</h4>
          </div>
          <div className="achievement-cards p-[2rem] flex flex-col items-start justify-center w-full ml-[5%] flex-[0.6] ">
              {achievementData.achievements.map(achieve => ( 
                  <AchievementCard 
                  key={achieve.id}
                  id={achieve.id}
                  title={achieve.title}
                  details={achieve.details}
                  date={achieve.date}
                  field={achieve.field}
                  image={achieve.image}/>
              ))}
          </div>
      </div>
      )}
    </>
  )
}

export default Achivement;