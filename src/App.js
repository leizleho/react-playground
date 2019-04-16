import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Playground from './playground1.jsx';

function App() {
  const hist = createBrowserHistory();
  return (
    <Switch>
      <Router history={hist}>
        <div>
          <Route path="/" component={Playground} />
        </div>
      </Router>
    </Switch>
  );
}

export default App;
