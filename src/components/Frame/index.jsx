"use client";

import { cn } from "@/lib/utils";
import GoBack from "../GoBack";
import { forwardRef } from "react";

function Frame({ className, src, isActive }, ref) {
  return (
    <div
      ref={ref}
      style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      id="frame"
      className={cn(
        "fixed",
        "z-[98]",
        "left-0",
        "top-0",
        "w-screen",
        "h-screen",
        "bg-foreground",
        "grid",
        "place-items-center",
        "ease-transform",
        isActive ? cn("") : cn("translate-x-[125%]"),
        "delay-[0.5s]",
        "[will-change:_transform]",
        //before
        "before:absolute",
        "before:w-[125%]",
        "before:h-full",
        "before:top-0",
        "before:left-[-12.5%]",
        "before:bg-primary",
        "before:ease-transform",
        "before:delay-[0.25s]",
        "before:z-[99]",
        "before:skew-x-[5deg]",
        "before:translate-x-0",
        //after
        "after:z-[98]",
        "after:bg-[linear-gradient(to_right,_#eeece5_75%,_#a58725_100%)]",
        "after:w-[125%]",
        "after:ease-transform",
        className
      )}
    >
      <GoBack />
      {/* <div
        id="close"
        className={cn(
          "z-[999]",
          "left-[45px]",
          "top-[45px]",
          "size-[30px]",
          "shadow-primary",
          "bg-foreground",
          "rounded-full",
          "absolute",
          "cursor-pointer",
          "rotate-180",
          "scale-0",
          "group",
          //before
          "hover:before:bg-foreground",
          "hover:after:bg-foreground"
        )}
      >
        <div
          className={cn(
            "group-hover:bg-foreground",
            "absolute",
            "top-[calc(50%_-_1px)]",
            "w-5",
            "left-[5px]",
            "h-[2px]",
            "bg-background",
            "transition-transform",
            "duration-300",
            "ease-in-out",
            "delay-[0.6s]",
            "origin-right",
            "scale-x-0",
            //before
            "before:absolute",
            "before:size-20",
            "before:rounded-full",
            "before:top-[-40px]",
            "before:left-[-30px]",
            "before:bg-background",
            "before:w-2.5",
            "before:h-[2px]",
            "before:top-[calc(50%_-_1px)]",
            "before:left-[14px]",
            "before:ease-transform",
            "before:delay-[0.3s]",
            "before:origin-right",
            "before:scale-y-0",
            "before:rotate-0",
            "before:z-[9]",
            //after
            "after:absolute",
            "after:bg-background",
            "after:w-2.5",
            "after:h-[2px]",
            "after:top-[calc(50%_-_1px)]",
            "after:left-[14px]",
            "after:ease-transform",
            "after:delay-[0.3s]",
            "after:origin-right",
            "after:scale-y-0",
            "after:rotate-0",
            "after:z-[9]"
          )}
        />
        <strong className="circle" data-splitting="chars">
          GO•BACK•
        </strong>
      </div> */}
      <div
        className={cn(
          "frame-wrap",

          "size-[calc(100%_-_10vw)]",
          "flex",
          "items-center",
          "justify-center"
        )}
      >
        <div
          className={cn(
            "frame-container",

            "relative",
            "size-full",
            "max-h-[1200px]",
            "max-w-[1200px]",
            "flex",
            "items-center",
            "justify-center",
            "flex-wrap"
          )}
        >
          <iframe
            className={cn(
              "absolute",
              "top-0",
              "left-[25px]",
              "size-[calc(100%_-_50px)]",
              "bg-white",
              "rounded-[5px]",
              "hidden",
              "[clip-path:_polygon(0_100%,100%_100%,100%_100%,0%_100%)]",
              "transition-[clip-path_0s,visibility_0s_linear,opacity_1s_ease-in-out]",
              "delay-[0.75s,0.75s,1.25s]",
              "opacity-0",
              "shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
            )}
            id="pen"
            loading="lazy"
            src={src}
            // style="border: 0"
          />
          <a
            className={cn(
              "hover:text-foreground",
              "after:z-[-5]",
              //before
              "before:absolute",
              "before:size-[calc(100%_-_4px)]",
              "before:top-[calc(2px_/_-1)]",
              "before:left-[calc(2px_-_-1)]",
              "before:scale-x-0",
              "before:rotate-0",
              "before:delay-[0.4s,0.2s,0s,0.6s]",
              "before:bg-gradient",

              "hover:before:scale-x-100",
              "hover:before:rotate-0",
              "hover:before:delay-[0s,0.2s,0.4s]",
              "hover:before:[background-position:_50%_100%,0%_100%,100%_100%,100%_0%,0%_0%]",
              "hover:before:[background-size:_200%_2px,2px_400%,2px_400%,55%_2px,55%_2px]",

              "hover:after:scale-y-100",
              "hover:after:origin-top",
              "hover:after:[background-position:_50%_0%]"
            )}
            id="penlink"
            target="_blank"
          >
            <strong className={cn("relative", "z-[9]")}>
              View the Code
              <span
                className={cn(
                  "animate-back-n-forth",
                  "[animation-play-state:_paused]"
                )}
              >
                &rarr;
              </span>
            </strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Frame);
