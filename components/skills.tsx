"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const directions = ["top", "bottom", "left", "right"];

const getRandomDirection = () => {
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
};

const getPositionOffset = (direction: string) => {
  switch (direction) {
    case "top":
      return { x: 0, y: -200 };
    case "bottom":
      return { x: 0, y: 200 };
    case "left":
      return { x: -200, y: 0 };
    case "right":
      return { x: 200, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

const fadeInAnimationVariants = {
  initial: (index: number) => {
    const direction = getRandomDirection(); // Get random direction for each item
    const positionOffset = getPositionOffset(direction);
    return {
      opacity: 0,
      x: positionOffset.x,
      y: positionOffset.y,
    };
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      {Object.keys(skillsData).map((category, catIndex) => (
        <div key={catIndex}>
          <h2 className="text-2xl font-bold text-white-800 mt-10 mb-4 capitalize">
            {category.replace(/_/g, " ")}
          </h2>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData[category].map((skill, index) => (
              <motion.li
                className="bg-white border border-gray-200 shadow-sm rounded-xl px-5 py-3 dark:bg-black/10 dark:border-gray-700 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
