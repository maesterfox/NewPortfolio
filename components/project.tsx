"use client";
import React, { useState, useRef, useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBlog } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

type ModalProps = {
  show: boolean;
  onClose: () => void;
  title: string;
  content: readonly string[]; // Accept readonly arrays
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
  functionality,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const [showModal, setShowModal] = useState(false);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const Modal: React.FC<ModalProps> = ({ show, onClose, title, content }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal if the user clicks outside of it
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [onClose]);

    // If modal isn't open, return null
    if (!show) return null;

    return (
      <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-50">
        <div
          ref={modalRef}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg w-80 sm:w-96 z-50"
        >
          <h2 className="text-xl font-semibold mb-4">{title}</h2>

          <ul className="list-disc pl-6 mb-4">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <a
              className="blog-button justify-center max-h-8 bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.05rem] rounded-full dark:hover:bg-slate-600 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80"
              href="https://blog.davidfoxdev.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              title="My Blog"
            >
              <FaBlog />
              Full Build Blog
            </a>
          </ul>
          <button
            onClick={onClose}
            className="btn bg-gray-100 border border-gray-200 shadow-sm rounded-xl px-4 py-2 text-black hover:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white/75 dark:hover:text-white/95"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-300 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-5 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title} </h3>
          <p className="mt-2 leading-relaxed text-gray-900 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-2 gap-1 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-2 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {functionality && functionality.length > 0 && (
            <button
              className="blog-button justify-center max-h-7 bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.05rem] rounded-full dark:hover:bg-slate-600 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80"
              onClick={openModal}
            >
              <FaWrench />
              View Functionality
            </button>
          )}
          <a
            className="blog-button justify-center max-h-7 bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.05rem] rounded-full dark:hover:bg-slate-600 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title="Project Link"
          >
            <FaLink />
            Check it out!
          </a>
        </div>
        <a
          href={url}
          target="_blank"
          title="projectImg"
          rel="noopener noreferrer"
        >
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
          />
        </a>
      </section>
      <Modal
        show={showModal}
        onClose={closeModal}
        title={title}
        content={functionality}
      />
    </motion.div>
  );
}
