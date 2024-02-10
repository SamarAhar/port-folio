import React from 'react'

import placeholder from '../../../assets/png/placeholder.png'
import './SingleBlog.css'

export const SingleBlog = ({ theme, title, desc, date, image, url, id }) => {
  return (
    <div className=''>
        <a className="singleBlog h-[420px] w-[320px] flex flex-col items-start justify-start rounded-[5px] " 
        key={id} href={url} target="_blank" rel="noreferrer" style={{backgroundColor: theme.primary400}}>
            <div className="singleBlog--image h-[50%] w-full overflow-hidden rounded-tl-[5px] rounded-tr-[5px] " style={{backgroundColor: theme.secondary}}>
                <img className='' src={image ? image : placeholder} alt={title} />
            </div>
            <div className="singleBlog--body p-[1rem] ">
                <p className='font-[600] text-[13px] mb-[0.65rem]' style={{color: theme.tertiary}}>{date}</p>
                <h3 className='text-[19px] mb-[0.55rem] leading-[115%] ' style={{color: theme.secondary}}>{title}</h3>
                <h6 className='font-[NotoSansTC] text-[15px] mb-[0.65rem] leading-[139%] font-[500] opacity-[0.9] ' style={{color: theme.secondary}}>{desc}</h6>
            </div>
        </a>
    </div>
  )
}

export default SingleBlog;