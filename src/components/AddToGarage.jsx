import GarageProd from "./GarageProd"
import { useGetBikesQuery } from "../redux/bookingSlice"
import { useState } from "react";
import { Link } from "react-router-dom";
const AddToGarage = () => {
  
  // const [qty,setQty]= useState(1)
  
  const [inGarage,setInGarage] = useState(localStorage.getItem("booking")
  ?JSON.parse(localStorage.getItem("booking"))
  :[])
  
  const {data:bikes,isLoading} = useGetBikesQuery();
 
  if(isLoading) return <h1>Loading... </h1>
   
{ /* ------------add bikes details form api with customer details ---------------- */ }
const bookedBikes = inGarage.map((booking)=>{
  const bike = bikes.find((item)=>item.id===booking.id)
  return {
    ...bike,
    ...booking,
  }
})

// updated quantity  
const changeQty=(id,symbol)=>{
  const updateQty= inGarage.map((item)=>{
    if(item.id===id){
      return{
         ...item,
         qty:symbol==="+" && item.qty < 5 
         ? item.qty+1 : symbol==="-" && item.qty > 1 
         ? item.qty-1:item.qty
      }
    }
    return item;
  })
setInGarage(updateQty);
localStorage.setItem("booking",JSON.stringify(updateQty))

}
// console.log("booked bikes : ",bookedBikes)

{ /* --------------- total price of products ---------------- */ }
  const totalPrice = bookedBikes.reduce((total,curr)=>{
  return total+(curr.qty * curr.price_inr)},0)

return (
  <div className="">
      <main className="px-4 md:px-8 mt-6 h-[100vh]">
  <div className="max-w-2xl mx-auto lg:max-w-5xl">
    <div className="mb-12 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
        My Garage 
      </h1>
      <Link to={`/myOrdersPage/`}><button className="text:md font-semibold bg-gray-300 px-2 py-1 rounded-md cursor-pointer" >My Orders</button></Link>

    </div>
    <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8">
      <ul className="lg:col-span-2 space-y-6">
        
        { 
        bookedBikes.length===0
        ?<h1 className="text-2xl dark:text-white">There is no bike in the Garage please select your Bike </h1>
        :
        bookedBikes?.map((item)=> <GarageProd key={item.id} item={item} setInGarage={ setInGarage} changeQty={changeQty}/>)
        }
     
      </ul>
      {/* Order Summary */}
      <div className="md:sticky md:top-0 h-max">
        <div className="bg-white border border-slate-300 rounded-md px-4 py-6 dark:bg-neutral-800 dark:border-neutral-700">
          <ul className="text-slate-600 font-medium space-y-4 dark:text-slate-400">
            <li className="flex flex-wrap gap-4 text-sm">
              Ex-Showroom {" "}
              <span className="ml-auto text-slate-900 font-semibold dark:text-slate-50">
                {`₹ ${totalPrice}`}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Insurance (Comprehensive){" "}
              <span className="ml-auto text-slate-900 font-semibold dark:text-slate-50">
               {`₹ ${totalPrice?10000:0}`}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Standard Accessories{" "}
              <span className="ml-auto text-slate-900 font-semibold dark:text-slate-50">
                {`₹ ${totalPrice?2500:0}`}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm text-slate-900 dark:text-slate-50">
              Total{" "}
              <span className="ml-auto font-semibold dark:text-slate-50">
                {`₹ ${totalPrice?totalPrice+10000+2500:0}`}
              </span>
            </li>
          </ul>
          <div className="mt-8 space-y-3 text-center">
           { 
            bookedBikes.length!==0 && <Link to={`/checkOut/`}>
            <button
              type="button"
              className="w-full px-4 py-2.5 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Checkout
            </button>
          </Link>
          }

            <Link to={"/"}
              href="#"
              className="inline-block text-blue-700 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-500"
            >
              Continue Shopping
            </Link>
          </div>
          <hr className="my-6 border-slate-300 dark:border-neutral-700"/>
        
        </div>
       
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default AddToGarage
