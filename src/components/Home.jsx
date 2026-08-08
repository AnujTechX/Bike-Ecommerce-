import ImageSlider from "./ImageSlider"
import Scooters from "./Scooters";
import { useGetBikesQuery } from "../redux/bookingSlice";
import CompareBare from "./CompareBare";
import BestChoice from "./BestChoice";
import Popular from "./Popular";
import BrandList from "./BrandList";
const Home = () => {
  const {data:bikes,isLoading,error} = useGetBikesQuery();
 
  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>Error</h1>
  // console.log("bikes :",bikes)
  const groupChunks=[];
  const size = 10;
  
  for(let i=0;i<bikes.length;i+=size){
    groupChunks.push(bikes.slice(i,i+size))
  }
  return (
    <main>
       <ImageSlider/>
       <BestChoice group={groupChunks}/>
       <Popular  group={groupChunks}/>
       <BrandList/>
       <Scooters group = {groupChunks} />
       <CompareBare/>
    </main>
  )
}

export default Home
