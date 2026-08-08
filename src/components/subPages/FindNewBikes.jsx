import { useGetBikesQuery } from "../../redux/bookingSlice" 
import NewBikesCards from "./NewBikesCards"
import CompareBare from "../CompareBare"
import { useState } from "react"

const FindNewBikes = () => {
  const {data:bikes,isLoading}= useGetBikesQuery()
  
  const [category,setCategory] = useState("")   
    const [price,setPrice] = useState("")
  
     /* --------------- filter functionality ---------------- */ 
    const filterBikes = bikes?.filter((item)=>{  

      console.log("category:",item.category===category) 

    const categoryMatch = category ===""||item.category===category 
  
    const priceMatch = 
        price===""||item.price===price 
        || (price==="lth2" && item.price_inr < 200000) 
        || (price==="gth2" && item.price_inr > 200000) 
  
        return  categoryMatch && priceMatch
    })
  console.log("filtered bikes :", filterBikes)
    // heading capitalize 
  const capitalize = (text) => {
  return text.split(" ").map((word)=> word[0].toUpperCase() + word.slice(1)).join(" ")
  }
  


  return (
   <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    {/* Heading & Filters */}
    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
      <div>
           <h2 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white text-center md:pl-4" >
           {category===""?"New Bikes":capitalize(category) }
          </h2>
      </div>
      {/* filter portion  */}
      <div className="flex items-center space-x-4">
           <button
          data-modal-toggle="filterModal"
          data-modal-target="filterModal"
          type="button"
          className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
        >
          <svg
            className="-ms-0.5 me-2 h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
            />
          </svg>
            <select className="cursor-pointer" name="category" value={category} 
            onChange={(e)=> setCategory(e.target.value)}>
              <option className="cursor-pointer" value="">All categories</option>
              <option className="cursor-pointer" value="cruiser bikes">Cruisers bikes</option>
              <option className="cursor-pointer" value="sports bikes">Sports bikes</option>
              <option className="cursor-pointer" value="adventure bikes">Adventure bikes</option>
              <option className="cursor-pointer" value="scrambler bikes">Scrambler bikes</option>
          </select>

        </button>
        { /* --------------- price filter ---------------- */ }

         <button
          data-modal-toggle="filterModal"
          data-modal-target="filterModal"
          type="button"
          className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
        >
          <svg
            className="-ms-0.5 me-2 h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
            />
          </svg>
            <select className="cursor-pointer" name="price" value={price} onChange={(e)=>setPrice(e.target.value) } >
            <option className="cursor-pointer" value="">All Prices</option>
            <option className="cursor-pointer" value="lth2">Below 2 Lakh</option>
            <option className="cursor-pointer" value="gth2">Above 2 Lakh</option>
          </select>
          </button>
      </div>


    </div>
   
      { /* --------------- Ev bikes  ---------------- */ }
    <div className="mb-4 mx-2 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3">
    <CompareBare/>

       {   
      filterBikes &&
        filterBikes.slice(0,20).map((item,index)=>
         <NewBikesCards item={item} key={index}/>
      )
     }

  </div>
    {/* <div className="w-full text-center">
      <button
        type="button"
        className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Show more
      </button>
    </div> */}
    
  </div>
  {/* Filter modal */}
 
</section>
  )
}

export default FindNewBikes
