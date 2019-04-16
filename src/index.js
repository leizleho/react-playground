import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './scss/material-kit-pro-react.css';
import Playground from './pages/Playground/Playground.jsx';

const theme = createMuiTheme({ typography: { useNextVariants: true } });
const hist = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={Playground} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
