import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHeroes, getProfile, setID } from '../actions/index';
import '../../css/list.css';

export class List extends Component {
	componentDidMount() {
		this.props.getHeroes();
		// getHeroes is a function defined in actions
		// with matching action type, it dispatches the action to the reducer
	}
	render() {
		// ES6 destructure to increase readability
		const { setID, remoteHeroes, currentHeroID } = this.props;
		return (
			<div className="heroListContainer" onClick={setID}>
				{remoteHeroes.map((x) => (
					<Link
						to={`/heroes/${x.id}`}
						key={x.id}
						id={x.id}
						className="heroCard"
						style={currentHeroID == x.id ? { boxShadow: '0 0 20px -5px #fa8b00' } : null}
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
