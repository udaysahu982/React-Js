import React from 'react'
import './Tailwind.css'
const Hero = () => {
  return (
    <>
    <div className='w-full h-full border '>
        <div className='w-full h-20 flex justify-evenly items-center bg-gray-950 border-b border-amber-50 '>
            <h1 className='text-white text-4xl font-semibold cursor-pointer'>LOGO</h1>
            <ul className='flex gap-8 text-xl font-medium text-blue-500'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>HELP</li>
            </ul>
            <button className='bg-blue-600 rounded-xl w-35 h-10 text-amber-50 font-semibold cursor-pointer'>DOWNLOAD</button>
        </div>
        <div className='w-full h-155 border flex' >
           <div className='w-1/2  flex bg-black justify-center items-center'><img src="./vite.svg" alt="" className='w-2/3 ' /></div>
           <div className='w-1/2  text-4xl bg-black text-white pt-25'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut nesciunt beatae quibusdam pariatur consectetur modi cum rerum recusandae dolorum, harum placeat. Enim, provident! Quos nihil ex provident dignissimos molestiae accusamus incidunt eos magni, inventore esse.</div>
           
        </div>
    </div>
    </>
  )
}

export default Hero