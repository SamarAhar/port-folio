import React from "react";
import { Link } from "react-router-dom";
import headerData from "../../data/headerData";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar overflow-hidden">
      <div className="navbar--container">
        <h1 className=" font-bold text-[#212121] ">{headerData.name}</h1>
        {/* <ProfileDropdown
          className="text-[2.5rem] text-[#eaeaea] cursor-pointer transform translate-y-[-10px] transition duration-300 hover:text-[#f56539] "
          onClick={handleDrawerOpen}
          aria-label="Menu"
        /> */}
      <div className=" navMenu flex items-center justify-center gap-[2rem] text-[#eaeaea] cursor-pointer ">
        <Link to="/#about" onClick={() => scrollToSection("about")} className="hover:text-[#f56539] hover:scale-150 transition duration-200 ease-in">
          About
        </Link>
        <Link to="#" onClick={() => scrollToSection("education")} className="hover:text-[#f56539] hover:scale-150 transition duration-200 ease-in">
          Education
        </Link>
        <Link to="#" onClick={() => scrollToSection("skills")} className="hover:text-[#f56539] hover:scale-150 transition duration-200 ease-in">
          Skills
        </Link>
        <Link to="#" onClick={() => scrollToSection("projects")} className="hover:text-[#f56539] hover:scale-150 transition duration-200 ease-in">
          Projects
        </Link>
        <Link to="#" onClick={() => scrollToSection("achievement")} className="hover:text-[#f56539] hover:scale-150 transition duration-200 ease-in">
          Achievements
        </Link>
        <Link to="#" onClick={() => scrollToSection("blogs")} className="hover:text-[#f56539] hover:scale-150 transition duration-200 ease-in">
          Blogs
        </Link>
        <Link to="#" onClick={() => scrollToSection("contacts")} className="pr-[5rem] hover:text-[#f56539] hover:scale-150 transition duration-200 ease-in">
          Contact
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
