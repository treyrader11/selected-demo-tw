import { cn } from "@/lib/utils";

const letters = "LOADING...";

export default function Loader() {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        transition: "transform 0.6s cubic-bezier(1, 0.885, 0.32, 1);",
      }}
      id="loader"
      className={cn(
        "flex",
        "justify-center",
        "items-center",
        "text-foreground",
        "fixed",
        "w-[calc(100vw_-_5px)]",
        "h-screen",
        "top-0",
        "left-0",
        "z-[99]",
        "duration-[600]",
        "delay-[1.25s]",
        "origin-bottom",
        "bg-primary",

        "before:absolute",
        "before:w-full",
        "before:h-[75%]",
        "before:top-[-75%]",
        "before:bg-secondary",
        "before:[clip-path:polygon(0_15%,_100%_0,_100%_100%,_0%_100%)]"
      )}
    >
      <div
        style={{
          transition:
            "opacity 0.4s ease-in-out, animation-play-state 2s ease-in-out",
          transitionDelay: "0s, 0.4s",
        }}
        className={cn("wrap", "size-2.5", "relative", "animate-rotate")}
      >
        {letters.split("").map((letter, i) => (
          <Letter key={i} val={letter} index={i} className={cn("")} />
        ))}
      </div>
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
      }}
      className={cn(
        "text-white",
        "absolute",
        "size-3",
        "text-[12px]",
        "top-[-34px]",
        "animate-popping",
        className
      )}
    >
      {val}
    </span>
  );
}
