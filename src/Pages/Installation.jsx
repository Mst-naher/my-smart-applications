import React, { useEffect, useState } from 'react';

const Installation = () => {
 const [installList, setInstallList] = useState([])
 
useEffect(()=>{
   const savedList = JSON.parse(localStorage.getItem("installList"));
  if(savedList) setInstallList(savedList);


}, [])

  return (
    <div>
     
      <section className="max-w-screen-xl mx-auto w-full p-8 ">
        <div className="p-10">
          <h1 className="text-center font-bold text-2xl">
            Your Installed Apps
          </h1>
          <p className="text-center  text-md">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center p-5">
          <h1 className="font-semibold">
            <span className="font-bold text-xl">{installList.length}</span>
           Apps Found
          </h1>
          <div className="relative w-[300px]">
            <button>Sort</button>
          </div>
        </div>
        <div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
            {searchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );            
};

export default Installation;