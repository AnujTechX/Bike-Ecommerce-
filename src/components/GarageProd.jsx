import { useState } from "react"

const GarageProd= ({item,setInGarage,changeQty}) => {

 const [isOpen ,setIsOpen] = useState(false)
  let inGarage = localStorage.getItem("booking")
  ?JSON.parse(localStorage.getItem("booking"))
  :[]
  
  // console.log("Add item : ",item)
  const removeFromGarage=(id)=>{
    const updatedGarage= inGarage.filter((prod)=> prod.id!==id);
    localStorage.setItem("booking",JSON.stringify(updatedGarage));
    setInGarage(updatedGarage)
  }
  return (
      <li 
         className="bg-white px-4 py-6 rounded-md border border-slate-300 dark:bg-neutral-800 dark:border-neutral-700">
        
        <div className="flex gap-4"  onClick={()=> !isOpen ? setIsOpen(true):setIsOpen(false)}>
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
            <div className="flex items-start gap-4 justify-end">
              <button
                type="button"
                aria-label="add to wishlist Stylish Golden Watch"
                className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 h-4 fill-slate-400 hover:fill-pink-600 inline-block dark:hover:fill-pink-500"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  />
                </svg>
              </button>
              {/* remove button  */}
              
              <button onClick={(e)=>{
                e.stopPropagation();
                removeFromGarage(item.id)}}
                type="button"
                aria-label="Remove Stylish Golden Watch from cart"
                className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 fill-slate-400 hover:fill-red-600 inline-block dark:hover:fill-red-500"
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
            {/* Quantity Selector */}
            <div className="flex items-center mt-auto px-2.5 py-1.5 border border-slate-300 text-slate-900 font-medium text-xs rounded-md dark:border-neutral-700 dark:text-slate-50 dark:bg-neutral-800">
              <button onClick={(e)=>{
                e.stopPropagation()
                changeQty(item.id,"-")}}
                type="button"
                aria-label="Decrease quantity"
                className="cursor-pointer focus:outline-none focus-visible:ring-2
                          focus-visible:ring-blue-500 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                    data-original="#000000"
                  />
                </svg>
              </button>
              {/* item quantity */}

              <span className="mx-3">{item.qty}</span>
              <button onClick={(e)=>{
                e.stopPropagation()
                changeQty(item.id,"+")}}
                type="button"
                aria-label="Increase quantity"
                className="cursor-pointer focus:outline-none focus-visible:ring-2
                          focus-visible:ring-blue-500 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
          <div className={`transition-all duration-200 ease-in-out dark:bg-neutral-800 dark:border-neutral-700 dark:text-white
            ${isOpen?"max-h-[550px] opacity-100 mt-5 overflow-auto":"h-0 overflow-hidden opacity-0"}`}>
            {/* <h1>Customer Details</h1> */}
            <p className="my-2 flex justify-between items-center md:flex justify-between"><span>Customer Name</span> <span>{item.name}</span></p>

               <p className="my-2 flex justify-between items-center  md:flex justify-between"><span>Email</span> <span>{item.email}</span></p>
               <p className="my-2 flex justify-between items-center  md:flex justify-between"><span>Phone Number</span> <span>{item.phone}</span></p>
               <h3 className="text-lg font-semibold bg-gray-100 dark:bg-neutral-700 px-1 rounded-md">Address</h3>
               <p className="my-2 flex justify-between items-center  md:flex justify-between "><span>Area</span> <span>{item.address.area}</span></p>
               <p className="my-2 flex justify-between items-center  md:flex justify-between"><span>City Name</span> <span>{item.address.city}</span></p>
               <p className="my-2 flex justify-between items-center  md:flex justify-between"><span>State</span> <span>{item.address.state}</span></p>
               <p className="my-2 flex justify-between items-center md:flex justify-between"><span>Pin Code</span> <span>{item.address.code}</span></p>
               <p className="my-2 flex justify-between items-center  md:flex justify-between"><span>Booking Date</span> <span>{item.date}</span></p>
          </div>
        </li>
    
  )
}

export default GarageProd
