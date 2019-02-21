import { DefaultTheme } from "react-native-paper";

const PRIMARY = "#1b5e20";
const SECONDARY = "#4c8c4a";
const ACCENT = "white";

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY,
    secondary: SECONDARY,
    accent: ACCENT
  }
};

export default THEME;
