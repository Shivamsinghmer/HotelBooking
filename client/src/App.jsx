import Navbar from './components/Navbar'
import { Routes, useLocation,Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/HotelOwner/Layout'
import DashBoard from './pages/HotelOwner/DashBoard'
import ListRooms from './pages/HotelOwner/ListRooms'
import AddRoom from './pages/HotelOwner/AddRoom'



const App = () => {
  const isOwner = useLocation().pathname.includes('owner')  
  return (
    <div>
      {!isOwner && <Navbar/>}
      {false && <HotelReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path='owner/*' element={<Layout />}>
            <Route index element={<DashBoard/>} />
            <Route path="add-room" element={<AddRoom/>} />
            <Route path="list-room" element={<ListRooms/>} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App