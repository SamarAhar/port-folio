import React from 'react'

import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
// import { ThemeContext } from '../../contexts/ThemeContext';
import './Landing.css';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaBlogger } from 'react-icons/fa';

export const Landing = () => {

    // const { theme, drawerOpen } = useContext(ThemeContext);

  return (

    <div className='landing h-[100vh] flex justify-center items-center'>
        <div className='landing--container flex justify-center items-center h-[100%] relative'>
            <div className='landing--container-left bg-[#f56539] flex flex-[35%] justify-start items-end h-[100%]'>
                <div className='lcl--content m-[3rem] w-full flex items-center justify-start'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social text-[#212121] text-[35px] m-[0rem_1rem] transition duration-300 ease-in hover:scale-[1.2]'
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social text-[#212121] text-[35px] m-[0rem_1rem] transition duration-300 ease-in hover:scale-[1.2]'
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social text-[#212121] text-[35px] m-[0rem_1rem] transition duration-300 ease-in hover:scale-[1.2]'
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social text-[#212121] text-[35px] m-[0rem_1rem] transition duration-300 ease-in hover:scale-[1.2]'
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaBlogger
                                    className='landing--social text-[#212121] text-[35px] m-[0rem_1rem] transition duration-300 ease-in hover:scale-[1.2]'
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
                    </div>
            </div>

            <img
                src={headerData.image}
                // style={{
                //     opacity: `${drawerOpen ? '0' : '1'}`,
                //     borderColor: theme.secondary,
                // }}
                alt='Profile'
                className='landing--img text-[#212121] bg-[400px] absolute left-[35%] transform translate-x-[-50%] w-[400px] h-[400px] object-cover rounded-[50%] shadow-[0_0_30px_rgba(0,0,0,0.2)]'
            />

            <div className='landing--container-right bg-[#212121] flex flex-[65%] h-full flex-col items-end justify-center '>
                <div className='lcr--content text-[#eaeaea] w-[45%] mr-[7rem] font-[--primaryFont] not-italic '>
                    <h6 className='font-[500] text-[1.25rem] mb-[-0.85rem] opacity-[0.8] '>
                        {headerData.title}
                    </h6>
                    <h1 className='font-[600] text-[3.25rem] leading-[110%] m-[1rem_0] '>
                        {headerData.name}
                    </h1>
                    <p className=' mt-[1.45rem] font-bold text-[1rem] opacity-[0.7] '>
                        {headerData.desciption1}
                    </p>
                    <p className=' mt-[1.45rem] font-[500] text-[1rem] opacity-[0.7] '>
                        {headerData.desciption2}
                    </p>

                    <div className='lcr-buttonContainer mt-[2rem] w-[350px] flex items-center justify-between font-[--primaryFont] '>
                        {headerData.resumePdf && (
                            <a
                                href={headerData.resumePdf}
                                download='resume'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='resumeBtn text-[#f56539] rounded-[30px] w-[150px] font-[500] text-[1rem] h-[50px] border-[3px] border-[#f56539] border-solid transitioin duration-100 ease-out hover:bg-[#eaeaea] hover:text-[#212121] hover:border-[3px] hover:border-[#eaeaea] '>
                                    Download CV
                                </button>
                            </a>
                        )}
                            <button className='contactBtn bg-[#f56539] text-[#212121] rounded-[30px] w-[150px] h-[50px] font-[500] text-[1rem] border-[3px] border-[#f56539] border-solid transitioin duration-100 ease-out hover:bg-[#212121] hover:text-[#eaeaea] hover:border-[3px] hover:border-[#eaeaea]'>
                                Projects
                            </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Landing;
