import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import MagicBorder from "../MagicBorder";

function CloseBtn({ isActive = true, onClick }, ref) {
  return (
    <div className="relative group">
      {/* ::Before #close */}
      <div
        className={cn(
          "group-hover:bg-foreground",
          "absolute",
          "top-[calc(50%_-_1px)]",
          "w-2.5",
          "left-[5px]",
          "h-[2px]",
          "bg-dark-green",
          "top-[calc(50%_-_1px)]",
          "left-[14px]",
          "ease-elastic",
          "delay-300",
          "origin-right",
          "scale-y-0",
          "rotate-0",
          "z-[9]"
        )}
      />
      <div
        onClick={onClick}
        ref={ref}
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
          isActive ? cn("scale-100") : "scale-0",
          // "group",
          "transition-transform",
          "[transition:transform_0.3s_ease-in-out,_box-shadow_0.2s_ease-in-out]",
          //before
          "group-hover:bg-foreground"
        )}
      >
        <div>
          {/* ::Before div */}
          <div
            className={cn(
              "absolute",
              "size-20",
              "rounded-full",
              "top-[-40px]",
              "left-[-30px]"
            )}
          />
          <div
            className={cn(
              "absolute",
              "top-[calc(50%_-_1px)]",
              "w-5",
              "left-[5px]",
              "h-[2px]",
              "bg-background",
              "transition-[delay]",
              "duration-300",
              "ease-in-out",
              "delay-[600]",
              "origin-right",
              "scale-x-0"
            )}
          />
        </div>
        <strong className="circle" data-splitting="chars">
          GO•BACK•
        </strong>
      </div>
      {/* ::After #close */}
      <div
        className={cn(
          "group-hover:bg-foreground",
          "absolute",
          "top-[calc(50%_-_1px)]",
          "w-2.5",
          "left-[5px]",
          "h-[2px]",
          "bg-dark-green",
          "top-[calc(50%_-_1px)]",
          "left-[14px]",
          "ease-elastic",
          "delay-300",
          "origin-right",
          "scale-y-0",
          "rotate-0",
          "z-[9]"
        )}
      />
    </div>
  );
}

export default forwardRef(CloseBtn);
