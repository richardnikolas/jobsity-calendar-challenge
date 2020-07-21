import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { routes } from './shared/constants/routes';
import { muiTheme, palette } from './shared/styles/theme';
import configureStore, { history } from './store';
import withContext from './shared/hoc/withContext';
import HomePageContainer from './features/calendar/views/HomePageContainer';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    overflowX: 'hidden',
    height: '100%',
    backgroundColor: palette.background.main,
  }
});

const store = configureStore();

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <div className={classes.root} id={'rootApp'}>
          <ConnectedRouter history={history}>
            <Route path="*">
              <Switch>
                <Route
                  exact
                  path={routes.home.path}
                  render={withContext(HomePageContainer)} />
                <Redirect path="*" to={routes.home.path} />
              </Switch>
            </Route>
          </ConnectedRouter>
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App;
