import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

const Installation = () => {
  const [installList, setInstallList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installList"));
    if (savedList) setInstallList(savedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installList].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-dsc") {
      return [...installList].sort((a, b) => b.size - a.size);
    } else {
      return installList;
    }
  })();

 

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installList"));

    let updatedList = existingList.filter((p) => p.id !== id);

    //for UI Instant update
    setInstallList((prev) => prev.filter((p) => p.id !== id));

    localStorage.setItem("installList", JSON.stringify(updatedList));
  };

  return (
    <div className="space-y-3">
      <section className="max-w-screen-xl mx-auto w-full  ">
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
            <span className="font-bold text-xl">
              {sortedItem.length}
              Apps Found
            </span>
          </h1>
          <div className="relative w-[300px]">
            <label className="form-control w-full max-w-sm">
              <select
                className="select select-bordered"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">Sort by Size</option>
                <option value="size-asc">Low - High</option>
                <option value="size-dec">High - Low</option>
              </select>
            </label>
          </div>
        </div>
        <div className="space-y-3">
          {sortedItem.map((p) => (
            <div key={p.id} className="max-w-screen-xl mx-auto w-full flex-1 ">
              <div className=" card bg-base-100 flex lg:flex-row shadow-md justify-between items-center m-10">
                <div className="p-10">
                  <figure className="">
                    <img
                      className="h-20 overflow-hidden object-cover "
                      src={p.image}
                      alt="app"
                    />
                  </figure>
                </div>

                <div className="card-body">
                  <h3 className="card-title text-md "> {p.title}</h3>
                  {/* <p>{p.companyName}</p> */}

                  <div className="flex justify-between">
                    <div className="flex flex- justify-start items-center gap-10">
                      <div className="flex gap-2">
                        <FiDownload className="bg-green-100 text-green-600 text-xl rounded-md p-1 gap-2" />

                        <h2 className="text-sm">
                          {" "}
                          {p.downloads / 1000000 + "M"}
                        </h2>
                      </div>
                      <div className="flex ">
                        <img
                          className="w-[20px] p-1 gap-2"
                          src="../assets/icon-ratings.png"
                          alt=""
                        />

                        <h2 className=" text-sm"> {p.ratingAvg}</h2>
                      </div>
                      <div className="flex gap-">
                        <img
                          className="w-[25px] p-1 gap-2"
                          src="../assets/icon-review.png"
                          alt=""
                        />

                        <h2 className=" text-sm">
                          {" "}
                          {p.reviews / 1000000 + "K"}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-15">
                  <button
                    onClick={() => handleRemove(p.id)}
                    className="btn btn-success text-start w-[90px] text-white "
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Installation;
