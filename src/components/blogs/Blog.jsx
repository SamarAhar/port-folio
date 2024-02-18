import React,{ useContext} from 'react';
import { HiArrowRight } from "react-icons/hi";

import './Blog.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import SingleBlog from './SingleBlog/SingleBlog';

export const Blog = () => {

    const { theme } = useContext(ThemeContext);

  return (
    <div>
        {blogData.length > 0 && (
            <div className="blog flex flex-col items-center justify-start min-h-[100vh] p-[2rem] overflow-x-hidden " 
            id="blogs" style={{backgroundColor: theme.secondary}}>
                <div className="blog--header flex items-center justify-center w-full m-[1rem] ">
                    <h1 className='mb-[40px] text-[3.5rem] ' style={{color: theme.primary}}>Blog</h1>
                </div>
                <div className="blog--body w-full flex flex-col items-center justify-center ">
                    <div className="blog--bodyContainer flex items-center justify-center w-full gap-[4.5rem] ">
                        {blogData.slice(0, 3).reverse().map(blog => (
                            <SingleBlog 
                                theme={theme}
                                title={blog.title}
                                desc={blog.description}
                                date={blog.date}
                                image={blog.image}
                                url={blog.url}
                                key={blog.id}
                                id={blog.id}
                            />
                        ))}
                    </div> 

                    {blogData.length > 3 && (
                        <div className="blog--viewAll w-full flex items-center justify-end p-[2rem] mt-[1rem] ">
                            <button className='bg-[#f56539] text-[#eaeaea] pr-[0.25rem] transition duration-200 hover:text-[#212121] hover:bg-[#f56539] '>
                                View All
                                <HiArrowRight className='text-[#eaeaea] bg-[#212121b3] w-[40px] h-[40px] p-[0.5rem] text-[1.05rem] rounded-[50%] cursor-pointer transition duration-200 hover:text-[#eaeaea] hover:bg-[#212121] ' />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )}

    </div>
  )
}

export default Blog;