import { createMuiTheme, Theme, responsiveFontSizes } from "@material-ui/core/styles";

const theme: Theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
            'Arial',
            '-apple-system',
            'BlinkMacSystemFont'
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
