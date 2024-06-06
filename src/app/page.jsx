"use client";

// import Loader from "@/components/Loader";
// import Projects from "@/components/Projects";
// import Socials from "@/components/Socials";
// import { cn } from "@/lib/utils";
// import { useRef, useEffect, useState, useCallback, forwardRef } from "react";
// import Cursor from "@/components/Cursor";
// import Frame from "@/components/Frame";
// import Title from "@/components/Title";
// import Footer from "@/components/Footer";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import Splitting from "splitting";
// import GoBack from "@/components/GoBack";

// export default function Home() {
//   const [iframeSrc, setIframeSrc] = useState("");
//   const [bodyActive, setBodyActive] = useState(false);
//   const cursorRef = useRef(null);
//   const frameRef = useRef(null);
//   const penLinkRef = useRef(null);
//   const cardsRef = useRef([]);

//   const frames = [
//     "https://codepen.io/cobra_winfrey/debug/xxVJZwo",
//     "https://cdpn.io/cobra_winfrey/debug/wvGyKEY",
//     "https://codepen.io/cobra_winfrey/debug/OJVJJoj",
//     "https://cdpn.io/cobra_winfrey/debug/YzXOBEN",
//     "https://codepen.io/cobra_winfrey/debug/qBZWVmO",
//     "https://codepen.io/cobra_winfrey/debug/eYOXOdB",
//     "https://codepen.io/cobra_winfrey/debug/OJXJeod",
//     "https://codepen.io/cobra_winfrey/debug/PoqVQRq",
//     "https://cdpn.io/cobra_winfrey/debug/qgEGMZ",
//     "https://codepen.io/cobra_winfrey/debug/RwWYGxj",
//   ];

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const cursor = cursorRef.current;
//     const penLink = penLinkRef.current;
//     const body = document.body;

//     // Cursor movement
//     gsap.set(cursor, { xPercent: -50, yPercent: -50 });
//     const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//     const mouse = { x: pos.x, y: pos.y };
//     const speed = 0.35;

//     const xSet = gsap.quickSetter(cursor, "x", "px");
//     const ySet = gsap.quickSetter(cursor, "y", "px");

//     const mouseMoveHandler = (e) => {
//       mouse.x = e.x;
//       mouse.y = e.y;
//     };

//     window.addEventListener("mousemove", mouseMoveHandler);

//     gsap.ticker.add(() => {
//       const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
//       pos.x += (mouse.x - pos.x) * dt;
//       pos.y += (mouse.y - pos.y) * dt;
//       xSet(pos.x);
//       ySet(pos.y);
//     });

//     Splitting();

//     // Individual section scroll progress
//     gsap.utils.toArray(".panel").forEach((section) => {
//       gsap.to(section, {
//         scrollTrigger: {
//           trigger: section,
//           start: "top 100%",
//           end: "bottom 25%",
//           scrub: 0,
//           onUpdate: (self) => {
//             section.style.setProperty("--progress", self.progress);
//           },
//         },
//       });
//     });

//     // Full page scroll progress
//     gsap.to("body", {
//       scrollTrigger: {
//         trigger: "body",
//         start: "top 100%",
//         end: "50% 50%",
//         scrub: 0,
//         onUpdate: (self) => {
//           body.style.setProperty("--progress", self.progress);
//         },
//       },
//     });

//     document.addEventListener("DOMContentLoaded", () => {
//       body.classList.add("loaded");
//     });

//     const refresh = () => {
//       setTimeout(() => {
//         ScrollTrigger.refresh();
//       }, 2500);
//     };

//     window.addEventListener("resize", refresh);

//     return () => {
//       window.removeEventListener("mousemove", mouseMoveHandler);
//       window.removeEventListener("resize", refresh);
//     };
//   }, []);

//   const handleCardMouseOver = useCallback(() => {
//     cursorRef.current.classList.add("active");
//   }, []);

//   const handleCardMouseOut = useCallback(() => {
//     cursorRef.current.classList.remove("active");
//   }, []);

//   const handleCardClick = useCallback(
//     (index) => {
//       setBodyActive(true);
//       setIframeSrc(frames[index]);
//       const penDebug = frames[index];
//       const penFull = penDebug.replace("debug", "pen");
//       penLinkRef.current.setAttribute("href", penFull);
//     },
//     [frames]
//   );

//   const handleLinkMouseOver = useCallback(() => {
//     cursorRef.current.classList.add("linkhover");
//   }, []);

//   const handleLinkMouseOut = useCallback(() => {
//     cursorRef.current.classList.remove("linkhover");
//   }, []);

