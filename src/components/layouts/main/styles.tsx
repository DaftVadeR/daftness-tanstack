import { twMerge } from "tailwind-merge";

export const containerStyle = twMerge(`
    min-h-dvh flex flex-col items-center
`);

export const contentStyle = twMerge(`
    w-full p-5 lg:p-20 text-center flex-grow
`);

export const headerStyle = twMerge(`
    flex-none w-full
`);

export const footerStyle = twMerge(`
    flex-none w-full text-center 
`);
