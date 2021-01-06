import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/spec-logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render () {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo" title="Logo">
              <img src={logo} alt="SPEC" width="60" height="60" />
              <span className="site-title">SPEC</span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about" activeClassName="is-active">
                About Us
              </Link>
              <Link className="navbar-item" to="/our-work" activeClassName="is-active">
                Our Work
              </Link>
              <Link className="navbar-item" to="/events" activeClassName="is-active">
                Events
              </Link>
              <Link className="navbar-item" to="/blog" activeClassName="is-active">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact" activeClassName="is-active">
                Get Involved
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field">
                  <p className="control">
                    <a
                      className="button is-light has-text-white is-medium"
                      href="https://opencollective.com/spec/contribute"
                      target="_blank"
                      style={{background: '#587AA0'}}
                    >
                      Donate
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
