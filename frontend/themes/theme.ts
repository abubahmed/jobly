import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins";

const fonts = "Poppins, sans-serif";
const Colors = { primary: "#ffffff" };

export const theme = createTheme({
  typography: {
    fontFamily: fonts,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          body: {
            fontFamily: fonts,
          },
        },
      },
    },
  },
});