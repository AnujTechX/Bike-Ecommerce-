
import { Warehouse } from "lucide-react";
import { removeItem } from "../redux/wishListSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const WishListCards = ({item}) => {
  const navigate= useNavigate()
  const dispatch= useDispatch();

  const userRegisteredDetails= JSON.parse(localStorage.getItem("registered"))||[]

     /* ---------------check user registered before booking  ---------------- */ 
  const handleBooking=()=>{
  console.log("booking check details :",Object.keys(userRegisteredDetails).length)
  if(Object.keys(userRegisteredDetails).length>0){
    navigate(`/bookingPage/${item.id}`)
  }
  else{
    navigate("/register/");
  }
} 


  return (
   <li 
         className="bg-white px-4 py-6 rounded-md border border-slate-300 dark:bg-neutral-800 dark:border-neutral-700">
        
        <div className="flex gap-4" > 
          <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
            <div className="w-32 h-24 max-sm:w-30 max-sm:h-24 shrink-0">
              <img
                src={item?.thumbnail?.[0]}
                className="w-full h-full object-cover rounded-md"
                alt="classic bike"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                 {item.title}
                </h3>
                <p className="text-[13px] text-slate-600 mt-2 flex items-center gap-2 dark:text-slate-400">
                  Color:{" "}
                  <span className="font-medium dark:text-slate-300">
                    {item.color}
                  </span>
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {`₹ ${item.price_inr}`}
                </p>
              </div>
            </div>
          </div>
          <div className="ml-auto flex flex-col">
            {/* action buttons */}
            <div className="flex items-start gap-4 ">
              <button onClick={handleBooking}
                type="button"
                title="Add To Garage"
                aria-label="add to wishlist Stylish Golden Watch"
                className="mt-1.5 dark:text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              ><Warehouse  size={20} md:size={20} className=" text-fill-slate-400 hover:text-green-500"/>
              </button>
              {/* remove button  */}
              
              <button onClick={(e)=>{
                e.stopPropagation();
                dispatch(removeItem((item)))}}
                type="button"
                aria-label="Remove Stylish Golden Watch from cart"
                className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 fill-slate-400 hover:fill-red-600 inline-block dark:hover:fill-red-500"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000"
                  />
                  <path
                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>
           
          </div>
        </div>
          
        </li>
  )
}

export default WishListCards
