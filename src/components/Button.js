import { styled } from "../stitches.config";

export const Button = styled("button", {
  width: "100%",
  borderRadius: 9999,
  cursor: "pointer",
  fontSize: 20,
  padding: "$1",
  "&:hover": {
    backgroundColor: "#cccccc",
  },
  variants: {
    color: {
      red: {
        backgroundColor: "#c00000",
        "&:hover": {
          backgroundColor: "red",
        },
      },
      green: {
        backgroundColor: "green",
        "&:hover": {
          backgroundColor: "limegreen",
        },
      },
    },
  },
  "@sm": {
    my: "$1",
  },
  "@md": {
    my: 0,
  },
});
