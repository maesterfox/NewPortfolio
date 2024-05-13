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
        Originally from the ever-windy Edinburgh and now comfortably settled in
        the Derbyshire countryside, my tech odyssey kicked off across the pond
        at the University of Portland, USA, where I earned a Bachelor of Science
        in Computer Science.
      </p>
      <p className="mb-3">
        Since jetting back to the UK in 2018, I've tackled challenging gigs with
        industry heavyweights like Aviva, Centrica, and Amazon, sharpening my
        skills with <strong>Typescript, React, Node.js, and AWS</strong>. These
        stints have not just boosted my tech toolbox but also honed my
        chameleon-like ability to blend into varied tech environments. My sights
        are now set on anchoring down in a permanent role where I can unload my
        hefty kit of skills into a team that values innovation as much as a
        well-brewed cup of tea.
      </p>
      <p className="mb-3">
        When I’m not glued to my keyboard, you can find me, glued to my other
        keyboard exploring Azeroth in Warcraft, or wandering through new cities
        across the UK. I’m also plotting to conquer Europe one weekend at a
        time. These escapes not only charge my batteries but also spark my
        creativity and problem-solving prowess—essential tools in my
        professional toolkit.
      </p>
    </motion.section>
  );
}
