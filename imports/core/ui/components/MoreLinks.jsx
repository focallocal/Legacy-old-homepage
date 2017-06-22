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
              <a href="https://www.youtube.com/user/Focallocal" className="btn">Watch + Share Videos</a>
            </div>
            <div className="item">
              <a href="https://www.facebook.com/groups/focallocal/" className="btn">Write + Read articles</a>
            </div>
            <div className="item">
              <a href="https://the-positive-action-shop.myshopify.com/" className="btn">Find + Get actions tools</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
