"use client";

import { cn } from "@/lib/utils";
import { useEffect } from "react";
import Splitting from "splitting";

export default function Title({ className, title, progress }) {
  useEffect(() => {
    Splitting();
  }, []);

  return (
    <h2
      className={cn(
        "relative",
        "z-3",
        "text-transparent",
        "pointer-events-none",
        `translate-y-[calc(100px-${progress}*200px))]`,
        "font-semibold",
        "leading-none",
        "grid-area-3/1/4/4",
        className
      )}
    >
      {title.split(" ").map((char, i) => (
        <Word key={i} char={char} progress={progress} index={i} />
      ))}
    </h2>
  );
}

function Word({ char, index, progress }) {
  const backgroundUrl = (i) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B animation:wave 1s ease-in-out infinite alternate; animation-delay:${
      i * -0.25
    }s; stroke:%23a58725; stroke-width:2; stroke-linecap:square; %7D @keyframes wave%7B to%7B d:path('M 0 40 Q 20 42.5 40 40 Q 60 37.5 80 40'); %7D %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 37.5 40 40 Q 60 42.5 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E") 0px 65px / 80px 80px repeat-x`;

  return (
    <div
      className={cn(
        "relative",
        "inline-block",
        "overflow-hidden",
        "text-transparent",
        "px-5",
        "-my-5",
        "animate-waving"
      )}
      style={{
        background: backgroundUrl(index + 1),
      }}
    >
      {char}
      <div
        className={cn(
          "absolute",
          "top-1/2",
          "left-1/2",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "text-transparent",
          "bg-clip-text",
          "bg-no-repeat",
          "bg-cover",
          "transition-transform",
          "delay-[1.25s]",
          "[-webkit-text-stroke:2px_#fe4e01]"
        )}
        data-word={char}
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(to bottom, transparent 25%, #a58725 25%, #a58725 75%, transparent 75%)",
          backgroundSize: "100% 250%",
          backgroundPosition:
            index % 3 === 0
              ? `50% calc(${progress} * -200px) + 25px)`
              : `50% calc(${progress}  * 200px) - 150px)`,
        }}
      >
        {char}
      </div>
    </div>
  );
}
