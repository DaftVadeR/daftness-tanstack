import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";
import { Word } from "./types";
import { characterStyle, wordStyle } from "./styles";
import clsx from "clsx";
import { SPEED, SPEED_FAST, SPEED_MID, SPEED_SLOW } from "../hypr-box/types";

const ANIM_LETTER_DELAY = 0.10;
const ANIM_LETTER_TRANSITION = ANIM_LETTER_DELAY - 0.04;

const SPEED_MAP: Record<SPEED, number> = {
    [SPEED_FAST]: 0.07,
    [SPEED_MID]: 0.14,
    [SPEED_SLOW]: 0.2,
};

export default function WordSection({
    speed,
    word,
    wordIndex,
    lineIndex,
    onWordDone,
    isActive,
    containerRef,
    cursorRef,
    setCursorPosition,
}: {
    speed: SPEED,
    word: Word,
    wordIndex: number,
    lineIndex: number,
    isActive: boolean,
    containerRef: null | RefObject<HTMLElement | null>,
    cursorRef: null | RefObject<HTMLElement | null>,
    onWordDone: (wordIndex: number) => void,
    setCursorPosition: (pos: [number, number]) => void,
}) {
    useGSAP(() => {
        // only start animations when active and refs are set.
        if (!isActive || !containerRef?.current) {
            return;
        }

        if (!word.ref) {
            return; // ref hasnt been set yet for some words.
        }

        for (let c = 0; c < word.characters.length; c++) {
            const char = word.characters[c];

            if (!char.ref) {
                return; // refs havent been set yet for some characters.
            }
        }

        word.characters.forEach((char, characterIndex) => {
            gsap.to(char.ref!.current, {
                opacity: 1,
                scale: 1,
                visibility: 'visible',
                display: 'inline-block',
                duration: ANIM_LETTER_TRANSITION,

                // ease: "power2.out", // kept linear as its most natural

                // Just needed for updating the blinking cursor's position on each character's staggered animation.
                onStart: function() {
                    if (!containerRef?.current || !char.ref?.current) {
                        return;
                    }

                    char.ref.current.style.display = 'inline-block';
                    char.ref.current.style.visibility = 'visible';

                    const charRect = char.ref.current.getBoundingClientRect();

                    // using offset as simpler - rect was giving issues due to not being relative.
                    const relativeX = char.ref.current.offsetLeft + charRect.width * 3;
                    const relativeY = char.ref.current.offsetTop;

                    setCursorPosition([relativeX, relativeY]);
                },

                onComplete: function() {
                    if (characterIndex >= word.characters.length - 1) {
                        onWordDone(wordIndex);
                    }
                },
            }).delay(characterIndex * SPEED_MAP[speed]);
        });
    }, [containerRef, isActive, word, cursorRef, speed]);

    return (
        <span
            className={wordStyle}
            key={`word_${lineIndex}_${wordIndex}`}
            ref={(el) => {
                if (el) {
                    if (word.ref) {
                        word.ref.current = el;
                    } else {
                        word.ref = { current: el };
                    }
                }
            }}
        >
            {word.characters.map((char, charIndex) => (
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
                    className={clsx(characterStyle, 'invisible')}
                    key={`char_${lineIndex}_${wordIndex}_${charIndex}`}
                >
                    {char.letter}
                </span>
            ))}
            {word.characters.length > 0 ? ' ' : ''}
        </span>
    );
};
