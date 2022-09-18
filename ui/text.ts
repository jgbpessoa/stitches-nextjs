import { styled } from "../ui/stitches.config";

export const Text = styled("span", {
  color: "black",
  background: "lightgray",
  fontSize: "$fs2",
  display: "block",
  width: "fit-content",
  paddingInline: "1rem",
  cursor: "pointer",
  marginTop: "1rem",
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
  compoundVariants: [
    {
      Color: "primary",
      Disabled: "true",
      css: {
        color: "Aqua",
      },
    },
    {
      Color: "secondary",
      Disabled: "true",
      css: {
        color: "Aquamarine",
      },
    },
    {
      Color: "primary",
      Gradient: "true",
      css: {
        background: "linear-gradient($secondaryColor, Aqua)",
      },
    },
    {
      Color: "secondary",
      Gradient: "true",
      css: {
        background: "linear-gradient($primaryColor, Aquamarine)",
      },
    },
  ],
});
