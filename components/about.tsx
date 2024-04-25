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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        An experienced software developer based in Derbyshire, England. My
        journey in the tech industry began after transitioning from a career in
        physical fitness in Portland, Oregon. I initially entered the tech scene
        with an internship at Intel's Hillsboro Campus and have since thrived in
        various contract roles since moving back to the UK in 2018. My
        experiences across diverse environments have significantly broadened my
        technical and adaptive skills.
      </p>
      <p className="mb-3">
        Driven by a passion for cutting-edge technologies and innovative
        software development practices, I am now seeking a permanent position
        that allows me to leverage my robust background in a dynamic,
        collaborative setting. I am particularly interested in opportunities
        that align with my commitment to continuous learning and
        customer-centric development.
      </p>
      <p>
        Outside of my professional life, I am passionate about health and
        fitness, which serves as a perfect counterbalance to the sedentary
        nature of software development. In addition to staying active, I enjoy
        playing Warcraft, exploring new cities across the UK, and planning
        extended adventures across Europe. These activities not only enrich my
        personal life but also enhance my creative thinking and problem-solving
        skills, which are crucial to my professional development.
      </p>
    </motion.section>
  );
}
