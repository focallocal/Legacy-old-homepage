import React, { PureComponent } from 'react';

export class About extends PureComponent {
  render() {
    return (
      <section id="about" className="content-section">
        <div className="container">
          <h2>What is Focallocal?</h2>
          <p>
            <span>Focallocal is a way of living - and also an open, welcoming community made up of thousands of positive people, together targeting the root causes of any, and all societal issues.</span>
            <span>Since 2011 our Movement has been exploring new ideas, and fun activities which empower people, all around the world, to build a happier future for everyone.</span>
            <span>Join in and turn Positive Action into a daily habit to explore the power you have to change the world, and the happiness it will bring into your life.</span>
          </p>
          <div className="items">
            <div className="item">
              <div className="icon smiley" />
              <h4>Make the world better every day</h4>
            </div>
            <div className="item">
              <div className="icon friends" />
              <h4>Make the world better every day</h4>
            </div>
            <div className="item">
              <div className="icon share" />
              <h4>Make the world better every day</h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
