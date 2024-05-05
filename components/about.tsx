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
        Originally from Edinburgh and now based in Derbyshire, England, my
        journey in technology started at the University of Portland in the US,
        where I earned a Bachelor of Science in Computer Science. This was
        followed by a pivotal internship at Intel's Hillsboro Campus, where I
        honed my skills in real-world tech environments.
      </p>
      <p className="mb-3">
        Since returning to the UK in 2018, I have embraced challenging contract
        roles with industry giants like Aviva, Centrica, and Amazon, refining my
        expertise with <strong>Typescript, React, Node.js, and AWS</strong>.
        These roles have not only enhanced my technical acumen but also
        fortified my ability to adapt and innovate within dynamic and evolving
        tech landscapes. I'm currently on the lookout for a permanent position
        where I can bring my extensive skills to a team-focused and innovative
        setting, emphasizing continuous improvement and exceptional
        customer-centric solutions.
      </p>
      <p className="mb-3">
        Away from the keyboard, my passion for health and fitness helps
        counterbalance the sedentary nature of programming. Whether exploring
        Azeroth in Warcraft or traversing new cities across the UK and planning
        adventures throughout Europe, I harness these activities to rejuvenate
        my mind and foster the creativity and problem-solving skills vital for
        my professional achievements.
      </p>
    </motion.section>
  );
}
