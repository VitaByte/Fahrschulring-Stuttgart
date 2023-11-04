"use client";

import Description from "@/components/Description";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
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
        <Reviews />
      </main>
    </>
  );
}
