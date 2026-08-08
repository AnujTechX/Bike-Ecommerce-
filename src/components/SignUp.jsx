import { FaEye,FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import toast from "react-hot-toast"

const SignUp = () => {
const [showPassword,setShowPassword]= useState(null)
const [alreadyRegistered,setAlreadyRegistered]= useState("")  
// console.log("show pass",showPassword)
const [isCheck,setIsCheck]= useState(false)

const [formData,setFormData]= useState({
  fname:"",
  lname:"",
  email:"",
  mobile:"",
  password:"",
  cpassword:"",
})

// const [formData,setFormData]= useState({
// fname:"Amit",
// lname:"singh",
// mobile:"9990022891",
// email:"amit@gmail.com",
// password:"Kuamr@321",
// ​cpassword:"Kuamr@321",​
// })
const [formDataErrors,setFormDataErrors] = useState({
  fname:"",
  lname:"",
  email:"",
  mobile:"",
  password:"",
  cpassword:"",
})
const initialValues= {
  fname:"",
  lname:"",
  email:"",
  mobile:"",
  password:"",
  cpassword:"",
} 
const handleChangeFormData=(e)=>{
  const {name,value}= e.target  
  // console.log("values :",value)  
  setFormData((prev)=>({...prev,[name]:value}))
  setFormDataErrors((prev)=>({...prev,[name]:""}))
  setAlreadyRegistered("")

}
const formValidation=(formData)=>{
  const errors = {
  fname:"",
  lname:"",
  email:"",
  mobile:"",
  password:"",
  cpassword:"",
  }

  const fnameRegex=  /^[A-Za-z]{3,15}$/;
  const lnameRegex= /^[A-Za-z]{3,15}$/;
  const emailRegex= /^[^\s@!#.$]+@[^\s@$#.]+\.[^\s@#!&^%!]+$/; 
  // const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const mobRegex=  /^[0-9]{10}$/;
  const passRegex= 
  /^(?=(?:.*[A-Za-z]){5,})(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/
  // const cPassRegex= 
  // /^(?=(?:.*[A-Za-z]){5,})(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/


if(!formData.fname){
  errors.fname="Name is required";
  }
else if(!fnameRegex.test(formData.fname)){
  errors.fname="Name length should be 3 to  15 characters"
}
if(!formData.lname){
errors.lname="Last name required";
}
else if(!lnameRegex.test(formData.lname)){
  errors.lname="Last should also 3 to 15 characters";
}

if(!formData.email){
  errors.email="Email is required";
}
else if(!emailRegex.test(formData.email)){
  errors.email="Email is not Valid"
}
if(!formData.mobile){
  errors.mobile= "Mobile Number is required"
}
else if(!mobRegex.test(formData.mobile)){
  errors.mobile="Mobile number should be 10 digits"
}
if(!formData.password){
  errors.password="Password is required"
}
else if(!passRegex.test(formData.password)){
errors.password="Password is not valid"
}

if(!formData.cpassword){
  errors.cpassword="Confirm password is required"
}
else if(formData.password!==formData.cpassword){
  errors.cpassword="Confirm Password is not matched with the password"
}
return errors
}
const handleFormSubmit=(e)=>{
   e.preventDefault()
   let errors = formValidation(formData)
   setFormDataErrors(errors)
  const isErrors=  Object.values(errors).some((error)=> 
    typeof error==="string" && error)

  if(isErrors||!isCheck) return

const registeredDetails = JSON.parse(localStorage.getItem("registered"))||[]

const isData = registeredDetails.some((details)=> 
  details.email===formData.email && details.mobile===formData.mobile)

if(isData){
  // setAlreadyRegistered("You have already registered")
toast.error("This email is already registered. Please log in.", {
  duration: 4000,
  style: {
    background: "#1f2937",
    color: "#fff",
    border: "1px solid #ef4444",
    borderRadius: "12px",
    padding: "12px 16px",
  },
});

  return
}
else{
setFormData(initialValues);
registeredDetails.push(formData)
localStorage.setItem("registered",JSON.stringify(registeredDetails))
toast.success("Your account has been created successfully.", {
  duration: 2500,
  style: {
    background: "#16a34a",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "10px",
  },
});
}
setTimeout(()=>{
  setIsCheck(!isCheck)
},1000)

}


return (
   <main className="min-h-screen flex flex-col justify-center p-4 md:p-8 bg-gray-200 dark:bg-gray-800">
  <div className="w-full max-w-lg mx-auto sm:max-w-4xl ">
    <div className="mb-12">
      <h2 className="text-red-700 text-3xl italic font-bold">Road Rider</h2>
      <p className="text-black dark:text-white text-base mt-6">
        Create your account and get started
      </p>
        <p className="text-red-500 text-xl font-semibold text-center mt-3">{`${alreadyRegistered}`}</p>
    </div>
    <form className="w-full" onSubmit={handleFormSubmit}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fname"
            className="mb-2 text-slate-900 font-medium text-md inline-block dark:text-slate-50"
          >
            First Name
          </label>
          <input
            values={formData.fname}
            onChange={handleChangeFormData}
            type="text"
            id="fname"
            name="fname"
            placeholder="John"
            required=""
            className="px-3 py-2.5 text-md text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
          />
          <p className="text-red-500 text-sm ml-0.5">{formDataErrors.fname}</p>
        </div>

        <div>
          <label
            htmlFor="lname"
            className="mb-2 text-slate-900 font-medium text-md inline-block dark:text-slate-50"
          >
            Last Name
          </label>
          <input
          value={formData.lname}
          onChange={handleChangeFormData}
            type="text"
            id="lname"
            name="lname"
            placeholder="Doe"
            required=""
            className="px-3 py-2.5 text-md text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
          />
          <p className="text-red-500 text-sm ml-0.5">{formDataErrors.lname}</p>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 text-slate-900 font-medium text-md inline-block dark:text-slate-50"
          >
            Email
          </label>
          <input
          value={formData.email}
          onChange={handleChangeFormData}
            type="email"
            id="email"
            name="email"
            placeholder="john@readymadeui.com"
            required=""
            className="px-3 py-2.5 text-md text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
          />
          <p className="text-red-500 text-sm ml-0.5">{formDataErrors.email}</p>
        </div>
        
        <div>

           <label
            htmlFor="mobile"
            className="mb-2 text-slate-900 font-medium text-md inline-block dark:text-slate-50"
          >
            Mobile Number
          </label>
          <input
            value={formData.mobile}
            onChange={handleChangeFormData}
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="123-456-7890"
            required=""
            className="px-3 py-2.5 text-md text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
          />
           <p className="text-red-500 text-sm ml-0.5">{formDataErrors.mobile}</p>
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 text-slate-900 font-medium text-md inline-block dark:text-slate-50"
          >
            Password
          </label>
          <input
            value={formData.password}
            onChange={handleChangeFormData}
            type={showPassword==="password"?"text":"password"}
            id="password"
            name="password"
            placeholder="••••••••"
            required=""
            className="px-3 py-2.5 text-md text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
            
          />
          <div className="flex justify-between items-center">
            <p className="text-red-500 text-sm ml-0.5">{formDataErrors.password}</p>
             <button className="text-sm mr-2.5 cursor-pointer"
             onClick={()=>{
              if(!showPassword){
                setShowPassword("password")
              }
              else{
                setShowPassword(null)
              }
             }}>{showPassword==="password"?<FaEye/>:<FaEyeSlash/>}</button>
            </div>
        </div>

        <div>
          <label
            htmlFor="cpassword"
            className="mb-2 text-slate-900 font-medium text-md inline-block dark:text-slate-50"
          >
            Confirm Password
          </label>
          <input
          value={formData.cpassword}
          onChange={handleChangeFormData}
            type={showPassword==="cPassword"?"text":"password"}
            id="cpassword"
            name="cpassword"
            placeholder="••••••••"
            required=""
            className="px-3 py-2.5 text-md text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
          />

          <div className="flex justify-between items-center">
            <p className="text-red-500 text-sm ml-0.5">{formDataErrors.cpassword}</p>
             <button className="text-sm mr-2.5 cursor-pointer"
             onClick={()=>{
              if(!showPassword){
                setShowPassword("cPassword")
              }
              else{
                setShowPassword(null)
              }
             }}>
              {showPassword==="ePassword"?<FaEye/>:<FaEyeSlash/>}</button>
            </div>
        </div>

        <div className="flex items-start flex-wrap gap-2">
          <label className="flex items-center group has-[input:checked]:text-slate-900">
            <input
              id="tmc"
              name="tmc"
              type="radio"
              required=""
              className="sr-only"
              checked={isCheck}
              onClick={()=>{
                setIsCheck(!isCheck)
                }}
            />
            {/* Custom box */}
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 ${!isCheck?"outline-red-500":""} dark:outline-neutral-700
                        bg-white dark:bg-neutral-800
                        group-has-[input:checked]:bg-blue-600
                        group-has-[input:checked]:outline-blue-600
                        group-focus-within:outline-2
                        group-focus-within:outline-blue-600"
              aria-hidden="true `}
            >
              {/* Checkmark */}
              <svg
                className={`size-3 text-white opacity-0 group-has-[input:checked]:opacity-100`}
                viewBox="0 0 12 10"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M1 5l3 3 7-7" />
              </svg>
            </span>
            <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
              I accept the
            </span>
          </label>
          <a
            href="#"
            className="ml-1 text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Terms and Conditions
          </a>
           {!isCheck ?<p className="text-red-500 text-sm ml-0.5">
            Please accept terms and conditions</p>:""}
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="py-2 px-3.5 text-md rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Create an account
        </button>
      </div>
    </form>
  </div>
</main>

  )
}

export default SignUp
