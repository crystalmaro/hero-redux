import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHeroes, getProfile } from '../actions/index';
import '../../css/profile.css'

export class List extends Component {

  renderProfile = () => {
    return (
      Object.entries(this.props.remoteProfile).map(([name, value]) =>
          <div key={name+value} className="powerList">
            <div className="powerTitle">{name.toUpperCase()}</div>
            <button type="button">+</button>
            <div className="powerNumber">{value}</div>
            <button type="button">-</button>
          </div>
      )
    )
  }

	render() {
    console.log('[component] profile')
		return (
      <>
        <div className="heroProfileContainer" style={this.props.profilePoints > 0 ? {display:'flex'}:{display:'none'}}>
          <div className="left">{this.renderProfile()}</div>
          <div className="right">
            <div>剩餘點數：0</div>
            <button type="button">儲存</button>
          </div>
        </div>
        {/* {this.props.remoteProfile.map((items, index) => {
          return (
            <div key={index} className="heroProfileContainer">
              <div className="left">
                {Object.keys(items).map((key) => {
                  return (
                    <div key={key + index} className="powerList">
                      <div className="powerTitle">{key.toUpperCase()}</div>
                      <button type="button">+</button>
                      <div className="powerNumber">{items[key]}</div>
                      <button type="button">-</button>
                    </div>
                  )
                })}
              </div>
              <div className="right">
                <div>剩餘點數：30</div>
                <button type="button">儲存</button>
              </div>
            </div>
          )
        })} */}
      </>
    )
	}
}

function mapStateToProps(state) {
	return {
    remoteHeroes: state.remoteHeroes,
    remoteProfile: state.remoteProfile,
    profilePoints: state.profilePoints,
	};
}

export default connect(mapStateToProps, { getHeroes, getProfile })(List);
