import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router } from './components/router';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './app/theme';
import { StoreProvider } from './store';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StoreProvider>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </StoreProvider>
  </ThemeProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
