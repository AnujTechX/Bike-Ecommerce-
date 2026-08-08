import SearchCard from "./SearchCard"
const SearchBikeResult = ({searchResult}) => {

  console.log("search result  :",searchResult)
  return (
     <div className="absolute top-15 right-8 z-60 bg-red-600  ">
          <main className="px-4 md:px-8 mt-6">
      <div className="max-w-2xl mx-auto lg:max-w-5xl">
        {/* <div className="mb-12">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            My Garage 
          </h1>
        </div> */}
        <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8">
          <ul className="lg:col-span-2 space-y-6">
            {/* {
            searchResult.map((item)=> <SearchCard  key={item.id} item={item}/>)
            }         */}
          </ul>
        </div>
      </div>
    </main>
    
        </div>
  )
}

export default SearchBikeResult
