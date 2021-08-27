import { Route, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import NotFoundView from "./components/NotFoundView";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route component={NotFoundView} />
  </Switch>
);

export default App;
