"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative bg-hero-gradient">
        <div className="absolute inset-0 bg-stars" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {
            }
            <div>
              <div className="badge-new w-fit">
                <span className="badge-dot" />
                Open to opportunities
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-textPrimary">
                Hi, I’m Ishaan Upponi
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-textPrimary/80">
                Second-year CSE (AI & ML) student at SRM KTR. I build modern, responsive UIs with React + TypeScript,
                strengthen AI/ML through solid mathematics, and am learning backend step-by-step. Core member of HRCC,
                Bit N Build (TN) 1st place with Team Technologia, and currently working on a UROP project in the energy domain.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Link href="#projects" className="btn-dark-pill">
                  View Projects
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/resume.pdf" className="btn-gradient-secondary glow-hover rounded-full px-5 py-3">
                  Download Resume
                </Link>
              </div>
            </div>

          
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/60 bg-surface shadow-[inset_0_0_60px_rgba(255,255,255,0.04)]">
                <img
                  src="/hero-ai.jpeg"
                  alt="AI Futuristic Figure"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
