import { twMerge, } from 'tailwind-merge';

export const containerStyle = twMerge(`
   rounded-xl relative p-0.5 pointer-events-none mb-6 md:mb-20 background-black bg-black
`);

export const innerContainerStyle = twMerge(`
   rounded-[inherit] background-black bg-black min-h-full h-full
`);

export const smStyle = twMerge(`md:p-10 p-5`);
export const mdStyle = twMerge(`md:p-20 p-10`);
export const lgStyle = twMerge(`md:p-40 p-10`);
