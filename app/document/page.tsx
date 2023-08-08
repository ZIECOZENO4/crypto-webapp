import Link from "next/link"


export default function Document() {
    // alert('WELCOME TO THE DOUMENTATION PAGE.') 
    return (
    <div className=" bg-black">
   <nav className=" bg-black ">
    <h1 className=" font-bold text-white">CRYPTO DOCUMENTATION</h1>
  <Link href='/dashboard' className=" text-blue-400"><p>Go back to the starting page</p></Link>  
  <Link href='/home' className=" text-blue-400"><p>Go back to the home page</p></Link> 
   </nav>
    </div>
  )
}
