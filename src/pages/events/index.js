import React from 'react'

import Layout from '../../components/Layout'
import EventList from '../../components/EventList'

export default class EventIndexPage extends React.Component {
  render() {

    // '/img/blog-index.jpg'
    // const eventImage = 'https://images.pexels.com/photos/722708/seats-orange-congress-empty-722708.jpeg?cs=srgb&dl=pexels-skitterphoto-722708.jpg&fm=jpg'
    return (
      <Layout>
        <div className="full-width-image-container margin-top-0 spec-blue-background">
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
