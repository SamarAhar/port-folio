import React, { useContext, useState } from "react";
import headerData from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IoCloseSharp, IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  const { theme, setHandleDrawer } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 className="">{headerData.name}</h1>
        <IoMenuSharp
          className="text-[2.5rem] text-[#eaeaea] cursor-pointer transform translate-y-[-10px] transition duration-300 hover:text-[#f56539] "
          onClick={handleDrawerOpen}
          aria-label="Menu"
        />

        {/* <div className='flex gap-4 cursor-pointer text-xl text-[#eaeaea] justify-center items-center'>
          <p className='hover:text-[#f56539] transition ease-in'>Home</p>
          <p className='hover:text-[#f56539] transition ease-in'>About</p>
          <p className='hover:text-[#f56539] transition ease-in'>Education</p>
          <p className='hover:text-[#f56539] transition ease-in'>Blog</p>
          <p className='hover:text-[#f56539] transition ease-in'>Contact</p>
        </div> */}
      </div>

      {open && (
        <div
          onClose={(event, reason) => {
            if (reason !== "backdropClick") {
              handleDrawerClose();
            } else if (reason !== "escapeKeyDown") {
              handleDrawerClose();
            }
          }}
          open={open}
          className="drawer MuiBackdrop-root absolute h-[100vh] left-0 top-0 flex items-start justify-start p-[0_1.8em] overflow-hidden w-[14em] not-italic font-normal text-[24px] bg-[#212121]  rounded-tr-[40px] rounded-br-[40px] "
        >
          <div className="div-closebtn">
            <IoCloseSharp
              onClick={handleDrawerClose}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  handleDrawerClose();
                }
              }}
              className="text-[2rem] font-bold cursor-pointer text-[#f56539] absolute right-[40px] top-[40px] transition duration-200 hover:text-[#eaeaea] "
              role="button"
              tabIndex="0"
              aria-label="Close"
            />
          </div>
          <br />

          <div onClick={handleDrawerClose}>
            <div className="navLink--container w-full  ">
              <div className="w-full">
                <div className="m-[2rem_auto] cursor-pointer rounded-[78.8418px] bg-[#212121] text-[#f56539] w-[85%] h-[60px] flex items-center justify-evenly p-[0px_30px] box-border border-[2px] border-[#f56539] transition duration-200 hover:bg-[#f56539] hover:text-[#212121] ">
                  <IoHomeSharp className="text-[1.6rem] " />
                  <span className="w-[50%] text-[1.3rem] font-bold ">
                    Home
                  </span>
                </div>
              </div>

              <div>
                <div className="m-[2rem_auto] rounded-[78.8418px] bg-[#212121] text-[#f56539] w-[85%] h-[60px] flex items-center justify-evenly p-[0px_30px] box-border border-[2px] border-[#f56539] transition duration-200 hover:bg-[#f56539] hover:text-[#212121] ">
                  <FaUser className="text-[1.6rem] " />
                  <span className="w-[50%] text-[1.3rem] font-bold ">
                    About
                  </span>
                </div>
              </div>

              <div>
                <div className="m-[2rem_auto] rounded-[78.8418px] bg-[#212121] text-[#f56539] w-[85%] h-[60px] flex items-center justify-evenly p-[0px_30px] box-border border-[2px] border-[#f56539] transition duration-200 hover:bg-[#f56539] hover:text-[#212121] ">
                  <HiDocumentText className="text-[1.6rem] " />
                  <span className="w-[50%] text-[1.3rem] font-bold ">
                    Education
                  </span>
                </div>
              </div>

              <div>
                <div className="m-[2rem_auto] rounded-[78.8418px] bg-[#212121] text-[#f56539] w-[85%] h-[60px] flex items-center justify-evenly p-[0px_30px] box-border border-[2px] border-[#f56539] transition duration-200 hover:bg-[#f56539] hover:text-[#212121] ">
                  <BsFillGearFill className="text-[1.6rem] " />
                  <span className="w-[50%] text-[1.3rem] font-bold ">
                    Services
                  </span>
                </div>
              </div>

              <div>
                <div className="m-[2rem_auto] rounded-[78.8418px] bg-[#212121] text-[#f56539] w-[85%] h-[60px] flex items-center justify-evenly p-[0px_30px] box-border border-[2px] border-[#f56539] transition duration-200 hover:bg-[#f56539] hover:text-[#212121] ">
                  <FaFolderOpen className="text-[1.6rem] " />
                  <span className="w-[50%] text-[1.3rem] font-bold ">
                    Blog
                  </span>
                </div>
              </div>

              <div>
                <div className="m-[2rem_auto] rounded-[78.8418px] bg-[#212121] text-[#f56539] w-[85%] h-[60px] flex items-center justify-evenly p-[0px_30px] box-border border-[2px] border-[#f56539] transition duration-200 hover:bg-[#f56539] hover:text-[#212121] ">
                  <MdPhone className="text-[1.6rem] " />
                  <span className="w-[50%] text-[1.3rem] font-bold">
                    Contact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
