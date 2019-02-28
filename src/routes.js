import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login/Login';
import Private from './components/Private/Private';

export default (
  <Switch>
    <Route path='/private' component={Private}/>
    <Route exact path='/' component={Login}/>
  </Switch>
)