import React, { PureComponent } from 'react';

export class Mission extends PureComponent {
  render() {
    return (
      <section id="mission" className="content-section side-text invert">
        <div className="container">
          <h2>What is our mission and message?</h2>
          <div className="row">
            <div>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUppGn2Z4b4?list=PLzwMXFvS_OYMIrrdyP1ASjmD3uz9NqC9p" frameBorder="0" allowFullScreen />
            </div>
            <div className="text-cont">
              <p>Times are changing, and so can your feeling of powerless at the problems in the world</p><p>
              <p>We all have the power to solve ALL of the world's problems ourselves by coming together and using positive and innovative tools to target their roots causes</p>
              <p>Each action may feel like a tiny ripple. As the Positve Action Movement sweeps around the world these ripples, will combine into an unstoppable wave of positive change!</p>
              <p>Focallocal is about empowering people, because the time for waiting for others to do it is over! That future will come if we all do a little, every day!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
