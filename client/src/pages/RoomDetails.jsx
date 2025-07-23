import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const roomData = roomsDummyData.find((room) => room._id === id);
    if (roomData) {
      setRoom(roomData);
      setMainImage(roomData.images[0]); // Set the first image as main
    }
  }, [id]);

  if (!room) {
    return <p className="text-center mt-20">Loading room details...</p>;
  }

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Title and Offer */}
      <div className="flex flex-col md:flex-row gap-2 md:items-center items-start">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {room.hotel.name}{" "}
          <span className="font-inter text-sm">({room.roomType})</span>
        </h1>
        <p className="text-xs font-inter py-1.5 px-3 text-white rounded-full bg-orange-500">
          20% OFF
        </p>
      </div>

      {/* Ratings */}
      <div className="flex items-center md:flex-row gap-1 mt-2">
        <StarRating />
        <p className="ml-2">200+ reviews</p>
      </div>

      {/* Address */}
      <div className="flex items-center md:flex-row gap-1 mt-2">
        <img src={assets.locationIcon} alt="Location icon" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Images Section */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Main Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt={`Main image of ${room.hotel.name}`}
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          {room.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Room image ${index + 1}`}
              className={`w-full h-32 md:h-40 lg:h-48 object-cover rounded-lg cursor-pointer transition duration-200 ${
                mainImage === image
                  ? "outline-2 outline-blue-500 shadow-2xl"
                  : ""
              }`}
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
      </div>
      {/* Room Highlights */}
      <div className="flex flex-col mt-10 md:flex-row md:justify-between">
        <div className="flex flex-col ">
          <h1 className="text-3xl md:text-4xl font-playfair">
            Experience Luxury Like Never Before
          </h1>
          <div className="flex flex-wrap mb-6  items-center gap-2 mt-2">
            {room.amenities.map((item, index) => (
              <div
                key={index}
                className="flex items-center mt-2 gap-2 px-3 py-2 bg-gray-100 rounded-lg"
              >
                <img
                  src={facilityIcons[item]}
                  alt="Check icon"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-sm font-inter">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
      </div>

      {/* Checkin Checkout form */}
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
        <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">
            <label htmlFor="checkInDate" className="font-medium">
              Check-In
            </label>
            <input
              type="date"
              name="checkInDate"
              id="checkInDate"
              placeholder="Check-In"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>

          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

          <div className="flex flex-col">
            <label htmlFor="checkOutDate" className="font-medium">
              Check-Out
            </label>
            <input
              type="date"
              name="checkOutDate"
              id="checkOutDate"
              placeholder="Check-Out"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>

          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

          <div className="flex flex-col">
            <label htmlFor="guests" className="font-medium">
              Guests
            </label>
            <input
              type="number"
              name="checkOutDate"
              id="guests"
              placeholder="0"
              className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none "
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#2563EB] hover:bg-[#2563EB]-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-10 py-3 text-base cursor-pointer"
        >
          Check Availability
        </button>
      </form>

      {/* Common Specifications */}
      <div className="mt-25 space-y-6 ">
        {roomCommonData.map((spec, index) => (
          <div
            key={index}
            className="flex items-center gap-4 mt-6 p-4 bg-white shadow-md rounded-lg"
          >
            <img src={spec.icon} alt={spec.title} className="w-8 h-8" />
            <div>
              <h3 className="text-lg font-semibold">{spec.title}</h3>
              <p className="text-gray-600">{spec.description}</p>
            </div>
          </div> // ← this closing tag was missing
        ))}
      </div>

      <div className="max-w-3xl border-y border-gray-300 py-10 my-15 ">
        <p>
          Guests will be allocated on a first-come, first-served basis. Please
          ensure to book your stay in advance to secure your preferred dates and
          accommodations. The hotel reserves the right to allocate rooms based
          on availability and booking order. We appreciate your understanding
          and cooperation in this matter.
        </p>
      </div>

      {/* Hosted By */}
      <div className="flex items-center gap-4 mt-10 flex-col">
        <div className="flex items-center gap-4 ">
          <img
            src={room.hotel.owner.image}
            alt=""
            className="h-14 w-14 md:h-18 md:w-18 rounded-full"
          />
          <div>
            <p className="text-lg md:text-xl">Hosted By {room.hotel.name}</p>
            <div className="flex items-center gap-1   mt-2">
              <StarRating />
              <p className="ml-2 ">200+ reviews</p>
            </div>
          </div>
        </div>
        <button className="bg-[#2563EB] hover:bg-[#2563EB]-dull active:scale-95 transition-all text-white rounded-md px-6 py-3 text-base cursor-pointer">
             Contact Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
