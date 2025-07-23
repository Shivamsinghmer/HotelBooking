import React, { useState } from "react";
import Title from "../components/Title";
import { assets, roomsDummyData, facilityIcons } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex items-center gap-2 cursor-pointer mt-2 text-sm">
    <input
      type="checkbox"
      checked={selected}
      onChange={(e) => onChange(e.target.checked, label)}
      className="accent-indigo-500"
    />
    <span className="select-none font-light text-gray-700">{label}</span>
  </label>
);

const RadioButton = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex items-center gap-2 cursor-pointer mt-2 text-sm">
    <input
      type="radio"
      name="sortOptions"
      checked={selected}
      onChange={() => onChange(label)}
      className="accent-indigo-500"
    />
    <span className="select-none font-light text-gray-700">{label}</span>
  </label>
);

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRanges = ["$50 - $100", "$100 - $200", "$200 - $300", "$300 - $500", "$500+"];
  const sortOptions = ["Price: Low to High", "Price: High to Low", "Most Popular", "Newest First"];

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50 min-h-screen">
      <Title
        title="All Rooms"
        subtitle="Take advantage of our limited time offers and special packages to enhance your stay and create unforgettable moments."
        align="left"
      />

      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        {/* Filters Sidebar */}
        <aside className="lg:w-80 w-full bg-white rounded-xl shadow-md border p-4 h-fit">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold">Filters</h3>
            <button
              className="text-sm text-blue-500 lg:hidden"
              onClick={() => setOpenFilter(!openFilter)}
            >
              {openFilter ? "Hide" : "Show"}
            </button>
          </div>

          <div className={`${openFilter ? "block" : "hidden"} lg:block`}>
            <div className="mt-4">
              <h4 className="font-medium text-sm mb-2">Room Type</h4>
              {roomTypes.map((room, i) => <CheckBox key={i} label={room} />)}
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-sm mb-2">Price Range</h4>
              {priceRanges.map((price, i) => <CheckBox key={i} label={price} />)}
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-sm mb-2">Sort By</h4>
              {sortOptions.map((option, i) => (
                <RadioButton key={i} label={option} />
              ))}
            </div>
          </div>
        </aside>

        {/* Room Listings */}
        <section className="flex-1 grid grid-cols-1 gap-10 pb-20">
          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              className="bg-white flex flex-col md:flex-row gap-6 shadow hover:shadow-lg rounded-xl overflow-hidden cursor-pointer transition duration-200"
            >
              {/* Image */}
              <img
                src={room.images[0]}
                alt={room.hotel.name}
                className="w-full md:w-72 h-60 md:h-full object-cover"
              />

              {/* Room Info */}
              <div className="flex flex-col justify-between p-4 w-full">
                <div>
                  <p className="text-sm text-gray-500">{room.hotel.city}</p>
                  <h2 className="text-xl font-semibold text-gray-800 mt-1">{room.hotel.name}</h2>

                  <div className="flex items-center mt-1">
                    <StarRating rating={room.rating} />
                    <span className="ml-2 text-sm text-gray-600">200+ reviews</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                    <img src={assets.locationIcon} alt="Location" className="w-4 h-4" />
                    <span>{room.hotel.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center mt-4">
                    {room.amenities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs"
                      >
                        <img src={facilityIcons[item]} alt={item} className="w-4 h-4" />
                        <span>{item.replace(/([A-Z])/g, " $1")}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-lg font-semibold text-indigo-600">
                    ${room.pricePerNight} <span className="text-sm font-normal text-gray-500">/night</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AllRooms;
