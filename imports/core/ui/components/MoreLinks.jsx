import React, { PureComponent } from 'react';

export class MoreLinks extends PureComponent {
  render() {
    return (
      <section id="more-links"  className="content-section">
        <div className="container">
          <h2>Focallocal is all about taking action</h2>
          <p>Here's more actions to explore</p>
          <div className="buttons">
            <div className="item">
              <button>Watch + Share Videos</button>
            </div>
            <div className="item">
              <button>Write + Read articles</button>
            </div>
            <div className="item">
              <button>Find + Get actions tools</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
