import React, { PureComponent } from 'react';

export class Mission extends PureComponent {
  render() {
    return (
      <section id="mission" className="content-section side-text invert">
        <div className="container">
          <h2>What is our mission and message?</h2>
          <div className="row">
            <div>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/tG4l514O0t4" frameBorder="0" allowFullScreen />
            </div>
            <div className="text-cont">
              <p>It’s time to stop waiting and realise that we all have the power to solve ALL of society's problems ourselves by coming together and using positive and innovative tools that target the roots causes of those issues. Each action may only feel like a tiny ripple, but together as a movement all around the world these ripples combine, growing into an unstoppable wave of positive change! Focallocal is about empowering people, because together we can make a happier and safer future for everyone. The movement has already begun, and being a part of it is easy and a whole lot of fun! </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
