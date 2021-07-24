export const themes = {
  light: {
    forground: "#00000",
    background: "#eeeeee",
  },
  dark: {
    forground: "#FFFFF",
    background: "#22222",
  },
};

export const ThemeContext = React.createContext(themes.dark);
