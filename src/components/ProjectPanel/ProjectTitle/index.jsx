import Word from "@/components/Word";
import { cn, isEven } from "@/lib/utils";

export default function ProjectTitle({
  className,
  isActive,
  index,
  title,
  progress,
}) {
  return (
    <h2
      style={{
        fontFamily: "Bogart-Semibold",
      }}
      className={cn(
        "dark",
        "[grid-area:_3/1/4/4]",
        "text-[64px]",
        "relative",
        "z-[3]",
        "text-transparent",
        "leading-[1]",
        "pointer-events-none",
        "[transform:translateY(calc(100px-(var(--progress)*200px)))]",
        isEven(index) &&
          cn(
            "text-right",
            "[grid-area:_3/3/4/6]",
            "md[grid-area:_2/1/5/6]", //max-wdith 768px
            "lg:text-right",
            "lg:[grid-area:3/3/4/6]"
          )
      )}
      data-splitting="words"
    >
      <Word
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          WebkitTextStroke: "2px #a58725",
          // waving line below
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B animation:wave 1s ease-in-out infinite alternate; animation-delay:-0.25s; stroke:%23a58725; stroke-width:2; stroke-linecap:square; %7D @keyframes wave%7B to%7B d:path('M 0 40 Q 20 42.5 40 40 Q 60 37.5 80 40'); %7D %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 37.5 40 40 Q 60 42.5 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E") 0px 65px/80px 80px repeat-x`,
        }}
        beforeClassName={cn(
          isActive &&
            cn("[transform:translate(-50%,100px)]", "ease-in-out", "delay-0"),
          "absolute",
          index === 3 &&
            cn("[background-position:50%_calc((var(--progress)*-200px)+25px)]"),
          "text-transparent",
          
          `[transition:0.75s_cubic-bezier(1,_0.885,_0.32,_1)_0.6s_transform,background-position_0.5s_cubic-bezier(1,_0.885,_0.32,_1)]`,

          "bg-clip-text",
          // "[background-clip:text]",
          "bg-gradient-to-b from-transparent to-primary",
          "[background-image:linear-gradient(to_bottom,transparent_25%,#fe4e01_25%,#fe4e01_75%,transparent_75%)]",
          "[background-size:100%_250%]",
          "[background-position:50%_100%]",
          "[background-position:50%_calc((var(--progress)*200px)_-_150px)]",
          "bg-no-repeat",
          "delay-[1.25s]",
          "stroke-2",
          "stroke-primary",
        )}
        className={cn(
          "relative",
          "inline-block",
          "overlow-hidden",
          "text-transparent",
          "py-5",
          "m-0",
          "animate-waving"
        )}
      />
      {title}
    </h2>
  );
}
