
  import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
  import banner1 from '../assets/img1.avif';
  import banner2 from '../assets/img2.avif';
  import banner3 from '../assets/img3.avif';
  import banner4 from '../assets/img4.avif';
  import { useEffect, useState } from "react";

  const images=[banner1,banner2,banner3,banner4];
  
  let  slideClone = [
                      images[images.length-1], 
                      ...images,
                      images[0]
                    ]

  const ImageSlider = () => {

    const [index,setIndex]= useState(1);
    const [transition,setTransition] =useState(true);
    const [isPosed,setIsPosed]= useState(false);


  // transition controller 
  const handleTransition=()=>{
  // next slide 
    if(index>=slideClone.length-1){
    setTransition(false);
    setIndex(1);
   }

  // prev slide 
   else if(index<=0){
     setTransition(false);
     setIndex(slideClone.length-2)
   }
  }

useEffect(()=>{
  if(isPosed) return 

  let id = setInterval(()=>{
    setIndex((prev)=>{
      if(prev===slideClone.length-1) return 0
      return prev+1
    })

  },3000)

  return ()=>clearInterval(id)
},[isPosed])

  useEffect(()=>{
    if(!transition){
      const id = setTimeout(()=>{
        setTransition(true);
        // console.log("id :",id)
      },10)
      return()=> clearTimeout(id)
    }
  },[transition])



    return (
      <section className="overflow-hidden">
      
        <div className={`flex items-center w-full 
        ${transition?"transition-transform duration-500 ease-in-out":""}
        `} 
          style={{transform:`translateX(-${index*100}%)`}}
          onTransitionEnd={handleTransition}
          onMouseEnter={()=>setIsPosed(true)}
          onMouseLeave={()=>setIsPosed(false)} >

        {
          slideClone.map((img,i)=>(
            <img src={img} alt="img" key={i}
            className="object-cover w-full h-[260px] md:h-[440px] lg:h-[550px] lg:h-[90vh] flex-shrink-0 
           "/>
            ))
            
          }
          
        </div>

          <button className="left-8 top-1/5 md:top-68 absolute bg-gray-200 p-2 flex justify-center items-center rounded-2xl  p-1.5  "
          onClick={()=>setIndex(prev=> (prev-1+slideClone.length)%slideClone.length)}>
           
            <FaChevronLeft/>
            </button>
          <button className="right-8 top-1/5 md:top-68 absolute bg-gray-200 p-2 flex justify-center items-center rounded-2xl  p-1.5  right-0"
          onClick={()=>setIndex(prev=> (prev+1)%slideClone.length)}>
         
          <FaChevronRight/>
          </button>
      </section>
    )
  }

  export default ImageSlider


