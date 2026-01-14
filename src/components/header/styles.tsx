import { twMerge } from "tailwind-merge";

export const containerStyle = twMerge("p-4 flex items-center pt-8");

export const logoLinkStyle = twMerge(`
  ml-4 text-3xl md:text-4xl lg:text-7xl font-semibold bg-clip-text 
  transition-all
  bg-[length:100%_500%]
  bg-clip-text text-transparent
  animate-[text-flow_6s_ease-in_infinite]`);

//ml-4 text-7xl font-semibold animate-logo-gradient bg-clip-text 

export const navButtonStyle = twMerge("p-2 hover:bg-gray-700 rounded-lg transition-colors");

export const hiddenTitleStyle = twMerge("sr-only");

