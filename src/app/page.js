"use client";

import Description from "@/components/Description";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import React from "react";

export default function Home() {
  return (
    <>
      <main>
        {/* hero section */}
        <Hero />
        {/* description section */}
        <Description />
        <Stats />
      </main>
    </>
  );
}
