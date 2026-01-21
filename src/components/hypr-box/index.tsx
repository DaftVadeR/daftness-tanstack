import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { containerStyle } from "./styles";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HyprBox({ children }: { children: React.ReactNode }) {
   const containerRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      if (!containerRef.current) {
         return;
      }

      gsap.fromTo(
         containerRef.current,
         {
            scale: 0.5,
            opacity: 0.5,
            duration: 0.01,
            translateY: '100px',
         },
         {
            scale: 1,
            opacity: 1,
            translateY: 0,
            duration: 0.01,
            ease: 'bounce.out',
            borderColor: 'rgba(100, 40, 100, 0.7)',
            scrollTrigger: {
               trigger: containerRef.current,
               start: 'top bottom',
               once: true,
            },
         }
      );
   }, [containerRef]);

   return (
      <div className={containerStyle} ref={containerRef}>
         {children}
      </div>
   );
}
