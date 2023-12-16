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
        After graduating with a degree in{" "}
        <span className="font-medium">B.Arch</span>, I decided to pursue my
        expertise in {" "}
        <span className="font-medium">building plan, modelling and rendering</span>.{" "}
        <span className="italic">I enjoy collaborating with </span> clients, consultants and contractors.
        I want to achieve <span className="underline">the best</span> possible outcomes for each project.
        I am {" "}
        <span className="font-medium">
          always eager to learn new skills and explore new challenges 
        </span>
        in the field of architecture. I also offer freelancing services on{" "}
        <span className="font-medium">fiverr</span> as a building and floor planner.
      </p>

      <p>
        <span className="italic">When I'm not working</span>, I enjoy playing
        the guitar, singing and editing videos. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. 
      </p>
    </motion.section>
  );
}
