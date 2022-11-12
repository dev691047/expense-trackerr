import React from 'react';
import  {default as api} from "../store/apiSlice"
import 'boxicons';



const List = () => {
    const{ data,isFetching,isSuccess,isError}= api.useGetLabelsQuery()
    // console.log(data);
    const [deleteTransaction]=api.useDeleteTransactionMutation();

    
    const handleClick=(e)=>{
      //dataset will give the id if the particular list
      // console.log(e.target.dataset.id);
      if(!e.target.dataset.id){
        return 0;
      }
      deleteTransaction({_id:e.target.dataset.id});

     }

     let Transactions;
     if(isFetching){
         Transactions=<div>Fetching</div>
     }
     else if(isSuccess){
         Transactions= data.map((v,i)=><Transaction handler={handleClick} key={i} category={v}></Transaction>)
     }else if(isError){
       Transactions=<div>error</div>
     }



  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 font-bold text-xl'>History</h1>
        {Transactions}
    </div>
  )

}

function Transaction({category,handler}){
    return(
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRight:`8px solid ${category.color }`}} >
         <button onClick={handler} className='px-3'><box-icon data-id={category._id ?? ""} size="15px" color={category.color ??'yellow'} name="trash"></box-icon></button>
          <span className='block w-full'>{category.name}</span>
        </div>
        
    )
}
export default List;