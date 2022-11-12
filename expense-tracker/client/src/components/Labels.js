import React from 'react';
import LabelComponent from './LabelComponent';
import  {default as api} from "../store/apiSlice"
import { getLabels } from '../helper/helper';

export default function Labels(){

    const{ data,isFetching,isSuccess,isError}= api.useGetLabelsQuery()
    // console.log(data);

     let Transactions;
     if(isFetching){
         Transactions=<div>Fetching</div>
     }
     else if(isSuccess){
         Transactions=getLabels(data,'type').map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)
     }else if(isError){
       Transactions=<div>error</div>
     }


    // console.log(api.useGetCategoriesQuery())
    return(
    <>
       {Transactions}
        {/* {data.map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)} */}
    </>    
    )
}





