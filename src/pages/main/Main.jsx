import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Landing from '../../components/landing/Landing';
import Footer from '../../components/footer/Footer';
import About from '../../components/about/About';
import Education from '../../components/education/Education';
import Skills from '../../components/skills/Skills';
// import Experience from '../../components/experience/Experience';
import Projects from '../../components/projects/Projects';
import Achievement from '../../components/achivement/Achivement';
// import Services from '../../components/services/Services';
// import Testimonials from '../../components/testimonials/Testimonials';
import Blog from '../../components/blogs/Blog';
import Contacts from '../../components/contacts/Contacts';
import headerData from '../../data/headerData';

export const Main = () => {

    useEffect(() => {
        document.title = `${headerData.name} - Portfolio`;
    },[]);

  return (
    <div>
        <Navbar />        
        <Landing />
        <About />
        <Education />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Achievement />
        {/* <Services /> */}
        {/* <Testimonials /> */}
        <Blog />
        <Contacts />
        <Footer />
    </div>
  )
}

export default Main;
