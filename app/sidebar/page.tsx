'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { AiOutlineBars,AiFillDashboard } from 'react-icons/ai';
import { FcSalesPerformance} from 'react-icons/fc'
import Image from 'next/image';
import Items from '../components/framer motion/items'
import { motion } from 'framer-motion';
import { signOut } from 'next-auth/react';
export default function Sidebar() {
  const { data: session } = useSession();
const [open, setOpen] = useState (true)



// for collpsing sidebar
const handleToggle = () => {
  setOpen(!open);
};

const sideContainerVariants = {
  true: {
    width: "15rem",
  },
  false: {
    transition: {
      delay: 0.6,
    },
  },
};

const sidebarVariants = {
  true: {},
  false: {
    width: "3rem",
    transition: {
      delay: 0.4,
    },
  },
};

const profileVariants = {
  true: {
    alignSelf: "center",
    width: "4rem",
  },
  false: {
    alignSelf: "flex-start",
    marginTop: "2rem",
    width: "3rem",
  },
};
  return (
    <div className="flex flex-row m-0 p-0 bg-gradient-to-b from-blue-500 via-pink-500 to-red-500">
  <motion.div 
  data-open = {open}
  variants={sideContainerVariants}
  initial={`${open}`}
 animate={`${open}`}
  className="relative h-[140vh] sticky flex justify-center items-end pt-[5px] pb-[5px]">
    <motion.div 
      variants={sidebarVariants }
      initial={`${open}`}
     animate={`${open}`}
    className="w-[18rem] h-[130vh] mt-22px m-8px border-1px p-13px justify-center flex-col items-center bg-red-200 mx-2 backdrop-blur-lg shadow-3xl border-[20%] rounded-3xl opacity-90">
      <motion.div 
        className="absolute flex font-extrabold rounded m-10px mt-15px p-4 right-0"
        whileHover={{
          scale: 1.2,
          rotate: 180,
          opacity: 0.8,
          transition: {
            delay: 0.2,
            duration: 0.4,
          },
        }}
        whileInView="show"
        initial="hidden"
        onClick={handleToggle}
      >
        <Link href="">
          <AiOutlineBars className="h-10 w-10" />
        </Link>
      </motion.div>
          <div className=' mt-[50px]  justify-center flex flex-col align-middle items-center'>
            {session?.user && session.user.image && (
              <Image
                src={session.user.image}
                alt={"session.user.name"}
                width={100}
                height={100}
                className=' rounded-full '
              />
            )}
            {session?.user && (
              <p className="text-xl mt-4">Welcome, {session.user.name}</p>
            )}
          </div>
          <div className=' flex flex-col w-full items-center  justify-center'>
<div className=' flex flex-col w-full'>
  <h2>ANALYTICS</h2>
  <Items icon={<AiFillDashboard/>} name='Dashboard' />
  <Items icon={<FcSalesPerformance/>} name='Performance' />
</div>
<div className=' flex flex-col w-full'>
  <h2>ANALYTICS</h2>
  <Items icon={<AiFillDashboard/>} name='Dashboard' />
  <Items icon={<FcSalesPerformance/>} name='Performance' />
</div>
<div className=' flex flex-col w-full'>
  <h2>ANALYTICS</h2>
  <Items icon={<AiFillDashboard/>} name='Dashboard' />
  <Items icon={<FcSalesPerformance/>} name='Performance' />
</div>
<div className=' flex flex-col w-full'>
  <h2>ANALYTICS</h2>
  <Items icon={<AiFillDashboard/>} name='Dashboard' />
  <Items icon={<FcSalesPerformance/>} name='Performance' />
</div>
<div className=' flex flex-col w-full'>
  <h2>ANALYTICS</h2>
  <Items icon={<AiFillDashboard/>} name='Dashboard' />
  <Items icon={<FcSalesPerformance/>} name='Performance' />

      
<button onClick={() => signOut({ callbackUrl: '/signin' })}>Sign Out</button>
 

</div>
          </div>
        </motion.div>
      </motion.div>
      <div className="h-[100vh]">Div 2</div>
    </div>
  );
}
