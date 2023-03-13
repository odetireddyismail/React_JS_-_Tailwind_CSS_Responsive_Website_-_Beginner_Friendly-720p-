import React from "react";
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex justify-center flex-col">
       <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTIC</p>
       <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">Grow With Data.</h1>
       <div className="flex justify-center item-center">

        <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, Flexible Financing for </p>
        <Typed  className="md:text-5xl sm:text-4xl text-xl font-bold md:pd-4  pl-2 "
        strings={['BTB', 'BTC','SASS']}
         typeSpeed={600}
         backSpeed={140}
  loop
         />
       </div>
       <div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytic to increase revenue for BTB, BTC, & SASS Platforms. </p>
        <button className="bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
       </div>
      </div>
    </div>
  );
};

export default Hero;
