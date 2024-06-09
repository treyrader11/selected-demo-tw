"use client";

import { cn, isEven } from "@/lib/utils";
import Image from "next/image";
import { forwardRef } from "react";
// import Title from "./Title";
import Card from "../Card";
import ProjectTitle from "../ProjectPanel/ProjectTitle";

function Panel(
  {
    index,
    className,
    onMouseLeave,
    onMouseOver,
    onClick,
    isActive,
    title,
    desc,
    imgClass,
    src,
    progress = 0,
    isLastItem,
    isLoading,
  },
  ref
) {
  return (
    <div
      // onClick={onClick}
      className="relative group"
    >
      {/* ::Before .panel - shows numeric index of card*/}
      <div
        style={{ fontFamily: "Bogart-Semibold" }}
        className={cn(
          "[--progress:0]",
          "opacity-[0.15]",
          "delay-[2500]",
          // "duration-[2.5s]",
          "absolute",
          "text-[400px]",
          "top-1/2",
          "-translate-y-1/2",
          "w-2/5",
          "flex",
          "left-0",
          "justify-start",
          "items-center",
          "text-foreground",
          "stroke-2",
          "stroke-secondary",
          "leading-[1]",
          "group-hover:opacity-100",
          "ease-in-out",
          "duration-[1.75s]",
          // "transition",
          // `content-[${index}]`,
          // "[&_nth-of-type(1):content-['1']",
          isEven(index) &&
            cn("right-[-5%]", "left-auto", "right-0", "justify-end")
        )}
      >
        {index}
      </div>

      <div
        ref={ref}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          WebkitTextStroke: "2px #a58725",
          // waving line below
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B animation:wave 1s ease-in-out infinite alternate; animation-delay:-0.25s; stroke:%23a58725; stroke-width:2; stroke-linecap:square; %7D @keyframes wave%7B to%7B d:path('M 0 40 Q 20 42.5 40 40 Q 60 37.5 80 40'); %7D %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 37.5 40 40 Q 60 42.5 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E") 0px 65px/80px 80px repeat-x`,
        }}
        className={cn(
          "panel",
          "[--progress:0]",
          "relative",
          "w-full",
          "w-full",
          "h-screen",
          "mb-[25vh]",
          "max-h-[75vh]",
          "grid",
          // "grid-cols-5",
          // "grid-rows-5",
          "grid-cols-[repeat(5,_1fr)]",
          "grid-rows-[repeat(5,_1fr)]",
          "gap-0",
          "p-5",
          "-my-5",
          "mx-0",
          "ease-expo",
          "transition-[delay]",
          "duration-100",
          "last-of-type:mb-0",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
      >
        <ProjectTitle title={title} isActive={isActive} index={index} />
        <Thumb isLastItem={isLastItem} index={index}>
          <div
            className={cn(
              isLastItem &&
                isEven(index) &&
                cn("left-auto", "right-0", "flex-end")
            )}
          >
            <p>{desc}</p>
            <Card src={src} className="">
              {/* <img
                alt={title}
                className={cn(
                  "[transform:translateY(calc((var(--progress))*25%))_translateX(-50%)]",
                  "[filter:blur(calc(50px-(var(--progress))*125px))]",
                  "bg-blend-exclusion",
                  "p-[2vmin]",

                  "absolute",
                  "-top-3/4",
                  "left-1/2",
                  "w-auto",
                  "h-[200%]",
                  "z-[-1]",

                  "saturate-0",
                  "brightness-50",
                  "[filter:contast(4)]",
                 
                  imgClass
                )}
                loading="lazy"
                src={src}
              /> */}
              <div
                className={cn(
                  "[transform:translateY(calc((var(--progress))*25%))_translateX(-50%)]",
                  "[filter:blur(calc(50px-(var(--progress))*125px))]",
                  "bg-blend-exclusion",
                  "p-[2vmin]",

                  // "absolute",
                  // "-top-3/4",
                  "relative",
                  "left-1/2",
                  "w-auto",
                  "h-[200%]",
                  "z-[-1]",

                  "saturate-0",
                  "brightness-50",
                  "[filter:contast(4)]",

                  imgClass
                )}
              >
                <Image
                  src={src}
                  fill
                  priorty="true"
                  className={cn(
                    "absolute",
                    "-top-3/4",
                    "left-1/2",
                    "w-auto",
                    "h-[200%]",
                    "z-[-1]",
                    imgClass
                  )}
                  sizes={{}}
                  alt={title}
                />
              </div>
            </Card>
          </div>
        </Thumb>
      </div>
    </div>
  );
}

function Thumb({ children, index, isLastItem, className }) {
  return (
    <div className={cn("group relative", className)}>
      {/* ::Before */}
      <div
        style={{
          background:
            "radial-gradient(circle at center,#a58725 1px,rgba(255,255,255,0.005) 1px,rgba(255,255,255,0.005) 20px) 0px 0px/20px 20px,radial-gradient(circle at center, #a58725 1px,rgba(255,255,255,0.005) 1px,rgba(255,255,255,0.005) 20px) 10px 10px/20px 20px",
        }}
        className={cn(
          "absolute",
          "size-full",
          "left-[5%]",
          "top-[5%]",
          "shadow-[0_0_0_2px_#a58725,_0_0_0_0_#eeece5,_0_0_0_0_#fe4e01]",
          "transition-[transform_0.2s_cubic-bezier(1,_0.885,_0.32,_1),_box-shadow_0.2s_cubic-bezier(1,_0.885,_0.32,_1)]",
          "delay-[0.2s,_0s]",
          "rounded-[5px]",
          "group-hover:translate-x-[5%]",
          "group-hover:translate-y-[5%]",
          isEven(index) &&
            cn(
              "group-hover:left-[-5%]",
              "group-hover:top-[-5%]",
              "group-hover:translate-x-[5%]",
              "group-hover:translate-y-[5%]",
              "lg:left-[-5%]",
              "lg:top-[-5%]",
              "lg:group-hover:[transform:translate(5%,5%)]"
            ),
          isLastItem && isEven(index) && "right-[-5%]"
        )}
      />
      <div className={cn("thumb", isLastItem && "mb-0")}>{children}</div>
      {/* ::After */}
      <div
        className={cn(
          "absolute",
          "w-1/2",
          "h-[calc(100%_+_25vh)]",
          "left-0",
          "top-full",
          "border-dashed",
          "border",
          "border-[2px_2px_2px_2px]",
          "border-t-transparent",
          "border-r-secondary",
          "border-b-secondary",
          "border-l-transparent",
          "rounded-tr-none",
          "rounded-b-[10px]",
          "rounded-l-none",
          "opacity-25",
          // not sure if working
          isEven(index) && cn("-scale-x-100 left-1/2"),
          isLastItem && "hidden",
          "group-hover:border-r-primary",
          "group-hover:border-b-primary"
        )}
      />
    </div>
  );
}

export default forwardRef(Panel);
