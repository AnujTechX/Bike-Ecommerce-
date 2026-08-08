import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { format } from "date-fns"
const CheckOut = () => {
  const navigate= useNavigate()
  const [isCardOpen,setIsCardOpen]=useState(true)
  const [isProcessing,setIsProcessing] = useState(false)
  
  const [cardValue ,setCardValue] = useState({
      cardNumber:"",
      cardName:"",
      expiryDate:"",
      cvv:"",
  })
  const [cardErrors,setCardErrors] = useState({
      cardNumber:"",
      cardName:"",
      expiryDate:"",
      cvv:"",
    })

  const initialValues={
      cardNumber:"",
      cardName:"",
      expiryDate:"",
      cvv:"",
  }
  // console.log("cardErrors :",cardErrors)
  
  const inGarage = localStorage.getItem("booking")?JSON.parse(localStorage.getItem("booking")):[]
  const bookedBikesPrices = inGarage.reduce((total,curr)=> total+curr.qty*curr.price_inr,0)
    const existBike = inGarage?.map((bike)=>bike.qty)
  let allQty=0
  for(let i=0;i<existBike.length;i++){
        allQty= allQty+existBike[i]
      }
  let insurance= allQty*10000;
  let accessories= allQty*2500;
  let tex= ((bookedBikesPrices+insurance+accessories)*18)/100
      
  
  const address= inGarage?.[0]?.address
  // console.log("exist booking price", inGarage)
 

  
 /* ---------------check details of card ---------------- */ 
  const validCardDetails=()=>{
   const errors={
      cardNumber:"",
      cardName:"",
      expiryDate:"",
      cvv:"",
    }
    const cardNumberRegex= /^[0-9]{16}$/;
    const cardNameRegex= /^[A-Za-z ]{3,15}$/
    const cardExpDateRegex= /^(0[1-9]|1[0-2])\/\d{2}$/ 
    const cardCvvRegex= /^\d{3,4}$/ 
    let cardNumber= cardValue.cardNumber.replace(/\s/g,"")
     console.log("card number removed space ",cardNumber)
    if(!cardNumber){
        errors.cardNumber="Card Number is required"
     }
    else if(!cardNumberRegex.test(cardNumber)){
       errors.cardName="Card Number is invalid and card number should be 16 digit"
      }

    if(!cardValue.cardName){
      errors.cardName="Card Holder name is required "
    }
    else if(!cardNameRegex.test(cardValue.cardName)){
     errors.cardName="Invalid Name"
    }

    if(!cardValue.expiryDate){
      errors.expiryDate="Card date is required"
    }
    else if(!cardExpDateRegex.test(cardValue.expiryDate)){
      errors.expiryDate="Card date is not valid"
      console.log("date:", cardValue.expiryDate)
    }
    else {
          const [month,year]= cardValue.expiryDate.split("/")
          const validExpiryDate= new Date(2000+Number(year),Number(month),0)
          const today=new Date();
          if(!validExpiryDate>=today){
            errors.expiryDate="Expiry Date"
          }
    }

    if(!cardValue.cvv){
      errors.cvv="Card CVV number is required"
    }
    else if(!cardCvvRegex.test(cardValue.cvv)){
      errors.cvv= "Please enter valid cvv number"
    }

    return errors;
  }

 /* ---------------order submit function ---------------- */ 

const handleCardSubmit=(e)=>{
 
  e.preventDefault()
 /* --------------- pay with card ---------------- */ 
if(isCardOpen){
      const errors= validCardDetails(cardValue)
      setCardValue(initialValues)

      setCardErrors(errors)
      console.log("cards details",cardValue)
      const cardErrors= Object.values(errors).some((error)=>typeof error==="string" && error)
      console.log("cards Errors :", cardErrors)   
      if(cardErrors) return 
}

 
   /* --------------- select card or cash order ---------------- */ 
  const oldOrders = JSON.parse(localStorage.getItem("orders"))||[]  
  const date = format(new Date(),"MMMM,dd,yyyy,pp")
 
  const orderDetails = {
    orderId:Date.now(),
    ...inGarage,
    ...address,
    date,
    paymentMethod:isCardOpen?"card":"Cash On delivery",
    subtotal:bookedBikesPrices,
    insurance,
    accessories,
    tex,
    total:bookedBikesPrices+insurance+accessories+tex,
  }
  console.log("orderDetails :", orderDetails)
  const newOrder = isCardOpen?{...cardValue,...orderDetails}:orderDetails
  oldOrders.push(newOrder)

  console.log("oldOrders : ",oldOrders)
  localStorage.removeItem("booking")
  localStorage.setItem("orders",JSON.stringify(oldOrders))


    setIsProcessing(true)
    /* --------------- loading time ---------------- */ 
    setTimeout(()=>{
      setIsProcessing(false)

Swal.fire({
      title: " Congratulations! 🎉",
      text: "Your bike order has been confirmed. We'll update you with the delivery details soon." ,
      icon: "success",
      draggable: true
    })

  navigate("/myOrdersPage/")

    },3000)

  }
const cardHandleOnChange=(e)=>{
const {name,value}= e.target

  if(name==="cardNumber"){
        const format = value
        .replace(/\D/g,"")
        .slice(0,16)
        .replace(/(\d{4})(?=\d)/g, "$1 ");
        setCardValue((prev)=>({...prev,[name]:format}))
        setCardErrors((prev)=>({...prev,[name]:""}))
        console.log("name",name)
        console.log("value",cardValue.cardNumber)
   }else {
       setCardValue((prev)=>({...prev,[name]:value}))
       setCardErrors((prev)=>({...prev,[name]:""}))
   }

}

  return (
<section className="mt-6 px-4 md:px-8" aria-labelledby="payment-heading">
   <div className="max-w-7xl mx-auto relative">
    <h2
      id="payment-heading"
      className="text-2xl text-slate-900 font-bold mb-8 dark:text-slate-50"
    >
      Payment details
    </h2>
    <div className="grid gap-8 md:grid-cols-2">
      {/* LEFT */}
      <section aria-labelledby="payment-method-heading">
        <h2 id="payment-method-heading" className="sr-only">
          Payment Method
        </h2>
        {/* Payment methods */}
        <fieldset>
          <legend className="sr-only">Choose payment method</legend>
          <div className="grid gap-4 lg:grid-cols-2">
            <div 
            
             className="bg-gray-100 p-4 rounded-md border border-slate-300 max-w-sm dark:bg-neutral-800 dark:border-neutral-700">
              <div className="flex items-center min-h-12">
                <input
                  type="radio"
                  name="method"
                  id="card"
                  className="cursor-pointer w-[18px] h-[18px] appearance-none rounded-full border border-slate-400 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600 dark:checked:ring-neutral-900 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-600"
                  // defaultChecked=""
                  checked={isCardOpen}
                  onChange={()=> setIsCardOpen(true)}
                />
                <label
                  htmlFor="card"
                  className="ml-4 flex gap-2 cursor-pointer"
                >
                  <img
                    src="https://readymadeui.com/images/visa.webp"
                    className="w-12"
                    alt="Visa card"
                  />
                  <img
                    src="https://readymadeui.com/images/american-express.webp"
                    className="w-12"
                    alt="American Express card"
                  />
                  <img
                    src="https://readymadeui.com/images/master.webp"
                    className="w-12"
                    alt="Mastercard"
                  />
                </label>
              </div>
              <p className="mt-4 text-sm text-slate-500 font-medium">
                Pay with your debit or credit card
              </p>
            </div>
            
            <div 
              className="bg-gray-100 p-4 rounded-md border border-slate-300 max-w-sm dark:bg-neutral-800 dark:border-neutral-700">
              <div className="flex items-center min-h-12">
                <input 
                  type="radio"
                  name="method"
                  id="paypal"
                  checked={!isCardOpen}
                  onChange={()=> setIsCardOpen(false)}
                  className="cursor-pointer w-[18px] h-[18px] appearance-none rounded-full border border-slate-400 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600 dark:checked:ring-neutral-900 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-600"
                />
                <label
                  htmlFor="paypal"
                  className="ml-4 flex gap-2 cursor-pointer"
                >
                  <img
                    src="https://t4.ftcdn.net/jpg/17/50/79/09/360_F_1750790998_F09ZzRWWoRGz3KAD6mQmc9z04zem0aoK.jpg"
                    className="w-20 rounded-sm"
                    alt="PayPal"
                  />
                </label>
              </div>
              <p className="mt-4 text-sm text-slate-500 font-medium">
                Cash On Delivery
              </p>
            </div>
          </div>
        </fieldset>
        {/* form */}

        <form onSubmit={handleCardSubmit}>
          { /* --------------- card details ---------------- */ }
          
          <div className={`grid lg:grid-cols-2 gap-6 transition-all duration-200 ease-in-out dark:bg-neutral-800 dark:border-neutral-700 dark:text-white
            ${isCardOpen?"max-h-[550px] opacity-100 mt-5 overflow-auto":"h-0 overflow-hidden opacity-0"}`}>
            <div>
              <label
                htmlFor="card-number"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                Card Number
              </label>
              <input
                value ={cardValue.cardNumber}
                onChange={cardHandleOnChange}
                type="text"
                id="card-number"
                name="cardNumber"
                autoComplete="cc-number"
                inputMode="numeric"
                placeholder="1234 5678 9012 3456"
                required=""
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
              />
              <p className="text-red-500 text-sm">{cardErrors.cardNumber}</p>
            </div>
            <div>
              <label
                htmlFor="name-on-card"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                Name on card
              </label>
              <input
                value ={cardValue.cardName}
                onChange={cardHandleOnChange}
                type="text"
                id="name-on-card"
                name="cardName"
                autoComplete="cc-name"
                placeholder="John Doe"
                required=""
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
              />
               <p className="text-red-500 text-sm">{cardErrors.cardName}</p>
            </div>
            <div>
              <label
                htmlFor="expiry-date"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                Expiry Date
              </label>
              <input
                value ={cardValue.expiryDate}
                onChange={cardHandleOnChange}
                type="text"
                id="expiry-date"
                name="expiryDate"
                autoComplete="cc-exp"
                placeholder="MM/YY"
                required=""
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
              />
              <p className="text-red-500 text-sm">{cardErrors.expiryDate}</p>
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                CVV
              </label>
              <input
                value ={cardValue.cvv}
                onChange={cardHandleOnChange}
                type="text"
                id="cvv"
                name="cvv"
                autoComplete="cc-csc"
                inputMode="numeric"
                placeholder={123}
                required=""
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
              />
              <p className="text-red-500 text-sm">{cardErrors.cvv}</p>
            </div>
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-3.5 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
             {isCardOpen?`Pay ₹ ${bookedBikesPrices+insurance+accessories+tex}`:"Order Now"}  
                         
             {/* {`₹ ${bookedBikesPrices+insurance+accessories+tex}`} */}
            </button>
          </div>
        </form>
      </section>
      {/* RIGHT */}
      <aside>
      <div className="grid gap-y-6 gap-x-4 lg:grid-cols-2">
          {/* Address */}
          <section aria-labelledby="shipping-heading">
            <h2
              id="shipping-heading"
              className="text-sm font-semibold text-slate-900 mb-4 dark:text-slate-50"
            >
              Shipping Address
            </h2>
            <address className="text-slate-500 text-sm bg-gray-100 border border-slate-300 rounded-lg p-4 space-y-2 font-medium not-italic dark:text-slate-400 dark:bg-neutral-800 dark:border-neutral-700">
              <p className=""><span className="text-md font-semibold">Area - </span>{address?.area}</p>
              <p className=""><span className="text-md font-semibold">City - </span>{address?.city}</p>
              <p className=""><span className="text-md font-semibold">State - </span>{address?.state}</p>
              <p className=""><span className="text-md font-semibold">Pin Code - </span>{address?.code}</p>
             
            </address>
          </section>
          {/* Shipping Method (KEPT SAME) */}
          <section aria-labelledby="shipping-method-heading">
            <h2
              id="shipping-method-heading"
              className="text-sm font-semibold text-slate-900 mb-4 dark:text-slate-50"
            >
              Shipping Method
            </h2>
            <div className="bg-gray-100 border border-slate-300 rounded-lg p-4 font-medium dark:bg-neutral-800 dark:border-neutral-700">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                  Express Shipping
                </p>
                <p className="text-sm text-slate-500 mt-2 dark:text-slate-400">
                  Estimated delivery: April 10-11, 2025
                </p>
              </div>
            </div>
          </section>
        </div>   

        {/* Summary */}
        <section aria-labelledby="summary-heading" className="mt-6">
          <h2 id="summary-heading" className="sr-only">
            Order Summary
          </h2>
          <ul className="text-slate-500 font-medium space-y-4 bg-gray-100 border border-slate-300 p-4 rounded-md dark:text-slate-400 dark:bg-neutral-800 dark:border-neutral-700">
            <li className="flex flex-wrap gap-4 text-sm">
              Subtotal{" "}
              <span className="ml-auto font-semibold text-slate-900 dark:text-slate-50">
                {`₹ ${bookedBikesPrices}`}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Insurance (Comprehensive) {" "}
              <span className="ml-auto font-semibold text-slate-900 dark:text-slate-50">
                {`₹ ${insurance}`}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Standard Accessories {" "}
              <span className="ml-auto font-semibold text-slate-900 dark:text-slate-50">
               {`₹ ${accessories}`}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Tax  {"18%"}
              <span className="ml-auto font-semibold text-slate-900 dark:text-slate-50">
                {`₹ ${tex}`}
              </span>
            </li>
            <hr className="border-slate-300 dark:border-neutral-700" />
            <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900 dark:text-slate-50">
              Total <span className="ml-auto"> 
                {`₹ ${bookedBikesPrices+insurance+accessories+tex}`}
                </span>
            </li>
          </ul>
        </section>
       
      </aside>
    </div>
    
    { /* --------------- loading spinner---------------- */ } 

{
 isProcessing && <div className="fixed left-0 top-0 z-50 backdrop-blur-2xl w-full h-full flex justify-center items-center">
    <div role="status" className="w-10 h-10 rounded-full bg-gray-800 relative">
      <div className="absolute w-full h-full bg-gray-800 rounded-full animate-ping dark:bg-slate-50" />
      <div className="absolute w-full h-full bg-gray-800 rounded-full animate-ping delay-200 dark:bg-slate-50" />
      <span className="-bottom-12 -left-4 absolute text-xl text-black">Loading…</span>
    </div>
</div>
}
  </div>
</section>

  )
}

export default CheckOut
