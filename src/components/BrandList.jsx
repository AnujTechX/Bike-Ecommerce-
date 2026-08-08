
import {useNavigate } from "react-router-dom"

const BrandList = () => {
   const navigate= useNavigate()
       
  return (
    <>
       <section className="m-auto mt-8 ">
             <h2 className="max-w-[1200px] ml-4 mt-3 text-2xl font-semibold text-gray-900 dark:text-white  pl-4">
          Brands List  
        </h2>
        <div className="max-w-[1200px] m-auto bg-fixed bg-cover bg-center min-h-screen bg-[url('https://plus.unsplash.com/premium_photo-1781332289338-92be97ac6300?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
   
         
       <div className="brands-image-container px-4 md:px-0 grid grid-cols-2 md:grid-cols-6 mt-6 gap-2.5 py-8 ">

      <div onClick={()=> navigate("/selectBrand/TVS")}
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://i.pinimg.com/736x/5d/0b/25/5d0b25a0e89ce38c2cde50154e0380b7.jpg" alt="tvs" />
       </div>

      <div  onClick={()=> navigate("/selectBrand/bmw")} 
      className="  flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://media.gettyimages.com/id/2206053191/photo/car-logos.jpg?s=2048x2048&w=gi&k=20&c=EiXVrdDoMPr-vACas0eAM-bPtfeW4OsSctrbcSHpR_0=" alt="Royal Enfield" />
       </div>

        <div onClick={()=> navigate("/selectBrand/Harley-Davidson")}
        className="flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://c.ndtvimg.com/2022-01/4h83ug9o_bike_625x300_20_January_22.jpg" alt="Royal Enfield" />
       </div>

      <div onClick={()=> navigate("/selectBrand/honda") } 
      className="flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://cdn.dribbble.com/userupload/27139490/file/original-03b3a4d49e9cd54c0d4af100070e1c34.jpg" alt="Royal Enfield" />
       </div>

       <div onClick={()=> navigate("/selectBrand/bajaj")}
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="object-cover h-32 w-50 rounded-md" src="https://logolook.net/wp-content/uploads/2022/06/Bajaj-Logo.png" alt="bajaj" />
       </div>



       <div onClick={()=> navigate("/selectBrand/hero")}
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://www.legaleraonline.com/h-upload/2022/07/05/746501-hero.webp" alt="Royal Enfield" />
       </div>


       <div onClick={()=> navigate("/selectBrand/benelli")} 
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZTK9GMfh2pasSd6y-jYqynSaZpo2pYLVgYvT5HrYMOdCGm4b1WBW8x8K&s=10" alt="Royal Enfield" />
       </div>

       <div onClick={()=> navigate("/selectBrand/keeway")} 
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGhD7XNyYyi3cDln3Rqba4jXmJeNu4B5oxVXVgm4wKrPnTsatM3NdiLQ&s=10" alt="Royal Enfield" />
       </div>


       <div  onClick={()=> navigate("/selectBrand/ktm")}
        className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://1000logos.net/wp-content/uploads/2020/02/KTM-Logo.jpg" alt="Royal Enfield" />
       </div>

       
       <div onClick={()=> navigate("/selectBrand/jawa")}
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://images.financialexpressdigital.com/2018/10/jawa-motorcycle-india.jpg" alt="Royal Enfield" />
       </div>

       <div onClick={()=> navigate("/selectBrand/royal-enfield")}
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://i55.servimg.com/u/f55/13/49/48/64/royal_10.jpg" alt="Royal Enfield" />
       </div>

       <div onClick={()=> navigate("/selectBrand/ola")} 
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/09/indiatva42d9a-ola-cabs-1568305831.jpg" alt="Royal Enfield" />
       </div>


       <div onClick={()=> navigate("/selectBrand/ather")} 
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhsxf7HpqSgq1yniqthTBuRp1p2J8I3yi6-GEtnsisRx5PV_YHX4g3fxO&s=10" alt="Royal Enfield" />
       </div>

       <div onClick={()=> navigate("/selectBrand/Ultraviolette")} 
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://img-cdn.publive.online/fit-in/640x360/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2021/12/Ultraviolette.jpg" alt="Ultraviolette" />
       </div>

       <div onClick={()=> navigate("/selectBrand/yamaha")}
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://images.seeklogo.com/logo-png/15/2/yamaha-logo-png_seeklogo-154895.png" alt="yamaha" />
       </div>

       <div onClick={()=> navigate("/selectBrand/Aprilia")}
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFsCAvt5FXytglocYWLahUuXL39ZUpd6V07ATN6U0xis25XV6PQiL9E0&s=10a" alt="Royal Enfield" />
       </div>

       <div onClick={()=> navigate("/selectBrand/CFMoto")} 
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://i.pinimg.com/736x/0a/ee/71/0aee716e18bfc00b8ee8c30c0e5ae89e.jpg" alt="Royal Enfield" />
       </div>

       <div onClick={()=> navigate("/selectBrand/triumph")}
       className=" flex justify-between items-center flex-col cursor-pointer border-1 border-gray-300 rounded-md">
        <img className="rounded-md object-cover h-32 w-50" src="https://w0.peakpx.com/wallpaper/959/765/HD-wallpaper-triumph-motorcycle-logo-motorcycle-logo-emblem-triumph-old.jpg" alt="Royal Enfield" />
       </div>
      </div>
       
      {/* <SelectBrand brandItems={selectBrand}/> */}
       </div>
    </section>
    </>
  )
}

export default BrandList
