import React from 'react';
import { Provider } from 'react-redux';
import { Ballot } from './components/Ballot';
import { store } from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/:id">
            <Ballot />
          </Route>
          <Route path="/">
            <div>Hello</div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
