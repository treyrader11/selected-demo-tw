import { cn } from "@/lib/utils";
import Image from "next/image";

const classNamesList = ["invert", "light", "shift", "lighter"];

export default function Card({ className, children }) {
  // return (
  //   <div
  //     className={cn(
  //       "inner",

  //       "absolute",
  //       "size-full",
  //       "left-0",
  //       "top-0",
  //       "overflow-hidden",
  //       "z-0",

  //       "before:absolute",
  //       "before:size-full",
  //       "before:top-0",
  //       "before:left-0",
  //       "before:bg-secondary",
  //       "before:mix-blend-lighten",
  //       "before:opacity-50",
  //       "before:z-[2]",

  //       "hover:before:translate-x-[-5%]",
  //       "hover:before:translate-y-[-5%]",
  //       "hover:before:shadow-[0_0_0_2px_#a58725,_0_0_0_6px_#eeece5,_0_0_0_8px_#fe4e01]",
  //       "hover:before:delay-[0s,_0.2s]",

  //       "hover:before:size-full",
  //       "hover:before:top-0",
  //       "hover:before:left-0",
  //       "hover:before:bg-secondary",
  //       "hover:before:mix-blend-lighten",
  //       "hover:before:opacity-50",
  //       "hover:before:z-[2]",

  //       "after:absolute",
  //       "after:size-full",
  //       "after:top-0",
  //       "after:left-0",
  //       "after:bg-foreground",
  //       "after:mix-blend-normal",
  //       // "after:opacity-100",
  //       "after:z-[-2]"
  //     )}
  //   >
  //     {children}
  //   </div>
  // );
  return (
    <div className="relative">
      {/* ::Before .inner*/}
      <div
        className={cn(
          "absolute",
          "size-full",
          "top-0",
          "left-0",
          "bg-secondary",
          "mix-blend-lighten",
          // "opacity-50",
          "z-[2]",

          "hover:translate-x-[-5%]",
          "hover:translate-y-[-5%]",
          "hover:shadow-[0_0_0_2px_#a58725,_0_0_0_6px_#eeece5,_0_0_0_8px_#fe4e01]",
          "hover:delay-[0s,_0.2s]",

          "hover:size-full",
          "hover:top-0",
          "hover:left-0",
          "hover:bg-secondary",
          "hover:mix-blend-lighten",
          "hover:opacity-50",
          "hover:z-[2]"
        )}
      />
      <div
        className={cn(
          "inner",

          "absolute",
          "size-full",
          "left-0",
          "top-0",
          "overflow-hidden",
          "z-0"
        )}
      >
        {children}
      </div>
      {/* ::Afer .inner*/}
      <div
        className={cn(
          "absolute",
          "size-full",
          "top-0",
          "left-0",
          "bg-foreground",
          "mix-blend-normal",
          "z-[-2]"
        )}
      />
    </div>
  );
}
