import { cn } from "@/lib/utils";

export default function DashedBorder({ className, children, isLoading }) {
  return (
    <div className={cn("relative", className)}>
      {/* ::Before */}
      <div
        className={cn(
          "absolute",
          "w-[25vw]",
          "max-w-[500px]",
          "h-px",
          "border-b-2",
          "border-dashed",
          "border-secondary",
          "top-[calc(50%_-_1.5px)]",
          "opacity-25",
          "left-[100px]"
        )}
      />
      {/* ::After */}
      <div
        className={cn(
          "subhead",
          "w-full",
          "text-center",
          "relative",
          "transition-transform",
          "duration-[600]",
          "ease-in-out",
          "delay-[2s]",
          isLoading
            ? cn("opacity-0", "translate-y-[50px]")
            : cn("translate-y-0", "opacity-100"),
          className
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "absolute",
          "w-[25vw]",
          "max-w-[500px]",
          "h-px",
          "border-b-2",
          "border-dashed",
          "border-secondary",
          "top-[calc(50%_-_1.5px)]",
          "opacity-25",
          "left-auto",
          "right-[100px]"
        )}
      />
    </div>
  );
}
