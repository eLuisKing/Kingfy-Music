/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'astronauta': "url('../img/bg-aus.png')",
      },
      backgroundColor: theme =>({
				...theme('colors'),
				'primary': '#0f172a',
        'secundary': '#1e293b',
        'base1': '#1d4ed8',
        'base2': '#2563eb'
			}),
      textColor:{
				'white': '#f8fafc',
        'blacl': '#171717',
        'gray': '#cbd5e1',
        'base1-t': '#1d4ed8',
        'base2-t': '#2563eb'
			},
      fontFamily: {
				Montserrat: ["Montserrat", "sans-serif"],
			 },
    },
  },
  plugins: [],
}
