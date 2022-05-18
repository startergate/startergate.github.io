import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Inter",
      styles: ["600"],
    },
  ],
  headerFontFamily: ["Inter", "serif"]
});

typography.injectStyles();

export default typography;
