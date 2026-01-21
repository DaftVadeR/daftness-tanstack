import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";
import { Word } from "./types";
import { characterStyle, wordStyle } from "./styles";
import clsx from "clsx";

const ANIM_LETTER_DELAY = 0.10;
const ANIM_LETTER_TRANSITION = ANIM_LETTER_DELAY - 0.04;

export default function WordSection({
    word,
    wordIndex,
    lineIndex,
    onWordDone,
    isActive,
    containerRef,
    cursorRef,
    setCursorPosition,
}: {
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

                    const containerRect = containerRef.current.getBoundingClientRect();
                    const charRect = char.ref.current.getBoundingClientRect();
                    const cursorRect = cursorRef?.current?.getBoundingClientRect();

                    const relativeX = charRect.left + charRect.width + (cursorRect?.width ?? charRect.width) * 0.75 - containerRect.left;

                    const relativeY = charRect.top - containerRect.top - (cursorRect ? (cursorRect.height - charRect.height) / 2 : 0);

                    setCursorPosition([relativeX, relativeY]);
                },

                // Complete - start next line's animation.
                onComplete: function() {
                    if (characterIndex >= word.characters.length - 1) {
                        onWordDone(wordIndex);
                    }
                },
            }).delay(characterIndex * ANIM_LETTER_DELAY);
        });
    }, [containerRef, isActive, word, cursorRef]);

    return (
        <span
            className={wordStyle}
            key={`${lineIndex}_${wordIndex}`}
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
                    key={`${lineIndex}_${wordIndex}_${charIndex}`}
                >
                    {char.letter}
                </span>
            ))}
        </span>
    );
};
