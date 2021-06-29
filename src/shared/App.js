import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Posts, User, Users } from "../pages/index";
import Menu from '../components/Menu';

// function App() {
//   return (
//     <div>
//       <Menu />
//       <Route exact path="/" component={Home}/>
//         <Switch>
//           <Route path="/about/:name" component={About}/>
//           <Route path="/about" component={About}/>
//         </Switch>
//       <Route path="/posts" component={Posts}/>
//     </div>
//   );
// }

function App() {
  return(
    <div>
      <Menu />
      <Route exact path="/" component={ Home } />
      <Switch>
        <Route path="/about/" component={ About }/>
        <Route path="/about/:name" component={ About }/>
      </Switch>
      <Route path="/posts" component={ Posts }/>
      <Route exact path="/user/:userid" component={ User } />
      <Route path="/users" exact component={ Users } />
      <Route path="/users/:userid" component={ User }/>
    </div>
  );
}

export default App;
