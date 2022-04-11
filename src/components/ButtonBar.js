import { styled } from "../stitches.config";

export const ButtonBar = styled("div", {
  display: "flex",

  "@sm": {
    flexDirection: "column",
    px: "$2",
  },
  "@md": {
    flexDirection: "row",
    gap: "$2",
  },
});
