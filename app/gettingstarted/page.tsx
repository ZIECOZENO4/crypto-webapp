import React from 'react'
import Image from 'next/image'
import Icon from '../../public/images/icon.jpg'
import Link from 'next/link'
export default function GettingStarted() {
  return (
    <div className=' bg-slate-300'>
      <nav className='  sticky top-0 drop-shadow-xl  z-20 p-0 flex bg-gradient-to-t from-blue-950 via-blue-800 to-blue-500 h-20  ml-7 rounded-bl-3xl pt-2'>
        <div className=' justify-center mx-20 '>
        <h1 className='  block text-white md:font-serif md:flex md:justify-between md:text-[40px] md:leading-[50px] md:space-x-36 '>FULL AUTHENTICATION PROCESS </h1> 
        <Image src={Icon} alt='bitcoin profile ' className=' h-20 w-20 rounded-full  justify-end  float-right md:absolute   hidden '  />       
        </div>
      </nav>
      <div>
        <h1 className=' mt-11 flex justify-center font-extrabold ml-10 mb-9'>CHOOSE YOUR AUTHENTICATION </h1>
        <p className=' m-1 ml-4 leading-6 gap-3 md:ml-7 '>Security is the most important thing in crypto and all related trades, and that is why we work very hard to make sure no one tampers or hacks into another person&apos;s account, or login and access your credentials and transactions. </p>
      <p className=' m-1 ml-4 mb-6 leading-6 gap-3  text-blue-600' >We assure you that all you have here is secure, only if you would go all this steps of supper authentication with us. </p>
      <h4 className=' flex justify-center m-2 pt-2 pl-4 md:mt-5 font-bold'>THANK YOU AS YOU HELP US SECURE YOUR DETAILS BY FOLLOWING THESE STEPS:</h4>
      </div>
<Link href='/signin' className=' cursor-pointer'>    <ul className=' mx-4 leading-9 gap-3 md:mx-11 md:block md:justify-center hover:bg-blue-400'>
        <li>🔐  kindly accept all our terms and conditions.</li>
        <li>🔐  Do not share any of your credentials.</li>
        <li>🔐  Please for full and top security login with all available options, this will still change in the future.</li>
        <li>🔐  Login with your credentials</li>
        <li>🔐  Login with your Github Account.</li>
        <li>🔐  Login with your Google account.</li>
        <li>🔐  Login with your Discord account.</li>
    </ul ></Link>

    <div className=' block leading-10 justify-center mt-8 p-4 bg-red-700'>

<h2 className=''>Note This:  <span>IF YOU HAVEN&apos;T SET UP YOUR CREDENTIALS WITH US KINDLY, CLICK THE LINK BELOW. </span></h2>
<Link href='/signup' className=' hover:font-bold hover:bg-blue-900 md:uppercase md:hover:2xl underline hover:no-underline'>Kindly Sign up to your bitcoin crypto camp</Link>

    </div>
    <footer>
<h3 className='flex justify-center mt-14 font-thin text-xl pl-7 md:text-2xl '>For more information, issues or questions contact</h3>
<p className=' font-bold hover:text-2xl  flex justify-center cursor-pointer'> <a href='https://zeno-react-offical-website.netlify.app/'>ZENO WEB.COM</a></p>

<p className=' mt-6 md:flex md:justify-end md:m-5'>© ZENO WEB ONLINE COMPANY.COM 2023</p>
    </footer>
    
        </div >
  )
}
