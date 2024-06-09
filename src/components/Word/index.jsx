import { cn } from "@/lib/utils";

export default function Word({
  progress,
  className,
  beforeClassName,
  afterClassName,
  text,
  background,
  style,
}) {
  return (
    <span className="relative">
      {/* ::Before span.word */}
      <div
      // style={style}
        className={cn(
          "absolute",
          "left-1/2",
          "top-1/2",
          "[transform:translate(-50%,150%)]",
          "content-[attr(data-word)]",
          "bg-gradient-to-b from-dark-green to-foreground", // "linear-gradient(to bottom, #08350e 50%, ##eeece5 50%)",
          "-translate-x-1/2",
          "translate-y-[150%]",
          "[-webkit-text-fill-color:transparent]",
          "stroke-2",
          "stroke-dark-green",
          "text-transparent",
          "bg-clip-text",
          "[background-size:100%_200%]",
          "[background-position:50%_100%]",
          "bg-no-repeat",
          `[transition:0.75s_cubic-bezier(1,_0.885,_0.32,_1)_0.6s_transform,background-position_0.5s_cubic-bezier(1,_0.885,_0.32,_1)]`,
          beforeClassName
        )}
      />
      <div
        // style={{
        //   transform: `translateY(calc(${progress} * 1200px) - 200px))`,
        // }}
        // style={{ background }}
        // style={style}
        className={cn(
          "word",
          "relative",
          "inline-block",
          "[transform:translateY(calc((var(--progress))*1200px)-200px)]",
          className
        )}
      >
        {text}
      </div>
      {/* ::After span.word */}
      <div
        style={style}
        className={cn(
          "absolute",
          // `content-[attr(${title})]`,
          "top-1/2",
          "bottom-1/2",
          "[transform:translate(-50%,_-50%)]",
          "text-transparent",
          "bg-clip-text",
          "[background-size:100%_250%]",
          "bg-no-repeat",
          "transition-transform",
          "ease-elastic",
          "delay-[1.25s]",
          "stroke-2",
          "stroke-primary",
          // isActive
          //   ? cn("[translate:-50%,100px]", "duration-0", "ease-in-out")
          //   : cn("")
          // (index === 2) & cn("lg:text-transparent")
        )}
      />
    </span>
  );
}
