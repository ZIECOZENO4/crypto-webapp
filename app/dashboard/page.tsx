

import Link from 'next/link'
export default function Dashboard() {
  return (
    <div className="bg-background bg-cover bg-center">
      <nav className=' bg-gradient-to-l from-sky-950 via-cyan-700 to-blue-600 h-20  md:h-28' >
       <h1 className=' flex justify-start pt-6 px-3 font-bold md:font-bold md:text-5xl '><Link href={`/`}>BITCION & CRYPTO CAMP</Link></h1> 
      </nav>
      <div className= ' leading-9 pl-4 pt-7 md:flex justify-center'>
        <h1 className='block text-amber-50 font-bold md:text-4xl  '>WELCOME WELCOME WELCOME!!!!</h1>  
      </div>
      <div className= ' leading-9 pl-4 pt-7 md:flex justify-center '>
        <h2 className=' leading-6 pt-7 md:block text-white md:text-2xl md:leading-10 '>Congratulations you made it to the largest , biggest and best crypto and bitcoin website in 2023. </h2>
      </div>
      <div className='flex justify-center pt-36  md:pt-20 md:mt-20 md:gap-32'>
        <button className=' bg-green-600 hover:bg-black  font-light p-2 rounded-3xl mb-7 md:mb-8  md:flex justify-center md:font-bold md:p-4 '><Link href={`/signin`} className='text-black hover:text-amber-50 '>let&apos;s get started</Link></button>
        <button className=' hidden bg-blue-600 font-light p-2 rounded-3xl md:mb-8 md:flex justify-between md:font-bold md:p-4 '><Link href={`/document`} className=' text-white hover:text-amber-700 '>Read Docs</Link></button>
      </div>
    </div>
  )
}

