import { Navigate, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaTimes, FaBars, FaSearch } from "react-icons/fa";
import logo from "../assets/road-rider.png";
import { Link } from "react-router-dom";
import { useGetBikesQuery } from "../redux/bookingSlice";
import { Warehouse } from "lucide-react"
import SearchCard from "./SearchCard";
import { FaHeart } from "react-icons/fa6";


const Navbar = () => {

  const [openMenuList, setOpenMenuList] = useState(null)
  const [menu, setMenu] = useState(false);

  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([]);

  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false)
  const searchRef = useRef(null);
  const menuRef = useRef(null)

  // const navigate= useNavigate();

  const { data: bikes, } = useGetBikesQuery()

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );



  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      // localStorage.setItem("true","dark")
      localStorage.setItem("darkMode", true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", false)
    }
  }, [darkMode]);

  // close search bar to click outside 
  useEffect(() => {
    const handleClickOutSide = (e) => {

      //  console.log("handle click of search bar")
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpenSearchBar(false)

      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => document.removeEventListener("click", handleClickOutSide)
  }, [])

  // search products from api 
  useEffect(() => {
    const getSearchResult = () => {
      if (!bikes) return
      if (search.trim() === "") {
        setSearchResult([])
        return
      }
      const filterBikes = bikes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      setSearchResult(filterBikes)
    }

    getSearchResult();

  }, [bikes, search])

  const clearSearchBar = () => {
    setSearch("");
    setSearchResult([])
    // console.log("clear running ")
  }



  return (
    <>
      <nav className="bg-white flex items-center relative border-b-1 dark:border-amber-50 h-13 lg:h-16 dark:bg-gray-800 darK:text-white top-0 sticky z-50">

        {/* hamburger button */}
        <button
          className=" absolute z-50 text-xl p-3 lg:text-3xl dark:text-white" onClick={() => {
            setMenu(!menu)
          }}>
          <div className={`cursor-pointer transition-all duration-300 ${menu ? "rotate-0" : "rotate-180"}`}>
            {menu ? <FaTimes /> : <FaBars />}
          </div>

        </button>

        { /* --------------- nav menu ---------------- */}
        <ul className={`bg-white absolute px-3 py-5 top-13 lg:top-16 z-50 w-64 
     flex flex-col gap-2 transition-transform duration-300 ease-in-out 
     dark:bg-gray-800 dark:text-white shadow-xl
     
     ${menu ? "translate-x-0 " : "-translate-x-full pointer-events-none "}`}>

          <li className="cursor-pointer">
            <NavLink to={"/"} className={({ isActive }) => isActive ? "active-link" : ""}
              onClick={() => setMenu(false)}>Home</NavLink></li>

          <li className="cursor-pointer"><NavLink to={'/electricBikes'} onClick={() => setMenu(false)}
            onClick={() => setMenu(false)}
            className={({ isActive }) => isActive ? "active-link" : ""} >Electric Bikes </NavLink></li>

          {/* new bikes  */}
          <li className="relative">
            <button onClick={() => setOpenMenuList(openMenuList === "newBike" ? null : "newBike")} className="flex justify-center items-center gap-1">New Bikes
              <FaChevronDown className={`transition-transform duration-300 ${openMenuList === "newBike" ? "rotate-180" : ""}`} />
            </button>

            {/* new bikes dropdown list  */}

            <ul className={`flex justify-end items-start flex-col list-none absolute z-50 whitespace-nowrap transition-all duration-300 ease-in-out origin-top bg-gray-100 rounded-sm gap-0.5 ${openMenuList === "newBike" ? 'opacity-100 scale-y-100' : ' opacity-0 scale-y-0'}`}>

              <li className="cursor-pointer text-black hover:text-gray-400 hover:font-semibold rounded-sm p-2">
                <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to={'/newBikes'} onClick={() => {
                  setMenu(false)
                  setOpenMenuList(null)
                }}>
                  Find New Bikes</NavLink></li>

              {/* <li className="text-black hover:text-gray-400 hover:font-semibold rounded-sm p-2"><NavLink className={({isActive})=> isActive?"active-link":""} to={'/onRoadPrice'}>Check On Road Price</NavLink></li> */}

              <li className="cursor-pointer text-black hover:text-gray-400 hover:font-semibold rounded-sm p-2">
                <NavLink to={'/upcomingBike/'} className={({ isActive }) => isActive ? "active-link" : ""}
                  onClick={() => {
                    setMenu(false)
                    setOpenMenuList(null)
                  }}>Upcoming bikes  </NavLink></li>
            </ul>


          </li>

          {/* scooters  */}
          <li className="relative">
            <button onClick={() => setOpenMenuList(openMenuList === "newScooters" ? null : "newScooters")}
              className="flex justify-center items-center gap-1">New Scooters
              <FaChevronDown className={`transition-transform duration-300 ${openMenuList === "newScooters" ? "rotate-180" : ""}`} />
            </button>

            <ul className={`flex justify-end items-start flex-col list-none absolute z-50 whitespace-nowrap transition-all duration-300 ease-in-out origin-top bg-gray-100 rounded-sm gap-0.5 
        ${openMenuList === "newScooters" ? 'opacity-100 scale-y-100' : ' opacity-0 scale-y-0'}`}>
              <li className="cursor-pointer text-black hover:text-gray-400 hover:font-semibold rounded-sm p-2">
                <NavLink to={'/findNewScooter'} className={({ isActive }) => isActive ? "active-link" : ""}
                  onClick={() => {
                    setMenu(false)
                    setOpenMenuList(null)
                  }}>Find New Scooters</NavLink></li>

              <li className="cursor-pointer text-black hover:text-gray-400 hover:font-semibold rounded-sm p-2">
                <NavLink to={'/electricScooter'} className={({ isActive }) => isActive ? "active-link" : ""}
                  onClick={() => {
                    setMenu(false)
                    setOpenMenuList(null)
                  }}>Electric Scooters</NavLink></li>

              <li className="cursor-pointer text-black hover:text-gray-400 hover:font-semibold rounded-sm p-2">
                <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to={'/upcomingScooter'}
                  onClick={() => {
                    setMenu(false)
                    setOpenMenuList(null)
                  }}>Upcoming Scooters</NavLink></li>
            </ul>

          </li>


          {/* used bikes   */}
          {/* <li className="relative">
        <button 
        onClick={()=>setOpenMenuList(openMenuList==="usedBikes"?null:"usedBikes")} 
           className="flex justify-center items-center gap-1">Used Bikes
         <FaChevronDown className={`transition-transform duration-300 ${openMenuList==="usedBikes" ? "rotate-180":""}`}/>
         </button>
   
      {
      (<ul className={`flex justify-end items-start flex-col list-none absolute z-50 whitespace-nowrap transition-all duration-300 ease-in-out origin-top bg-gray-100 rounded-sm gap-0.5 ${openMenuList==="usedBikes"? 'opacity-100 scale-y-100':' opacity-0 scale-y-0'}`}>

          <li className="cursor-pointer text-black hover:text-gray-400 hover:font-semibold rounded-sm p-2"><NavLink className={({isActive})=> isActive?"active-link":""} to={'/buyBikes'} 
            onClick={()=>{
           setMenu(false)
           setOpenMenuList(null) 
          }}>Buy Bikes</NavLink></li>
          <li className="cursor-pointer text-black hover:text-gray-400 hover:font-semibold rounded-sm p-2"><NavLink className={({ isActive})=> isActive?"active-link":""} to={'/sellBikes'} 
            onClick={()=>{
           setMenu(false)
           setOpenMenuList(null) 
          }}>Sell Bikes</NavLink></li>
          <li className="cursor-pointer text-black hover:text-gray-400 hover:font-semibold rounded-sm p-2"><NavLink className={({isActive})=> isActive?"active-link":""} to={'/viewListing'} 
            onClick={()=>{
           setMenu(false)
           setOpenMenuList(null) 
          }}>View My Listings</NavLink></li>
        </ul>
      )}
     

</li> */}

          <li><div className="flex gap-2.5 mt-2 items-center">

            <h1 className="font-serif">Dark Mode </h1>
            <button className={`relative h-5 
w-1/5 rounded-xl transition-all duration-300 ease-in-out
${darkMode ? "bg-gray-500" : "bg-blue-500"}`}

              onClick={() => setDarkMode(!darkMode)}>

              <span className={`bg-amber-500 p-2 rounded-full absolute left-0 top-0.5 h-4
     transition-all duration-300 ease-in-out
     ${darkMode ? "translate-x-0.5" : "translate-x-7"}`}></span>
            </button>
          </div>
          </li>

          <li>
            <Link to="/wishList" onClick={() => setMenu(false)}>
              <button
                className="flex justify-center items-center gap-2 cursor-pointer    font-semibold ">Wish List <FaHeart className="text-red-500" />
              </button>
            </Link>
          </li>

          {/* show on mobile screen  */}
          <li className="mt-4 flex justify-between items-center gap-1.5">
            <Link to={"/signIn/"}>
              <button className="left-44 min-[500px]:hidden bg-blue-500 hover:bg-blue-700 text-white  px-3 py-1  rounded-2xl text-md font-semibold w-fit cursor-pointer">
                Sign In
              </button>
            </Link>

            { /* --------------- mobile screen profile  ---------------- */}
            <Link to={"/userProfile/"}  >
              <button className="left-44 min-[500px]:hidden bg-blue-500 hover:bg-blue-700  text-white  px-3 py-1  rounded-2xl text-md font-semibold w-fit cursor-pointer">
                Profile
              </button>
            </Link>
          </li>
        </ul>


        { /* --------------- logo ---------------- */}
        <div className="text-xl w-20 lg:w-24 absolute left-14 text-center rounded-xl">
          <Link to="/">
            <img src={logo} className="object-cover w-full rounded-xl  " alt="" />
          </Link>
        </div>


        { /* --------------- search bar ---------------- */}

        <form action="" className={`absolute flex   px-3 py-1.5
    rounded-xl lg:w-2/5 right-2.5
     lg:right-4 lg:rounded-xl 
     z-50 bg-red-900 lg:px-4 lg:py-2 transition-all duration-200 ease-in-out ${isOpenSearchBar ? " w-2/4" : "w-10 "}`} ref={searchRef}>

          <input type="text" placeholder="search..."
            className={`outline-0
       text-white w-full lg:flex-1 lg:text-xl`}
            value={search}
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)} />

          <button className="text-white cursor-pointer" onClick={(e) => {
            e.preventDefault()

            if (!isOpenSearchBar) {
              setIsOpenSearchBar(true)
            }
            else {
              setSearchResult(searchResult)
            }
          }}><FaSearch className="text-xl md:text-2xl" /></button>
        </form>
        { /* --------------- sign in ---------------- */}
        <div className="absolute max-[500px]:hidden h-6 left-[25%] md:left-[15%] w-26 flex justify-center items-center">
          <Link to={"/signIn/"}  >
            <button className="left-44 max-[500px]:hidden bg-blue-500 hover:bg-blue-700 text-white  px-3 py-1.5  rounded-2xl text-md font-semibold w-fit cursor-pointer">
              Sign In
            </button>
          </Link>
        </div>
        { /* --------------- profile ---------------- */}
        <div className="absolute max-[500px]:hidden h-6 left-[42%] md:left-[23%] w-26 flex justify-center items-center">
          <Link to={"/userProfile/"}  >
            <button className="left-44 max-[500px]:hidden bg-blue-500 hover:bg-blue-700 text-white  px-3 py-1.5  rounded-2xl text-md font-semibold w-fit cursor-pointer">
              Profile
            </button>
          </Link>
        </div>
        { /* --------------- my garage for add products ---------------- */}
        <Link to={`/myGarage/`} >
          <div className="absolute z-40 bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold md:font-semibold py-1.5 px-2 rounded-2xl top-2 max-[500px]:left-[45%]
    left-[65%] md:left-[43%] md:top-2 lg:top-3.5 flex justify-center items-center gap-0.5"><span>My Garage</span><Warehouse size={20} md:size={20} /></div>
        </Link>
      </nav>

      { /* --------------- calling search result ---------------- */}
      {/* <div className="" ref={resultRef}>
       {searchResult && <SearchBikeResult searchResult={searchResult} />}
     </div> */}
      <ul className="fixed grid lg:col-span-2 space-y-6 max-w-2xl absolute bg-red-400 top-17 z-50   right-4 max-h-96 overflow-y-scroll bg-transparent">
        {
          searchResult && searchResult.map((item) =>
            <Link to={`/product/${item.id}`}
              onClick={clearSearchBar}
              key={item.id}><SearchCard item={item} />
            </Link>)
        }
      </ul>

    </>
  )
}

export default Navbar
