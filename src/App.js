import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
import './App.css';
import store from "./ducks/store"
import {Provider} from 'react-redux'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
