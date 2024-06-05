"use client";

import Loader from "@/components/Loader";
import Portfolio from "@/components/Portfolio";
import { useRef } from "react";

export default function Home() {
  const container = useRef();

  return (
    <main ref={container} className="">
      {/* <Portfolio /> */}
      <Loader />
    </main>
  );
}
