import { createStitches, createTheme } from "@stitches/react";

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      text: "black",
      background: "white",
    },
    space: {
      1: "10px",
      2: "20px",
    },
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  utils: {
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const darkTheme = createTheme({
  colors: {
    text: "white",
    background: "black",
  },
});

const GlobalStyles = globalCss({
  body: {
    background: "$background",
    color: "$text",
  },
});

GlobalStyles();
