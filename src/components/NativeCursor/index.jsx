"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Splitting from "splitting";

function NativeCursor({ isActive }, ref) {
  const cursor = ref;
  //   const cursor = useRef(null);

  useGSAP(() => {
    if (cursor.current) {
      gsap.set(cursor.current, {
        xPercent: -50,
        yPercent: -50,
      });

      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.35;

      const xSet = gsap.quickSetter(cursor.current, "x", "px");
      const ySet = gsap.quickSetter(cursor.current, "y", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });

      Splitting();
    }
  }, []);

  return (
    <div ref={cursor} id="cursor" className={cn({ active: isActive })}>
      <strong className="circle" data-splitting="chars">
        SEE•MORE•
      </strong>
    </div>
  );
}

export default forwardRef(NativeCursor);
