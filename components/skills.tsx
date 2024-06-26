"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
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
          <ul className="flex flex-wrap justify-center gap-2 text-lg">
            {skillsData[category].map((skill, index) => (
              <motion.li
                className="bg-white border border-gray-200 shadow-sm rounded-xl px-5 py-3  hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-black/10 dark:border-gray-700 dark:text-white/80"
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
