import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import clsx from 'clsx';

import { useGSAP } from '@gsap/react';

import { characterStyle, containerStyle, cursorStyle } from './styles';

const CURSOR_CHARACTER = "▋";
// const CLASS_ACTIVE_CHARACTER = "active-char";
const CLASS_CHARACTER = ".stagger-char";

const CursorBlink = ({ cursorRef, position }: { cursorRef: React.RefObject<null | HTMLDivElement>, position: number[] }) => {
    if (position.length !== 2) {
        return null;
    }

    return (
        <span
            aria-hidden="true"
            ref={cursorRef}
            className={clsx(cursorStyle, `left-[${position[0]}px] top-[${position[1]}px]`)}
        >
            {CURSOR_CHARACTER}
        </span>
    );
};

export default function AnimateTextStagger({ children }: { children: string }) {
    const [isMounted, setIsMounted] = useState(false);
    const [cursorPosition, setCursorPosition] = useState([0, 0]);

    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    // const targets = gsap.utils.toArray<HTMLElement>(`.${CLASS_CHARACTER}`);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useGSAP(() => {
        gsap.to(CLASS_CHARACTER, {
            opacity: 1,
            scale: 1,
            visibility: 'visible',
            display: 'inline-block',

            stagger: {
                each: 0.14,
                onStart: function(this: gsap.core.Tween) {
                    const el = (this as gsap.core.Tween).targets()[0] as HTMLElement;
                    // document.querySelector(`.${CLASS_ACTIVE_CHARACTER}`)?.classList.remove(CLASS_ACTIVE_CHARACTER);

                    console.log('on start', el);

                    // const el = target as HTMLSpanElement;
                    console.log('Animating char:', el);

                    if (containerRef.current) {
                        console.log('container ref exits');

                        const charRect = el.getBoundingClientRect();
                        const containerRect = containerRef.current.getBoundingClientRect();

                        const newEndPosition = el.offsetWidth + charRect.width;
                        const containerMaxWidth = containerRef.current.offsetWidth + containerRect.width;

                        if (newEndPosition <= containerMaxWidth) {
                            console.log('new position!', newEndPosition, containerMaxWidth);

                            setCursorPosition([newEndPosition, 0]);
                        }
                    }
                },
                // onComplete: (target) => {
                //
                // },
                amount: 2,
            },
        });
    });

    return (
        <div className={containerStyle} ref={containerRef}>
            {children.split('').map((char, index) => {
                return (
                    <span
                        className={clsx(characterStyle, 'hidden invisible', CLASS_CHARACTER.substring(1))}
                        key={index}
                    // className="stagger-char inline-block opacity-0 scale-50"
                    >
                        {char}
                    </span>
                );
            })}
            {isMounted &&
                <CursorBlink
                    cursorRef={cursorRef}
                    position={cursorPosition}
                />}
        </div>
    );
}
