import React from "react";
import { Hero, About, Portfolio, Skills, Contact, Experiencie, AchievementsAndLanguages } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div>
        <Hero />
        <About />
        <AchievementsAndLanguages />
        <Skills />
        <Experiencie />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}
