import { cn } from "@/lib/utils";

export default function NativeHeader({ className }) {
  return (
    <div className={cn(className)}>
      <h1 data-splitting="words" className="">Selected Demos</h1>
      <p className="subhead">Trey Rader</p>
    </div>
  );
}
