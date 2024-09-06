"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  websites,
}: {
  websites: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = websites.slice(0, 5);
  const secondRow = websites.slice(5, 10);
  const thirdRow = websites.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="min-h-[115rem] md:min-h-[135rem] lg:min-h-[140rem] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="py-[25rem] lg:py-0"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10 lg:mb-20">
          {firstRow.map((website) => (
            <ProductCard
              website={website}
              translate={translateX}
              key={website.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-10 lg:mb-20 space-x-20">
          {secondRow.map((website) => (
            <ProductCard
              website={website}
              translate={translateXReverse}
              key={website.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((website) => (
            <ProductCard
              website={website}
              translate={translateX}
              key={website.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <article className=' lg:max-w-[30rem] xl:max-w-[45rem] text-center mx-auto mt-20 lg:mt-40'>
      <h1 className="text-2xl md:text-3xl font-bold font-heading py-10"><span className="font-heading font-bold relative after:absolute after:block after:w-[130%] after:h-16 after:bg-transparent shadow-none after:shadow-md after:border-4 after:border-primaryRed after:bottom-[-1rem] after:-z-10 after:-left-6 after:transition-transform after:duration-300 hover:after:transform after:skew-x-12">My Projects</span></h1>
      <p className="text-base lg:text-lg font-normal font-body">
        Take a look at some of the projects I&apos;ve worked on. Each one shows my ability to build practical and easy-to-use websites,
        covering everything from simple front-end tasks to more complex full-stack applications.
      </p>
    </article>
  );
};

export const ProductCard = ({
  website,
  translate,
}: {
  website: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={website.title}
      className="group/product h-[11rem] w-[20rem] md:h-[20rem] md:w-[35rem] xl:h-[25rem] xl:w-[45rem] relative flex-shrink-0"
    >
      <Link
        href={website.link}
        className="block group-hover/product:shadow-2xl "
        target="_blank"
      >
        <Image
          src={website.thumbnail}
          height="1500"
          width="850"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={website.title}
          priority={true}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {website.title}
      </h2>
    </motion.div>
  );
};
