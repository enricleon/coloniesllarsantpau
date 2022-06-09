function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgba(var(${variable}), ${opacityValue})`;
  };
}

module.exports = {
  content: [
    './src/modules/**/components/**/*.{js,vue,ts}',
    './src/modules/**/layouts/**/*.vue',
    './src/modules/**/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        titles: ['Quicksand', 'sans-serif'],
        sans: ['Work Sans', 'sans'],
      },
      colors: {
        primary: withOpacityValue('--color-primary'),
        secondary: withOpacityValue('--color-secondary'),
        accent: withOpacityValue('--color-accent'),
      },
      // screens: {
      //   xs: 480
      // }
    },
  },
  plugins: [
    // require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [],
  },
};
