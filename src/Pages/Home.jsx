import React from "react";

const Home = () => {
  return (
    <div className="">
      <header>
        <div className="text-center ">
          <h1 className="text-6xl font-bold bg-gradient-[#001931] bg-clip-text ">
            We Build <br />
            <span className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            App
          </h1>
          <p className="m-5 ">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex items-center gap-10 ml-120">
            <a
              href="https://play.google.com/store/games"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center btn btn-outline border-1 border-gray-400">
                <img
                  className="w-10 h-10 ml- "
                  src="../assets/google-icon-2.png"
                  alt=""
                />
                <span className="text-xl ml-4">Google Play</span>
              </button>
            </a>
            <a
              href="https://www.apple.com/uk/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center btn btn-outline border-1 border-gray-400">
                <img
                  className="w-20 h-10 ml- "
                  src="../assets/app-store-2.png"
                  alt=""
                />
                <span className="text-xl ml-">App Store</span>
              </button>
            </a>
          </div>
        </div>
      </header>
      {/* Hero section */}
      <section>
        <div className="ml-60 ">
          <img className="mt-10 " src="../assets/hero.png" alt="" />
        </div>
        {/* Trusted ... */}
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-10">
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
    </div>
  );
};

export default Home;
