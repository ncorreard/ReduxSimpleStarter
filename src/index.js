import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

class Bye extends React.Component {
  render() {
    return <div>bye bye</div>;
  }

}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <Route path="/" component={App} />
      <Route path="/hello" component={Hello} />
      <Route path="/bye" component={Bye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
