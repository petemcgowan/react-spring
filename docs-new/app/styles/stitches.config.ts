import { createStitches, PropertyValue } from '@stitches/react'

interface GradientBorderParams {
  width?: number
  gradient?: string
}

const stitches = createStitches({
  theme: {
    colors: {
      red: '#ff6d6d',
      steel: '#363645',
      black: '#1B1A22',
      white: '#fff',
      grey: '#ccc',
      'red-outline': 'rgba(255, 109, 109, 0.5)',
    },
    space: {
      '10': '1rem',
      '15': '1.5rem',
      '20': '2rem',
      '25': '2.5rem',
      '50': '5rem',
    },
    sizes: {
      splash: '40rem',
      document: '120rem',
    },
    radii: {
      r4: '0.4rem',
      r8: '0.8rem',
      r20: '2rem',
      round: '50%',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    fonts: {
      sans: 'Inter, -apple-system, system-ui, sans-serif',
      'sans-var': '"Inter var", -apple-system, system-ui, sans-serif',
      mono: '',
      serif: '',
    },
    fontWeights: {
      default: '400',
      bold: '600',
    },
    fontSizes: {
      XXL: '6.4rem',
      XL: '5.2rem',
      L: '4rem',
      M: '3.2rem',
      S: '2rem',
      XS: '1.4rem',
    },
    lineHeights: {
      XXL: '6.4rem',
      XL: '5.2rem',
      L: '4.8rem',
      M: '4rem',
      S: '2.8rem',
      XS: '2rem',
    },
  },
  media: {
    tabletUp: '(min-width: 768px)',
    desktopUp: '(min-width: 1024px)',
    largeDesktopUp: '(min-width: 1680px)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
    motion: '(prefers-reduced-motion)',
  },
  utils: {
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    visuallyHidden: () => ({
      position: 'absolute',
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    }),
    gradientBorder: ({ width = 1, gradient = '' }: GradientBorderParams) => ({
      position: 'relative',

      '&::before': {
        content: `''`,
        display: 'block',
        backgroundImage: gradient,
        position: 'absolute',
        top: `-${width}px`,
        left: `-${width}px`,
        width: `calc(100% + ${width * 2}px)`,
        height: `calc(100% + ${width * 2}px)`,
        borderRadius: 'inherit',
        zIndex: -1,
      },
    }),
  },
})

const { styled, globalCss, getCssText } = stitches

export { styled, getCssText, globalCss }
