import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Todo from '../modules/Todo';
import Done from '../modules/Done';

export const router = [
  { name: 'Todo', router: '/', component: Todo },
  { name: 'Done', router: '/done', component: Done },
];

const Routes = () => (
  <Switch>
    {router.map((r) => (
      <Route path={r.router} key={r.name} component={r.component} exact />
    ))}
    <Redirect to="/" />
  </Switch>
);

export default Routes;
