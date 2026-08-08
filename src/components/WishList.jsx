// import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import WishListCards from "./WishListCards"
import { useEffect } from "react"
const Wishlist = () => {
  const wishList = useSelector((state)=> state.wishListStore.wishList)

  useEffect(()=>{
  localStorage.setItem("wishList",JSON.stringify(wishList))
},[wishList])

  console.log("wishList :",wishList)
  return (
  <div className="">
  <main className="pb-8 px-4 md:px-8 mt-6 max-h-screen overflow-y-scroll">
   <div className="max-w-2xl mx-auto lg:max-w-5xl ">
     <div className="mb-12 flex justify-between items-center">
       <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
         Wish List 
       </h1>
    
 
     </div>
     <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8">
       <ul className="lg:col-span-2 space-y-6">
         
         { 
         wishList.length===0
         ?<h1 className="text-2xl dark:text-white">WishList is Empty Please add your favorites bikes </h1>
         :
         wishList?.map((item)=> <WishListCards key={item.id} item={item}/>)
         }
      
       </ul>
      
        </div>
      </div>
      </main>
    
     </div>
  )
}

export default Wishlist
