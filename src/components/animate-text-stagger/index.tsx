// This was the third attempt. Instead of relying on ChatGPT initially, I decided to do some research and found the stagger effect in the GSAP docs.
// This worked, but had some limitations with the React GSAP API, so we changed it using delay().
//
// I added sequencing in the form of callbacks that fire when a line is done, that triggers the next step.
// It's also refactored to be more structured and easy to navigate.
//
// The cursor is positioned correctly after each character, and only shows after the first character is animated, 
// due to the weirdness that happens when transitioning the transform's x translation to a notably different value
// to the starting one (0).
//
// None of the comments are typed by ChatGPT, be it this one, or the ones below.

import { Children, ElementType, isValidElement, useEffect, useState, ReactNode } from 'react';
import { getDirectText } from '@/util/react-nodes';
import { TextLine } from './types';
import Line from './line';

const onDone = (nextStep: number, setStep: (step: number) => void) => () => {
    setStep(nextStep);
};

export default function AnimateTextStagger({ children: childrenNotNormalized }: { children: ReactNode }) {
    const [lines, setLines] = useState<TextLine[]>([]);
    const [step, setStep] = useState(0);

    useEffect(() => {
        // i normalize children to make sure we have an array of lines, and within each, an array of characters comprising each word.
        // I'm a fan of formalizing the data structure using custom types, to ensure that the data is structured adequately for the JSX. 
        if (childrenNotNormalized) {
            const children = Children.toArray(childrenNotNormalized).filter(isValidElement<HTMLElement>);

            // intentionally left out any resets of state vars, as I don't want the animation to reexecute.
            if (children) {
                const lines: TextLine[] = [];

                for (let i = 0; i < children.length; i++) {
                    const child = children[i];

                    const text = getDirectText(child);

                    lines.push({
                        value: text,
                        tag: child.type as ElementType,
                        characters: text.split('').map((char) => ({
                            letter: char,
                            ref: null,
                        })),
                        className: child.props.className,
                    } as TextLine);
                }

                setLines(lines);
            }
        }
    }, [childrenNotNormalized]);

    return (
        <>
            {lines.map((line, lineIndex) => {
                const followingStep = lineIndex + 1;

                return (
                    <Line
                        isActive={lineIndex === step}
                        line={line}
                        key={lineIndex} // line index used in case of duplicate lines, a rare but possible use case.

                        // If there is an ensuing step, pass a callback to advance to it via the state setter. */ }
                        onDone={lines.length > followingStep ? onDone(followingStep, setStep) : () => { }}
                    />
                );

            })}
        </>
    );
}


