import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

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
      <Switch>
      <Route path="/posts/new" component={PostNew} />
      <Route path="/posts/:id" component={PostShow} />
      <Route path="/" component={PostsIndex} />
      <Route path="/bye" component={Bye} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
