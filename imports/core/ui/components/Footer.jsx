import React, { PureComponent } from 'react';

export class Footer extends PureComponent {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div>
              <h4>About</h4>
              <p>This site is a part of the FocalLocal community</p>
            </div>
            <div>
              <h4>Sitemap</h4>
              <ul>
                <li><a href="/link">Link</a></li>
                <li><a href="/link">Link</a></li>
                <li><a href="/link">Link</a></li>
              </ul>
            </div>
            <div>
              <h4>Connect</h4>
              <div className="social-links">
                <a href="" className="social-link facebook">
                  <i className="fa fa-facebook" />
                </a>
                <a href="" className="social-link twitter">
                  <i className="fa fa-twitter" />
                </a>
                <a href="" className="social-link youtube">
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-text">
          <div className="container">
              <strong>2017 FocalLocal.</strong> There's beauty all around you, remember to take a little break and enjoy it today
          </div>
        </div>
      </footer>
    );
  }
}
