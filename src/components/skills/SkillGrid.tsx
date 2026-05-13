"use client";

import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { Skill } from "@/lib/data";

interface SkillGridProps {
  skills: Skill[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export function SkillGrid({ skills }: SkillGridProps) {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skills.map((skill) => (
        <motion.div key={skill.id} variants={item}>
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </motion.div>
  );
}
