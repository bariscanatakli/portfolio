"use client"
import {
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden z-[20]"
      style={{ transform: "scale(0.9)" }}
    >
      <br/>
      <br/>
      <br/>
      <br/>
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            name={image.skill_name} // Pass the name (or other details) to the component
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
