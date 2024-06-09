import { cn } from "@/lib/utils";
import Image from "next/image";

export default function NativePanel({
  onClick,
  className,
  title,
  desc,
  imgClass,
  src,
}) {
  return (
    <div onClick={onClick} className={cn("panel", className)}>
      <h2 data-splitting="words">{title}</h2>
      <div className="thumb">
        <p>{desc}</p>
        <div className="">
          <Image
            src={src}
            fill
            priorty="true"
            className={cn(imgClass)}
            sizes={{}}
            alt={title}
          />
         
        </div>
        {/* <img className={imgClass} loading="lazy" src={src} alt={title} /> */}
      </div>
    </div>
  );
}
