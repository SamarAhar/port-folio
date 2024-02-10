import React, { useState, useContext } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

export const BackToTop = () => {

    const [visible, setVisible] = useState(false);

    const { theme } = useContext(ThemeContext);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);


  return (
    <div
        style={{ display: visible ? 'inline' : 'none' }}
        className='backToTop fixed right-[10px] bottom-[60px] h-[30px] text-[3rem] z-[999] '
    >
        <button onClick={scrollToTop} aria-label='Back to top'>
            <IoIosArrowDropupCircle className='text-[3rem] text-[#eaeaea] ' />
        </button>
    </div>
  )
}

export default BackToTop;
