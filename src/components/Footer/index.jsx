import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <div className={cn("")}>
      <p
        className={cn(
          "subhead",

          "text-background",
          "my-0",
          "mx-auto",
          "w-[100px]",
          //before dashed border
          "before:absolute",
          "before:w-[25vw]",
          "before:max-w-[500px]",
          "before:border-b-[2px]",
          "before:border-secondary",
          "before:border-dashed",
          //after dashes
          "after:absolute",
          "after:w-[25vw]",
          "after:max-w-[500px]",
          "after:border-b-[2px]",
          "after:border-secondary",
          "after:border-dashed",
          "after:left-auto",
          "after:right-[100px]",
        )}
      >
        Footer
      </p>
    </div>
  );
}
