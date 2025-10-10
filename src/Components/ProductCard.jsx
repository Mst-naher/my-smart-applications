import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  // console.log(product)
const { title, image, downloads, description, ratings, ratingAvg, id } = product;

  return (
    <div className=" card bg-base-100 shadow-md hover:scale-105 transition ease-in-out">
      <Link to={`/appDetails/${id}`}>
        <figure>
          <img
            className="w-full h-[200px] object-cover p-5"
            src={image}
            alt="app"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <div>
              <button className="flex items-center bg-green-100 text-green-600 text-xl rounded-md p-1 gap-2">
                <FiDownload className="" /> {downloads / 1000000 + "M"}
              </button>
            </div>
            <div className="flex items-center bg-yellow-100 text-[#FF8811] text-xl rounded-md p-1 gap-2">
              <FaStar />
              {ratings.name}
              {ratingAvg}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;