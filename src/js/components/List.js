import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHeroes, getProfile } from '../actions/index';
import '../../css/list.css';

export class List extends Component {
	componentDidMount() {
		this.props.getHeroes();
		// getHeroes is a function defined in actions
		// with matching action type, it dispatch the action to the reducer
	}
	render() {
		console.log('[component] list');
		return (
			<div className="heroListContainer">
				{this.props.remoteHeroes.map((x) => (
					<div
						key={x.id}
						id={x.id}
						className="heroCard"
						onClick={this.props.getProfile}
						style={this.props.currentHeroID === x.id ? { boxShadow: '0 0 20px -5px #fa8b00' } : null}
					>
						<div className="heroImage">
							<img src={x.image} alt="profile" id={x.id} />
						</div>
						<div className="heroName" id={x.id}>
							{x.name}
						</div>
					</div>
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

export default connect(mapStateToProps, { getHeroes, getProfile })(List);
