import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-screen min-h-[80vh]  flex flex-col md:flex-row items-center justify-between px-10 md:px-20 md:pt-30 md:pl-25"
      style={{
        background: "radial-gradient(circle, #88D9FF 0%, #0D6691 100%)",
      }}
    >

      {/* LEFT CONTENT */}
      <div className="text-gray-900 max-w-xl md:pt-0 md:text-left text-center pt-70 md:ml-[50px]">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          CV MASTERY <br /> COURSE
        </h1>

        <p className="mt-4 text-lg md:text-2xl opacity-90">
          Turn your resume into a powerful, impactful, and
          interview-winning document.
        </p>

        <a href="/intern-login">  <button className="
    mt-6 
    text-gray-900 
    bg-transparent 
    border border-white 
    font-bold text-2xl 
    px-10 py-3 
    rounded-md
    shadow-2xl
    hover:bg-white 
    hover:text-blue-900 
    transition duration-300
  ">
          Enroll Now
        </button></a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:mr-[-150px] md:mt-40 flex mr-0 justify-center w-full md:w-full hidden lg:block">
        <img
          src="/courseshero.png"
          alt="CV Illustration"
          className="w-[430px] md:w-[1024px]"
        />
      </div>
    </div>
  );
};

export default Hero;
