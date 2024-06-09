"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Splitting from "splitting";

const letters = "SEE•MORE•";

gsap.registerPlugin(useGSAP);

export default function Cursor({ className, isActive = false }) {
  const cursor = useRef(null);
  const follower = useRef(null);

  useGSAP(() => {
    if (cursor.current && follower.current) {
      gsap.set(cursor.current, {
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

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    Splitting();
  }, []);

  return (
    <div
      ref={cursor}
      id="cursor"
      className={cn(
        "fixed",
        "z-[97]",
        "size-8",
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
        "[will-change:transform]",
        "transition-[opacity,border-width,box-shadow]",
        "duration-300 ",
        "ease-in-out",
        "opacity-0",
        isActive ? "shadow-[inset_0_0_0_20px_#a58725]" : "",
        className
      )}
    >
      <ActiveArrow isActive={isActive} />

      <strong
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
          isActive && "shadow-[inset_0_0_0_20px_#a58725]"
        )}
        data-splitting="chars"
      >
        {/* Line for active arrow */}
        <div
          className={cn(
            "absolute",
            "w-5",
            "h-[2px]",
            "bg-foreground",
            "top-[calc(50%_-_1px)]",
            "left-[5px]",
            "transition",
            "ease-in-out",
            "duration-300",
            "origin-left",
            "scale-x-0",
            "delay-[0.6s]",
            isActive && "scale-x-100 delay-300"
          )}
        />

        {letters.split("").map((letter, i) => (
          <Letter
            isActive={isActive}
            key={i}
            val={letter}
            index={i}
            className={isActive ? "opacity-100" : "opacity-0"}
          />
        ))}
      </strong>
    </div>
  );
}

function Letter({ className, val, index, isActive }) {
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
        "word",
        "absolute",
        "size-3",
        "text-[12px]",
        "flex",
        "justify-center",
        "items-center",
        "left-1/2",
        "left-[30%]",
        "top-[-85%]",
        // "top-1/2",
        "animate-rotate",
        isActive
          ? cn("[animation-play-state:running]")
          : cn("[animation-play-state:paused]"),
        className
      )}
    >
      <span
        className={cn(
          "char",
          "flex",
          "justify-center",
          "items-center",
          "size-3",
          "origin-[50%_30px]",
          "overflow-hidden",
          "text-transparent",

          // "absolute",
          // "relative",
          "left-[calc(50%_-_5px)]",
          "top-[calc(50%_-_30px)]"
        )}
      >
        {/* Before span.char */}
        <div
          className={cn(
            "content-[attr(data-char)]",
            "absolute",
            "size-full",
            "flex",
            "justify-center",
            "items-center",
            "text-dark-green",
            "translate-y-full",
            "transition",
            "ease-in-out",
            "duration-300",
            isActive && "translate-y-0"
          )}
        />
        <span
          className={cn(
            "absolute",
            "flex",
            "items-center",
            "justify-center",
            "size-full",
            "transition",
            "duration-300",
            "ease-in-out",
            "transform",
            "translate-y-full",
            "text-dark-green"
          )}
          data-char={val}
        >
          {val}
        </span>
      </span>
    </span>
  );
}

function ActiveArrow({ className, isActive }) {
  return (
    <>
      {/* ::after top */}
      <div
        className={cn(
          "absolute",
          "w-2.5",
          "h-0.5",
          "bg-foreground",
          "top-[calc(50%-1px)]",
          "left-[14px]",
          "transition-transform",
          "delay-300",
          "transform",
          "scale-y-0",
          "duration-300",
          "origin-right",
          "rotate-0",
          "ease-elastic",
          "z-[9]",
          isActive && cn("delay-[0.6s]", "scale-y-100", "rotate-45")
        )}
      />
      {/* ::before it is bottom arrow*/}
      <div
        className={cn(
          "absolute",
          "w-2.5",
          "h-0.5",
          "bg-foreground",
          "top-[calc(50%-1px)]",
          "left-[14px]",
          "transition-transform",
          "ease-elastic",
          "delay-300",
          "duration-300",
          "transform",
          "scale-y-0",
          "origin-right",
          "rotate-0",
          "z-[9]",
          isActive && cn("delay-[0.6s]", "scale-y-100", "-rotate-45")
        )}
      />
    </>
  );
}

//   return (
//     <div
//       style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
//       ref={cursor}
//       id="cursor"
//       className={cn(
//         "fixed",
//         "z-[97]",
//         "size-[30px]",
//         "rounded-full",
//         "top-0",
//         "left-0",
//         "border",
//         "border-secondary",
//         "shadow-[inset_0_0_0_0_#a58725]",
//         "pointer-events-none",
//         "flex",
//         "justify-center",
//         "items-center",
//         "[will-change:_transform]",
//         "transition-[opacity,border-width,box-shadow]",
//         "duration-300",
//         "ease-in-out",
//         "opacity-0",
//         isActive ? cn("shadow-[inset_0_0_0_20px_#a58725]") : cn(""),
//         className
//       )}
//     >
//       <div className="absolute size-2.5 bg-foreground top-[calc(50%_-_1px)] left-[14px] transition-[transform] ease-elastic delay-300 origin-right scale-y-0 rotate-0 z-[9]" />
//       <div className="absolute size-2.5 bg-foreground top-[calc(50%_-_1px)] left-[14px] transition-[transform] ease-elastic delay-300 origin-right scale-y-0 rotate-0 z-[9]" />

//       <strong
//         className={cn(
//           "circle",
//           "relative",
//           "size-[30px]",
//           "rounded-full",
//           "leading-[1]",
//           "m-0",
//           "transition",
//           "duration-300",
//           "ease-in-out",
//           isActive &&
//             cn(
//               "shadow-[inset_0_0_0_20px_#a58725]",
//               "before:scale-x-100",
//               "before:delay-300",
//               "[&_span.word]:[animation-play-state:running]",
//               "[&_span.word_&_span.char]:before:translate-y-0"
//             )
//         )}
//         data-splitting="chars"
//       >
//         {letters.split("").map((letter, i) => (
//           <Letter
//             key={i}
//             val={letter}
//             index={i}
//             className={
//               isActive
//                 ? cn("[animation-play-state:_running]", "opacity-100")
//                 : cn("[animation-play-state:_paused]")
//             }
//           />
//         ))}
//       </strong>
//     </div>
//   );
// }

// function Letter({ className, val, index }) {
//   const rotation = index * 36;
//   const animationDelay = -0.0625 * index;

//   return (
//     <span
//       style={{
//         transformOrigin: "50% 40px",
//         transform: `rotate(${rotation}deg)`,
//         animationDelay: `${animationDelay}s`,
//       }}
//       className={cn(
//         "word",
//         "absolute",
//         "size-3",
//         "text-[12px]",
//         "animate-popping",
//         "animate-waving2",
//         "left-1/2",
//         "top-1/2",
//         "opacity-0",
//         className
//       )}
//     >
//       {val}
//     </span>
//   );
// }
