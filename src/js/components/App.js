import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux'
import List from './List';
import Profile from './Profile';

// const App = () => (
// 	<>
// 		<List />
// 		<Profile />
// 	</>
// 	// <Router>
// 	// 	<Route exact path="/" render={() => <Redirect to="/heroes" />} />
// 	// 	<Route path="/heroes" component={List} />
// 	// 	<Route path="/heroes/:heroId" component={Profile} />
// 	// </Router>
// );

export class App extends Component {
	render() {
		return (
			<Router>
				<Route exact path="/" render={() => <Redirect to="/heroes" />} />
				<Route path="/heroes" component={List} />
				<Route path={`/heroes/${this.props.currentHeroID}`} component={Profile} />
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		// remoteHeroes: state.remoteHeroes,
		currentHeroID: state.currentHeroID,
	};
}
// export default App;

export default connect(mapStateToProps)(App);
