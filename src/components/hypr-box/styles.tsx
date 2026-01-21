import { twMerge, } from 'tailwind-merge';

export const containerStyle = twMerge(`
   rounded-xl relative p-0.5 pointer-events-none mb-16 background-black bg-black
`);

export const innerContainerStyle = twMerge(`
   rounded-[inherit] p-18 background-black bg-black
`);


