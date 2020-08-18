import { createMuiTheme, Theme, responsiveFontSizes } from "@material-ui/core/styles";
// import { blue, orange } from "@material-ui/core/colors";

// const primaryColor: string = blue[700];
// const secondaryColor: string = orange[500];

const theme: Theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
            // 'Arial',
            // '-apple-system',
            // 'BlinkMacSystemFont',
            // '"Segoe UI"',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        type: "dark",
        primary: {
            main: "#eba834"
            }
    },
  
});

const responsiveTheme: Theme = responsiveFontSizes(theme);

export { responsiveTheme as theme };
