import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHeroes, getProfile, setID } from '../actions/index';
// import Profile from './Profile';
import '../../css/list.css';

export class List extends Component {
	componentDidMount() {
		this.props.getHeroes();
		// getHeroes is a function defined in actions
		// with matching action type, it dispatch the action to the reducer
	}
	render() {
		return (
			<div className="heroListContainer" onClick={this.props.setID}>
				{this.props.remoteHeroes.map((x) => (
					<Link
						to={`/heroes/${x.id}`}
						// to="/test"
						key={x.id}
						id={x.id}
						className="heroCard"
						style={this.props.currentHeroID == x.id ? { boxShadow: '0 0 20px -5px #fa8b00' } : null}
					>
						<div className="heroImage">
							<img src={x.image} alt="profile" id={x.id} />
						</div>
						<div className="heroName" id={x.id}>
							{x.name}
						</div>
					</Link>
				))}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		remoteHeroes: state.remoteHeroes,
		currentHeroID: state.currentHeroID,
	};
}

export default connect(mapStateToProps, { getHeroes, getProfile, setID })(List);
