  import { useParams } from "react-router-dom"
  import { useGetBikesQuery } from "../redux/bookingSlice"
  import { FaChevronLeft, FaChevronRight,FaTimes } from "react-icons/fa";
  import { useState,useEffect } from "react";
  import { Doughnut } from "react-chartjs-2";
  import ChartDataLabels from "chartjs-plugin-datalabels";
  import {Chart as ChartJS,ArcElement,Tooltip,Legend,} from "chart.js"
  import { useNavigate } from "react-router-dom";
  import toast from "react-hot-toast";

  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels
  );

  ChartJS.register(ArcElement,Tooltip,Legend)

  const ProductPage = () => {
    const navigate=useNavigate()
    const {id} = useParams();
    const [index,setIndex] = useState(1)
    const [transition,setTransition] = useState(true)
    const [move,setMove]= useState(false)
  
    const {data:bikes,isLoading,error} = useGetBikesQuery()
    
    const item = bikes?.find(item=>String(item.id)===id)

    
  // Emi calculation functionality 
  const [downPayment,setDownPayment]=useState(15000)
  const [rateInt,setRateInt]=useState(5)
  const [tenure,setTenure]=useState(1)
  const [isOpen,setIsOpen]= useState(false);
  const [monthlyEmi,setMonthlyEmi]= useState(0)
  const [principalAmt,setPrincipalAmt]= useState(0)
  const [totalIntPayable,setTotalIntPayable]= useState(0)

  const charData={
    labels:["DownPayment" ,"Principal Amount","Interest Amount "],
    datasets:[
      {
        data:[downPayment,principalAmt,totalIntPayable],
        backgroundColor:[
          "#22c55e",
          "#27BBF5",
          "#ef4444",
        ],
        borderWidth:0
      }
    ]
  }


  useEffect(()=>{
    const getEmi=()=>{
    if(item){
      let p = Number(item.price_inr-downPayment);
      let r= Number(rateInt/12/100);
      let n= Number(tenure*12);
      let power = ((1+r)**n); 
      
      
      let emi =  Math.round(((p*r*power)/(power-1)))
      const totalPayable= (emi*n).toFixed(2);
      const totalEmi= Math.round(Number((totalPayable-p)));
      setPrincipalAmt(p)
      setTotalIntPayable(totalEmi)
      setMonthlyEmi(emi)
      
      } 
    }

    getEmi();
  },[item,downPayment,tenure,rateInt])


    // carousel functionality 

    useEffect(()=>{
      if(!transition){
      const id = setTimeout(()=>{
        setTransition(true)
        },10)
      return ()=> clearTimeout(id)  
    }
  },[transition]);


    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Product Not Found...</p>
    
    if(!item?.thumbnail?.length) return null
    
  
    
  //  image clone to make carousel 
  const cloneImg = [
          item.thumbnail[item.thumbnail.length-1],
          ...item.thumbnail,
          item.thumbnail[0],
          ]

  const handleTransition=()=>{
      if(index>=cloneImg.length-1){
        setTransition(false)
        setIndex(1)
      }

      if(index<=0){
        setTransition(false)
        setIndex(cloneImg.length-2)
      }
  }

 /* ---------------handle registered for test ride  ---------------- */ 
const  registeredDetails = JSON.parse(localStorage.getItem("registered"))||[]
 const handleTestRide=()=>{
  
  if(registeredDetails.length>0){
    return toast.success("Welcome! We received your query for test ride Our Team will contact you as soon as!",{
      duration:3500
    })
  }
  else{
    navigate("/register/");
  }
}

      return (
      <section className="
      dark:bg-gray-800 dark:text-white max-w-[1200px] mx-auto px-3 relative">
      { /* ---------------  carousel container ---------------- */ }
      <div className="flex flex-col gap-4 md:flex-row md:gap-10 p-2 mt-2 md:justify-between">
        { /* --------------- carousel ---------------- */ }
        <div className="carousel rounded-xl overflow-hidden relative w-full border-gray-100 border-2">
        { item && 
        (<>
        <div className={` flex w-full shrink-0 
        ${transition?"transition-transform duration-300 ease-in-out":""}`} 
        style={{transform:`translateX(-${index*100}%)`}}
          onTransitionEnd={()=>{
            setMove(false)
            handleTransition()}}>

          {
            cloneImg.map((img,i)=> <img src={img} key={i} alt="img" 
            className="object-cover w-full shrink-0 rounded-xl" /> ) 
          }
          </div>
          
          </> 
        )}    
        
        { /* --------------- left right buttons  ---------------- */ }
        <button className="absolute z-40 top-1/2 p-1.5 rounded-2xl cursor-pointer bg-gray-300 left-3 text-black" 
        onClick={()=>{  
          if(!move){
            setMove(true)
            setIndex(prev=> prev-1)
          }
        }}><FaChevronLeft/></button> 
      
        <button className="absolute z-40 top-1/2 p-1.5 rounded-2xl cursor-pointer bg-gray-300 right-3 text-black" 
          onClick={()=>{
            if(!move){
              setMove(true)
              setIndex(prev=>prev+1)  }
          }}>
          <FaChevronRight/></button> 
        
        </div>
    
    
    { /* --------------- on Road price---------------- */ }       
        
          <div className="w-full mt-2">
          <h1 className="lg:text-2xl font-semibold">{item.title} On Road Price </h1>
          { /* --------------- estimate container ---------------- */ }
            <div>
              <p className=" md:text-lg flex justify-between mt-5 ">
                <span>Ex-Showroom </span>
                <span>{`₹ ${item.price_inr}`}</span>
              </p>
                
                <p className=" md:text-lg flex justify-between mt-3">
                <span>RTO </span>
                <span>{`₹ ${15000}`}</span>
              </p>
              
                <p className=" md:text-lg flex justify-between mt-3">
                <span>Insurance (Comprehensive)</span>
                <span>{`₹ ${10000}`}</span>
              </p>

              
                <p className="md:text-lg flex justify-between mt-3">
                <span>Standard Accessories</span>
                <span>{`₹ ${2500}`}</span>
              </p>

                <p className=" md:text-lg flex justify-between mt-3 border-t-1 pt-1 border-b-1">
                <span className="md:text-xl md:font-semibold">On Road Price in Mumbai</span>
                <span className="md:text-xl md:font-semibold">{`₹ ${item.price_inr+15000+10000+2500}`}</span>
              </p>


            </div>
            
              <div className="flex justify-around gap-20">
              { /* --------------- emi calculator ---------------- */ }
              <button onClick={()=> setIsOpen(!isOpen)}
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold md:font-bold 
              py-1 px-2 md:py-2 md:px-4 rounded-full mt-4 md:mt-8 ">
                  Calculate EMI
                </button>   
            

            { /* --------------- test ride button ---------------- */ }
                {/* <Link to="/comPage"> */}
              <button onClick={handleTestRide}
              className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold md:font-bold 
              py-1 px-2 md:py-2 md:px-4 rounded-full mt-4 md:mt-8 ">
                  Test Ride
                </button>   
            {/* </Link> */}
            
          </div>
          </div>
        
        
        </div> 
          

        { /* --------------- Features ---------------- */ }
        <div className="">
        <div className="border-t-1 border-gray-400 mt-5 px-2">
        <h1 className="text-xl font-semibold mt-1 mb-2">{item.title}</h1>
        <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
          <span>Price</span> 
          <span>{item.price_inr}</span></p>
        <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2 "> 
          <span>Motor</span> 
          <span>{`${item.specifications.motor?item.specifications.motor:"-"}`} </span></p>

          <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
          <span>Engine</span> 
          <span>{item.specifications.engine?item.specifications.engine:"-"}</span></p>
        <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
          <span>Power</span> 
          <span>{item.specifications.power}</span></p>
        <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
          <span>Torque</span> 
          <span>{item.specifications.torque?item.specifications.torque:"-"}</span></p>
        
        <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
          <span>Battery</span> 
          <span>{item.specifications.battery?item.specifications.battery:"-"}</span></p>
        <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
          <span>Mileage</span> 
          <span>{item.specifications.mileage?item.specifications.mileage:"-"}</span></p>
        
        <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
          <span>Top Speed</span> <span>{item.specifications.top_speed}</span></p>
        
        <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
          <span>Brakes</span> 
          <span>{item.specifications.brakes}</span></p>
        
          <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
            <span>Suspension</span>
            <span>{item.specifications.suspension}</span></p>

        <p className="flex gap-26 justify-between border-b-1 dark:border-gray-100 border-dotted pt-2"> 
            <span>Weight</span> 
            <span>{item.specifications.weight}</span>
          </p>
        </div>
        </div>



  { /* --------------- emi calculator  ---------------- */ }
          
    {
    isOpen &&
    <div className=" w-full h-full flex justify-center items-center backdrop-blur-md absolute z-40 top-12 md:-top-4 right-0 left-0">

      <div className="w-full max-w-3xl text-white rounded-3xl shadow-2xl p-6 bg-gray-500 relative">
    
          
    {/* Title */}
          <h1 className="text-2xl font-bold text-center mb-6">
          EMI Calculator
          </h1>

      
        <button onClick={()=>setIsOpen(false)}
        className="absolute z-50 top-5 right-6 text-2xl hover:text-red-500 cursor-pointer ">
        <FaTimes/></button>
        
  <div className="gap-8 justify-between md:flex border-t-1 border-gray-300">       

  { /* --------------- inputs grid ---------------- */ }
  <div className="w-full mt-6 p-4 rounded-2xl">  


  { /* --------------- Down payment container ---------------- */ }
          <div>
            <div className="flex justify-between items-center">
            <label htmlFor="" className="font-semibold md:text-[1.1rem]">Down Payment</label>
              
              <input
              type="tel"
              placeholder="Down Payment (₹)"
              pattern="[0-9]*"
              className="inputBtn p-2 w-32 md:text-[1.1rem] rounded-md outline-1 outline-gray-400"
              value={`₹ ${downPayment}`}
              onChange={(e)=>{
                const value= e.target.value.replace(/[^0-9]/g,"")
                setDownPayment(value);
              }}
            />
              </div>
              
              <span className="text-sm">₹15000 to ₹25000</span>
                <input
                  type="range"
                  min="15000"
                  max="25000"
                  value={downPayment}
                  className="w-full  accent-blue-800"
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />

              </div>
  
  { /* --------------- Rate Interest ---------------- */ }
        <div>
            <div className="flex justify-between items-center">
              <label htmlFor="" className="font-semibold md:text-[1.1rem]">Interest Rate (%)</label>
            <input
              type="tel"
              placeholder="Interest Rate (%)"
              className="inputBtn p-2 w-32 md:text-[1.1rem] rounded-md outline-1 outline-gray-400"
              value={`${rateInt}%`}
                        
              onChange={(e)=>{
              const value= e.target.value.replace(/[^0-9.]/g,"");
                setRateInt(value)
              }}
              />
              </div>

              <span className="text-sm">5% to 40%</span>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={rateInt}
                  className="w-full accent-blue-800"
                  onChange={(e)=> setRateInt(Number(e.target.value))}
                />
        </div>

  { /* --------------- Loan Tenure container ---------------- */ }
            <div>
              <div className="flex justify-between items-center">
              <label htmlFor="" className="font-semibold md:text-[1.1rem]">Loan Tenure</label>

            <div className="flex items-center gap-2 inputBtn p-2 w-32 rounded-md md:text-[1.1rem] outline-1 outline-gray-400">
            <input
              type="tel"
              placeholder="Loan Tenure"
              className="w-8 outline-0"
              value={`${tenure}`}
                        
              onChange={(e)=>{
              const value= e.target.value.replace(/[^0-9]/g,"");
                setTenure(value)
              }}
              />
              <span class="text-gray-200 text-sm">12 Months</span>
              </div>
              </div>
            <span className="text-sm">1 year to 7 years</span>
                <input
                  type="range"
                  min="1"
                  max="9"
                  step="0.5"
                  value={tenure}
                  className="w-full mt-0 accent-blue-800"
                  onChange={(e) => setTenure(Number(e.target.value))}
                />
          </div>
    </div>



  { /* --------------- Emi total result container  ---------------- */ }
          <div className="w-full">       

          {/* Chart Section */}
          <div className="mt-6 bg-gray-900 rounded-2xl p-4">
            <p className="text-center text-gray-400 mb-3">
              EMI Breakdown Chart
            </p>

            <div className="h-54 w-full flex items-center justify-center text-gray-500">
              
                {/* <Doughnut data={charData} options={{
                  responsive:true,
                  plugins:{
                    legend:{
                      position:"bottom",
                      labels:{
                        color:"white"
                      }
                    }
                  },
                  
                }}/> */}
               <Doughnut 
                  data={charData}
                  options={{
                    responsive:true,
                    // maintainAspectRatio:false,
                    plugins:{
                      legend:{
                        position:"bottom",
                        labels:{
                          color:"white"
                        }
                      },
                      datalabels:{
                        color:"black",
                        font:{
                          weight:"bold",
                          
                        },
                        formatter:(value, context)=>{

                          const total = context.chart.data.datasets[0].data
                          .reduce((a,b)=>a+b,0);

                          return ((value/total)*100).toFixed(1)+"%";
                        }
                      }
                    }
                  }}
                />                
          </div>

            { /* --------------- total calculate  ---------------- */ }
            <div className="text-white">
            <p className="font-semibold flex justify-between items-center">
              <span>Principal Loan Amount</span>
              <span>{`₹ ${principalAmt}`}</span>
            </p> 

            <p className="font-semibold flex justify-between items-center">
              <span>Total Interest Payable</span>
              <span>{`₹ ${totalIntPayable}`}</span>
            </p> 
            <p className="font-semibold flex justify-between items-center border-t-1 border-gray-400-300 mt-2">
              <span>Total Amount Payable</span>
              <span>{`₹ ${principalAmt+totalIntPayable}`}</span>
            </p> 
          </div>

          </div>

          <div className="mt-6 bg-gray-700 rounded-2xl p-5 text-center">
            <p className="text-gray-300 font-semibold">Monthly EMI</p>
            <h2 className="text-3xl font-bold text-green-400">{`₹ ${monthlyEmi}`}</h2>
          </div>
          
          </div>
        </div>
        </div>
      </div>
      }
    
      </section>
    )
  }

  export default ProductPage
