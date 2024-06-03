import React from 'react'
import { CiInstagram, CiMail, CiTwitter } from 'react-icons/ci'

export const Footer = () => {
  return (
    <div className='flex justify-center w-full mt-5 border-t-2 border-black dark:border-slate-400 py-14'>
        <div className='flex items-center justify-center gap-3'>
            <a href="#"><CiInstagram className='text-4xl font-bold dark:text-slate-400'/></a>
            <a href="#"><CiTwitter className='text-4xl font-bold dark:text-slate-400'/></a>
            <a href="#"><CiMail className='text-4xl font-bold dark:text-slate-400'/></a>
        </div>
    </div>
  )
}
