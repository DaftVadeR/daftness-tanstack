
import { useRef } from "react";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { containerStyle, innerContainerStyle } from "./styles";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SIZE, SIZE_LG, SIZE_MAP, SPEED, SPEED_MAP, SPEED_MID, SPEED_SLOW } from "./types";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ACTIVE_BORDER_COLOR = 'rgba(100, 40, 190, 0.8)';
const ACTIVE_BORDER_COLOR2 = 'rgba(0, 0, 160, 0.8)';

const INITIAL_BORDER_COLOR = 'rgba(255, 255, 255, 0.2)';
const INITIAL_BORDER_COLOR2 = 'rgba(20, 20, 20, 0.2)';

export default function HyprBox(
   {
      children,
      id,
      nextId,
      className,
      speed = SPEED_SLOW,
      active1 = ACTIVE_BORDER_COLOR,
      active2 = ACTIVE_BORDER_COLOR2,
      initial1 = INITIAL_BORDER_COLOR,
      initial2 = INITIAL_BORDER_COLOR2,
      size = SIZE_LG,
      showScroll = false,
   }: {
      children: React.ReactNode,
      id?: string,
      nextId?: string,
      className?: string,
      active1?: string,
      active2?: string,
      initial1?: string,
      initial2?: string,
      size?: SIZE,
      speed?: SPEED,
      showScroll?: boolean,
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
            scale: 0.9,
            opacity: 0.2,
            duration: 0,
            translateY: '80px',
            background: `linear-gradient(135deg, ${initial1}, ${initial2})`,
         },
         {
            scale: 1,
            opacity: 1,
            translateY: 0,
            duration: SPEED_MAP[speed],
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
         id={id}
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
         {showScroll && (
            <a href={`#${nextId}`} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-white/70 italic" aria-label="Scroll Down">
               <ArrowDown className="animate-bounce" color={'var(--color-white)'} size={80} />
            </a>
         )}
      </div>
   );
}

