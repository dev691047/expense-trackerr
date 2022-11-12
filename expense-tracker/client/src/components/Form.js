import React from 'react'
import {useForm} from "react-hook-form";
import List from './List'; 
import {default as api} from '../store/apiSlice';

const Form = () => {
  const {register,handleSubmit,resetField}=useForm();
  const[addTransaction]=api.useAddTransactionMutation();

  const onSubmit= async (data)=>{
    console.log(data);
    if(!data)return{};
    await addTransaction(data).unwrap();
    resetField('name');
    resetField('amount');
    //this data has all the value of the 
    // form which will be sent to the backend.
  }
  
  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl'>Transaction</h1>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
           <div className='grid gap-4'>
            <div className='input-group'>
                <input {...register('name')} type="text" placeholder='salary,House rent, etc' className='form-input'></input>
            </div>
            <select className='form-input' {...register('type')}>
                <option value="Investment" defaultValue>Investment</option>
                <option value="Expense" >Expense</option>
                <option value="Savings" >Savings</option>
            </select>
            <div className='input-group'>
                <input {...register('amount')} type="text" placeholder='Amount' className='form-input'></input>
            </div>
            <div className='submit-button'>
            <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
            </div>
           
          </div> 
        </form>
        <List/>
    </div>
  )
}

export default Form;