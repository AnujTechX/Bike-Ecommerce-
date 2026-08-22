  import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

  export const bikesApi = createApi({
    reducerPath:"bikesApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://bike-ecommerce.onrender.com"}),
    tagTypes:["Bikes"],
    endpoints:(builder)=>({

      getBikes:builder.query({
        query:()=> "bikes",
        providesTags:["Bikes"]
      }),
      
      addBooking:builder.mutation({
        query:(newBike)=>({
        url:"bikes",
        method:"POST",
        body:newBike
        }),
        invalidatesTags:["Bikes"]
      }),

      deleteBooking:builder.mutation({
      query:(id)=>({
        url: `bikes/${id}`,
        method:"DELETE"
      }),
      invalidatesTags:["Bikes"]
      }),

      updateBikes:builder.mutation({
        query:({id,...updateBike})=>({
        url:`bikes/${id}`,
        method:"PATCH",
        body:updateBike
        }),
        invalidatesTags:["Bikes"]
      }),


    })
  })


  export const {
        useGetBikesQuery,
        useAddBookingMutation,
        useDeleteBookingMutation,
         useUpdateBikesMutation
  } = bikesApi;