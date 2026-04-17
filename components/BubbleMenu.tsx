import type { CSSProperties, ReactNode } from "react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import "./BubbleMenu.css";

type HoverStyles = {
  bgColor?: string;
  textColor?: string;
};

type BubbleMenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: HoverStyles;
};

type BubbleMenuProps = {
  onMenuClick?: (isOpen: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: BubbleMenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
};

type PillStyle = CSSProperties & {
  "--item-rot": string;
  "--pill-bg": string;
  "--pill-color": string;
  "--hover-bg": string;
  "--hover-color": string;
};

const DEFAULT_ITEMS: BubbleMenuItem[] = [
  {
    label: "home",
    href: "#",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "about",
    href: "#",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "projects",
    href: "#",
    ariaLabel: "Documentation",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "blog",
    href: "#",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "#",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

export default function BubbleMenu({
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Toggle menu",
  menuBg = "#fff",
  menuContentColor = "#0f2a4a",
  useFixedPosition = false,
  items,
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.12,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const bubblesRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;
  const containerClassName = [
    "bubble-menu",
    useFixedPosition ? "fixed" : "absolute",
    isScrolled ? "scrolled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);

    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: "flex" });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: "50% 50%" });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });

        tl.to(bubble, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase,
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: "power3.out",
            },
            `-=${animationDuration * 0.9}`,
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power3.in",
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
          setShowOverlay(false);
        },
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;

        bubbles.forEach((bubble, i) => {
          const item = menuItems[i];
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            gsap.set(bubble, { rotation });
          }
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, menuItems]);

  return (
    <>
      <nav
        className={containerClassName}
        style={style}
        aria-label="Main navigation"
      >
        <div className="bubble-menu-inner">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#b2492b] pl-5 pr-2 py-2 rounded-full pointer-events-auto no-underline shadow-[0_6px_20px_-6px_rgba(178,73,43,0.6)] hover:bg-[#9e4025] hover:shadow-[0_8px_24px_-6px_rgba(178,73,43,0.7)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M1 6h10m-4-4 4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <button
            type="button"
            className={`bubble toggle-bubble menu-btn ${isMenuOpen ? "open" : ""}`}
            onClick={handleToggle}
            aria-label={menuAriaLabel}
            aria-pressed={isMenuOpen}
            style={{ background: menuBg }}
          >
            <span
              className="menu-line"
              style={{ background: menuContentColor }}
            />
            <span
              className="menu-line short"
              style={{ background: menuContentColor }}
            />
          </button>
        </div>
      </nav>
      {showOverlay && (
        <div
          ref={overlayRef}
          className={`bubble-menu-items ${useFixedPosition ? "fixed" : "absolute"}`}
          style={{
            pointerEvents: isMenuOpen ? "auto" : "none",
            backgroundColor: isMenuOpen ? "rgba(0, 0, 0, 0.25)" : "transparent",
            backdropFilter: isMenuOpen ? "blur(6px)" : "none",
            WebkitBackdropFilter: isMenuOpen ? "blur(6px)" : "none",
            transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
          }}
          aria-hidden={!isMenuOpen}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleToggle();
          }}
        >
          <ul className="pill-list" role="menu" aria-label="Menu links">
            {menuItems.map((item, idx) => (
              <li key={idx} role="none" className="pill-col">
                <a
                  role="menuitem"
                  href={item.href}
                  onClick={handleToggle}
                  aria-label={item.ariaLabel || item.label}
                  className="pill-link"
                  style={
                    {
                      "--item-rot": `${item.rotation ?? 0}deg`,
                      "--pill-bg": menuBg,
                      "--pill-color": menuContentColor,
                      "--hover-bg": item.hoverStyles?.bgColor || "#f3f4f6",
                      "--hover-color":
                        item.hoverStyles?.textColor || menuContentColor,
                    } as PillStyle
                  }
                  ref={(el) => {
                    if (el) bubblesRef.current[idx] = el;
                  }}
                >
                  <span
                    className="pill-label"
                    ref={(el) => {
                      if (el) labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
