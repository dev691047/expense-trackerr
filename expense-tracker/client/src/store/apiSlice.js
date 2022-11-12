//rtk query
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseURI="https://serene-everglades-08269.herokuapp.com";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
 
  baseQuery: fetchBaseQuery({ baseUrl:baseURI }),
  endpoints: (builder) => ({

    //get categories
    getCategories: builder.query({
        //get http://localhost:8080/api/categories
      query:()=>'/api/categories',
      providesTags:['categories']
    }),
    // get labels
    getLabels:builder.query({
      query:()=>'api/labels',
      providesTags:['transaction']
    }),

    // add transactions
    addTransaction:builder.mutation(
      {
        query:(initialTransaction)=>({
            //post http://localhost:8080/api/transaction
          url:'/api/transaction',
          method:"POST",
          body:initialTransaction

        }),
        invalidatesTags:['transaction']
      }),

      // delete records
      deleteTransaction:builder.mutation({
        query:recordId=>({
            //delete http://localhost:8080/api/transaction
          url:'api/transaction',
          method:'DELETE',
          body:recordId
        }),
        invalidatesTags:['transaction']
      })
 
  }),
})
export default apiSlice;