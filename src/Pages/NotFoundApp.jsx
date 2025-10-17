// import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const NotFoundApp = () => {
  // const [notFoundApp, setNotFoundApp] = useState('')



  return (
    <>
      <Navbar />
      <div className="max-w-11/12 mx-auto w-full py-4 md:py-8 lg:py-12  ">
        <div className="flex flex-col justify-center items-center p-15">
          <img src="../assets/App-Error.png" alt="" />
          <h1 className="lg:text-3xl font-bold mt-10">Oops!! App not found!</h1>
          <p className="text-[12px] text-gray-400 mt-2">
            The App you are requesting is not found on our system. please try
            another apps
          </p>

          <button className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-1 rounded-sm text-sm m-4">
            Go Back!
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundApp;