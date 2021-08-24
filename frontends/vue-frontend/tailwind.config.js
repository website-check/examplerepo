module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        secondary: {
          50: '#F3FEFC',
          100: '#E6FCF9',
          200: '#C2F8EF',
          300: '#9DF3E6',
          400: '#53EAD3',
          500: '#09E1C0',
          600: '#08CBAD',
          700: '#058773',
          800: '#046556',
          900: '#03443A'
        },
        primary: {
          50: '#F5F7FA',
          100: '#ECF0F5',
          200: '#CFD9E6',
          300: '#B1C2D6',
          400: '#7794B8',
          500: '#3D6699',
          600: '#375C8A',
          700: '#253D5C',
          800: '#1B2E45',
          900: '#121F2E'
        },
        old_secondary: {
          50: '#FEF9F6',
          100: '#FDF2EC',
          200: '#FAE0D1',
          300: '#F6CDB5',
          400: '#F0A77D',
          500: '#E98145',
          600: '#D2743E',
          700: '#8C4D29',
          800: '#693A1F',
          900: '#462715'
        },
        old_primary: {
          50: '#F4F9FB',
          100: '#EAF2F8',
          200: '#CADFED',
          300: '#AACBE3',
          400: '#6BA5CD',
          500: '#2B7EB8',
          600: '#2771A6',
          700: '#1A4C6E',
          800: '#133953',
          900: '#0D2637'
        }

      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
