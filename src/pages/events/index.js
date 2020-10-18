import React from 'react'

import Layout from '../../components/Layout'
import EventList from '../../components/EventList'

export default class EventIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              // backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Events
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <EventList />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
