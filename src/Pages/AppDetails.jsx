import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';
import { FiDownload } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';


const AppDetails = () => {
  const {id} = useParams()
  const {products, loading, error} = useProducts()

  const product = products ?.find(p=> String(p.id) === id)
  if(loading) return <p>Loading ...</p>
  
  const { downloads, image, title, description, ratingAvg, reviews } = product ||{}
   
  
  const handleAddToInstallNow = ()=>{
    const existingList = JSON.parse(localStorage.getItem("installList"));
   

    let updatedList = []
    if(existingList){
      const isDuplicate = existingList.some(p=> p.id === product.id)
      if(isDuplicate) return alert('sory vai')
       updatedList = [...existingList, product]
      // console.log(updatedList)
    } else {
      updatedList.push(product); 
    }

    localStorage.setItem("installList", JSON.stringify(updatedList)); 
  }

  return (
    <div>
      <div className="max-w-screen-xl mx-auto w-full flex-1 p-10">
        <div className=" card bg-base-100 flex lg:flex-row shadow-md ">
          <div className="">
            <figure className="">
              <img
                className="h-48 overflow-hidden object-cover "
                src={image}
                alt="app"
              />
            </figure>
          </div>

          <div className="card-body">
            <h2 className="card-title text-2xl ">{title}</h2>
            <p>{description}</p>
            <hr className="borderd border-gray-300" />
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-10">
                <div>
                  <FiDownload className="bg-green-100 text-green-600 text-3xl rounded-md p-1 gap-2" />
                  <p className="text-sm text-gray-400">Downoads</p>
                  <h2 className="font-bold text-xl">
                    {" "}
                    {downloads / 1000000 + "M"}
                  </h2>
                </div>
                <div>
                  <img
                    className="w-[25px] p-1 gap-2"
                    src="../assets/icon-ratings.png"
                    alt=""
                  />
                  <p className="text-sm text-gray-400">Average Rating</p>
                  <h2 className="font-bold text-xl"> {ratingAvg}</h2>
                </div>
                <div>
                  <img
                    className="w-[35px] p-1 gap-2"
                    src="../assets/icon-review.png"
                    alt=""
                  />
                  <p className="text-sm text-gray-400">Total Reviews</p>
                  <h2 className="font-bold text-xl">
                    {" "}
                    {reviews / 1000000 + "K"}
                  </h2>
                </div>
              </div>
            </div>
            <button
              onClick={handleAddToInstallNow}
              className="btn btn-success text-start w-[200px] text-white"
            >
              Install Now (291 + "MB")
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;