import React from 'react';
import { Spinner } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import 'typewriter-effect/dist/core';
// import { MetroSpinner } from 'react-spinners-kit';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="text-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* <MetroSpinner
          size={100}
          color={['#46d6db', '#ffc107', '#ed4956']} // Array of colors to create color change effect
          loading={true}
          duration={1500} // Duration of color transition (in milliseconds)
        /> */}
        <h1 className="text-3xl">Wait as we get</h1>
        <h1 className="text-3xl">
          <Typewriter
            options={{
              strings: ['user', 'latest update', 'and database'],
              delay: 50,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </motion.div>
    </div>
  );
};

export default Loading;
