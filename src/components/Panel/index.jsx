import { cn } from "@/lib/utils";

export default function Panel({ className }) {
  return (
    <div
      className={cn(
        "panel",
        "opacity-100",
        "transition-[delay]",
        "duration-[175]",
        "before:opacity-[0.15]",
        "before:duration-[250]",
        className
      )}
    >
      <h2 className="dark" data-splitting="words">
        3D CSS Letter Transition
      </h2>
      <div className="thumb">
        <p>CSS • 3D • Animation</p>
        <div className="inner">
          <img
            className="invert"
            loading="lazy"
            src="https://assets.codepen.io/383755/internal/screenshots/pens/xxVJZwo.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1569360312&width=960"
          />
        </div>
      </div>
    </div>
  );
}
