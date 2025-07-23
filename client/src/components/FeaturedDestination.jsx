import { useNavigate } from "react-router-dom";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";

const FeaturedDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center px-6 bg-slate-50 md:px-16 lg:px-24  py-20">
      <Title
        title="Featured Destination"
        subtitle="Discover our handpicked selection of exceptional properties of the world, offering unparalleled luxury and unforgetable experiences."
      />

      <div className="flex flex-wrap item-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={() => {
            navigate("/rooms");
            scrollTo(0, 0);
        }}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover-bg-gray-50 transition-all cursor-pointer"
      >
        View all Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
