import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { containerStyle, innerContainerStyle, lgStyle, mdStyle, smStyle } from "./styles";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const ACTIVE_BORDER_COLOR = 'rgba(100, 40, 190, 0.8)';
const ACTIVE_BORDER_COLOR2 = 'rgba(0, 0, 160, 0.8)';

const INITIAL_BORDER_COLOR = 'rgba(255, 255, 255, 0.2)';
const INITIAL_BORDER_COLOR2 = 'rgba(20, 20, 20, 0.2)';

const SIZE_LG = 'lg' as const;
const SIZE_MED = 'md' as const;
const SIZE_SM = 'sm' as const;

const SIZE_MAP: Record<typeof SIZE_LG | typeof SIZE_MED | typeof SIZE_SM, string> = {
   [SIZE_LG]: lgStyle,
   [SIZE_MED]: mdStyle,
   [SIZE_SM]: smStyle,
};

export default function HyprBox(
   {
      children,
      className,
      active1 = ACTIVE_BORDER_COLOR,
      active2 = ACTIVE_BORDER_COLOR2,
      initial1 = INITIAL_BORDER_COLOR,
      initial2 = INITIAL_BORDER_COLOR2,
      size = SIZE_LG,
   }: {
      children: React.ReactNode,
      className?: string,
      active1?: string,
      active2?: string,
      initial1?: string,
      initial2?: string,
      size?: typeof SIZE_LG | typeof SIZE_MED | typeof SIZE_SM,
   }
) {
   const containerRef = useRef<HTMLDivElement>(null);
   const innerContainerRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      if (!containerRef.current) {
         return;
      }

      gsap.fromTo(
         containerRef.current,
         {
            scale: 0.8,
            opacity: 0.2,
            duration: 0,
            translateY: '80px',
            background: `linear-gradient(135deg, ${initial1}, ${initial2})`,
         },
         {
            scale: 1,
            opacity: 1,
            translateY: 0,
            duration: 0.8,
            ease: 'bounce.out',
            background: `linear-gradient(135deg, ${active1}, ${active2})`,
            scrollTrigger: {
               trigger: containerRef.current,
               start: 'top 80%',
               once: true,
            },
         }
      );
   }, [containerRef]);

   return (
      <div
         className={clsx(containerStyle, className)}
         style={{
            background: `black`,
         }}
         ref={containerRef}
      >
         <div
            ref={innerContainerRef}
            className={clsx(innerContainerStyle, SIZE_MAP[size])}
            style={{
               backgroundColor: `black`,
            }}
         >
            {children}
         </div>
      </div>
   );
}

