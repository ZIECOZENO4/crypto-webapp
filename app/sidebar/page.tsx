import React from 'react';
import Link from 'next/link';
import '../../app/globals.css';
import { AiOutlineBars } from "react-icons/ai";
export default function Sidebar() {
  return (
    <div className="flex flex-row">
      <div className="h-[100vh] bg-red-600 sticky flex align-middle ">
<div className='w-[18rem] h-[90%] border-[1px] p-[i3px] justify-center flex-col align-middle '>
<div className=' flex justify-end'>
<Link href='/home'><AiOutlineBars /></Link>
    </div>
</div>


      </div>
      <div className="h-[100vh] ">Div 2</div>
    </div>
  );
}
