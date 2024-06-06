"use client";

import { cn } from "@/lib/utils";
import ProjectPanel from "../ProjectPanel";
import { projectsData } from "@/lib/data";
import Socials from "../Socials";
import { forwardRef } from "react";

function Projects(
  { progress, onCardMouseOver, onCardMouseOut, onCardClick },
  ref
) {
  // this will likely become home layout
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
          // "opacity-100",
          "delay-[2s]"
        )}
      >
        Trey Rader
      </p>

      {/* {projectsData.map((proj, i) => (
        <Panel {...proj} key={i} />
      ))} */}
      {projectsData.map((proj, i) => (
        <ProjectPanel
          {...proj}
          key={i}
          onMouseOver={onCardMouseOver}
          onMouseOut={onCardMouseOut}
          onClick={() => onCardClick(i)}
          ref={(el) => (ref.current[i] = el)}
        />
      ))}
    </>
  );
}

export default forwardRef(Projects);
