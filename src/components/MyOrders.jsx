import OrdersList from "./MyOrdersList"

const MyOrders = ({order}) => {
const orderList = []

Object.values(order).forEach((item)=>{
if(typeof item ==="object") orderList.push(item)

})
 return (
<main className="mt-6 px-4 md:px-8 bg-gray-100 dark:bg-gray-900 py-7 max-h-screen">
     <div className="max-w-7xl mx-auto">
    {/* Header */}
    
    <header className="flex items-center gap-6 flex-wrap border-b border-slate-300 pb-6 dark:border-neutral-700">
      <div className="flex-1 text-nowrap">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
          Order Tracking
        </h1>
        <p className="text-base text-slate-600 mt-4 dark:text-slate-400">
          Tracking Id:
          <span className="font-medium text-slate-900 dark:text-slate-50">
            {order.orderId}
          </span>
        </p>
      </div>
      <button
        type="button"
        className="px-3.5 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 border border-blue-600 transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        Download invoice
      </button>
    </header>
    {/* Progress Timeline */}
    <section
      className="mt-12 border-b border-slate-300 pb-6 dark:border-neutral-700"
      aria-labelledby="progress-heading"
    >
      <h2 id="progress-heading" className="sr-only">
        Order progress
      </h2>
      <ol className="flex flex-col lg:flex-row items-start lg:items-center w-full space-y-8 lg:space-y-0">
        {/* Step 1 */}
        <li className="relative flex flex-row lg:flex-col items-start w-full group">
          <div className="absolute left-3 top-6 -bottom-10 w-0.5 bg-blue-700 lg:hidden dark:bg-blue-500" />
          <div className="flex items-center w-max lg:w-full">
            <div className="z-10 w-6 h-6 shrink-0 bg-blue-700 flex items-center justify-center rounded-full md:w-7 md:h-7 dark:bg-blue-500">
              <span className="sr-only">Step 1: Order placed</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
              </svg>
            </div>
            <div className="hidden lg:block w-full h-0.5 mx-4 rounded-md bg-blue-700 dark:bg-blue-500" />
          </div>
          <div className="ml-4 lg:ml-0 lg:mt-3 lg:mr-4">
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-500">
              Order placed
            </p>
            <time
              dateTime="2025-02-28T08:00"
              className="text-xs text-slate-600 block mt-1 dark:text-slate-400"
            >
              {order.date}
            </time>
          </div>
        </li>
        {/* Step 2 */}
        <li className="relative flex flex-row lg:flex-col items-start w-full group">
          <div className="absolute left-3 top-6 -bottom-10 w-0.5 bg-blue-700 lg:hidden dark:bg-blue-500" />
          <div className="flex items-center w-max lg:w-full">
            <div className="z-10 w-6 h-6 shrink-0 bg-blue-700 flex items-center justify-center rounded-full md:w-7 md:h-7 dark:bg-blue-500">
              <span className="sr-only">
                Step 2: Arrived at courier warehouse
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
              </svg>
            </div>
            <div className="hidden lg:block w-full h-0.5 mx-4 rounded-md bg-blue-700 dark:bg-blue-500" />
          </div>
          <div className="ml-4 lg:ml-0 lg:mt-3 lg:mr-4">
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-500">
              Arrived at warehouse
            </p>
            <time
              dateTime="2025-03-05T01:10"
              className="text-xs text-slate-600 block mt-1 dark:text-slate-400"
            >
              05 March 2025, 01:10
            </time>
          </div>
        </li>
        {/* Step 3 (current) */}
        <li
          className="relative flex flex-row lg:flex-col items-start w-full group"
          aria-current="step"
        >
          <div className="absolute left-3 top-6 -bottom-10 w-0.5 bg-gray-300 lg:hidden dark:bg-neutral-700" />
          <div className="flex items-center w-max lg:w-full">
            <div className="z-10 w-6 h-6 shrink-0 bg-gray-300 flex items-center justify-center rounded-full md:w-7 md:h-7 dark:bg-neutral-700">
              <span className="sr-only">
                Step 3: Out for delivery (current step)
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-slate-900 dark:text-slate-400"
                viewBox="0 0 512 512"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={30}
                >
                  <path d="M159.6 400.6h176.733V288.133H15v80.333a32.115 32.115 0 0 0 9.415 22.726 32.122 32.122 0 0 0 22.718 9.407H63.2" />
                  <path d="M336.333 288.133v-192.8a32.11 32.11 0 0 0-9.415-22.718A32.13 32.13 0 0 0 304.2 63.2H47.133a32.13 32.13 0 0 0-22.718 9.415A32.11 32.11 0 0 0 15 95.333v192.8h321.333z" />
                  <path d="M432.733 400.6h32.133a32.122 32.122 0 0 0 22.718-9.407 32.115 32.115 0 0 0 9.415-22.726V239.934c0-44.36-35.965-80.333-80.333-80.333h-80.333v241" />
                  <circle cx="111.4" cy="400.6" r="48.2" />
                  <circle cx="384.533" cy="400.6" r="48.2" />
                  <path d="M416.667 159.6v128.533H497" />
                </g>
              </svg>
            </div>
            <div className="hidden lg:block w-full h-0.5 mx-4 rounded-md bg-gray-300 dark:bg-neutral-700" />
          </div>
          <div className="ml-4 lg:ml-0 lg:mt-3 lg:mr-4">
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
              Out for delivery
            </p>
            <span className="text-xs text-slate-600 block mt-1 dark:text-slate-400">
              Courier is on the way
            </span>
          </div>
        </li>
        {/* Step 4 */}
        <li className="relative flex flex-row lg:flex-col items-start w-max lg:w-full">
          <div className="z-10 w-6 h-6 shrink-0 bg-gray-300 flex items-center justify-center rounded-full md:w-7 md:h-7 dark:bg-neutral-700">
            <span className="sr-only">Step 4: Products delivered</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-slate-900 dark:fill-slate-400"
              viewBox="0 0 512 512"
              aria-hidden="true"
            >
              <path d="M426 495.983H86c-25.364 0-46-20.635-46-46v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 7.72 6.28 14 14 14h340c7.72 0 14-6.28 14-14v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 25.364-20.635 46-46 46z" />
              <path d="M496 263.958a15.945 15.945 0 0 1-11.313-4.687L285.698 60.284c-16.375-16.376-43.02-16.376-59.396 0L27.314 259.272c-6.248 6.249-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627L203.675 37.656c28.852-28.852 75.799-28.852 104.65 0l198.988 198.988c6.249 6.249 6.249 16.379 0 22.627A15.943 15.943 0 0 1 496 263.958zM320 495.983H192c-8.837 0-16-7.164-16-16v-142c0-27.57 22.43-50 50-50h60c27.57 0 50 22.43 50 50v142c0 8.836-7.163 16-16 16zm-112-32h96v-126c0-9.925-8.075-18-18-18h-60c-9.925 0-18 8.075-18 18z" />
            </svg>
          </div>
          <div className="ml-4 lg:ml-0 lg:mt-3">
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
              Expected <time dateTime="2025-03-06">06 March 2025</time>
            </p>
            <span className="text-xs text-slate-600 block mt-1 dark:text-slate-400">
              Products delivered
            </span>
          </div>
        </li>
      </ol>
    </section>
    {/* Content */}
    <div className="mt-12 grid lg:grid-cols-2 gap-12">
      {/* Products */}
      <section aria-labelledby="products-heading">
        <div className="border-b border-slate-300 pb-2 dark:border-neutral-700">
          <h2
            id="products-heading"
            className="text-base font-semibold text-slate-900 dark:text-slate-50"
          >
            Products
          </h2>
        </div>

        { /* --------------- products list ---------------- */ }
        <ul className="space-y-4 mt-6 " role="list ">
        {
        orderList?.map((list,indx)=> <OrdersList key={indx} list={list}/>)
        }
        
        
        </ul>
      </section>
      {/* Right Side */}
      <section aria-labelledby="delivery-heading">
        <h2
          id="delivery-heading"
          className="text-base font-semibold text-slate-900 dark:text-slate-50"
        >
          Delivery information
        </h2>
        <div className="space-y-6 mt-6">
          <div className="md:flex justify-between text-xl ">
            <p className="text-slate-600 text-sm font-medium dark:text-slate-400">
              Customer
            </p>
            <p className="text-slate-900 text-sm font-medium mt-2 dark:text-slate-50">
              {order.cardName}
            </p>
          </div>
          <div className="md:flex justify-between text-xl ">
            <p className="text-slate-600 text-sm font-medium dark:text-slate-400">
              Shipping Method
            </p>
            <p className="text-slate-900 text-sm font-medium mt-2 dark:text-slate-50">
              {order.paymentMethod}
            </p>
          </div>
          <div className="md:flex justify-between text-xl ">
            <p className="text-slate-600 text-sm font-medium dark:text-slate-400">
              Address
            </p>
            <p className=" text-slate-900 text-sm font-medium mt-2 dark:text-slate-50 block flex gap-1">
            <span>{order.area}</span>
            <span>{order.city}</span>
            <span>{order.state}</span>
            <span>{order.code}</span>
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-md p-6 h-max mt-8 dark:bg-neutral-800">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            Billing details
          </h3>
          <ul className="font-medium mt-6 space-y-4" role="list">
            <li className="flex flex-wrap gap-4 text-slate-600 text-sm dark:text-slate-400">
              Subtotal{" "}
              <span className="ml-auto text-slate-900 font-semibold dark:text-slate-50">
               {`₹${order.subtotal}`}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-slate-600 text-sm dark:text-slate-400">
              Shipping{" "}
              <span className="ml-auto text-slate-900 font-semibold dark:text-slate-50">
                {`₹${650}`}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-slate-600 text-sm dark:text-slate-400">
              Tax{" "}
              <span className="ml-auto text-slate-900 font-semibold dark:text-slate-50">
                {`₹${order.tex}`}
              </span>
            </li>
            <hr className="border-slate-300 dark:border-neutral-700" />
            <li className="flex flex-wrap gap-4 text-sm text-slate-900 font-semibold dark:text-slate-50">
              Total <span className="ml-auto">{`₹${order.total+650}`}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>

</main>

  )
}

export default MyOrders
