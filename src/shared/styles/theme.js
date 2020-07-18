import { createMuiTheme } from '@material-ui/core/styles';

export const palette = {
  primary: {
    main: '#426cc7',
    darker: '#052a79',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#efeff1'
  },
  error: {
    main: '#f44336'
  },
  background: {
    main: '#c9dae6'
  },
};

export const muiTheme = createMuiTheme({
  palette: {
    primary: palette.primary,
    secondary: palette.secondary,
    error: palette.error
  },
  overrides: {

  }
});