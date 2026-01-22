import { twMerge, } from 'tailwind-merge';

export const titleStyle = twMerge(`
   mb-12 text-3xl sm:text-4xl md:text-6xl lg:text-7xl
`);

export const subTitleStyle = twMerge(`
   mb-12 text-2xl sm:text-3xl md:text-4xl leading-12
`);

export const smallTitleStyle = twMerge(`
   mb-8 text-xl sm:text-2xl md:text-3xl lg:text-3xl
`);

export const paragraphStyle = twMerge(`
   text-lg sm:text-xl md:text-2xl leading-10 mb-8
`);

export const containerStyle = twMerge(`
  
`);

export const splitterStyle = twMerge(`
   md:flex md:flex-row md:space-x-16 text-left 
`);

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


