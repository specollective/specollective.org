import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/spec-logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4 social">
                <div className="content">
                  <img src={logo} alt="SPEC" style={{ width: '5em' }} />
                </div>

                <a title="facebook" href="https://www.facebook.com/specollective">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/specollective">
                  <img
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                {/* <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
                <a title="linkedin" href="https://www.linkedin.com/company/specollective">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>

              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/our-work">
                        Our Work
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/events">
                        Events
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Get Involved
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://opencollective.com/spec/contribute">
                        Donate
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
