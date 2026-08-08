import BestChoiceCards from "./BestChoiceCards";
import { useState } from "react";
import CarouselPackage from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carousel = CarouselPackage.default


const BestChoice = ({group}) => {


  const [index,setIndex]= useState(1);
  const currGroup = group[index]


  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
 
return (
   <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    {/* Heading & Filters */}
    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
      <div>
           <h2 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white  pl-4">
          Best Choices 
        </h2>
      </div>
      
    </div>


 <Carousel responsive={responsive} itemClass="px-2">
 { currGroup &&
    currGroup.map((item)=>(<BestChoiceCards key={item.id} item={item}/>))
    } 
 </Carousel>
    
  </div>
 
</section>

  )
}

export default BestChoice
