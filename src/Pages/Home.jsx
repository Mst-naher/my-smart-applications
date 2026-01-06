import React from "react";
import { Link, } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Home = () => {
 const  {products,  } = useProducts()
//  console.log(products);
  const featuredProducts = products.slice(0, 8)
  console.log(products)
 
  return (
    <div className="">
      <header className="max-w-screen-2xl mx-auto w-full py-4 md:py-8 lg:py-12  ">
        <div className="text-center ">
          <h1 className="text-6xl font-bold bg-gradient-[#001931] bg-clip-text p-0.5 ">
            We Build <br />
            <span className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>
            App
          </h1>
          <p className="m-5 p-4">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex items-center justify-center  w-full">
            <div className="flex flex-col mx-auto md:flex-row w-full  items-center justify-center gap-5 ">
              {/* <a className="w-1/2"
                href="https://play.google.com/store/games"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              <button className="flex  items-center btn btn-outline border-1 border-gray-300 shadow-md ">
                <img
                  className="w-10 h-10 ml- "
                  src="../assets/google-icon-2.png"
                  alt=""
                />
                <span className="text-md ml-4">Google Play</span>
              </button>
              {/* </a>
              <a */}
              {/* href="https://www.apple.com/uk/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              <button className="flex items-center btn btn-outline border-1 border-gray-300 shadow-md">
                <img
                  className="w-20 h-10"
                  src="../assets/app-store-2.png"
                  alt=""
                />
                <span className="text-md ml-">App Store</span>
              </button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </header>
      {/* Hero section */}
      <section>
        <div className="max-w-screen-xl mx-auto w-full   px-4 md:px-8 lg:px-12 mr-50 ">
          <img className="mt-" src="../assets/hero.png" alt="" />
        </div>
        {/* Trusted ... */}
        <div className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-10">
          <h1 className="text-5xl font-bold text-center mb-10">
            Trusted by Millions, Built for You
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 text-center">
              <p>Total Downloads</p>
              <h1 className="text-4xl font-bold m-4">29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div className="p-4 text-center">
              <p>Total Reviews</p>
              <h1 className="text-4xl font-bold m-4">906K</h1>
              <p>46% more than last month</p>
            </div>
            <div className="p-4 text-center">
              <p>Active Apps</p>
              <h1 className="text-4xl font-bold m-4">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="max-w-screen-xl mx-auto w-full p-8 ">
        <div className="p-10">
          <h1 className="text-center font-bold text-2xl">Trending Apps</h1>
          <p className="text-center  text-md">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center p-4 mt-10 hover:scale-x-150 transition ease-out">
            <Link
              to="/apps"
              className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-5 rounded-md text-xl font-bold px-10"
            >
              Show All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
