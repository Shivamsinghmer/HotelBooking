import { Link } from "react-router-dom";
import { assets } from "../assets/assets"; // Adjust the path as necessary

const HotelCard = ({ room, index }) => {
  return (
    <div key={room._id} className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
      <Link
        to={"/rooms" + room._id}
        onClick={() => {
          scrollTo(0, 0);
        }}
        className="block"
      >
        <img src={room.images[0]} alt="" className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]" />
        {index % 2 === 0 && (
          <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
            BestSeller
          </p>
        )}
        <div className="p-4 pt-5 ">
          <div className="flex items-center justify-between">
            <p className="font-playfair text-xl font-medium text-gray-800">
              {room.hotel.name}
            </p>
            <div>
              <img src={assets.starIconFilled} alt="" /> 4.5
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
            <img src={assets.locationIcon} alt="" />
            <span>{room.hotel.address}</span>
          </div>
          <div className="flex items-center mt-4 justify-between">
            <p>
              <span className="text-xl text-gray-800 ">
                ${room.pricePerNight}
              </span>
              /night
            </p>
          </div>
        </div>
      </Link>
      <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer absolute bottom-4 right-4 bg-white">
        Book Now
      </button>
    </div>
  );
};

export default HotelCard;
