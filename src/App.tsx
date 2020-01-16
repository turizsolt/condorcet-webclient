import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Ballot } from "./components/Ballot";
import { store } from "./store";

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
