"use client"
import React from 'react';
import {getThoughtsById } from '../server/action';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from '@tanstack/react-query';

export const SpesificThoughts = ({ id }) => {
    const {data,isLoading,isError} = useQuery({
        queryKey:['getThoughtsById', id],
        queryFn:()=>getThoughtsById(id),
        staleTime:4000,
        refetchInterval:30000
    })
  // Now you can use the 'id' prop in your component

  const renderMessage = (message) => {
    return message?.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };




  return (
    <div className='container px-2 py-10 m-auto text-center sm:mt-10 sm:px-0'>
        {/* {isError && console.log("error", isError) }
        {console.log(data)} */}
       {isError && <h1>Error</h1>}
       {isLoading ?  <AiOutlineLoading3Quarters className='m-auto text-4xl font-semibold text-center dark:text-gray-300 animate-spin'/> : <>
       <h1 className='text-5xl font-semibold dark:text-gray-300'>Dear... {data?.personTo}</h1>
        <div className='w-full m-auto mt-10 sm:w-1/2'>
            <p className='text-lg font-medium text-inherit dark:text-gray-300'>{renderMessage(data?.message)} </p>
            <p className='text-lg font-thin text-gray-700 dark:text-gray-300'>from... {data.personFrom}</p>
        </div></>}
    </div>
  );
};
