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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
          {searchedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;
