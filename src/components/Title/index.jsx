import { cn } from "@/lib/utils";

export default function title({ className, title, progress = 0 }) {
  return (
    <h1
      className={cn(
        "delay-[1.75s]",
        "scale-x-100",
        "text-center",
        "title",
        // "text-transparent",
        "text-[100px]",
        "w-full",
        "leading-[0.9]",
        "relative",
        "py-2.5",
        "px-0",
        "overflow-hidden",
        "ease-transform",
        // "scale-x-0",
        "mb-5",
        //before
        "before:absolute",
        "before:w-full",
        "before:h-[2px]",
        "before:bottom-0",
        "before:left-0",
        "before:bg-secondary",
        "before:z-[2]",
        //after
        "after:absolute",
        "after:w-full",
        "after:h-[2px]",
        "after:bottom-0",
        "after:left-0",
        "after:bg-secondary",
        "after:z-[2]",
        "after:origin-left",
        "after:bg-primary",
        "after:z-[3]",
        `after:transform-[scale-x-[1_-_${progress}_*_2]]`,
        className
      )}
      data-splitting="words"
    >
      {title}
    </h1>
  );
}
