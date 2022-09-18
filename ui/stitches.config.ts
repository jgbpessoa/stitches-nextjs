import { createStitches, CreateStitches } from "@stitches/react";

export const { styled, theme } = createStitches({
  theme: {
    colors: {
      primaryColor: "#023047",
      secondaryColor: "#8ecae6",
      errorColor: "red",
      successColor: "limegreen",
    },
    fontSizes: {
      fs1: "0.75rem",
      fs2: "1.5rem",
      fs3: "3rem",
    },
  },
});
