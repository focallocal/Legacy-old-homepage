import React, { PureComponent } from 'react';

export class Adventures extends PureComponent {
  render() {
    return (
      <section id="adventures" className="content-section side-text">
        <div className="container">
          <h2>What adventures await me?</h2>
          <div className="row">
            <div>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUppGn2Z4b4?list=PLzwMXFvS_OYMIrrdyP1ASjmD3uz9NqC9p" frameBorder="0" allowFullScreen />
            </div>
            <div className="text-cont">
              <p>You'll be a part of a growing global movement with a plan to change the world. Meeting positive, pro-active, awesome new friends both locally, and globally. Together using simple, fun activities and exploring new ideas to shape friendlier, happier communities everywhere and bring more peace in our world
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
