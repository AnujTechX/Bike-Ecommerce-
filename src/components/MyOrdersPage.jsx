import MyOrders from "./MyOrders"

const MyOrdersPage = () => {
  const orders = JSON.parse(localStorage.getItem("orders"))||[]
  return (
    <div>
      {orders.length===0
      ?(<p className="dark:text-white text-black text-2xl font-semibold ml-3 mt-4 ">Not placed any order</p>)
      : orders.map((order,indx)=> <MyOrders key={indx} order={order}/>)
      }
    </div>
  )
}

export default MyOrdersPage
