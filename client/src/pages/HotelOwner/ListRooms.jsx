/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";
const ListRooms = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  return (
    <div>
      <Title
        title=" Room Listings"
        align="left"
        font="outfit"
        subtitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />
      <p className="text-gray-500 mt-8">All rooms</p>
      <div className="w-full overflow-x-auto hidden sm:block max-w-3xl border border-gray-200 rounded-lg max-h-80 mt-3 ">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4 text-gray-600 font-medium">Name</th>
              <th className="p-4 text-gray-600 font-medium max-sm:hidden">
                Facility
              </th>
              <th className="p-4 text-gray-600 font-medium">Price/Night</th>
              <th className="p-4 text-gray-600 font-medium text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-700">
                  {item.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-700 max-sm:hidden">
                  {item.amenities.join(',')}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-700">
                  {item.pricePerNight}
                </td>
                <td className="py-3 px-4 text-red-500 border-t text-center border-gray-700">
                  <label htmlFor="" className="relative inline-flex items-center cursor-pointer text-gray-900 gapp-3">
                    <input type="checkbox"  className="sr-only peer" checked={item.isAvailable}  />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRooms;
