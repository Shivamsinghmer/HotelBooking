import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free Wifi": false,
      "Free BreakFast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <form className="p-4">
      <Title
        title="Add Room"
        align="left"
        font="outfit"
        subtitle="Fill the accurate details carefully and provide correct room details, pricing, and amenities to enhance the user booking experience."
      />

      {/* Image Upload */}
      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img
              className="max-h-32 w-full sm:w-32 cursor-pointer opacity-80 border rounded object-cover"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt={`Room upload ${key}`}
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      {/* Room Type & Price */}
      <div className="w-full flex flex-col sm:flex-row sm:gap-4 mt-4">
        {/* Room Type */}
        <div className="flex-1">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select
            value={inputs.roomType}
            onChange={(e) =>
              setInputs({ ...inputs, roomType: e.target.value })
            }
            className="border border-gray-300 mt-1 rounded p-2 w-full opacity-80"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        {/* Price */}
        <div className="sm:max-w-[160px] mt-4 sm:mt-0">
          <p className="text-gray-800">Price <span className="text-xs">/night</span></p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-full opacity-80"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: Number(e.target.value) })
            }
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="mt-6 text-gray-800">Amenities</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 max-w-xl text-gray-700">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
              className="accent-blue-500"
            />
            <span>{amenity}</span>
          </label>
        ))}
      </div>
      <button className="bg-[#2563EB] text-white px-8 py-2 rounded mt-8 cursor-pointer">Add Room</button>
    </form>
  );
};

export default AddRoom;
