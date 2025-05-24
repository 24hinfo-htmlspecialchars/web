"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const BackgroundSection = () => {
  return (
    <div className="hidden bg-muted lg:block relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/login-bg.png" alt="Carte de Lyon" fill className="w-full h-full"/>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none p-20"
      >
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
          24 Heures de l&apos;Info
        </h2>
        <p className="text-muted-foreground dark:text-neutral-200 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa obcaecati, laboriosam voluptatibus ex earum sequi, libero ipsum quae repellat officia excepturi ut.
        </p>
      </motion.div>
    </div>
  );
};
