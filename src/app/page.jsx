"use client";

import Loader from "@/components/Loader";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { cn, isLastListItem } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";
import Frame from "@/components/Frame";
import Footer from "@/components/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Splitting from "splitting";
import GoBack from "@/components/CloseBtn";
import { frames } from "@/lib/data";
import Cursor from "@/components/Cursor";
import CursorNew from "@/components/CursorNew";

import { projectsData } from "@/lib/data";
import ProjectPanel from "@/components/ProjectPanel";
import Header from "@/components/Header";
import Panel from "@/components/Panel";
import CloseBtn from "@/components/CloseBtn";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [iframeSrc, setIframeSrc] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [bodyActive, setBodyActive] = useState(false);
  const container = useRef(null);
  const frameRef = useRef(null);
  const penLinkRef = useRef(null);
  const cardsRef = useRef([]);

  // const handleProgressStyle = (self, el) => {
  //   section.style.setProperty("--progress", self.progress);
  //   setProgress(self.progress);
  //   console.log('section:', section);
  //   console.log(`Section progress: ${self.progress}`); // Debug log
  //   console.log('section.style', section.style)
  // };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1700);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    Splitting();

    const sections = gsap.utils.toArray(".panel");

    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 100%",
          end: "bottom 25%",
          scrub: 0,

          onUpdate: (self) => {
            section.style.setProperty("--progress", self.progress);
            setProgress(self.progress);
            console.log("section:", section);
            console.log(`Section progress: ${self.progress}`); // Debug log
            console.log("section.style", section.style);
          },
        },
      });
      // .eventCallback("onUpdate", handleProgressStyle, [self, section]); // another way
    });

    gsap.to("body", {
      scrollTrigger: {
        trigger: "body",
        start: "top 100%",
        end: "50% 50%",
        scrub: 0,
        onUpdate: (self) => {
          setProgress(self.progress);
          document.body.style.setProperty("--progress", self.progress);
          console.log(`Body progress: ${self.progress}`); // Debug log
        },
      },
    });

    document.addEventListener("DOMContentLoaded", () => {
      document.body.classList.add("loaded");
    });

    const refresh = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2500);
    };

    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return (
    <>
      <main
        ref={container}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        id="wrap"
        className={cn(
          isLoading ? cn("") : cn("translate-x-0", "bg-foreground"),
          isActive ? cn("translate-y-[-125vw]", "delay-0") : cn(""),
          "w-[1000px]",
          "max-w-[85vw]",
          "my-0",
          "mx-auto",
          "p-[2.5vh_50px_25vh]",
          "ease-elastic",
          "translate-x-0",
          "delay-[0.75s]",
          "[will-change:transform]",
          "overflow-hidden",
          "relative"
        )}
      >
        <Header isLoading={isLoading} />

        {/* <div className="mt-20"> */}
          {projectsData.map((proj, i) => (
            <Panel
              isActive={isActive}
              progress={progress}
              {...proj}
              key={i}
              index={i + 1}
              onClick={() => setIsActive(true)}
              onMouseOver={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              ref={cardsRef}
              isLastItem={isLastListItem(projectsData, i)}
            />
          ))}
        {/* </div> */}
        <Footer />
      </main>

      <Frame
        isActive={isActive}
        setIsActive={setIsActive}
        src={iframeSrc}
        ref={frameRef}
      />
      <CursorNew isActive={isHovering} />
      <Socials />
    </>
  );
}
