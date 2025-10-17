import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  //  console.log(error)

  return (
    <>
      <Navbar />
      <div className="max-w-11/12 mx-auto w-full py-4 md:py-8 lg:py-12  ">
        <div className="flex flex-col justify-center items-center p-15">
          <img src="../assets/error-404.png" alt="" />
          <h1 className="lg:text-3xl font-bold mt-10">Oops, page not found!</h1>
          <p className="text-[12px] text-gray-400 mt-2">
            The page you are looking for is not available.
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

export default ErrorPage;
