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
  $$topGradient: "gray",
  $$bottomGradient: "white",
  variants: {
    Color: {
      primary: {
        color: "$primaryColor",
        background: "$secondaryColor",
        $$topGradient: "$colors$secondaryColor",
        $$bottomGradient: "Aqua",
      },
      secondary: {
        color: "$secondaryColor",
        background: "$primaryColor",
        $$topGradient: "$colors$primaryColor",
        $$bottomGradient: "Aquamarine",
      },
    },
    Gradient: {
      true: {
        background: "linear-gradient($$topGradient, $$bottomGradient)",
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
    // Removing gradient changes with compoundVariants since we are using now locally scoped tokens
    // {
    //   Color: "primary",
    //   Gradient: "true",
    //   css: {
    //     background: "linear-gradient($secondaryColor, Aqua)",
    //   },
    // },
    // {
    //   Color: "secondary",
    //   Gradient: "true",
    //   css: {
    //     background: "linear-gradient($primaryColor, Aquamarine)",
    //   },
    // },
  ],
});
