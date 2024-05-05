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
              boxShadow: "none",
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
            date={item.date}
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
                  className="btn mt-2 bg-white border border-gray-200 shadow-sm rounded-xl text-gray-700 dark:text-white/75 dark:hover:text-white/95 dark:hover:bg-black/[0.2]"
                  onClick={() => toggleResponsibilities(index)}
                >
                  {showResponsibilities[index]
                    ? "Hide Details"
                    : "View Details"}
                </button>
                {showResponsibilities[index] && (
                  <ul className="list-disc pl-6 mt-2">
                    {item.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
