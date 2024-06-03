import { QueryClient, useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { postThoughts } from '../server/action';

export const FormLetter = () => {
    const queryClient = new QueryClient();
  const [formData, setFormData] = useState({
    personTo: '',
    message: '',
    personFrom: ''
  });
  const mutation = useMutation({mutationFn:postThoughts})

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Mengirimkan data ke console
    mutation.mutate(formData,{
        onSuccess(){
            queryClient.invalidateQueries([{queryKey:'getThoughts'}])
            alert("Sukses")
            setFormData({
              personTo: '',
              message: '',
              personFrom: ''
            });
        },
        onError(){
            alert("error")
        }
    })
    // console.log(formData)
  };

 
  

  

  return (
    <div className='container px-3 py-5 m-auto mt-5 sm:mt-20'>
      <form className='flex flex-col w-full gap-5' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3'>
          <label className='text-2xl font-semibold dark:text-slate-300' htmlFor="to">Dear ... <span className='text-sm font-light dark:text-slate-300'>(required)</span></label>
          <p className='text-sm font-thin dark:text-slate-300'>e.g. 'The universe' or 'younger/older me'</p>
          <input type="text" required name='personTo' value={formData.personTo} onChange={handleChange} className='w-full px-3 py-4 text-xl border border-gray-500 rounded-lg bg-slate-200' />
        </div>
        <div className='flex flex-col gap-3'>
          <label className='text-2xl font-semibold dark:text-slate-300' htmlFor="message">Write Unsaid Thought Here... <span className='text-sm font-light'>(required)</span></label>
          <p className='text-sm font-thin dark:text-slate-300'>Write you message, thought, or any unsaid words that you wish you said</p>
          <textarea name='message' required value={formData.message} onChange={handleChange} className='w-full px-3 py-4 text-xl border border-gray-500 rounded-lg bg-slate-200' />
        </div>
        <div className='flex flex-col gap-3'>
          <label className='text-2xl font-semibold dark:text-slate-300' htmlFor="from">From ... <span className='text-sm font-light'>(required)</span></label>
          <p className='text-sm font-thin dark:text-slate-300'>Keep your name here anonymous</p>
          <p className='text-sm font-thin dark:text-slate-300'>e.g. 'Your ex' or 'your first love'</p>
          <input type="text" required name='personFrom' value={formData.personFrom} onChange={handleChange} className='w-full px-3 py-4 text-xl border border-gray-500 rounded-lg bg-slate-200' />
        </div>
        <button type="submit" className='px-8 py-3 border border-black w-fit hover:bg-green-500 dark:border-gray-400 dark:text-slate-200'>Submit</button>
      </form>
    </div>
  )
};
