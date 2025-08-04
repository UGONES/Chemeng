/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0a237d",
                redAccent: "#ed1c23",
                yellowAccent: "#fff000",
                tealAccent: "#38b8b8ff",
                softBlack: "#353535ff",
                softWhite: "#f2f2f2e6",
                softBlue: "#0000d2ff",
                softGray: "#2b2b2b"
            },
            fontFamily: {
                display: ['"Inter"', "sans-serif"],
                fontSize: {
                    display: ['48px', '56px'],
                    heading: ['36px', '44px'],
                    subheading: ['28px', '36px'],
                },
            },
        },
        screens: {
            'xs': '320px',
            'sm': '375px',
            'ms': '425px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1440px',
            '2xl': '2560px',
        },

    },
    plugins: [],
};
