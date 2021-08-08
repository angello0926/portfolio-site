import { transparentize } from "@theme-ui/color"


export default {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors: {
    primary: `white`,
    secondary: `gray`,
    toggleIcon: `gray`,
    heading: `black`,
    divide: `gray`,
    background: `white`,
    text: `black`,
    modes: {
      dark: {
        text: `white`,
        primary: `white`,
        secondary: `#7f8ea3`,
        toggleIcon: `gray`,
        background: `#1A202C`,
        heading: `white`,
        divide: `gray`,
        muted: `gray`,
      },
    },
  },
  fonts: {
    body: `math`,
    heading: `"Bodoni Moda", sans-serif;`
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
    },
    a: {
      textDecoration: `none`,
      color: `text`
    },
    img: {
      width: `100%`
    },
    p: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      wordBreak: `break-word`,
    },
    ul: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    h1: {
      variant: `text.heading`,
      fontSize: [5, 6, 6, 7],
      mt: 4,
      fontWeight: 400,
    },
    h2: {
      variant: `text.heading`,
      fontSize: [4, 5, 5, 6],
      mt: 4,
      fontWeight: 400,
    },
    h3: {
      variant: `text.heading`,
      fontSize: [3, 4, 4, 5],
      mt: 4,
      fontWeight: 400,
    },
    h4: {
      variant: `text.heading`,
      fontSize: [2, 3, 3, 4],
      mt: 3,
      fontWeight: 400,
    },
    h5: {
      variant: `text.heading`,
      fontSize: [1, 2, 2, 3],
      mt: 3,
      fontWeight: 400,
    },
    h6: {
      variant: `text.heading`,
      fontSize: 1,
      mb: 2,
      fontWeight: 400,
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
    table: {
      width: `100%`,
      my: 4,
      borderCollapse: `separate`,
      borderSpacing: 0,
      [[`th`, `td`]]: {
        textAlign: `left`,
        py: `4px`,
        pr: `4px`,
        pl: 0,
        borderColor: `muted`,
        borderBottomStyle: `solid`,
      },
    },
    th: {
      verticalAlign: `bottom`,
      borderBottomWidth: `2px`,
      color: `heading`,
    },
    td: {
      verticalAlign: `top`,
      borderBottomWidth: `1px`,
    },
    hr: {
      mx: 0,
    },
  },
  layout: {
    container: {
      padding: [3, 4],
      maxWidth: `1024px`,
    },
  },
  text: {
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  copyButton: {
    backgroundColor: transparentize(`primary`, 0.8),
    border: `none`,
    color: `gray.2`,
    cursor: `pointer`,
    fontSize: [`14px`, `14px`, `16px`],
    fontFamily: `body`,
    letterSpacing: `0.025rem`,
    transition: `default`,
    "&[disabled]": {
      cursor: `not-allowed`,
    },
    ":not([disabled]):hover": {
      bg: `primary`,
      color: `white`,
    },
    position: `absolute`,
    top: 0,
    right: 0,
    zIndex: 1,
    borderRadius: `0 0 0 0.25rem`,
    padding: `0.25rem 0.6rem`,
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    }
  }
}
