import { useRef, useEffect, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  move?: "left" | "right" | "top" | "bottom";
}

export default function FloatIn({children, move}: ScrollRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        //Dynamic import
        const sr = (await import("scrollreveal")).default
        sr().reveal(sectionRef.current, {
          delay: 0,
          opacity: 0,
          easing: "ease",
          origin: 
            move === "left"
              ? "left"
              : move === "right"
                ? "right"
                : move === "top"
                  ? "top"
                  : "bottom",
          distance: "50px",
          reset: false,
          scale: 0.8,
          duration: 2000
        })
      }
    }
    animate()
  }, [move, sectionRef]);

  return <section ref={sectionRef}>{children}</section>;
};
