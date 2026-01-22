import { twMerge } from "tailwind-merge";

export const proficienciesStyle = twMerge(`
   text-left
`);

export const logoStyle = twMerge(`
   object-contain h-28 w-28 md:h-36 md:w-36 block bg-white/5 p-4
`);

export const logoListItemStyle = twMerge(`
   inline-flex mb-4 basis-1/2 md:basis-auto md:mr-4 justify-center items-center
`);

export const logoListStyle = twMerge(`
   flex flex-row flex-wrap align-middle mb-12 md:justify-left md:align-left md:items-left
`);


