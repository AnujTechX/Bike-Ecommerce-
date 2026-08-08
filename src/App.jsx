import Navbar from "./components/Navbar";
import {Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import ComPage from "./components/ComPage";
import AddToGarage from "./components/AddToGarage";
import BookingNow from "./components/BookingNow";
import CheckOut from "./components/CheckOut";
import {Toaster} from "react-hot-toast";
import MyOrdersPage from "./components/MyOrdersPage";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProfilePage from "./components/ProfilePage";
// import CompareBare from "./components/CompareBare";
import ElectricBikes from "./components/subPages/ElectricBikes";
import FindNewBikes from "./components/subPages/FindNewBikes";
import UpComingBikes from "./components/subPages/UpComingBikes";
import NewScooters from "./components/subPages/NewScooters";
import ElectricScooter from "./components/subPages/ElectricScooter";
import UpComingScooters from "./components/subPages/UpComingScooters";
import WishList from "./components/WishList";
import SelectBrand from "./components/SelectBrand";
function App() {

  return (
  <>
  <div className="dark:bg-gray-800">    
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/newBikes" element={<FindNewBikes/>}/>
      <Route path="/electricBikes" element={<ElectricBikes/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
      <Route path="/comPage" element={<ComPage/>}/>
      <Route path="/bookingPage/:id" element={<BookingNow/>}/>
      <Route path="/myGarage/" element={<AddToGarage/>}/>
      <Route path="/checkOut/" element={<CheckOut/>}/>
      <Route path="/myOrdersPage/" element={<MyOrdersPage/>}/>
      <Route path="/signIn/" element={<SignIn/>}/>
      <Route path="/register/" element={<SignUp/>}/>
      <Route path="/userProfile/" element={<ProfilePage/>}/>
      <Route path="/upcomingBike/" element={<UpComingBikes/>}/>
      <Route path="/findNewScooter" element={<NewScooters/>}/>
      <Route path="/electricScooter"element={<ElectricScooter/>}/>
      <Route path="/upcomingScooter" element={<UpComingScooters/>}/>
      <Route path="/wishList" element={<WishList/>}/>
      <Route path="/selectBrand/:brand" element={<SelectBrand/>}/>
    </Routes>
    {/* <CompareBare/> */}
    <Footer/>
    <Toaster position="top center" toastOptions={{
      style:{
        fontSize:"20px",
        marginTop:"70px",
        backdropFilter:"blur(10px)",
        background: "rgba(255,255,255,0.8)",
        // backgroundColor:"lightgreen"
        maxWidth:"600px",
      }
    }}/>
   </div>
  </>
  )
}

export default App;
