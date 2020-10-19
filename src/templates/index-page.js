import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import logo from '../img/spec-logo.png'


import Layout from '../components/Layout'
import Features from '../components/Features'
import EventList from '../components/EventList'

export const IndexPageTemplate = ({
  description,
  heading,
  image,
  intro,
  mainpitch,
  ourwork,
  subtitle,
  subheading,
  title,
}) => {
  console.log(ourwork)
  return (
    <div>
      <div style={{width: '100%', paddingTop: '2em', paddingBottom: '4em'}}>
        <div style={{width: '100%'}}>
          <img
            alt="SPEC"
            src={logo}
            style={{
              width: '25%',
              margin: 'auto',
              display: 'block'
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="site-title has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              textAlign: 'center',
              color: 'black',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
          <h3
            className="subtitle has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              textAlign: 'center',
              color: 'black',
              lineHeight: '1',
              padding: '0.50em',
            }}
          >
            {subtitle}
          </h3>
        </div>
      </div>

      <section className="section section--gradient" style={{backgroundColor: '#f8f6f4'}}>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                        {heading}
                      </h3>
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="content">
                    <div className="tile">
                      <h3 className="subtitle">{description}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gradient" style={{backgroundColor: '#fbe3d0'}}>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h1 className="title has-text-weight-semibold is-size-2 has-text-centered">
                    {mainpitch.title}
                  </h1>
                </div>
                <div className="content">
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/about">
                        Learn More About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gradient" style={{backgroundColor: '#f8f6f4'}}>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h1 className="title has-text-weight-semibold is-size-2 has-text-centered">
                    Our Work
                  </h1>
                </div>
                <div className="content">
                  <Features gridItems={ourwork.topics} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/projects">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h1 className="title has-text-weight-semibold is-size-2 has-text-centered">
                    Events
                  </h1>
                </div>
                <div className="content">
                  <div className="column is-12">
                    <EventList />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/events">
                        More Events
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  ourwork: PropTypes.shape({
    topics: PropTypes.array,
  }),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        ourwork={frontmatter.ourwork}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        ourwork {
          topics {
            title
            icon
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            icon
            text
          }
          heading
          description
        }
      }
    }
  }
`
