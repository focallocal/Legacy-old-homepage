import React, { PureComponent } from 'react';

export class Top extends PureComponent {
  render() {
    return (
      <div id="top">
        <div className="container">
          <div className="center-content">
            <img className="logo" src="/images/logo.png" alt="logo" />
            {/*<div className="mission">*/}
              {/*<button><i className="fa fa-play" /></button>*/}
              {/*<p>Your mission starts now</p>*/}
            {/*</div>*/}
            <div className="buttons">
              <a className="btn" href="http://action.focallocal.org/fl-actioncenter/">Use your skills</a>
              <a className="btn" href="http://gather.focallocal.org/events/map">Meet locals</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
