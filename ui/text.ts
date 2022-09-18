import { styled } from "../ui/stitches.config";

export const Text = styled("span", {
  color: "black",
  fontSize: "$fs3",
  display: "block",
  cursor: "pointer",
  variants: {
    Color: {
      primary: {
        color: "$primaryColor",
        background: "$secondaryColor",
      },
      secondary: {
        color: "$secondaryColor",
        background: "$primaryColor",
      },
    },
    Gradient: {
      true: {
        background: "linear-gradient(gray, white)",
      },
    },
    Disabled: {
      true: {
        cursor: "not-allowed",
        color: "gray",
      },
    },
  },
});
