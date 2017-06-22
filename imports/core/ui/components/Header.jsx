import React, { PureComponent } from 'react';
import $ from 'jquery';
import { Link } from 'react-scroll'

export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false,
      headerFixed: false,
    };
    this.toggleOpened = this.toggleOpened.bind(this);
  }

  componentDidMount() {
    $(window).on('scroll', () => {
      if (
        document.body.scrollTop > 0 &&
        !this.state.headerFixed
      ) {
        this.setState({ headerFixed: true });
      } else if (
        document.body.scrollTop === 0
      ) {
        this.setState({ headerFixed: false });
      }
    });
  }

  componentWillUnmount() {
    $(window).off('scroll');
  }

  toggleOpened() {
    this.setState({ menuOpened: !this.state.menuOpened });
  }

  render() {
    return (
      <header
        id="header"
        className={this.state.headerFixed ? '_fixed' : ''}
      >
        <div className="container">
          <button
            className="toggle-menu"
            onClick={this.toggleOpened}
          >
            <i className="fa fa-bars" />
          </button>
          <a className="logo">
            <img src="/images/logo_text.png" alt="logo"/>
          </a>
          <nav className={this.state.menuOpened ? '_opened' : ''}>
            <ul>
              <li><a href="#" className="_active">About us</a></li>
              <li><a href="http://news.focallocal.org/">Happy news</a></li>
              <li><a href="http://news.focallocal.org/">Action center</a></li>
              <li><a href="http://gather.focallocal.org">Map</a></li>
              <li><a href="http://brightertomorrowmap.com/">Projects</a></li>
              <li><a href="https://the-positive-action-shop.myshopify.com/">Shop</a></li>
            </ul>
            <button
              onClick={this.toggleOpened}
            ><i className="fa fa-times" /></button>
          </nav>
        </div>
      </header>
    );
  }
}
