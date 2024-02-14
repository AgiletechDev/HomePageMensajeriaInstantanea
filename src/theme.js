import { createTheme  } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      primary: {
        gradient: 'linear-gradient(83deg, rgba(119,55,142,1) 0%, rgba(84,85,154,1) 50%, rgba(46,119,167,1) 100%)',
        main: '#d8222c',
        second:'#403c3c',
      },
      secondary: {
        main: '#262626',
        second: '#f6f6f6',
      },
      textDark:{
        main:'#030303',
        second:'#79747e',
        blue:'#2e3192'
      },
      textLight:{
        main:'#ffffff'
      },
      footer:{
        main:'#b387bf'
      }
    },
  })