'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import {staggerContainer, fadeIn, zoomIn} from '../../utils/motion';
const Feedback = () => (
  <section className={` relative z-10 mt-[30px]  p-[20px] sm:pt-16 xs:pt-8 pt-12 sm:p-16 xs:p-8 px-6 py-12 sm:pb-16 xs:pb-8 pb-12`}>
<motion.div
variants={staggerContainer}
initial='hidden'
whileInView='show'
className={` mx-auto flex flex-col md:flex-row  gap-8 md:-mt-10 p-[20px]`}
>
<motion.div
variants={fadeIn('right', 'tween', 0.2, 1)}
className=" flex-[0.5] md:max-w-[300px] flex justify-end flex-col  sm:p-8 rounded-[32px] border-[1px] border-[#6a6a6a] p-[30px] relative"
>
<div className="" />
<div className="align-middle">
<h4 className=" font-bold sm:text-[32px] text-[26px] sm:leading-[40px] flex justify-center md:justify-start mt-3 leading-[36px] text-white">
ZIECO ZENO
</h4>
<p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] flex justify-center leading-[16px] text-white">Founder Of CRYPTO CAMP</p>
<p className="mt-[14px] font-normal sm:text-[18px] text-[12px]  sm:leading-[45px] leading-[40px] text-white sm:pb-16 xs:pb-8 pb-12">
remember to write a short note on the feedback of the founder  uhbuiibffy   uhuhhkjhi  uihugyuf   
</p>
</div>

</motion.div>



<motion.div
variants={fadeIn('left', 'tween', 0.2, 1)}
className="  md:max-w-[300px] flex-1 justify-center flex-col items-center relative rounded-full mb-0"
>


<motion.div
variants={zoomIn(0.4, 1)}
className="hidden absolute -mt-[80vh] w-full h-full justify-around rounded-full"
>
<Image
src="/framer public/icon.jpg"
alt="stamp"
className="  object-contain rounded-full object-left-top"
height={80}
width={80}
/>



</motion.div>
</motion.div>
</motion.div>
  </section>
);

export default Feedback;
// <img 
// src="framer public/pofile.png"
// alt="feeback image"
// className="w-full md:h-[710px] h-[310px] object-cover rounded-[40px] mb-0"

// />