import React, { Component } from 'react';
import { connect } from 'react-redux';
import { patchPower, incPower, decPower } from '../actions/index';
import '../../css/profile.css';

export class Profile extends Component {
	renderProfile = () => {
		return Object.entries(this.props.remoteProfile).map(([ name, value ]) => (
			<div key={name + value} className="powerList">
				<div className="powerTitle">{name.toUpperCase()}</div>
				<button
					type="button"
					className={this.props.availablePoints === 0 ? 'disableButton' : 'addButton'}
					onClick={this.props.incPower}
				>
					+
				</button>
				<div className="powerNumber">{value}</div>
				<button type="button" className="minusButton" onClick={this.props.decPower}>
					-
				</button>
			</div>
		));
	};

	render() {
		console.log('[component] profile');
		return (
			<div
				className="heroProfileContainer"
				style={this.props.totalPoints > 0 ? { display: 'flex' } : { display: 'none' }}
			>
				<div className="left">{this.renderProfile()}</div>
				<div className="right">
					<div>剩餘點數：{this.props.availablePoints}</div>
					<button
						type="button"
						className={this.props.availablePoints === 0 ? 'powerButton' : 'patchDisabled'}
						onClick={
							this.props.availablePoints === 0 ? (
								() => this.props.patchPower(this.props.currentHeroID, this.props.remoteProfile)
							) : null
						}
					>
						儲存
					</button>
				</div>
			</div>
		);
	}
}

// pass state/status from reducer, so this componenet can access it as props
function mapStateToProps(state) {
	return {
		remoteHeroes: state.remoteHeroes,
		remoteProfile: state.remoteProfile,
		totalPoints: state.totalPoints,
		availablePoints: state.availablePoints,
		currentHeroID: state.currentHeroID,
	};
}

export default connect(mapStateToProps, { patchPower, incPower, decPower })(Profile);
