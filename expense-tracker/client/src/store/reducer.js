import {createSlice} from "@reduxjs/toolkit";

const initialState={
    categories:[],
    transaction:[]
}
//this upper one is my central store

export const expenseSlice=createSlice({
    
    name:'expense',
    initialState,
    reducers:{
        getTransactions:(state)=>{

        }
    }

})
export const {getTransactions}=expenseSlice.actions;
export default expenseSlice.reducer;
//using redux toolkit we dont need to create actions
//using reducer we create a central store so if you make a request to the server
// fetch ton get the data inside this state then we can access the data anywhere in our react app
//but when we do that we manually have to refresh  react component
//so to imporve this,instead of using reducers we will use redux toolkit query
// RTK QUERY we can easily  fetch the data from the server its the advance data fetching
// and caching tool while fetching data from server we dont need to worry about the refreshing the  componnnt
// this query will chnange react component whenever their is a change in react component.