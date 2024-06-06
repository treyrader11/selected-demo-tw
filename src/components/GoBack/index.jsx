import { cn } from "@/lib/utils";
import { forwardRef } from "react";

function GoBack({ isActive, onClick }, ref) {
  return (
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
    </div>
  );
}

export default forwardRef(GoBack);
