import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Playground from './pages/Playground/Playground.jsx';

function App() {
  const hist = createBrowserHistory();
  return (
    <Router history={hist}>
      <Switch>
        <div>
          <Route path="/" component={Playground} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
