import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/components/App';

import store from './js/store/index';

window.store = store;
// store.subscribe(() => console.log(store.getState()));
store.subscribe(() => store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
