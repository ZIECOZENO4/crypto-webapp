'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const SigninButton = () => {
    const { data: session } = useSession();
    if (session && session.user){
    // return(
    //      <div className=' mx-11 justify-center'>
      
    //         <button onClick={() => signOut()}>Sign Out</button>
    //      </div>

    // )   
    redirect('/home')
    }else{
  return (
    <div className=' mx-13 flex justify-center shadow-lg mx-14 bg-black opacity-80 h-36 rounded-2xl md:mx-52 md:h-48 md:text-4xl hover:text-6xl'>
  
      <button className='  text-white text-2xl hover:text-green-600 md:hover:text-4xl ' onClick={() => signIn()}>SIGN IN NOW</button>
    </div>
  )
}
}
export default SigninButton
