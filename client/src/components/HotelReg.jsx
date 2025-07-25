import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full right-0 z-50 flex items-center justify-center '>
        <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
           <img src={assets.regImage} alt="" className='w-1/2 rounded-xl hidden md:block '/> 

           <div className='relative flex flex-col md:w-1/2 p-8 md:p-10'>
                <img src={assets.closeIcon} className='absolute top-4 right-4 h-4 w-4 cursor-pointer' alt="" />
                <p className='text-2xl font-semibold mt-6 '>Register Your Hotel </p>

                {/* Hotel Name */}
                <div className='w-full mt-6'>
                    <label className='text-sm font-semibold'>Hotel Name</label>
                    <input type="text" placeholder='Enter Hotel Name' className='w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-blue-500' required />
                </div>
                {/* Phone */}
                <div className='w-full mt-6'>
                    <label className='text-sm font-semibold'>Phone</label>
                    <input type="tel" placeholder='Enter Phone Number' className='w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-blue-500' required />
                </div>
                {/* Address */}
                <div className='w-full mt-6'>
                    <label className='text-sm font-semibold'>Address</label>
                    <input type="text" placeholder='Enter Address' className='w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-blue-500' required /> 
                </div> 
                {/* Select City */}
                <div className='w-full mt-6' >
                    <label className='text-sm font-semibold '>Select City</label>
                    <select className='w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-blue-500' required>
                        <option value="">Select City</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <button>
                    <div className='w-full bg-blue-500 text-white rounded-lg p-2 mt-6 text-center cursor-pointer hover:bg-blue-600 transition duration-200'>
                        Register Hotel
                    </div>
                </button>
           </div>
        </form>
    </div>
  )
}

export default HotelReg