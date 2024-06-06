import { socials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Codepen, Twitter } from "../icons";

export default function Socials({ className }) {
  console.log("socials", socials);
  return (
    <div
      id="social"
      className={cn(
        "z-[97]",
        "fixed",
        "right-2.5",
        "relative",
        "top-2.5",
        "w-[30px]",
        "h-[70px]",
        "flex",
        "flex-wrap",
        "justfy-between",
        "items-center",
        className
      )}
    >
      {socials.map(({ icon: Icon, href }, i) => {
        const isLastItem = i === socials.length - 1;
        <a className={cn("group")} href={href} target="_blank">
          <Icon
            className={cn(
              "group-hover:scale-[0.9]",
              "fill-background",
              "[&_svg]:fill-secondary",
              "size-[25px]",
              "relative",
              "transition-transform",
              "duration-200",
              "ease-in-out",
              "ease-transform",
              "translate-y-[-150px]"

              // isLastItem
              //   ? "translate-x-[150px] delay-[0s,_2.6s]"
              //   : "translate-x-0 delay-[0s_2.4s]"
            )}
          />
        </a>;
      })}
    </div>
  );
}
