import React from "react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import image from "../../assets/1.png";
import { Button } from "../ui/button";
import { Ghost } from "lucide-react";

const Hero = () => {
  const words = ["faster", "smarter", "better", "efficient"];

  return (
    <div className="relative mt-48 mg:mt-0 h-screen text-center">
      <div
        class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.5,
          }}
          className={cn(
            "relative mb-6 max-w-4xl mx-auto text-6xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100"
          )}
          layout
        >
          Build 10x <ContainerTextFlip words={words} /> with AgenticLabs
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.55,
          }}
          className="text-lg"
        >
          We take care of routine tasks and streamline your digital workflows—so
          you can focus on what truly matters.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.55,
          }}
          className="mt-8 flex gap-2 justify-center"
        >
          <Button variant={"outline"} className="rounded-full">
            Explore Marketplace
          </Button>
          <Button className="rounded-full">Get Started Free</Button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.6,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src={`https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Darker_Home_4699f79534.webp`}
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
