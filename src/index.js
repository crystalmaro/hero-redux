import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import './index.css';
import App from './js/components/App';
import * as serviceWorker from './serviceWorker';


import store from './js/store/index';
// import { addArticle } from './js/actions/index';

window.store = store;
// window.addArticle = addArticle;
store.subscribe(() => console.log(store.getState()));
// store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }));
// store.dispatch(addArticle({ title: 'crystal test', id: 2 }));

ReactDOM.render(
	<Provider store={store}>
    {/* <Router>
      <Route path="/" component={App} />
    </Router> */}
    <App />
  </Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
