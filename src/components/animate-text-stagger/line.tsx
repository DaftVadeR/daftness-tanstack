// It was fun using <line.tag/> to dynamically render different HTML elements per line. 
// I've not done it before.

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { characterStyle, containerStyle } from './styles';

import { TextLine } from "./types";
import CursorBlink from "./cursor";
import clsx from "clsx";

const ANIM_LETTER_DELAY = 0.14;
const ANIM_LETTER_TRANSITION = ANIM_LETTER_DELAY - 0.04;

export default function Line({ isActive, line, onDone }: { isActive: boolean, line: TextLine, onDone: () => void }) {
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    const [cursorPosition, setCursorPosition] = useState([0, 0]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useGSAP(() => {
        // only start animations when active and refs are set.
        if (!isActive || !containerRef.current) {
            return;
        }

        for (let i = 0; i < line.characters.length; i++) {
            const char = line.characters[i];

            if (!char.ref) {
                return; // refs havent been set yet for some characters.
            }
        }

        line.characters.forEach((char, index) => {
            gsap.to(char.ref!.current, {
                opacity: 1,
                scale: 1,
                visibility: 'visible',
                display: 'inline-block',
                duration: ANIM_LETTER_TRANSITION,
                // ease: "power2.out", // kept linear as its most natural

                // Just needed for updating the blinking cursor's position on each character's staggered animation.
                onStart: function() {
                    if (!containerRef.current || !char.ref?.current) return;

                    char.ref.current.style.display = 'inline-block';
                    char.ref.current.style.visibility = 'visible';

                    const containerRect = containerRef.current.getBoundingClientRect();
                    const charRect = char.ref.current.getBoundingClientRect();

                    const relativeX = charRect.left + charRect.width - containerRect.left + charRect.width;
                    const relativeY = charRect.top - containerRect.top - charRect.height / 2;

                    setCursorPosition([relativeX, relativeY]);
                },

                // Complete - start next line's animation.
                onComplete: function() {
                    if (index === line.characters.length - 1) {
                        onDone();
                    }
                },
            }).delay(index * ANIM_LETTER_DELAY);
        });
    }, [containerRef, isActive, line]);

    return (
        <div className={containerStyle} ref={containerRef}>
            <line.tag aria-label={line.value} className={line.className}>
                {line.characters.map((char, index) => (
                    <span
                        ref={(el) => {
                            if (el) {
                                if (char.ref) {
                                    char.ref.current = el;
                                } else {
                                    char.ref = { current: el };
                                }
                            }
                        }}
                        className={clsx(characterStyle, 'hidden invisible')}
                        key={index}
                    >
                        {char.letter}
                    </span>
                ))}
                {isMounted && isActive && cursorPosition[0] !== 0 &&
                    <CursorBlink
                        cursorRef={cursorRef}
                        position={cursorPosition}
                    />}
            </line.tag>
        </div>
    );
}
