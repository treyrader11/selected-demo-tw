import { cn } from "@/lib/utils";

export default function MagicBorder({ children }) {
  return (
    <div
      className={cn(
        "magic-border-wrapper",
        "relative",
        "inline-block",
        "group"
      )}
    >
      <div
        style={{
          background:
            "linear-gradient(to bottom,#a58725 50%, rgba(255, 255, 255, 0.005) 50% )",
        }}
        className={cn(
          "magic-border-inner",
          "absolute",
          "top-0",
          "left-0",
          "size-full",
          "z-[-1]",
          "transition-all",
          "duration-300",
          "ease-in-out",
          "scale-y-0",
          "origin-bottom",
          "[background-position:50%_100%]",
          "[background-size:100%_200%]",
          "group-hover:scale-y-100",
          "group-hover:origin-top",
          "group-hover:[background-position:50%_50%]"
        )}
      />
      <div
        style={{
          background:
            "linear-gradient(to right, #ff0000 0%, #ff0000 100%), linear-gradient(to top, #ff0000 50%, transparent 50%)",
        }}
        className={cn(
          "magic-border-outer",
          "absolute",
          "top-0",
          "left-0",
          "size-full",
          "z-[-1]",
          "transition-all",
          "duration-300",
          "ease-in-out",
          "scale-x-0",
          "origin-center",
          "[background-position:50%_100%,0%_0%]",
          "[background-size:100%_10px,10px_200%]",
          "bg-no-repeat",
          "group-hover:scale-x-100",
          "group-hover:[background-size:200%_10px,10px_400%]"
        )}
      />
      <div className={cn("magic-border-content", "relative", "z-[1]")}>
        {children}
      </div>
    </div>
  );
}
