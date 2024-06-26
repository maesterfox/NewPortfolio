"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion, AnimatePresence } from "framer-motion";

type ShowResponsibilitiesState = {
  [key: number]: boolean;
};

const Experience: React.FC = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [showResponsibilities, setShowResponsibilities] =
    useState<ShowResponsibilitiesState>({});

  const toggleResponsibilities = (index: number): void => {
    setShowResponsibilities((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="font-italic">{item.date}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2">
              {item.tech_stack.map((tech, techIndex) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={techIndex}
                >
                  {tech}
                </li>
              ))}
            </ul>
            {item.responsibilities && item.responsibilities.length > 0 && (
              <>
                <button
                  className="btn mt-2 bg-gray-100 border border-gray-200 shadow-sm rounded-xl px-4 py-2 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white/75 dark:hover:text-white/95 dark:hover:bg-black/[0.25]"
                  onClick={() => toggleResponsibilities(index)}
                >
                  {showResponsibilities[index]
                    ? "Hide Details"
                    : "View Details"}
                </button>
                <AnimatePresence>
                  {showResponsibilities[index] && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="list-disc pl-6 mt-2"
                    >
                      {item.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
