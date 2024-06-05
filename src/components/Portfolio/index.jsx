import { cn } from "@/lib/utils";

export default function Portfolio() {
  return (
    <div id="wrap" className={cn("translate-x-0", "bg-[#eeece5]")}>
      <h1 data-splitting="words">Selected Demos</h1>
      <p
        className={cn(
          "subhead",
          "translate-y-0",
          "opacity-100",
          "duration-[250]"
        )}
      >
        Trey Rader
      </p>

      {/* Panel 1 */}
      <div className="panel">{/* Content for Panel 1 */}</div>

      {/* Panel 2 */}
      <div className="panel">{/* Content for Panel 2 */}</div>

      {/* Repeat for other panels... */}

      {/* Social Links */}
      <div id="social">
        <a href="https://twitter.com/cobra_winfrey" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3333 3333"
            // Add other attributes as needed
          >
            {/* Twitter SVG path */}
          </svg>
        </a>
        <a href="https://codepen.io/cobra_winfrey" target="_blank">
          <svg
          // CodePen SVG
          >
            {/* CodePen SVG path */}
          </svg>
        </a>
      </div>
    </div>
  );
}
