import { useGSAP } from "@gsap/react";

import { containerStyle, characterStyle, containerInnerStyle, triggerStyle, triggersContainerStyle, characterWrapperStyle, rowStyle } from "./styles";
import { useEffect, useRef, useState } from "react";
import { round } from "@/util/numbers";
import clsx from "clsx";

// Matrix green code effect, where it runs down the screen.
//
// The effect seems to be comprised of the following:
// - There are a group of characters that fall through a line of "code" or "text", and the text that it passes gets made visible through
// an animated transition. These same characters then disappear after a short time. The group of characters falling will be called the trigger text
// - There are pregenerated lines of characters that are always present in the background, but are invisible or visible after being passed by the group of characters (trigger text). Some examples of this effect actually move the background text downwards too. Try both.
// - the pregenerated characters can have their opacity locked, or maybe have their opacity animate slower so that it causes some asynchronicity between the trigger text and the background text.
// - there is a shimmering that happens around the characters, an interlacing-like effect. 
// - the text can either be zeros and ones, or characters from unicode.
// - the effect is simpler without it, but some examples of the animation have a 3d effect, where it seems like you're passing through the lines of text in first person. And as you move forward, the lines get larger, creating a depth-of-field effect. This is optional.

const charactersToUse = '01'; // pregenerated for performance reasons
const characterTrigger = 'すごい';

const CHARACTER_WIDTH = 40;
const CHARACTER_HEIGHT = 40;
const TRIGGER_STAGGER = 0.2;
const TRIGGER_ANIM_DURATION = 5;

export default function MatrixBg() {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);

    // dont want to do it more than once.
    const [characters, setCharacters] = useState<string[][]>([]);

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) {
            console.log('Ref not found - component may have unmounted');
            return;
        }

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const rect = entry.target.getBoundingClientRect();

                setRows(round(rect.height / CHARACTER_HEIGHT));
                setCols(round(rect.width / CHARACTER_WIDTH));

                console.log(`Container resized: ${rect.width}x${rect.height}, ROWS: ${rows}, COLS: ${cols}`);
            }
        });

        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        if (rows > 0 && cols > 0) {
            const newCharacters: string[][] = [];

            for (let r = 0; r < rows; r++) {
                const rowChars: string[] = [];

                for (let c = 0; c < cols; c++) {
                    const char = charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
                    rowChars.push(char);
                }

                newCharacters.push(rowChars);
            }

            console.log('Generated new characters for matrix background.', newCharacters);
            setCharacters(newCharacters);
        }
    }, [rows, cols]);

    console.log(`ROWS: ${rows}, COLS: ${cols}`);

    useGSAP(() => {
        for (let triggerIndex = 0; triggerIndex < cols; triggerIndex++) {
            gsap.to('.animate-trigger', {
                opacity: 1,
                scale: 1,
                translateY: '100%',
                visibility: 'visible',
                display: 'inline-block',
                duration: TRIGGER_ANIM_DURATION,

                // ease: "power2.out", // kept linear as its most natural

                // // Just needed for updating the blinking cursor's position on each character's staggered animation.
                // onStart: function() {
                //     if (!containerRef?.current || !char.ref?.current) {
                //         return;
                //     }
                //
                //     char.ref.current.style.display = 'inline-block';
                //     char.ref.current.style.visibility = 'visible';
                //
                //     const charRect = char.ref.current.getBoundingClientRect();
                //
                //     // using offset as simpler - rect was giving issues due to not being relative.
                //     const relativeX = char.ref.current.offsetLeft + charRect.width * 3;
                //     const relativeY = char.ref.current.offsetTop;
                //
                //     setCursorPosition([relativeX, relativeY]);
                // },
                //
                // onComplete: function() {
                //     if (characterIndex >= word.characters.length - 1) {
                //         onWordDone(wordIndex);
                //     }
                // },
            }).delay(triggerIndex * TRIGGER_STAGGER);
        }
    }, [containerRef, /*isActive, word, cursorRef, speed*/]);

    return (
        <div
            aria-hidden="true"
            aria-label="Matrix background effect"
            className={containerStyle}
            ref={containerRef}
        >
            {/* 
            has to be absolute positioned to prevent additional 
            resizing after characters are inserted into the container itself
            */}
            <div className={containerInnerStyle}>
                {characters.map((row, rowIndex) => {
                    return (
                        <div
                            className={clsx(rowStyle)}
                            key={`matrix_row_${rowIndex}`}
                        >
                            {row.map((char, colIndex) => {
                                return (
                                    <span
                                        key={`matrix_char_${rowIndex}_${colIndex}`}
                                        className={clsx(characterWrapperStyle)}
                                        style={{
                                            width: `${CHARACTER_WIDTH}px`,
                                            height: `${CHARACTER_HEIGHT}px`,
                                        }}
                                    >
                                        <span className={clsx(characterStyle, 'animate-character')}>
                                            {char}
                                        </span>
                                    </span>
                                );
                            })}
                        </div>
                    )
                })}
            </div>
            {/* Trigger characters */}
            <div className={triggersContainerStyle}>
                {Array.from({ length: cols }).map((_, colIndex) => {
                    return (
                        <div
                            className={clsx(triggerStyle, 'animate-trigger')}
                            style={{
                                left: `${colIndex * CHARACTER_WIDTH}px`,
                            }}
                        >
                            {characterTrigger.split('').map((char) => (
                                <span
                                    key={`matrix_trigger_${colIndex}`}
                                    className={characterWrapperStyle}
                                    style={{
                                        width: `${CHARACTER_WIDTH}px`,
                                        flexBasis: `${CHARACTER_WIDTH}px`,
                                        height: `${CHARACTER_HEIGHT}px`,
                                    }}
                                >
                                    <span
                                        className={clsx(characterStyle)}
                                        style={{
                                            // animationDelay: `${colIndex * 0.1}s`,
                                        }}
                                    >{char}
                                    </span>
                                </span>))}
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

