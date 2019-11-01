import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHeroes } from '../actions/index';
import '../../App.css';

export class List extends Component {
	componentDidMount() {
		this.props.getHeroes();
	}
	render() {
		return (
      <div className='heroListContainer'>
      {this.props.remoteHeroes.map((el) => 
      <div className="heroCard" key={el.id}>
				<div className="heroImage">
					<img
						src={el.image}
						alt="profile"
					/>
				</div>
				<div className="heroName">{el.name}</div>
        </div>)}
      </div>
    )
	}
}

function mapStateToProps(state) {
	return {
		remoteHeroes: state.remoteHeroes,
	};
}

export default connect(mapStateToProps, { getHeroes })(List);
