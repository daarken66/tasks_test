import { createTheme } from '@mui/material';


const theme = createTheme({
    typography: {
        h1: {
            fontSize: 30,
            fontWeight: 600
        },
        h2: {
            fontSize: 24,
            fontWeight: 400
        },
        h3: {
            fontSize: 20,
            fontWeight: 400
        },
        h4: {
            fontSize: 18,
            fontWeight: 400
        },
    },
    palette: {
        primary: {
            main: "#000000"
        },
        secondary: {
            main: "#CCC"
        }
    }
})

export default theme;