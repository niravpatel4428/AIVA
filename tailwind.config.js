/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MetBold: ['MetropolisBold'],
        MetSemiBold: ['MetropolisSemiBold'],
        MetMedium: ['MetropolisMedium'],
        MetRegular: ['MetropolisRegular'],
      },
      colors: {
        lightGray: '#F8F8F8',
        darkGray: '#333333',
        lightPurple: '#E4E1FC',
        lightBlue: '#E1E9F3',
        brightBlue: '#2764FE',
        brightRed: '#F1414F',
        slightPurple: '#EAF0FF',
      },
    },
  },
  plugins: [],
};
