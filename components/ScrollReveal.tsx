"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Animation =
  | "fade-up"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "draw-line";

type ScrollRevealProps = {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: number;
  once?: boolean;
};

const initialStates: Record<Animation, gsap.TweenVars> = {
  "fade-up": { y: 60, autoAlpha: 0 },
  "fade-in": { autoAlpha: 0 },
  "fade-left": { x: -60, autoAlpha: 0 },
  "fade-right": { x: 60, autoAlpha: 0 },
  "scale-in": { scale: 0.9, autoAlpha: 0 },
  "draw-line": { scaleY: 0 },
};

const animateStates: Record<Animation, gsap.TweenVars> = {
  "fade-up": { y: 0, autoAlpha: 1 },
  "fade-in": { autoAlpha: 1 },
  "fade-left": { x: 0, autoAlpha: 1 },
  "fade-right": { x: 0, autoAlpha: 1 },
  "scale-in": { scale: 1, autoAlpha: 1 },
  "draw-line": { scaleY: 1 },
};

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  className,
  stagger,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? el.children : el;

    gsap.set(targets, initialStates[animation]);

    const tween = gsap.to(targets, {
      ...animateStates[animation],
      duration,
      delay,
      ease: "power3.out",
      stagger: stagger || 0,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [animation, delay, duration, stagger, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function useHeroEntrance(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Scroll to top on mount to prevent browser scroll restoration
    window.scrollTo(0, 0);

    const label = el.querySelector("[data-hero-label]");
    const name1 = el.querySelector("[data-hero-name1]");
    const name2 = el.querySelector("[data-hero-name2]");
    const desc = el.querySelector("[data-hero-desc]");
    const demos = el.querySelector("[data-hero-demos]");
    const image = el.querySelector("[data-hero-image]");

    const targets = [label, name1, name2, desc, demos, image].filter(Boolean);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(image, { opacity: 0, scale: 1.05, duration: 1.2 }, 0.1)
      .from(label, { opacity: 0, y: 20, duration: 0.6 }, 0.3)
      .from(name1, { opacity: 0, y: 20, duration: 0.7 }, 0.4)
      .from(name2, { opacity: 0, y: 20, duration: 0.7 }, 0.55)
      .from(desc, { opacity: 0, y: 20, duration: 0.6 }, 0.7)
      .from(demos, { opacity: 0, y: 20, duration: 0.6 }, 0.85);

    return () => {
      tl.kill();
      // Reset to visible state on cleanup so elements aren't stuck invisible
      targets.forEach((t) => gsap.set(t, { clearProps: "all" }));
    };
  }, [containerRef]);
}
