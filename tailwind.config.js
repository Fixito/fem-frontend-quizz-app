import plugin from "tailwindcss/plugin";

const backgroundColors = {
  neutral: "hsl(var(--color-bg-neutral) / <alpha-value>)",
  brand: "hsl(var(--color-bg-brand) / <alpha-value>)",
  idle: "hsl(var(--color-bg-idle) / <alpha-value>)",
  subtle: "hsl(var(--color-bg-subtle) / <alpha-value>)",
  "btn-idle": "hsl(var(--color-bg-btn-idle) / <alpha-value>)",
  success: "hsl(var(--color-bg-success) / <alpha-value>)",
  danger: "hsl(var(--color-bg-danger) / <alpha-value>)",
  "brand-hovered": "hsl(var(--color-bg-brand-hovered) / <alpha-value>)",
  toggle: "hsl(var(--color-toggle-icon) / <alpha-value>)",
};

const borderColors = {
  brand: "hsl(var(--color-border-brand) / <alpha-value>)",
  success: "hsl(var(--color-border-success) / <alpha-value>)",
  danger: "hsl(var(--color-border-danger) / <alpha-value>)",
  inverse: "hsl(var(--color-border-inverse) / <alpha-value>)",
};

const textColors = {
  neutral: {
    DEFAULT: "hsl(var(--color-text-neutral) / <alpha-value>)",
    inverse: "hsl(var(--color-text-inverse) / <alpha-value>)",
  },
  brand: "hsl(var(--color-text-brand) / <alpha-value>)",
  subtle: "hsl(var(--color-text-subtle) / <alpha-value>)",
  subtlest: "hsl(var(--color-text-subtlest) / <alpha-value>)",
  danger: "hsl(var(--color-text-danger) / <alpha-value>)",
};

const backgroundImages = {
  "pattern-mobile": "var(--pattern-bg-mobile)",
  "pattern-tablet": "var(--pattern-bg-tablet)",
  "pattern-desktop": "var(--pattern-bg-desktop)",
};

const boxShadows = {
  "surface-default": "0 16px 40px 0 hsla(220, 29%, 66%, 14%)",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      // Background concerns
      backgroundColor: backgroundColors,
      gradientColorStops: backgroundColors,
      backgroundImage: backgroundImages,

      // Border concerns
      borderColor: borderColors,
      stroke: borderColors,
      outlineColor: borderColors,
      ringColor: borderColors,

      // Text concerns
      textColor: textColors,
      fill: textColors,

      // Shadow concerns
      boxShadow: boxShadows,
    },
  },
  plugins: [
    plugin(function ({ addComponents, addVariant, theme }) {
      addVariant("progress-unfilled", ["&::-webkit-progress-bar", "&"]),
        addVariant("progress-filled", [
          "&::-webkit-progress-value",
          "&::-moz-progress-bar",
          "&",
        ]),
        addComponents({
          ".text-display": {
            fontSize: "5.5rem",
            fontWeight: theme("fontWeight.medium"),
            lineHeight: theme("lineHeight.none"),
            "@media screen(md)": {
              fontSize: "9rem",
            },
          },
          ".text-heading-lg-bold": {
            fontSize: "2.5rem",
            fontWeight: theme("fontWeight.medium"),
            lineHeight: theme("lineHeight.none"),
            color: theme("textColors.neutral.DEFAULT"),
            "@media screen(md)": {
              fontSize: "4rem",
            },
          },
          ".text-heading-lg-regular": {
            fontSize: "2.5rem",
            fontWeight: theme("fontWeight.normal"),
            lineHeight: theme("lineHeight.none"),
            "@media screen(md)": {
              fontSize: "4rem",
            },
          },
          ".text-heading-md-medium": {
            fontSize: theme("fontSize.xl"),
            fontWeight: theme("fontWeight.medium"),
            lineHeight: "1.2",
            "@media screen(md)": {
              fontSize: theme("fontSize.4xl"),
            },
            "@media screen(xl)": {
              lineHeight: theme("lineHeight.none"),
            },
          },
          ".text-heading-sm-medium": {
            fontSize: theme("fontSize.lg"),
            fontWeight: theme("fontWeight.medium"),
            lineHeight: theme("lineHeight.none"),
            "@media screen(md)": {
              fontSize: "1.75rem",
            },
          },
          ".text-body-md-regular": {
            fontSize: theme("fontSize.lg"),
            fontWeight: theme("fontWeight.normal"),
            lineHeight: theme("lineHeight.normal"),
            "@media screen(md)": {
              fontSize: theme("fontSize.2xl"),
            },
          },
          ".text-body-sm-regular-italic": {
            fontSize: theme("fontSize.sm"),
            fontWeight: theme("fontWeight.normal"),
            lineHeight: theme("lineHeight.normal"),
            fontStyle: "italic",
            "@media screen(md)": {
              fontSize: theme("fontSize.xl"),
            },
          },
        });
    }),
  ],
};
