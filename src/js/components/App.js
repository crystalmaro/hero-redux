import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux'
import List from './List';
import Profile from './Profile';

const App = () => (
  <>
		<List />
		<Profile />
  </>
  // <Router>
  //   <Route exact path='/' render={() => <Redirect to='/heroes' />} />
  //   <Route path='/heroes' component={List} />
  //   <Route path='/heroes/:heroId' component={Profile} />
  // </Router>
);
export default App;
