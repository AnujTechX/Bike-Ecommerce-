import { useNavigate, useParams } from "react-router-dom"
import { useGetBikesQuery } from "../redux/bookingSlice";
import { useEffect, useState } from "react";
import {format} from 'date-fns'

import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";


 const BookingNow = () => {
  const [duplicateMsg,setDuplicateMsg]= useState(false)
  const navigate= useNavigate()
  const [msg,setMsg]= useState('');
  const [formErrors,setFormErrors]= useState({
     name:"",
      phone:"",
      email:"",
      bikeName:"",
      address:{
        area:"",
        city:"",
        state:"",
        code:"",
      }
  })
  const [submit,setSubmit] = useState(false)
  const [formValues,setFormValues] = useState(
    {  
      name:"",
      phone:"",
      email:"",
      bikeName:"",
      address:{
        area:"",
        city:"",
        state:"",
        code:"",
      }
    })

  const {id} = useParams();
  const {data:bikes , isLoading} = useGetBikesQuery()
  
  { /* - get bike from the API to save with user details in localstorage --- */ }
  const item = bikes?.find((item)=> String(item.id)===String((id)))
  
const initialValues=()=>({  
      name:"",
      phone:"",
      email:"",
      bikeName:"",
      address:{
        area:"",
        city:"",
        state:"",
        code:"",
      }
    })

// save bike title in the localStorage
 useEffect(()=>{
  const bikeTitleOnScreen=()=>{
  if(item && !submit){
    setFormValues((prev)=> ({...prev, bikeName:item.title}))
  }
  }
  bikeTitleOnScreen();
 },[item,submit]) 

  if(isLoading) return <h1>Loading...</h1>
  
   /* --------------- validate users details ---------------- */  
  const validForm=()=>{
  let errors={  
      name:"",
      phone:"",
      email:"",
      bikeName:"",
      address:{
        area:"",
        city:"",
        state:"",
        code:"",
      }
    }
  const nameRegex = /^[A-Za-z\s]{3,15}$/
  const phoneRegex = /^[0-9]{10}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/  
  const addRegex = /^[A-za-z0-9\s,.-]{5,100}$/
  const codeRegex= /^[1-9][0-9]{5}$/

  if(!formValues.name){    
    errors.name="Name is required"
  }

    else if(!nameRegex.test(formValues.name)){
      errors.name="Name must be 3 to 15 characters"
    }

  if(!formValues.phone){
    errors.phone= "Phone Number is required"
  }
  else if(!phoneRegex.test(formValues.phone)){
    errors.phone="Phone Number at least 10 digits"
  }
  
  
  if(!formValues.email){
    errors.email = "Email is required"
   }
  else if(!emailRegex.test(formValues.email)){
    errors.email="Please Enter valid Email"
  }
 
  if(!formValues.address.area){
    errors.address.area='Area is required'
  }
  else if(!addRegex.test(formValues.address.area)){
   errors.address.area ="Please enter the valid area "
  }
   
  if(!formValues.address.city){
  errors.address.city="City is required";
  }
   
  else if(!addRegex.test(formValues.address.city)){
  errors.address.city="Please Enter a valid City";
  }
   
  if(!formValues.address.state){
     errors.address.state="state is required";
  }
   
  else if(!addRegex.test(formValues.address.state)){
  errors.address.state="Please Enter a valid state";
  }
   
  if(!formValues.address.code){
  errors.address.code="Pin code is required";
  }
   
  else if(!codeRegex.test(formValues.address.code)){
  errors.address.code="Please Enter a valid Pin code";
  }
    return errors;
  }

{ /* --------------- submit user details  ---------------- */ } 
  const handleSubmit=(e)=>{
    e.preventDefault()
    let errors= validForm(formValues);
    setFormErrors(errors);

   
    const hasErrors = Object.values(errors).some((error)=>
    typeof error==="string" && error)|| 
    Object.values(errors.address).some((error)=>error) 
    // console.log("hasError:",hasErrors)
   
    if(hasErrors) return  
   
    const date = format(new Date(),"MMMM,dd,yyyy,pp")
    
    const oldBooking = localStorage.getItem("booking")?JSON.parse(localStorage.getItem("booking")):[]

   { /* --------------- check duplicate entry ---------------- */ }
   const existBike = oldBooking.some((bike)=> bike.id===item.id && bike.email===formValues.email)
   if(existBike){ 
      setMsg("Bike is Already reserved please check your Garage or book another Bike")
      setDuplicateMsg(true)
      return 
   }
  
    const newBooking = {
         qty:1,
      ...formValues,
      ...item,
      date,   
    }

    // let updatedBooking = [...oldBooking,newBooking]
    oldBooking.push(newBooking)
      
    localStorage.setItem("booking",JSON.stringify(oldBooking))
    
    setFormValues(initialValues)

    setSubmit(true);

          const id = toast.loading("Processing...")
          setTimeout(()=>{
          toast.success("Your bike booking has been submitted successfully. Our team will contact you shortly to confirm your booking.",{
            id:id,
            duration:3000
            });  
          },2000)
            
          setTimeout(()=>{
            navigate("/myGarage")
          },5000)
              
      }

/**----------------------
 * clear the input while user typing 
 *------------------------**/
  const handleChange=(e)=>{
  const {name,value}= e.target;
  
  if(["area","city","state","code"].includes(name)){
     setFormValues((prev)=>({...prev,address:{...prev.address,[name]:value}}))  
     setFormErrors((prev)=>({...prev, address:{...prev.address,[name]:""}}))
    } 
      else{
      setFormValues((prev)=>({...prev,[name]:value}))
      setFormErrors((prev)=>({...prev,[name]:""}))
    }
  }


  return (
    <div>
      <div className="relative flex items-center justify-center p-12 dark:text-white
      bg-[url('https://images.unsplash.com/photo-1592766845554-f2b181f8ed7c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
      bg-center bg-cover">

  {/* Author: FormBold Team */}
  <div className="mx-auto w-full p-4 md:max-w-[750px] md:p-8 rounded-xl bg-transparent backdrop-blur-md dark:text-white bg-blue-100 text-white">
    <form className="text-white" onSubmit={handleSubmit}>
      <div>
         {
         duplicateMsg && <h1 className="fixed text-red-500 text-xl left-[50%] -translate-x-[50%] bg-gray-300 p-5 rounded-md w-full">{msg}  
         <button className="absolute right-1 top-1 bg-black rounded-md" 
         onClick={()=>setDuplicateMsg(false)}><FaTimes/></button></h1>
         
         
         }
      </div>
      <div className="mb-5">
        <label    
          htmlFor="name"
          className="mb-3 block text-base font-semibold"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
             id="name"
             value={formValues.name}
             onChange={handleChange}
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white  p-2 md:py-3 md:px-6 text-base font-md text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <p className="text-red-500">{formErrors.name}</p>
      </div>
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="mb-3 block text-base font-semibold"
        >
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formValues.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="w-full rounded-md border border-[#e0e0e0] text-black bg-white p-2 md:py-3 md:px-6 text-base font-md text-[000] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
                <p className="text-red-500">{formErrors.phone}</p>

      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-semibold"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full rounded-md border border-[#e0e0e0] bg-white text-black bg-white p-2 md:py-3 md:px-6 text-base font-md text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
                <p className="text-red-500">{formErrors.email}</p>

      </div>

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 w-full">
          <div className="mb-5">
            <label
              htmlFor="date"
              className="mb-3 block text-base font-semibold "
            >
              Bike Name 
            </label>
         
            <p  className="w-full rounded-md border border-[#e0e0e0] bg-white text-black bg-white p-2 md:py-3 md:px-6 text-base font-semibold text-[#6B7280] outline-none font-semibold focus:border-[#6A64F1] focus:shadow-md h-10 md:h-12">{formValues.bikeName}</p>
          </div>
        </div>

      </div>
      
      <div className="mb-5 pt-3">
        <label className="mb-5 block text-base font-semibold sm:text-xl">
          Address Details
        </label>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="area"
                id="area"
                value={formValues.address.area}
                onChange={handleChange}
                placeholder="Enter area"
                className="w-full rounded-md border border-[#e0e0e0] bg-white text-black bg-white p-2 md:py-3 md:px-6 text-base font-md text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
                      <p className="text-red-500">{formErrors.address.area}</p>
            </div>
          </div>

          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="city"
                id="city"
                value={formValues.address.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full rounded-md border border-[#e0e0e0] bg-white text-black bg-white p-2 md:py-3 md:px-6 text-base font-md text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
                      <p className="text-red-500">{formErrors.address.city}</p>
            </div>
          </div>

          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="state"
                id="state"
                value={formValues.address.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="w-full rounded-md border border-[#e0e0e0] bg-white text-black bg-white p-2 md:py-3 md:px-6 text-base font-md text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
                <p className="text-red-500">{formErrors.address.state}</p>
            </div>
          </div>

          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="code"
                id="code"
                value={formValues.address.code}
                onChange={handleChange}
                placeholder="Post Code"
                className="w-full rounded-md border border-[#e0e0e0] bg-white text-black bg-white p-2 md:py-3 md:px-6 text-base font-md text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
                      <p className="text-red-500">{formErrors.address.code}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="hover:shadow-form w-48 md:w-1/3 rounded-md bg-blue-500 hover:bg-blue-700 py-3 px-4 text-center font-semibold text-white outline-none flex justify-center items-center m-auto cursor-pointer
         ">
          Booking Now
        </button>
      </div>
    </form>
  </div>


</div>

    </div>
  )
}

export default BookingNow
