import { useSelector } from "react-redux"
// import { useGetBikesQuery } from "../redux/bookingSlice"
const ComPage = () => {
const compList = useSelector((state)=>state.compStore.compList)

return (

<section className={`dark:text-white max-w-[1200px] mx-auto mt-10 
min-h-screen`}>
<div>
  {  compList.length===0 && <h1 className="text-4xl font-bold ">There is no bikes to compare please select bikes compare</h1>
}
</div>


    { /* --------------- bike titles ---------------- */ }
  <div className="text-center">
   {
    compList?.map((item,index)=>(
     <span key={item.id}>
       <span className="md:text-3xl md:font-semibold">{item.title}</span>
      
       {index!== compList.length - 1 && 
        <span className="md:text-3xl md:font-semibold text-amber-500 "> VS </span>}
        </span>  
    )) }
</div>

{ /* --------------- bikes cards with features to compare ---------------- */ }
    <div className="grid gap-4 justify-center [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] sm:px-4 mt-6">
      {compList?.map((item)=>(
        <div key={item.id} className="shadow-gray-60 p-2 rounded-md  shadow-gray-500 shadow-sm dark:bg-gray-800">

        <img src={item?.thumbnail[0]} alt={item.title} className="rounded-md" />
         
        <div className="border-t-1 border-gray-400 mt-3 rounded-md mt-2 px-2">
      <h1 className="text-xl font-semibold mt-1 mb-2">{item.title}</h1>
      <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
        <span>Price</span> 
        <span>{item.price_inr}</span></p>
      <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2 "> 
        <span>Motor</span> 
        <span>{item.specifications.motor} </span></p>
      <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
        <span>Power</span> 
        <span>{item.specifications.power}</span></p>
      
      <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
        <span>Battery</span> 
        <span>{item.specifications.battery}</span></p>
      
      <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
        <span>Top Speed</span> <span>{item.specifications.top_speed}</span></p>
      
      <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
        <span>Brakes</span> 
        <span>{item.specifications.brakes}</span></p>
      
        <p className="flex gap-7 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2 break-word"> 
          <span>Suspension</span>
          {item.specifications.suspension}</p>

       <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2 "> 
          <span>Weight</span> 
          <span>{item.specifications.weight}</span>
        </p>
      </div>
  </div>
      
      ))}
     
    </div>
    </section>
  )
}

export default ComPage
