import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Posts } from "../pages/index";
import Menu from '../components/Menu';

function App() {
  return (
    <div>
      <Menu />
      <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="/about/:name" component={About}/>
          <Route path="/about" component={About}/>
        </Switch>
      <Route path="/posts" component={Posts}/>
    </div>
  );
}

export default App;
