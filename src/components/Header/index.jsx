import { cn } from "@/lib/utils";
import DashedBorder from "../DashedBorder";
import Word from "../Word";

export default function Header({ className, isLoading }) {
  return (
    <>
      <ProgressBorder>
        <h1
          style={{ fontFamily: "Bogart-Semibold" }}
          className={cn(
            "delay-[1.75s]",
            isLoading
              ? cn("scale-x-0 text-transparent")
              : cn("scale-x-100 text-dark-green"),
            "text-center",
            "text-[100px]",
            "w-full",
            "leading-[0.9]",
            "relative",
            "py-2.5",
            "px-0",
            "overflow-hidden",
            "ease-expo",
            "mb-5",
            className
          )}
          data-splitting="words"
        >
          <Word text="Selected Demos" />
        </h1>
      </ProgressBorder>

      <p
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
        Trey Rader
      </p>
    </>
  );
}

function ProgressBorder({ children, progress }) {
  return (
    <div className={cn("relative")}>
      {/* ::Before borders */}
      <div
        className={cn(
          "absolute",
          "w-full",
          "h-[2px]",
          "bottom-0",
          "right-0",
          "bg-secondary",
          "z-[2]"
        )}
      />
      {children}
      {/* ::After - border*/}
      <div
        className={cn(
          "absolute",
          "w-full",
          "h-[2px]",
          "bottom-0",
          "left-0",
          "origin-left",
          "bg-primary",
          "z-[3]",
          "[transform:scaleX(calc(1-(var(--progress))))]"
        )}
      />
    </div>
  );
}
