import CarouselPackage from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PopularBikes from "./PopularBikes";
const Carousel = CarouselPackage.default


const Popular = ({group}) => {

  // const [index,setIndex] = useState(2);
  const currGroup = group[2]


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
           <h2 className="mt-0 text-2xl font-semibold text-gray-900 dark:text-white  pl-4">
          Popular Bikes
        </h2>
      </div>
      
    </div>


 <Carousel responsive={responsive} itemClass="px-2">
 { currGroup &&
    currGroup.map((item)=>(<PopularBikes key={item.id} item={item}/>))}
  
 </Carousel>
    
  </div>
  {/* Filter modal */}
 
</section>

  )
}

export default Popular
