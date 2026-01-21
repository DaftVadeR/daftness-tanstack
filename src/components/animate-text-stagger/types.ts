import { ElementType, RefObject } from "react";

export type Character = {
    ref: null | RefObject<null | HTMLElement>,
    letter: string,
};

export type Word = {
    ref: null | RefObject<null | HTMLElement>,
    characters: Character[],
};

export type TextLine = {
    tag: ElementType,
    value: string,
    words: Word[],
    className: string | undefined,
};

