import { twMerge, } from 'tailwind-merge';

export const showMatrixBtnStyle = twMerge(`
   bg-white rounded-full px-6 py-3 mt-16 mb-16 text-lg hover:bg-gray-200 transition text-black hover:text-purple-800 cursor-pointer hover:scale-105 scale:100 transition-all duration-500
`);

export const btnContainerStyle = twMerge(`
`);

export const titleStyle = twMerge(`
   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 z-2 bg-white p-4 rounded-full text-black animate-fade-in-out
`);

export const containerStyle = twMerge(`
   p-0
`);

