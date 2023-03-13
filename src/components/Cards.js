import React from "react";

const Cards = () => {
  return (
    <div className="w-full   py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            src="./Assets/single.png"
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"/>
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p> 
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2 GB</p>
          </div>
          <button className="text-black bg-[#00fd9a] w-[200px] rounded-md font-medium my-6  mx-auto py-3">Start trail</button>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
          <img
            src="./Assets/double.png"
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"/>
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$149</p> 
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00fd9a] w-[200px] rounded-md font-medium my-6  mx-auto py-3">Start trail</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            src="./Assets/triple.png"
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"/>
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$149</p> 
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2 GB</p>
          </div>
          <button className="text-black bg-[#00fd9a] w-[200px] rounded-md font-medium my-6  mx-auto py-3">Start trail</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
