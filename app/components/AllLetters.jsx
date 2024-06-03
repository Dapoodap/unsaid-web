import { useRouter } from 'next/navigation';
import React from 'react'
import envelope from '@/public/envelope.svg';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { getThoughts } from '../server/action';
import Image from 'next/image';

export const AllLetters = () => {
    const router = useRouter();
    const {data,isLoading,isError} = useQuery({
        queryKey:['getThoughts'],
        queryFn:getThoughts,
        staleTime:4000,
        refetchInterval:30000
    })
    const handleRedirect = (id) =>{
        
        router.push(`thoughts/${id}`);
    }
  return (
    <div className='flex flex-wrap items-center justify-center w-full mt-5 sm:mt-20'>
    {isError ? <h1>error</h1> : <></>}
      {isLoading ? <AiOutlineLoading3Quarters className='text-4xl font-semibold dark:text-gray-300 animate-spin'/> : 
      data.map((item)=>(
        <div onClick={()=>{handleRedirect(item.id)}} className="relative w-[450px] h-[200px] mb-24 flex items-center justify-center cursor-pointer">
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold dark:text-white">
          <h1 className='text-5xl font-semibold text-center'>{item.personTo}</h1>
        </div>
        <Image
          src={envelope}
          className="absolute w-full h-full transition-opacity duration-500 ease-in-out hover:opacity-0"
        />
      </div>
      ))}
    </div>
  )
}
