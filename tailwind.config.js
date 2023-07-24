/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-mode-elements": "hsl(209, 23%, 22%)",
                "dark-mode-bg": "hsl(207, 26%, 17%)",
                "light-mode-text": "hsl(200, 15%, 8%)",
                "light-mode-input": "hsl(0, 0%, 52%)",
                "light-mode-bg": "hsl(0, 0%, 98%)",
                "light-mode-elements": "hsl(0, 0%, 100%)",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
