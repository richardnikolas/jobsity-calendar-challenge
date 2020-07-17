import { createMuiTheme } from '@material-ui/core/styles';

export const palette = {
  primary: {
    main: '#ff6f0b',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#efeff1'
  },
  error: {
    main: '#f44336'
  },
  background: {
    main: '#d6aef2'
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