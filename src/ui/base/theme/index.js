import { GlobalStyle } from "./GlobalStyle";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 8, 10, 12, 20, 28, 36, 100, 122, 137],
  sizes: [0, 24, 32, 40, 80, 100, 220],
  fontSizes: [14, 16, 24],
  zIndices: [0, 2, 4, 6, 8],
  fontWeights: {
    _: 400,
    bold: 700,
  },
  radii: [0, 2, 5, 10],
  align: {
    center: "center",
  },
  colors: {
    blue: "#07c",
    red: "#e10",
    lightBlue: "#F1FAFE",
    lightGray: "#F3F6F9",
    secondary: "#1BC5BD",
    primary: "#005B96",
    textSecondary: "#7E8299",
    textPrimary: "#011F4B",
    accent: "#F6CA65",
  },
  chartColors: ["#A259FF", "#F24E1E", "#FFC107", "#6497B1", "#005B96"],
};

theme.sizes.auto = "auto";
theme.sizes.full = "100%";
theme.space.auto = "auto";

theme.breakpoints.small = theme.breakpoints[0];
theme.breakpoints.medium = theme.breakpoints[1];
theme.breakpoints.large = theme.breakpoints[2];

theme.contentMargin = {
  _closed: 4,
  closed: 6,
  open: 7,
};
theme.navBarTopPadding = 4;

theme.getComputedSizes = ({ sidebarOpen }) => ({
  content: {
    ml: {
      _: sidebarOpen ? theme.contentMargin.open : theme.contentMargin._closed,
      small: sidebarOpen
        ? theme.contentMargin.open
        : theme.contentMargin.closed,
    },
    width: {
      _: `calc(100vw - ${(
        (sidebarOpen && theme.space[theme.contentMargin.open]) ||
        theme.space[theme.contentMargin._closed]
      ).toString()}px);`,
      small: `calc(100vw - ${(
        (sidebarOpen && theme.space[theme.contentMargin.open]) ||
        theme.space[theme.contentMargin.closed]
      ).toString()}px);`,
    },
  },
});

theme.breakpointsToPx = (breakpoint) =>
  parseInt(theme.breakpoints[breakpoint].slice(0, -2)) * 16;

export { GlobalStyle };
export default theme;
