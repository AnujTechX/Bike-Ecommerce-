
const MyOrdersList = ({list}) => {
  // console.log("image :",list)
  return (<>
       <li className="grid sm:grid-cols-3 items-center gap-4">
            <div className="col-span-2 flex items-center gap-4">
              <div className="w-30 h-23 shrink-0 bg-gray-100 p-2 rounded-md dark:bg-neutral-800">
                <img
                  src={list.thumbnail[0]}
                  className="w-full h-full object-cover rounded-sm"
                  alt={list.bikeName}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {list.bikeName}
                </p>
                <p className="text-xs font-medium text-slate-600 mt-2 dark:text-slate-400">
                  Qty:{" "}
                  <span className="font-medium dark:text-slate-300">{list.qty}</span>
                </p>
              </div>
            </div>
            <div className="sm:ml-auto">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {`₹${list.price_inr}`}
              </p>
            </div>
          </li>
          <hr className="border-slate-300 dark:border-neutral-700" /></>
  )
}

export default MyOrdersList
