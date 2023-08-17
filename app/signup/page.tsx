'use client'


// import { signIn, useSession } from 'next-auth/react'
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// export default function Page() {
//   const { data: session } = useSession()

//   return (
//     <div className=' flex justify-center   h-[100vh] bg-gradient-to-t from-blue-900 to-blue-400'>
//       <h1 className=' mt-11 text-3xl font-serif '>SIGN UP PAGE </h1>
//       {session?.user && (
//         <>
//           <p>Welcome, {session.user.name}</p>
//           {session.user.image && <Image src={session.user.image} alt={"googlename"} width={500} height={500} />}
//           <Link href="/home">
//             Go to Home
//           </Link>
//         </>
//       )}
//       <button
//         type='button'
//         onClick={() => signIn('google')}
//         className=' btn btn-link btn-floating'>
//         <i className="fa">google</i>
//       </button>

//       <button
//         type='button'
//         onClick={() => signIn('github')}
//         className=' btn btn-link btn-floating'>
//         <i className="fa">github</i>
//       </button>

//       <button
//         type='button'
//         onClick={() => signIn('discord')}
//         className=' btn btn-link btn-floating'>
//         <i className="fa">discord</i>
//       </button>
//     </div>
//   )
// }


import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp />;
}