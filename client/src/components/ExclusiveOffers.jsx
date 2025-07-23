import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 bg-slate-50 pt-4 pb-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3/4">
        <div className="flex-1">
          <Title
            align="left"
            title="Exclusive Offers"
            subtitle="Explore our exclusive offers and discounts on selected properties, designed to make your stay even more memorable."
          />
        </div>
        <button className="group flex items-center gap-2 font-medium cursor-pointer mt-6 md:mt-0">
          View all Offers
          <img
            src={assets.arrowIcon}
            alt="Arrow Icon"
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col items-center justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">{item.priceOff}% OFF</p>
            <div>
                <p className="text-2xl font-medium font-playfair ">{item.title}</p>
                <p>{item.description}</p>
                <p className="text-xs text-white/70 mt-3">Expires {item.expiryDate}</p>
            </div>
            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-6">
                View Offers
                <img className="invert group-hover:translate-x-1 transition-all" src={assets.arrowIcon} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
