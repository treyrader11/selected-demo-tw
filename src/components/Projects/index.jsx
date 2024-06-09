"use client";

import { cn } from "@/lib/utils";
import ProjectPanel from "../ProjectPanel";
import { projectsData } from "@/lib/data";
import Socials from "../Socials";
import { forwardRef, useState } from "react";

function Projects(
  { progress, onCardMouseOver, isHovering, onCardMouseOut, onCardClick },
  ref
) {
  const [onMouseOver, setOnMouseOver] = useState(false);
  return (
    <>
      <p
        className={cn(
          "subhead",

          "w-full",
          "text-center",
          "relative",
          "text-background",
          "text-secondary",
          // "opacity-0",
          "translaye-y-[50px]",
          "transition-transform",
          "duration-[600]",
          "ease-in-out",
          "translate-y-0",
          "opacity-100",
          "delay-[2s]"
        )}
      >
        Trey Rader
      </p>

      {projectsData.map((proj, i) => (
        <ProjectPanel
          {...proj}
          key={i}
          index={i}
          isActive={onMouseOver}
          onMouseOver={() => setOnMouseOver(true)}
          onMouseLeave={() => setOnMouseOver(false)}
          onClick={() => onCardClick(i)}
          ref={(el) => (ref.current[i] = el)}
        />
      ))}
    </>
  );
}

export default forwardRef(Projects);
