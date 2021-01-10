import React from 'react'
import Layout from '../../components/Layout'
import logo from '../../img/spec-logo.png'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <div style={{width: '100%', paddingTop: '2em', paddingBottom: '4em'}}>
            <div style={{width: '100%'}}>
              <img
                alt="SPEC"
                src={logo}
                style={{ width: '25%', margin: 'auto', display: 'block' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                height: '150px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <h1 className="site-title has-text-weight-bold has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              >
                Thank you for your inquiry!
              </h1>
              <h3 className="subtitle has-text-centered is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
                We will be in contact soon.
              </h3>
              <div style={{display: 'flex'}}>
                <Link className="button is-success has-text-weight-semibold is-medium" to="/">
                  Back to Home →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
