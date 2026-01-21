import { ElementType, RefObject } from "react";

export type Character = {
    ref: null | RefObject<null | HTMLElement>,
    letter: string,
};

export type TextLine = {
    tag: ElementType,
    value: string,
    characters: Character[],
    className: string | undefined,
};

