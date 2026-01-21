import { twMerge, } from 'tailwind-merge';

export const titleStyle = twMerge(`
   mb-12 text-2xl sm:text-4xl md:text-6xl lg:text-7xl
`);

export const subTitleStyle = twMerge(`
   mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl
`);

export const smallTitleStyle = twMerge(`
   mb-8 text-xl sm:text-2xl md:text-3xl lg:text-3xl
`);

export const paragraphStyle = twMerge(`
   text-2xl leading-10 mb-8
`);

export const containerStyle = twMerge(`
  
`);

export const splitterStyle = twMerge(`
   flex flex-row space-x-16  text-left
`);

export const proficienciesStyle = twMerge(`
   text-left
`);

export const logoStyle = twMerge(`
   object-contain h-36 w-36 block bg-white/5 p-4`);

export const logoListItemStyle = twMerge(`
   inline-block mr-6 mb-6 
`);

export const logoListStyle = twMerge(`
   flex flex-row flex-wrap justify-content-center items-center align-middle mb-12
`);


