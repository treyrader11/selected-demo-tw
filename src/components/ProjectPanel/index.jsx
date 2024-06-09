"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { forwardRef } from "react";
import Title from "./Title";

function ProjectPanel(
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
  },
  ref
) {
  const activeClass = cn("cursor-auto", "overflow-hidden", "");
  return (
    <div
      ref={ref}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        WebkitTextStroke: "2px #a58725", //dope outline
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B animation:wave 1s ease-in-out infinite alternate; animation-delay:-0.25s; stroke:%23a58725; stroke-width:2; stroke-linecap:square; %7D @keyframes wave%7B to%7B d:path('M 0 40 Q 20 42.5 40 40 Q 60 37.5 80 40'); %7D %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 37.5 40 40 Q 60 42.5 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E") 0px 65px/80px 80px repeat-x`,
      }}
      className={cn(
        "panel",

        isActive ? "active hoverLink" : "",
        // "animate-waving",
        "relative",
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
        "py-5",
        "px-0",
        "-my-5",
        "mx-0",
        "ease-elastic",
        // "opacity-0",
        // "opacity-100",
        "transition-[delay]",
        "duration-[1s]",
        "even:[&_.thumb]:after:-scale-x-100",
        "even:[&_.thumb]:after:left-1/2",

        "before:opacity-[0.15]",
        "before:duration-[2.5s]",

        "hover:[&_nth-of-type(even).thumb:before]:left-[-5%]",
        "hover:[&_nth-of-type(even).thumb:before]:top-[-5%]",
        "hover:[&_nth-of-type(even).thumb:before]:translate-x-[5%]",
        "hover:[&_nth-of-type(even).thumb:before]:translate-y-[5%]",

        "[&_nth-of-type(even)_h2]:text-right",

        "[&_nth-of-type(even)_h2]:[grid-area:_2/1/5/6]",
        "md:[&_nth-of-type(even)_h2]:[grid-area:_3/2/4/6]",
        "lg:[&_nth-of-type(even)_h2]:[grid-area:_3/3/4/6]",
        "lg:[&_nth-of-type(even)_h2]:[clip-path:none]",

        "lg:[&_nth-of-type(even)_h2:ntn-of-child(2)]:z-[4]",
        "lg:[&_nth-of-type(even)_h2:ntn-of-child(2)]:",
        "lg:[&_nth-of-type(even)_h2:nth-of-type(2)]:[clip-path:polygon(-5%_-5%,385px_-5%,385px_110%,-5%_110%)]",

        "[&_nth-of-type(even).thumb:after]:-scale-x-100",
        "[&_last-of-type]:mb-0",
        "[&_last-of-type.thumb:after]:hidden",
        "[&_last-of-type:nth-of-type(even):before]:right-[-5%]",

        "[&_nth-of-type(1):before]:content-['1']",
        "[&_nth-of-type(even):before]:left-auto",
        "[&_nth-of-type(even):before]:right-0",
        "[&_nth-of-type(even):before]:justify-end",

        "[&_nth-of-type(2):before]:content-['2']",

        "before:text-[400px]",
        "before:absolute",
        "before:top-1/2",
        "before:-translate-y-1/2",
        "before:w-2/5",
        "before:flex",
        "before:left-0",
        "before:justify-start",
        "before:items-center",
        "before:text-foreground",
        "before:[-webkit-text-stroke]:[2px_#a58725]",
        "before:leading-[1]",
        //  isActive ? "before:opacity-100" : "before:opacity-0",
        "before:ease-in-out",
        "before:duration-[1.75s]",
        "before:transition",
        className
      )}
    >
      {/* <Title text={title} progress={progress} /> */}
      <h2
        style={{
          transform: `translateY(calc(100px - ${progress} * 200px)))`,
        }}
        className={cn(
          "dark",
          "[grid-area:_3/1/4/4]",

          "text-[64px]",
          "relative",
          "z-[3]",
          "text-transparent",
          "leading-[1]",
          "pointer-events-none"
          // "translate-y-[calc(100px_-_0_*_200px)]"
        )}
        data-splitting="words"
      >
        <span
          // style={{
          //   background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B animation:wave 1s ease-in-out infinite alternate; animation-delay:-0.25s; stroke:%23a58725; stroke-width:2; stroke-linecap:square; %7D @keyframes wave%7B to%7B d:path('M 0 40 Q 20 42.5 40 40 Q 60 37.5 80 40'); %7D %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 37.5 40 40 Q 60 42.5 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E") 0px 65px/80px 80px repeat-x`,
          // }}
          style={{
            background: `url(/svgs/wave.svg)`,
          }}
          className={cn(
            "word",

            // `bg-[url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='200%25'_height='100%25'%3E%3Cdefs%3E%3Cstyle%3E_.wave%7B_animation:wave_1s_ease-in-out_infinite_alternate;_animation-delay:-0.25s;_stroke:%23a58725;_stroke-width:2;+stroke-linecap:square;_%7D_@keyframes_wave%7B_to%7B_d:path('M_0_40_Q_20_42.5_40_40_Q_60_37.5_80_40');_%7D_%7D_%3C/style%3E%3C/defs%3E%3Cpattern_id='wavePattern'_x='0'_y='0'_width='80'_height='80'_patternUnits='userSpaceOnUse'%3E%3Cpath_fill='none'_class='wave'_d='M_0_40_Q_20_37.5_40_40_Q_60_42.5_80_40'_/%3E%3C/pattern%3E%3Crect+x='0'_y='0'_width='100%25'_height='100%25'_fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E")_0px_65px/80px_80px_repeat-x]`,
            "relative",
            "inline-block",
            "overflow-hidden",
            "text-transparent",
            "",
            "animate-waving",
            "py-10",
            "px-0",
            "-my-10",
            "mx-0",
            "bg-primary",
            "h-2",
            // "w-full",
            ""
          )}
        />
        {title}
      </h2>

      <div
        className={cn(
          "thumb",
          //before
          "before:absolute",
          "before:size-full",
          "before:left-[5%]",
          "before:top-[5%]",
          "before:shadow-secondary",
          "before:transition-[transform_0.2s_cubic-bezier(1,_0.885,_0.32,_1),_box-shadow_0.2s_cubic-bezier(1,_0.885,_0.32,_1)]",
          "before:delay-[0.2s,_0s]",
          "before:bg-[radial-gradient(circle at center,_#a58725_1px,_rgba(255,_255,_255,_0.005)_1px,_rgba(255,_255,_255,_0.005)_20px)_0px_0px/20px_20px,_radial-gradient(circle_at_center,_#a58725_1px,_rgba(255,_255,_255,_0.005)_1px,_rgba(255,_255,_255,_0.005)_20px)_10px_10px/20px_20px]",
          "before:rounded-[5px]",
          "before:left-[-5%]",
          "before:top-[-5%]",
          "hover:before:translate-x-[5%]",
          "hover:before:translate-y-[5%]",
          //after
          "after:absolute",
          "after:w-1/2",
          "after:h-[calc(100%_+_25vh)]",
          "after:left-0",
          "after:top-full",
          "after:border-dashed",
          "after:border",
          "after:border-[2px_2px_2px_2px]",
          "after:border-t-transparent",
          "after:border-r-secondary",
          "after:border-b-secondary",
          "after:border-l-transparent",
          "after:rounded-tr-none",
          "after:rounded-b-[10px]",
          "after:rounded-l-none",
          "after:opacity-25",
          // isActive && "after:border-r-primary after:border-b-primary"
        )}
      >
        <p>{desc}</p>
        <div
          className={cn(
            "inner",

            "absolute",
            "size-full",
            "left-0",
            "top-0",
            "overflow-hidden",
            "z-0",

            "before:absolute",
            "before:size-full",
            "before:top-0",
            "before:left-0",
            "before:bg-secondary",
            "before:mix-blend-lighten",
            "before:opacity-50",
            "before:z-[2]",

            "hover:before:translate-x-[-5%]",
            "hover:before:translate-y-[-5%]",
            "hover:before:shadow-[0_0_0_2px_#a58725,_0_0_0_6px_#eeece5,_0_0_0_8px_#fe4e01]",
            "hover:before:delay-[0s,_0.2s]",

            "hover:before:size-full",
            "hover:before:top-0",
            "hover:before:left-0",
            "hover:before:bg-secondary",
            "hover:before:mix-blend-lighten",
            "hover:before:opacity-50",
            "hover:before:z-[2]",

            "after:absolute",
            "after:size-full",
            "after:top-0",
            "after:left-0",
            "after:bg-foreground",
            "after:mix-blend-normal",
            // "after:opacity-100",
            "after:z-[-2]",
            imgClass
          )}
        >
          <Image
            className={cn(
              "absolute",
              "p-[2vmin]",
              "mix-blend-exclusion",
              "-top-3/4",
              "left-1/2",
              "translate-y-[calc(0_*_25%)]",
              "-translate-x-1/2",
              "w-auto",
              "h-[200%]",
              "z-[-1]",
              "mix-blend-overlay",
              "[filter:_saturate(0)]",
              "blur-[(calc(50px_-_0_*_125px))]",
              "[filter:_brightness(0.5)]",
              "blur-[contrast(4)]"
              // imgClass
            )}
            alt=""
            fill
            // loading="lazy"
            src={src}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default forwardRef(ProjectPanel);

