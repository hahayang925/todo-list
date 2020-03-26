import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Todo from '../modules/Todo';
import About from '../modules/About';
import Done from '../modules/Done';

const Routes = () => (
  <Switch>
    <Route path="/" component={Todo} exact />
    <Route path="/about" component={About} exact />
    <Route path="/done" component={Done} exact />
  </Switch>
);

export default Routes;
