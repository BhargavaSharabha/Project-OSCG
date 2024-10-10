import React from "react";
import About from "./About";
import Footer from "./Footer";
import clientImage from "./portImages/grapeWomen.png";

const Header = () => {
  return (
    <>
      <div className="background relative hidden lg:block">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <div className="w-full h-screen flex items-center justify-center sm-bg-image ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-9 w-full max-w-6xl ">
          {/* This div with the border will be hidden on small screens */}
          <div className="hidden lg:block w-[530px] h-[530px] relative rounded-[4rem] border-8 border-[#F1D2A9] lg:right-[5rem] lg:bottom-[2rem]"></div>

          {/* Image will be hidden on small screens */}
          <div className="hidden lg:block w-[500px] h-[500px] rounded-[4rem] overflow-hidden absolute lg:left-[10rem]">
            <img
              alt="img1"
              src={clientImage}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text that will remain visible on all screen sizes */}
          <div className="text-[32px] sm:text-[52px] tracking-tighter font-bold text-[#0B3D2C] font-montserrat pt-0 lg:pt-[165px] absolute lg:left-[45rem] sm-text sm:p-4">
            Plot Against Hunger and Grow Just Greens
          </div>

        </div>
      </div>

      <About />

      <Footer />
    </>
  );
};

export default Header;