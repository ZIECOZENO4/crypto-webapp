'use client';
import { motion } from "framer-motion";


import { footerVariants } from "@/utils/motion";
const Footer = () => (
  <motion.footer
  variants={footerVariants}
  initial='hidden'
  whileInView='show'
  className={`sm:p-16 xs:p-8 px-6 py-12 relative`}
  >
  <div className="footer-gradient" />
  <div className=" w-[100%] 2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 md:-mb-5 mb-5">
  <div className="flex items-center justify-between flex-wrap gap-5">
  <h4 className=" font-bold md:text-[44px] text-[20px] text-white">ENTER THE CRYPTO WORLD</h4>
  <button className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-12">
  <img 
  src="framer public/headset.svg"
  alt="headset"
  className="w-[24px] h-[24px] object-contain"
  />
  <span className="font-normal md:text-[16px] text-[12px] text-white">THE CRYPTO WORLD
  </span>
  </button>
  </div>
  <div className="flex flex-col mt-5">
  <div className=" mb-[50px] h-[4px] bg-black opacity-60">
  <div className=" flex items-center justify-between flex-wrap gap-4">
  <h3 className="font-extrabold text-[20px] text-white mt-5">CRYPTO CAMP</h3>
  <p className=" font-normal text-[14px] text-white opacity-60 md:mt-5 md:-pb-5 pb-5"> Copyright 2023 - 2024 CRYPTOCAMP.  All rights reserved.</p>
  <div className=" flex gap-4">
 
   

  </div>
  </div>
  </div>
  
  </div>
  </div>
  </motion.footer>
);

export default Footer;