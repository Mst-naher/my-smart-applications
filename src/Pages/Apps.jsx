import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";
import { BsSearch } from "react-icons/bs";


const Apps = () => {
  const { products } = useProducts();

  const [search, setSearch] = useState("");
  // console.log(search)
  
      
  const term = search.trim().toLocaleLowerCase();
  const searchedProducts = term
    ? products.filter((product) =>
        product.title.toLocaleLowerCase().includes(term)
      )
    : products;
  console.log(searchedProducts);
      

 

  return (
    <section className="max-w-screen-xl mx-auto w-full p-8 ">
      <div className="p-10">
        <h1 className="text-center font-bold text-2xl">Our All Applications</h1>
        <p className="text-center  text-md">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center p-5">
        <h1 className="font-semibold">
          <span className="font-bold text-xl">({searchedProducts.length})</span>
          Apps Found
        </h1>

        <div className="relative w-[300px]">
          <label>
            <BsSearch className="absolute  top-1/2 transform -translate-y-1/2  text-gray-400 " />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 shadow-md  text-xl p-10 py-2 focus:outline focus:ring-2 focus:ring-blue-200"
              type="search"
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      <div>
        {searchedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
            {searchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="max-w-11/12 mx-auto w-full py-4 md:py-8 lg:py-12  ">
            <div className="flex flex-col justify-center items-center p-15">
              <img src="../assets/App-Error.png" alt="" />
              <h1 className="lg:text-3xl font-bold mt-10">
                Oops!! App not found!
              </h1>
              <p className="text-[12px] text-gray-400 mt-2">
                The App you are requesting is not found on our system. please
                try another apps
              </p>
          
                <button className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-1 rounded-sm text-sm m-4">
                  Go Back!
                </button>
           
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Apps;
