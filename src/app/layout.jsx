"use client";

import { cn } from "@/lib/utils";
import "./globals.css";
import Socials from "@/components/Socials";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Frame from "@/components/Frame";

// export const metadata = {
//   title: "Trey Rader - Portfolio 2024",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(
    process.env.NODE_ENV === "development" ? false : true
  );

  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <html lang="en">
      <body
        className={cn(
          // { loading: isLoading },
          // isActive && cn("overflow-hidden", "cursor-auto"), //when project is clicked
          "bg-foreground",
          "scroll-smooth",
          "max-w-screen",
          "delay-[2000]"
        )}
      >
        {children}
        {/* {isLoading ? <Loader /> : children} */}
      </body>
    </html>
  );
}
