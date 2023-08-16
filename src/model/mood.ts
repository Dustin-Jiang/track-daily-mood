type MoodPalette = {
  verySevere: Palette,
  severe: Palette,
  moderate: Palette,
  mild: Palette,
  fine: Palette
}

type Color = string

type Palette = {
  main: Color,
  text: Color
}

export const Mood: {
  light: MoodPalette;
  dark: MoodPalette;
} = {
  light: {
    verySevere: {
      main: "#be003b",
      text: "#ffffff",
    },
    severe: {
      main: "#9c4421",
      text: "#ffffff",
    },
    moderate: {
      main: "#715d00",
      text: "#ffffff",
    },
    mild: {
      main: "#2a5ab7",
      text: "#ffffff",
    },
    fine: {
      main: "#4b670a",
      text: "#ffffff",
    },
  },
  dark: {
    verySevere: {
      main: "#91002b",
      text: "#ffdadb",
    },
    severe: {
      main: "#7d2d0b",
      text: "#ffdbcf",
    },
    moderate: {
      main: "#e4c44a",
      text: "#3b2f00",
    },
    mild: {
      main: "#00419d",
      text: "#d9e2ff",
    },
    fine: {
      main: "#b0d36d",
      text: "#243600",
    },
  },
};