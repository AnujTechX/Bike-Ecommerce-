import { useSelector } from "react-redux"
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CompareBare = () => {

  const compList = useSelector((state) => state.compStore.compList)
 
  if (compList.length === 0) {
    return null
  }
  else if (compList.length === 1) {
    return <h1 className="text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 min-w-[250px]
  bg-red-600 px-5 py-3 rounded-xl md:text-2xl">
    Please select at least two products to compare</h1>
 
  }

  return (
    <div className="text-white fixed z-50 dark:text-white shadow-md shadow-gray-500 rounded-xl
     bg-gray-600 px-3 py-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
     w-[80%] text-center flex items-center flex-col gap-2 md:rounded-4xl md:py-2 lg:flex-row lg:justify-between md:flex-shrink-0 inline-flex">

      { /* --------------- add (vs) functionality ---------------- */}

      <div className="md:text-xl">
        {compList.map((item, index) => (
          <span key={item.id}>
            <span className="pl-2s">{item.title}</span>
            {index !== compList.length - 1 && <span className="font-semibold text-yellow-500"> VS </span>}
          </span>
        ))}

      </div>

      <FaArrowDown className="transform md:-rotate-90" />

      { /* --------------- compare button  ---------------- */}
      <Link to="/comPage">
        <button 
        onClick={()=>{
        }}
         className="w-full justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Compare Now
        </button>
      </Link>
    </div>
  )
}

export default CompareBare
