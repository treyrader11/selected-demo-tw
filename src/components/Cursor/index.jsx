"use client";

import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Splitting from "splitting";

const letters = "SEE•MORE•";

export default function Cursor({ className, isActive = false }) {
  const cursor = useRef(null);
  const follower = useRef(null);

  const moveCursor = (e) => {
    if (cursor.current && follower.current) {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
      });

      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.9,
      });
    }
  };

  useEffect(() => {
    if (cursor.current && follower.current) {
      gsap.set(cursor.current, {
        // xPercent: 100,
        // yPercent: 100,
        xPercent: -50,
        yPercent: -50,
      });

      gsap.set(follower.current, {
        xPercent: -20,
        yPercent: -20,
      });
    }

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.35;

    const xSet = gsap.quickSetter(cursor.current, "x", "px");
    const ySet = gsap.quickSetter(cursor.current, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    // window.addEventListener("mousemove", moveCursor);

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    Splitting();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      ref={cursor}
      id="cursor"
      className={cn(
        "fixed",
        "z-[97]",
        "size-[30px]",
        "rounded-full",
        "top-0",
        "left-0",
        "border",
        "border-secondary",
        "shadow-[inset_0_0_0_0_#a58725]",
        "pointer-events-none",
        "flex",
        "justify-center",
        "items-center",
        "[will-change:_transform]",
        "transition-[opacity,border-width,box-shadow]",
        "duration-300",
        "ease-in-out",
        "opacity-0",
        //before
        "before:absolute",
        "before:size-2.5",
        "before:bg-foreground",
        "before:top-[calc(50%_-_1px)]",
        "before:left-[14px]",
        "before:ease-elastic",
        "before:delay-300",
        "before:origin-right",
        "before:scale-y-0",
        "before:rotate-0",
        "before:z-[9]",
        //ater
        "after:absolute",
        "after:size-2.5",
        "after:bg-foreground",
        "afterore:top-[calc(50%_-_1px)]",
        "after:left-[14px]",
        "after:ease-elastic",
        "after:delay-300",
        "after:origin-right",
        "after:scale-y-0",
        "after:rotate-0",
        "after:z-[9]",

        //.linkhover
        "[&_.linkhover]:border-transparent",
        "[&_.linkhover]:border-[4px]",
        "[&_.linkhover]:shadow-[0_0_0_2px_#fe4e01]",
        isActive
          ? cn(
              //before
              "before:delay-[0.6s]",
              "before:scale-y-100",
              "before:-rotate-45",
              //after
              "after:delay-[0.6s]",
              "after:scale-y-100",
              "after:rotate-45"
            )
          : cn(""),
        className
      )}
    >
      <strong
        // ref={follower}
        className={cn(
          "circle",
          "relative",
          "size-[30px]",
          "rounded-full",
          "leading-[1]",
          "m-0",
          "transition",
          "duration-300",
          "ease-in-out",
          //before
          "before:absolute",
          "before:w-5",
          "before:h-[2px]",
          "before:bg-foreground",
          "before:top-[calc(50%_-_1px)]",
          "before:left-[5px]",
          "before:transition",
          "before:ease-in-out",
          "before:duration-300",
          "before:origin-left",
          "before:scale-x-0",
          "before:delay-[0.6s]",
          // span.word
          "[&_span.word]:absolute",
          "[&_span.word]:size-0",
          "[&_span.word]:left-1/2",
          "[&_span.word]:top-1/2",
          "[&_span.word]:animate-rotate",
          "[&_span.word]:[animation-play-state:paused]",
          // span.word & span.char
          "[&_&_span.char]:text-[10px]",
          "[&_&_span.char]:flex",
          "[&_&_span.char]:justfy-center",
          "[&_&_span.char]:items-center",
          "[&_&_span.char]:left-[calc(50%_-_5px)]",
          "[&_&_span.char]:top-[calc(50%_-_30px)]",
          "[&_&_span.char]:size-2.5",
          "[&_&_span.char]:origin-[50%_30px]",
          "[&_&_span.char]:overflow-hidden",
          "[&_&_span.char]:text-transparent",
          // span.word & span.char :before * it is the line for active arrow
          "[&_&_span.char]:before:content-[attr(data-char)]",
          "[&_&_span.char]:before:absolute",
          "[&_&_span.char]:before:size-full",
          "[&_&_span.char]:before:flex",
          "[&_&_span.char]:before:justify-center",
          "[&_&_span.char]:before:items-center",
          "[&_&_span.char]:before:text-dark-green",
          "[&_&_span.char]:before:translate-y-full",
          "[&_&_span.char]:before:transition",
          "[&_&_span.char]:before:ease-in-out",
          "[&_&_span.char]:before:duration-300",
          isActive &&
            cn(
              "shadow-[inset_0_0_0_20px_#a58725]",
              //before
              "linkhover",
              "before:scale-x-100",
              "before:delay-300",
              //nested span
              "[&_span.word]:[animation-play-state:running]",

              //nested span.word span.char before // nested two deep
              "[&_span.word_&_span.char]:before:translate-y-0" //  "[&_&]:before:translate-y-0",
            )
        )}
        data-splitting="chars"
      >
        {letters.split("").map((letter, i) => (
          <Letter
            key={i}
            val={letter}
            index={i}
            className={
              isActive
                ? cn("[animation-play-state:_running]", "opacity-100")
                : cn("[animation-play-state:_paused]")
            }
          />
        ))}
        {/* <span className={cn("linkhover", "hidden", isActive && "flex")} /> */}
      </strong>
    </div>
  );
}

function Letter({ className, val, index }) {
  const rotation = index * 36;
  const animationDelay = -0.0625 * index;

  return (
    <span
      style={{
        transformOrigin: "50% 40px",
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${animationDelay}s`,
        // background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B animation:wave 1s ease-in-out infinite alternate; animation-delay:-0.25s; stroke:%23a58725; stroke-width:2; stroke-linecap:square; %7D @keyframes wave%7B to%7B d:path('M 0 40 Q 20 42.5 40 40 Q 60 37.5 80 40'); %7D %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 37.5 40 40 Q 60 42.5 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E")`,
      }}
      className={cn(
        "word",

        "absolute",
        "size-3",
        "text-[12px]",
        // "top-[-34px]",
        "animate-popping",
        "animate-waving2",
        "left-1/2",
        "top-1/2",
        "opacity-0",

        // "before:text-primary",
        // "[&_nth-of-type(1)]:rotate-0",
        // "[&_nth-of-type(2)]:rotate-[45deg]",
        // "[&_nth-of-type(3)]:rotate-90",
        // "[&_nth-of-type(4)]:rotate-[135deg]",
        // "[&_nth-of-type(5)]:rotate-180",
        // "[&_nth-of-type(6)]:rotate-[225deg]",
        // "[&_nth-of-type(7)]:rotate-[270deg]",
        // "[&_nth-of-type(8)]:rotate-[315deg]",
        className
      )}
      // className={cn(
      //   "word",
      //   // "linkhover",
      //   "absolute",
      //   // "size-0",
      //   "left-1/2",
      //   "top-1/2",
      //   // "animate-rotate",
      //   // "opacity-0",

      //   // isActive
      //   //   ? cn("[animation-play-state:_running]", "opacity-100")
      //   //   : cn("[animation-play-state:_paused]"),

      //   "before:text-primary",
      //   "[&_nth-of-type(1)]:rotate-0",
      //   "[&_nth-of-type(2)]:rotate-[45deg]",
      //   "[&_nth-of-type(3)]:rotate-90",
      //   "[&_nth-of-type(4)]:rotate-[135deg]",
      //   "[&_nth-of-type(5)]:rotate-180",
      //   "[&_nth-of-type(6)]:rotate-[225deg]",
      //   "[&_nth-of-type(7)]:rotate-[270deg]",
      //   "[&_nth-of-type(8)]:rotate-[315deg]"
      // )}
    >
      {val}
    </span>
  );
}