function BeforeThumb({ className }) {
  return (
    <div
      className={cn(
        "before:absolute",
        "before:size-full",
        "before:left-[5%]",
        "before:top-[5%]",
        "before:shadow-[0_0_0_2px_#a58725,_0_0_0_0_#eeece5,_0_0_0_0_#fe4e01]",
        "before:transition-[transform_0.2s_cubic-bezier(1,_0.885,_0.32,_1),_box-shadow_0.2s_cubic-bezier(1,_0.885,_0.32,_1)]",
        "before:delay-[0.2s,_0s]",
        "before:bg-[radial-gradient(circle at center,_#a58725_1px,_rgba(255,_255,_255,_0.005)_1px,_rgba(255,_255,_255,_0.005)_20px)_0px_0px/20px_20px,_radial-gradient(circle_at_center,_#a58725_1px,_rgba(255,_255,_255,_0.005)_1px,_rgba(255,_255,_255,_0.005)_20px)_10px_10px/20px_20px]",
        "before:rounded-[5px]",
        className
      )}
    />
  );
}

function AfterThumb({ className }) {
  return (
    <div
      className={cn(
        "after:absolute",
        "after:w-1/2",
        "after:h-[calc(100%_+_25vh)]",
        "after:left-0",
        "after:top-full",
        "after:border-dashed",
        "after:border",
        "after:border-[2px_2px_2px_2px]",
        "after:border-t-transparent",
        "after:border-r-secondary",
        "after:border-b-secondary",
        "after:border-l-transparent",
        "after:rounded-tr-none",
        "after:rounded-b-[10px]",
        "after:rounded-l-none",
        "after:opacity-25",
        className
      )}
    />
  );
}
