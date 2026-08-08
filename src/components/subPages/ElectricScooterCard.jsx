import { FaWarehouse, FaCheck } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCompList,removeToCompList } from "../../redux/compareSlice"
import { useNavigate } from "react-router-dom";
import { addItem,removeItem } from "../../redux/wishListSlice";
import { useEffect} from "react";


const ElectricScooterCard = ({item}) => {
  const navigate= useNavigate()
  const dispatch =useDispatch()
  const compList = useSelector((state)=> state.compStore.compList) 
  const isSelected= compList.some((prodObj)=>prodObj.id===item.id )

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

// for wishList 
  const wishList = useSelector((state)=> state?.wishListStore?.wishList)
   
  const isWishList = wishList.some((prodObj)=> prodObj.id===item.id)

  useEffect(()=>{
  localStorage.setItem("wishList",JSON.stringify(wishList))
 },[wishList])
 
 
  return (
   <div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <Link to={`/product/${item.id}`}>
          <div className="h-56 shrink-0">
            <img
              className="mx-auto h-full dark:hidden rounded-xs"
              src={item.thumbnail?.[0]}
              alt={item.thumbnail.title}
            />
            <img className="mx-auto hidden h-full dark:block rounded-xs"
              src={item?.thumbnail?.[1]}
              alt={item.thumbnail.title}
            />
          </div>
        </Link>
        <div className="pt-0">
          <div className="mb-4 flex items-center justify-between gap-4">
        
            <div className="flex items-center justify-end gap-1">
            
              <button onClick={()=>{

                              if(isWishList){
                                dispatch(removeItem(item))
                              }
                              else{
                                dispatch(addItem(item))
                              }
                            }}
                type="button"
                data-tooltip-target="tooltip-add-to-favorites"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only"> Add to Favorites </span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path  className={`${isWishList?"text-red-500":""}`}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  />
                </svg>
              </button>

              <div
                id="tooltip-add-to-favorites"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
              >
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
            </div>
          </div>


          <div className="flex justify-between">
            <p
              href="#"
              className="text-lg font-semibold leading-tight text-gray-900 dark:text-white"
            >
              <Link to={`/product/${item.id}`}>
                {item.title}
              </Link>
            </p>
            <p className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              {`₹${item.price_inr}`}
            </p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              5.0
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              (455)
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">

            <button
              type="button"
              className={`cursor-pointer flex items-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out 
                ${isSelected ? "bg-green-400" : " bg-blue-500"}`}
              onClick={() => {
                if (isSelected) dispatch(removeToCompList(item.id))

                else dispatch(addToCompList(item))
              }} >

              <span className="border-1 w-[15px] h-[15px] inline-flex items-center justify-center flex-shrink-0"> {
                isSelected
                  ? <FaCheck className={` transition-all duration-300 ease-in-out 
                      ${isSelected
                      ? "scale-100"
                      : "scale-0"}`} />

                  : ""}
              </span>

              Compare
            </button>

            <button onClick={handleBooking}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center gap-1"
            >
              <FaWarehouse />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectricScooterCard
