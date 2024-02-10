import React from 'react';
import { FaPlay, FaCode } from 'react-icons/fa';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

export const SingleProject = ({ id, pName, desc, tags, code, demo, image, theme }) => {
  return (
    <div className=''>
        <div
            key={id}
            className='singleProject shadow-[4px_4px_8px_rgba(36,3,3,0.2)] w-[304px] h-[360px] rounded-[10px] flex flex-col items-center justify-center p-[1.4rem_2rem] relative cursor-pointer overflow-hidden '
            style={{ backgroundColor: theme.primary400 }}
        >
            <div className='projectContent flex flex-col items-center justify-between w-full h-full '>
                <h2 className='font-[600] text-[1.525rem] leading-[110%] text-center'
                    id={pName.replace(' ', '-').toLowerCase()}
                    style={{ color: theme.tertiary }}
                >
                    {pName}
                </h2>
                <img className='w-full h-[60%] transition-opacity duration-700 delay-300 hover:opacity-0 ' src={image ? image : placeholder} alt={pName} />
                <div className='project--showcaseBtn flex items-center justify-between w-full '>
                    <a 
                        href={demo}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-[50%] border-[2px] text-[#eaeaea] hover:bg-[#212121] hover:text-[#f56539] hover:scale-[1.1] hover:border-[2px_solid_#212121] cursor-pointer transition-transform duration-500 delay-300 '
                        aria-labelledby={`${pName
                            .replace(' ', '-')
                            .toLowerCase()} ${pName
                            .replace(' ', '-')
                            .toLowerCase()}-demo`}
                    >
                        <FaPlay
                            id={`${pName
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                            className=''
                            aria-label='Demo'
                        />
                    </a>
                    <a
                        href={code}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-[50%] border-[2px] text-[#eaeaea] hover:bg-[#212121] hover:text-[#f56539] hover:scale-[1.1] hover:border-[2px_solid_#212121] cursor-pointer transition-transform duration-500 delay-300 '
                        aria-labelledby={`${pName
                            .replace(' ', '-')
                            .toLowerCase()} ${pName
                            .replace(' ', '-')
                            .toLowerCase()}-code`}
                    >
                        <FaCode
                            id={`${pName
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                            className='text-[1.1rem] transition-all duration-200 '
                            aria-label='Code'
                        />
                    </a>
                </div>
            </div>
            <p
                className='project--desc'
                style={{
                    background: theme.secondary,
                    color: theme.tertiary,
                }}
            >
                {desc}
            </p>
            <div
                className='project--lang'
                style={{
                    background: theme.secondary,
                    color: theme.tertiary80,
                }}
            >
                {tags.map((tag, id) => (
                    <span key={id}>{tag}</span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SingleProject;
