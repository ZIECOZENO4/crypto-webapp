
'use client'


import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

const SplashPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className=' bg-black'>
      <div className=" relative hidden sm:block   ">
        <video className=" min-w-full h-96 md:w-full md:h-auto" autoPlay loop muted>
          <source src="/videos/video1.mp4" type="video/mp4"/>
        </video>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-extrabold -mt-56 ">OFFICIAL  BITCOIN</h1>
          <p className='text-4xl mt-20 font-semibold leading-10'>Bitcoin Trading And Cryptocoin Camp</p>
        
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center justify-items-stretch pt-80">
          <button className=' bg-amber-600 rounded-md font-bold text-2xl bg-opacity-40'>Note This  : <span className=' bg-green-800 p-1 rounded-md bg-opacity-60'>  This is The Home Of All Traders</span></button>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end">
      <a href='https://zeno-react-offical-website.netlify.app/' className=' cursor-pointer font-bold  text-xl pb-7 px-3 flex justify-end'>This Crypto Website Is Owned By ZENO WEB TEAM</a>   
        </div>
      </div>

      <div className=" h-[100vh] md:hidden lg:hidden xl:hidden bg-amber-600 ">
        <div className='pt-2'></div>
        <h1 className="text-4xl font-extrabold flex justify-center mt-2 bg-amber-600  "> BitCoin Store</h1>  
         <h2 className='flex justify-center mt-3 -mb-12 text-2xl'>Cryptocoin Camp</h2>
        <video className=" min-w-full h-96 -mb-11 md:w-full md:h-auto bg-amber-600" autoPlay loop muted>
          <source src="/videos/video1.mp4" type="video/mp4"/>
        </video>
        <div className="top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-amber-600">
     
          <p className=' font-medium'>This is the home of all <span className=' font-bold text-amber-900'>COIN TRADERS</span>.</p>
        </div>
      <div className='py-7 bg-amber-600 flex justify-end  '><a href='https://zeno-react-offical-website.netlify.app/' className=' cursor-pointer font-bold'>Owned By ZENO WEB TEAM.</a></div>
      </div>
    </div>
  );
};

export default SplashPage;
