import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {
  directionLeft?: boolean;
};

function Skills({ directionLeft }: Props) {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase">Skills</h3>
      <Skill />
    </div>
  );
}

export default Skills;
