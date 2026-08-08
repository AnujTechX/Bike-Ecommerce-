
const SearchCard = ({item}) => {

    return (
        <li 
           className="bg-white px-4 py-6 rounded-md border border-slate-300 dark:bg-neutral-800 dark:border-neutral-700">
          
          <div className="flex gap-4 shrink-0" >
            <div className="flex gap-6 sm:gap-4 max-[400px]:flex-col">
              <div className="w-32 h-24 max-sm:w-32 max-sm:h-25 shrink-0">
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
               
              </div>
            
            </div>
             </div>
          
          </li>
      
    )
}

export default SearchCard