//   const handleCloseClick = useCallback(() => {
//     setBodyActive(false);
//     setTimeout(() => {
//       setIframeSrc("");
//     }, 2000);
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (evt) => {
//       evt = evt || window.event;
//       if (evt.key === "Escape" || evt.key === "Esc" || evt.keyCode === 27) {
//         setBodyActive(false);
//         setTimeout(() => {
//           setIframeSrc("");
//         }, 2000);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return (
//     <main
//       style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
//       id="wrap"
//       className={cn(
//         "translate-x-0",
//         "bg-foreground",
//         "w-[1000px]",
//         "max-w-[85vw]",
//         "my-0",
//         "mx-auto",
//         "p-[2.5vh_50px_25vh]",
//         "ease-transform",
//         "translate-x-0",
//         "delay-[0.75s]",
//         "[will-change:transform]",
//         "overflow-hidden",
//         "relative"
//       )}
//     >
//       <GoBack />
//       <Title title="Selected Demos" className="text-dark-green" />
//       <Socials />
//       <Cursor ref={cursorRef} />
//       <Frame isActive={bodyActive} src={iframeSrc} ref={frameRef} />
//       <Projects
//         onCardMouseOver={handleCardMouseOver}
//         onCardMouseOut={handleCardMouseOut}
//         onCardClick={handleCardClick}
//         ref={cardsRef}
//       />
//       <Footer />
//     </main>
//   );
// }

import Loader from "@/components/Loader";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState, useCallback } from "react";
import Cursor from "@/components/Cursor";
import Frame from "@/components/Frame";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Splitting from "splitting";
import GoBack from "@/components/GoBack";

export default function Home() {
  const [iframeSrc, setIframeSrc] = useState("");
  const [bodyActive, setBodyActive] = useState(false);
  const cursorRef = useRef(null);
  const frameRef = useRef(null);
  const penLinkRef = useRef(null);
  const cardsRef = useRef([]);

  const frames = [
    "https://codepen.io/cobra_winfrey/debug/xxVJZwo",
    "https://cdpn.io/cobra_winfrey/debug/wvGyKEY",
    "https://codepen.io/cobra_winfrey/debug/OJVJJoj",
    "https://cdpn.io/cobra_winfrey/debug/YzXOBEN",
    "https://codepen.io/cobra_winfrey/debug/qBZWVmO",
    "https://codepen.io/cobra_winfrey/debug/eYOXOdB",
    "https://codepen.io/cobra_winfrey/debug/OJXJeod",
    "https://codepen.io/cobra_winfrey/debug/PoqVQRq",
    "https://cdpn.io/cobra_winfrey/debug/qgEGMZ",
    "https://codepen.io/cobra_winfrey/debug/RwWYGxj",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cursor = cursorRef.current;
    const body = document.body;

    // Cursor movement
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.35;

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    const mouseMoveHandler = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    Splitting();

    // Individual section scroll progress
    gsap.utils.toArray(".panel").forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 100%",
          end: "bottom 25%",
          scrub: 0,
          onUpdate: (self) => {
            section.style.setProperty("--progress", self.progress);
          },
        },
      });
    });

    // Full page scroll progress
    gsap.to("body", {
      scrollTrigger: {
        trigger: "body",
        start: "top 100%",
        end: "50% 50%",
        scrub: 0,
        onUpdate: (self) => {
          body.style.setProperty("--progress", self.progress);
        },
      },
    });

    document.addEventListener("DOMContentLoaded", () => {
      body.classList.add("loaded");
    });

    const refresh = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2500);
    };

    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  const handleCardMouseOver = useCallback(() => {
    cursorRef.current.classList.add("active");
  }, []);

  const handleCardMouseOut = useCallback(() => {
    cursorRef.current.classList.remove("active");
  }, []);

  const handleCardClick = useCallback(
    (index) => {
      setBodyActive(true);
      setIframeSrc(frames[index]);
      const penDebug = frames[index];
      const penFull = penDebug.replace("debug", "pen");
      penLinkRef.current?.setAttribute("href", penFull);
    },
    [frames]
  );

  const handleLinkMouseOver = useCallback(() => {
    cursorRef.current.classList.add("linkhover");
  }, []);

  const handleLinkMouseOut = useCallback(() => {
    cursorRef.current.classList.remove("linkhover");
  }, []);

  const handleCloseClick = useCallback(() => {
    setBodyActive(false);
    setTimeout(() => {
      setIframeSrc("");
    }, 2000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (evt) => {
      evt = evt || window.event;
      if (evt.key === "Escape" || evt.key === "Esc" || evt.keyCode === 27) {
        setBodyActive(false);
        setTimeout(() => {
          setIframeSrc("");
        }, 2000);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <main
        style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
        id="wrap"
        className={cn(
          "translate-x-0",
          "bg-foreground",
          "w-[1000px]",
          "max-w-[85vw]",
          "my-0",
          "mx-auto",
          "p-[2.5vh_50px_25vh]",
          "ease-transform",
          "translate-x-0",
          "delay-[0.75s]",
          "[will-change:transform]",
          "overflow-hidden",
          "relative"
        )}
      >
        <Title title="Selected Demos" className="text-dark-green" />
        <Socials />
        <Cursor ref={cursorRef} />
        <a ref={penLinkRef} id="penlink" style={{ display: "none" }}>
          Pen Link
        </a>
        <Projects
          onCardMouseOver={handleCardMouseOver}
          onCardMouseOut={handleCardMouseOut}
          onCardClick={handleCardClick}
          ref={cardsRef}
        />
        <Footer />
      </main>
      <GoBack />
      <Frame isActive={bodyActive} src={iframeSrc} ref={frameRef} />
    </>
  );
}
