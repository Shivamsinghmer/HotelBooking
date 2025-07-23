import React from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = React.useState(userBookingsDummyData);

  return (
    <div className="pt-28 px-4 md:px-16 lg:px-24 xl:px-32 pb-32 bg-gray-50 min-h-screen">
      <Title
        title="My Bookings"
        subtitle="Easily manage your past, current and future bookings and view your reservation history. Plan your trip seamlessly with few clicks..."
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-6">
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payments</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] gap-6 md:gap-4 py-6 border-b border-gray-300"
          >
            {/* Hotel Info */}
            <div className="flex gap-4">
              <img
                src={booking.room.images[0]}
                alt={booking.hotel.name}
                className="w-40 h-30 object-cover rounded shadow"
              />

              <div className="flex flex-col justify-between">
                <p className="font-playfair text-xl md:text-2xl">
                  {booking.hotel.name}
                  <span className="font-inter text-sm ml-1">
                    ({booking.room.roomType})
                  </span>
                </p>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location" />
                  <span>{booking.hotel.address}</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="guests" />
                  <span>
                    Guest{booking.guests > 1 ? "s" : ""}: {booking.guests}
                  </span>
                </div>
              </div>
            </div>

            {/* Date & Timings */}
            <div className="flex flex-col justify-center text-sm">
              <p>
                <span className="font-medium">Check-in:</span>{" "}
                {new Date(booking.checkInDate).toDateString()}
              </p>
              <p>
                <span className="font-medium">Check-out:</span>{" "}
                {new Date(booking.checkOutDate).toDateString()}
              </p>
            </div>

            {/* Payments */}
            <div className="flex flex-col justify-center text-sm">
              <p className="font-medium">Total: ${booking.totalPrice}</p>
              <p
                className={`text-gray-500 ${
                  booking.isPaid ? "text-green-600" : "text-red-600"
                }`}
              >
                {booking.isPaid ? "Paid" : "Pending"}
              </p>
              {!booking.isPaid && (
                <button className="mt-2 px-4 py-1 border-1 w-1/2 bg-white text-black rounded hover:bg-green-500 transition">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
