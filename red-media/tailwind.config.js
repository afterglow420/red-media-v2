/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customRed: '#c9111d',
                // Add more custom colors as needed
            },
            letterSpacing: {
                'extra-wide': '0.125em',
                'extra-wider': '0.175em',
                'extra-widest': '0.25em',
            },
            // Define custom text shadows (combined outline and shadow)
            textShadow: {
                'shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
                'shadow-md': '3px 3px 6px rgba(0, 0, 0, 0.6)',
                'shadow-lg': '1px 1px 0 #37383c, -1px 1px 0 #37383c, 1px -1px 0 #37383c, -1px -1px 0 #37383c, 4px 4px 8px rgba(0, 0, 0, 0.7)',
                'shadow-customRed': '2px 2px 4px rgba(201, 17, 29, 0.2)',
                'shadow-customRed-md': '3px 3px 6px rgba(201, 17, 29, 0.3)',
                'shadow-customRed-lg': '1px 1px 0 #37383c, -1px 1px 0 #37383c, 1px -1px 0 #37383c, -1px -1px 0 #37383c, 4px 4px 8px rgba(201, 17, 29, 0.4)',
                'shadow-white': '2px 2px 4px rgba(255, 255, 255, 0.5)',
                'shadow-black': '2px 2px 4px rgba(0, 0, 0, 0.5)',
            },
            // Define custom text strokes
            textStrokeWidth: {
                '1': '1px',
                '2': '2px',
                '3': '3px',
                '4': '4px',
            },
            textStrokeColor: {
                white: '#ffffff',
                black: '#000000',
                // Add more colors as needed
            },
            borderColor: {
                customRed: '#c9111d',
                // Add more custom colors as needed
            }
        },
    },
    plugins: [
        function ({ addUtilities, theme }) {
            const newTextShadows = {
                '.text-shadow': {
                    textShadow: theme('textShadow.shadow'),
                },
                '.text-shadow-md': {
                    textShadow: theme('textShadow.shadow-md'),
                },
                '.text-shadow-lg': {
                    textShadow: theme('textShadow.shadow-lg'),
                },
                '.text-shadow-customRed': {
                    textShadow: theme('textShadow.shadow-customRed'),
                },
                '.text-shadow-customRed-md': {
                    textShadow: theme('textShadow.shadow-customRed-md'),
                },
                '.text-shadow-customRed-lg': {
                    textShadow: theme('textShadow.shadow-customRed-lg'),
                },
                '.text-shadow-white': {
                    textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
                },
                '.text-shadow-black': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                },
            };

            const newTextStrokes = {
                '.text-stroke-1': {
                    '-webkit-text-stroke-width': theme('textStrokeWidth.1'),
                },
                '.text-stroke-2': {
                    '-webkit-text-stroke-width': theme('textStrokeWidth.3'),
                },
                '.text-stroke-3': {
                    '-webkit-text-stroke-width': theme('textStrokeWidth.2'),
                },
                '.text-stroke-4': {
                    '-webkit-text-stroke-width': theme('textStrokeWidth.4'),
                },
                '.text-stroke-white': {
                    '-webkit-text-stroke-color': theme('textStrokeColor.white'),
                },
                '.text-stroke-black': {
                    '-webkit-text-stroke-color': theme('textStrokeColor.black'),
                },
                '.text-stroke-customRed': {
                    '-webkit-text-stroke-color': theme('colors.customRed'),
                },
            };

            // Add the new utilities to Tailwind
            addUtilities({ ...newTextShadows, ...newTextStrokes }, ['responsive', 'hover']);
        },
    ],
};
