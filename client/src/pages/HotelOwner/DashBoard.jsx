import React, { useState } from "react";
import { assets, dashboardDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const DashBoard = () => {
  const [dashboardData] = useState(dashboardDummyData);

  return (
    <div className="p-4">
      <Title
        title="Dashboard"
        subtitle="Monitor your room listings, room bookings, and analyse revenue - All In One Place. Stay updated with real-time insights to ensure smooth operations."
        align="left"
        font="outfit"
      />

      {/* Summary Cards */}
      <div className="flex flex-col sm:flex-row gap-4 my-8">
        {/* Total Bookings */}
        <div className="bg-[#2563EB]/5 border border-[#2563EB]/10 rounded-lg flex p-4 w-full sm:w-1/2">
          <img src={assets.totalBookingIcon} alt="Total Bookings Icon" />
          <div className="flex flex-col justify-center ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Bookings</p>
            <p className="text-neutral-400 text-base">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-[#2563EB]/5 border border-[#2563EB]/10 rounded-lg flex p-4 w-full sm:w-1/2">
          <img src={assets.totalRevenueIcon} alt="Total Revenue Icon" />
          <div className="flex flex-col justify-center ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Revenue</p>
            <p className="text-neutral-400 text-base">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings Title */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>

      {/* Table View for Desktop */}
      <div className="w-full overflow-x-auto hidden sm:block max-w-3xl border border-gray-200 rounded-lg max-h-80">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4 text-gray-600 font-medium">User Name</th>
              <th className="p-4 text-gray-600 font-medium">Room Name</th>
              <th className="p-4 text-gray-600 font-medium">Total Amount</th>
              <th className="p-4 text-gray-600 font-medium">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-4">{item.user.username}</td>
                <td className="p-4">{item.room?.roomType || "N/A"}</td>
                <td className="p-4">${item.totalPrice || 0}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      item.isPaid
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.isPaid ? "Completed" : "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View for Mobile */}
      <div className="flex flex-col gap-4 sm:hidden mt-4">
        {dashboardData.bookings.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="mb-2">
              <p className="text-sm text-gray-500">User</p>
              <p className="text-base text-gray-800">{item.user.username}</p>
            </div>

            <div className="mb-2">
              <p className="text-sm text-gray-500">Room</p>
              <p className="text-base text-gray-800">
                {item.room?.roomType || "N/A"}
              </p>
            </div>

            <div className="mb-2">
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-base text-gray-800">
                ${item.totalPrice || 0}
              </p>
            </div>

            <div className="mt-2">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  item.isPaid
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {item.isPaid ? "Completed" : "Pending"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
