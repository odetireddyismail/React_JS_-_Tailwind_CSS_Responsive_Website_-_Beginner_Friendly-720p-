import React from "react";

const Analytic = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src="./Assets/laptop.jpg" className="w-[500px] mx-auto my-4" alt="./Loading the images" />
        <div className="flex justify-center flex-col  text-center px-4">
            <p className="text-[#00df9a] font-bold text-xl">DATA ANALYST DASHBOARD</p>
            <h1 className=" md:text-4xl sm:text-3xl text-2xl py-2 font-bold">Manage Data Analytic Centrally</h1>
            <p>Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work.</p>
            <button className="bg-black text-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytic;
