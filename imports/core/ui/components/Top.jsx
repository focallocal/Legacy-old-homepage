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
              <a className="btn height-fix" href="http://action.focallocal.org/fl-actioncenter/">Build Projects</a>
              <a className="btn" href="http://gather.focallocal.org/events/map">Meet Focallocallers</a>
            </div>
            <h4>Local Action for Global Change</h4>
          </div>
        </div>
      </div>
    );
  }
}
