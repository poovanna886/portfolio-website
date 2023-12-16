import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1 from "@/public/project1.jpg";
import project2 from "@/public/project2.jpg";
import project3 from "@/public/project3.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University",
    location: "Chennai, India",
    description:
      "I graduated from Ranganathan University,with a degree in B.Arch" ,
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Design Intern",
    location: "Bangalore, India",
    description:
      "I interned at Syenetic Partners and O.F.A for 6 months where I learnt how to manage projects at a corporate level",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Dec 2023",
  },
  
  {
    title: "Transcriptionist and Proof Reader",
    location: "Remote, India",
    description:
      "Worked as a transcriptionist and proof reader at Quickgate grassroot solution pvt ltd",
    icon: React.createElement(FaReact),
    date: "Aug 2021 - Feb 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Residential Villa",
    description:
      "I have handled a series of residential projects till present, this a villa, from Bangalore. It has a contemporary essence with modern elements which forms an exclusive exterior and consists of post modern elements in the interior",
    tags: ["AutoCAD", "Sketchup", "Lumion", "Adobe Photoshop"],
    imageUrl: project1,
  },
  {
    title: "Office Building",
    description:
      "The parametric triangle mesh structure, makes the building more interactive in aspect to functionality and visual. This is one of the facade option proposed to a office building in Hyderabad, India.",
    tags: ["AutoCAD", "Sketchup", "Lumion", "Adobe Photoshop"],
    imageUrl: project2,
  },
  {
    title: "Hospital Interior",
    description:
      "There is never a perfect reception to be derived but we can attain a certain exclusivity for function and call it as ‘wow’. This is one my interior design for a hospital which was proposed with detailed interior,3D views and Renderings.",
    tags: ["AutoCAD", "Sketchup", "Enscape", "Adobe Photoshop"],
    imageUrl: project3,
  },
] as const;

export const skillsData = [
  "AutoCAD",
  "Revit",
  "Sketchup",
  "Maya",
  "Blender",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Lumion",
  "Enscape",
  "V-ray",
  "Rhinoceros",
  "Redux",
] as const;
