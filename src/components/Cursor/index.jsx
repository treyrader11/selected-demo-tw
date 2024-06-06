import { cn } from "@/lib/utils";
import { forwardRef } from "react";

function Cursor({ className, isActive }, ref) {
  return (
    <div
      style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      ref={ref}
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
        "pointer-events-none",
        "flex",
        "justify-center",
        "items-center",
        "[will-change:_transform]",
        "transition-[opacity_0.3s_ease-in-out,border-width_0.3s_ease-in-out]",
        "opacity-0",
        //before
        "before:absolute",
        "before:size-2.5",
        "before:bg-foreground",
        "before:top-[calc(50%_-_1px)]",
        "before:left-[14px]",
        "before:ease-transform",
        "before:delay-[0.3s]",
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
        "after:ease-transform",
        "after:delay-[0.3s]",
        "after:origin-right",
        "after:scale-y-0",
        "after:rotate-0",
        "after:z-[9]",
        isActive
          ? cn(
              "before:delay-[0.6s]",
              "before:scale-y-100",
              "before:-rotate-45",
              "after:scale-y-100",
              "after:rotate-45",
              "after:delay-[0.6s]"
            )
          : cn("[animation-play-state:_paused]"),
        className
      )}
    >
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
          { "absolute left-0 top-0": isActive },
          isActive
            ? cn(
                "shadow-[inset_0_0_0_20px_#a58725]",
                "before:delay-[0.3s]",
                "before:scale-x-100"
              )
            : cn(""),
          //before
          "before:absolute",
          "before:w-5",
          "before:h-[2px]",
          "before:bg-foreground",
          "before:top-[calc(50%_-_1px)]",
          "before:left-[5px]",
          "before:[transition:_0.3s_ease-in-out]",
          "before:origin-left",
          "before:scale-x-0",
          "before:delay-[0.6s]"
        )}
        data-splitting="chars"
      >
        SEE•MORE•
        <span
          className={cn(
            "word",

            "absolute",
            "size-0",
            "left-1/2",
            "top-1/2",
            "animate-rotate",

            isActive
              ? cn("[animation-play-state:_running]")
              : cn("[animation-play-state:_paused]"),

            "before:text-primary",
            "[&_nth-of-type(1)]:rotate-0",
            "[&_nth-of-type(2)]:rotate-[45deg]",
            "[&_nth-of-type(3)]:rotate-90",
            "[&_nth-of-type(4)]:rotate-[135deg]",
            "[&_nth-of-type(5)]:rotate-180",
            "[&_nth-of-type(6)]:rotate-[225deg]",
            "[&_nth-of-type(7)]:rotate-[270deg]",
            "[&_nth-of-type(8)]:rotate-[315deg]"
          )}
        >
          SEE•MORE•
        </span>
      </strong>
    </div>
  );
}

export default forwardRef(Cursor);
