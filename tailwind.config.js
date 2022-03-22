const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                green: colors.emerald,
                blue: colors.blue,
                indigo: colors.indigo,
                purple: colors.violet,
                pink: colors.pink,
                rose: colors.rose,
                bgLeft: '#984D38',
                bgRight: '#181E41',
                primaryDark: '#671AE4',
                primaryLight: '#B75CFF'
            },
            screens: {
                'xs': '320px',
            }

        },
    },
    plugins: [require("@tailwindcss/typography")],
};