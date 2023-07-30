'use client';
import { motion } from "framer-motion";
import styles from '../../../app/index';
import { navVariants} from '../../../utils/motion';
import Image from "next/image";
const Navbar = () => (
  <motion.nav
  variants={navVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-8 relative`}
  >
<div className=" absolute w-[50%] inset-0 gradient-01  "  />
  <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
<h2 className=" font-extrabold text-[30px] leading-[34px] text-black"> BITCOIN  AND CRYPTO CAMP</h2>
  <Image
  src="/framer public/menu.svg"
  alt="menu"
  className="w-[24px] h-[24px] object-contain text-black bg-black ml-72"
  width={60}
  height={10}
  />
</div>
</motion.nav>
);

export default Navbar;
