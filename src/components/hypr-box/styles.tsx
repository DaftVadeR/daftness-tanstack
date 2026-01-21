import { twMerge, } from 'tailwind-merge';

export const containerStyle = twMerge(`
   rounded-xl relative p-0.5 pointer-events-none mb-20 background-black bg-black
`);

export const innerContainerStyle = twMerge(`
   rounded-[inherit] background-black bg-black mh-100 h-full
`);

export const smStyle = twMerge(`p-10`);
export const mdStyle = twMerge(`p-20`);
export const lgStyle = twMerge(`p-40`);
