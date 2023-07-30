import React from 'react'
import Image from 'next/image'
import Icon from '../../public/images/icon.jpg'
export default function GettingStarted() {
  return (
    <div>
      <nav className='  sticky top-0 drop-shadow-xl  z-20 p-0 flex bg-gradient-to-t from-blue-950 via-blue-800 to-blue-500 h-20  ml-7 rounded-bl-3xl pt-2'>
        <div className=' justify-center mx-20 '>
        <h1 className='  block text-white  '>FULL AUTHENTICATION PROCESS </h1> 
        <Image src={Icon} alt='bitcoin profile ' className=' h-20 w-20 rounded-full md:flex justify-end md:visible    hidden '  />       
        </div>
      </nav>
      <div>
        <h1 className=' mt-11 flex justify-center font-bold'>CHOOSE YOUR AUTHENTICATION </h1>
        <p className=' m-1 ml-2 leading-6 gap-3 '>Security is the most important thing in crypto and all related trades, and that is why we work very hard to make sure no one tampers or hacks into another person&apos;s account, or login and access your credentials and transactions. </p>
      <p className=' m-1 ml-2 leading-6 gap-3  text-blue-600' >We assure you that all you have here is secure, only if you would go all this steps of supper authentication with us. </p>
      <h4 className=' flex justify-center m-2 pt-2 md:mt-5 font-bold'>THANK YOU AS YOU HELP US SECRE YOUR DETAILS BY FOLLOWING THESE STEPS:</h4>
      </div>
    <ul>
        <li>Accept our terms and conditions</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul >
    </div >
  )
}
