import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import List from './List';
import Profile from './Profile';

export class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
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
