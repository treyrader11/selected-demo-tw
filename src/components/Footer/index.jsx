import { cn } from "@/lib/utils";
import DashedBorder from "../DashedBorder";

export default function Footer({ className }) {
  return (
    <div className={className}>
      <DashedBorder
        className={cn(
          "text-dark-green",
          "w-[100px]",
          "final",
          "my-0",
          "mx-auto"
        )}
      >
        Footer
      </DashedBorder>
    </div>
  );
}
