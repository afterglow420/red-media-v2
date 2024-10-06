import { ColorClass, SizeClass } from "types";

export const sizeClassMap: Record<SizeClass, string> = {
    sm: "w-32 h-8 text-sm px-3 py-1",
    md: "w-48 h-10 text-base px-4 py-2",
    lg: "w-64 h-12 text-lg px-5 py-3",
};

export const colorClassMap: Record<ColorClass, string> = {
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-black",
    info: "bg-blue-500 hover:bg-blue-600 text-white",
    light: "bg-gray-100 hover:bg-gray-200 text-black",
    dark: "bg-gray-800 hover:bg-gray-900 text-white",
};