"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm David Fox, originally from Edinburgh but now residing in Derbyshire,
        England. My journey in technology began in the United States, where I
        moved for university and earned a Bachelor of Science in Computer
        Science. This led to a transformative internship at Intel's Hillsboro
        Campus. During my time at university, I also worked as a personal
        trainer, blending my passion for health and fitness with generating a
        steady income. Since returning to the UK in 2018, I have taken on
        various challenging contract roles that have not only sharpened my
        technical expertise but also bolstered my capacity to adapt and excel in
        rapidly changing environments.
      </p>

      <p className="mb-3">
        I am passionate about utilizing cutting-edge technologies to create
        innovative software solutions. Currently, I am looking for a permanent
        position where I can bring my strong background into play in a dynamic,
        team-oriented setting. I'm particularly excited about roles that promote
        continuous learning and a focus on delivering outstanding results to
        customers.
      </p>
      <p>
        When I’m not coding, you’ll find me indulging in my passion for health
        and fitness, a vital part of my life that balances the sedentary nature
        of my profession. I also enjoy unwinding with a game of Warcraft,
        traveling to explore new cities in the UK, and planning my next
        adventure in Europe. These activities not only keep me refreshed but
        also fuel my creativity and problem-solving skills, which are crucial
        for my professional success.
      </p>
    </motion.section>
  );
}
