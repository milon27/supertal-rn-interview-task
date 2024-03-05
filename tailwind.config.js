/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#032541",
                secondary: "#01b4e4",
            },
        },
    },
    plugins: [],
}
