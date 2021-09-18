import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import logo from '../img/spec-logo.png'
import Layout from '../components/Layout'
import Features from '../components/Features'
import EventList from '../components/EventList'
import MailingListForm from '../components/MailingListForm'

export const IndexPageTemplate = ({
  title,
  subtitle,
  mainpitch,
  values,
  image,
  intro,
}) => {
  return (
    <div>
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
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1 className="site-title has-text-weight-bold has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          >
            {title}
          </h1>
          <h3 className="subtitle has-text-centered is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
            {subtitle}
          </h3>
        </div>
      </div>

      <section className="section section--gradient spec-blue-background">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <div className="content">
                        <h1 className="site-title has-text-weight-semibold is-size-1 has-text-centered has-text-white">
                          {mainpitch.title}
                        </h1>
                      </div>

                      <div className="content is-size-1 has-text-centered has-text-white">
                        <article className="message">
                          <div className="message-body is-size-4 mainpitch-quote">
                            {mainpitch.quote}
                          </div>
                        </article>
                        <p className="is-size-5">{mainpitch.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gradient" style={{backgroundColor: 'rgb(250 166 52 / 20%)'}}>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <h1 className="site-title has-text-weight-semibold is-size-1 has-text-centered">
                    {values.title}
                  </h1>
                </div>
                <div className="content">
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="button is-success has-text-weight-semibold is-medium" to="/about">
                        About Us →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--gradient" style={{backgroundColor: '#ECEBEA'}}>
        <div className="columns">
          <div className="column is-6">
            <div className="section">
              <div className="columns">
                <div className="column is-2"></div>
                <div className="column is-10">
                  <div className="content">
                    <div className="content">
                      <h1 className="site-title has-text-weight-semibold is-size-1">
                        Background
                      </h1>
                    </div>

                    <div className="content">
                      <p>
                        SPEC was founded in June 2020 in response to the challenges of the COVID19 pandemic and social unrest facing communities across the United States. Its co-founders, Dr. Rhianna Rogers and Joe Torreggiani, connected online when Joe posted an offer to provide mentoring, technical training, and micro-loans to individuals from underrepresented backgrounds, and Dr. Rogers reached out about collaborating. They immediately discovered a shared mission of wanting to make the world work for everyone and deep concern about environmental and social justice. They established SPEC to empower individuals in their communities to learn new skills, build careers, and make an impact during this time of crisis and uncertainty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-12 has-text-centered">
                  <Link className="button is-success has-text-weight-semibold is-medium" to="/our-work">
                    Our Work →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-6 spec-blue-background">
            <section className="section">
              <div className="columns">
                <div className="column is-10">
                  <div className="content">
                    <div className="content">
                      <article className="message">
                        <div className="message-body">
                          For me, SPEC’s model has been a cross between a laboratory and a playground: I have tested ideas and made mistakes, all while feeling safe and supported. I’ve learned that there are many opportunities available to apply my talents, and ways I can help build a fairer world.
                          <br />
                          <cite> – Nay Farber</cite>
                        </div>
                      </article>
                      <article className="message">
                        <div className="message-body">
                          As a non-traditional student, I entered college with a clear vision for what I wanted my education and career to look like. However, because of the perspective and experience I gained from my education, I seriously reconsidered my career plans during my last year of school and I’m now working in a new professional role that I never expected (or prepared!) to fill. This program has already empowered me to grow and achieve in all of the roles I fill — employee, neighbor, student, citizen. I’ll always be grateful for the opportunity to spend my last year of college working with The Buffalo Project/SPEC because this program gave me an opportunity to build a diverse set of skills (writing, technology, cultural competency) that will serve me both personally and professionally for years to come.
                          <br />
                          <cite> – Mikayla Schneiter</cite>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="column is-2"></div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/*<section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h1 className="site-title has-text-weight-semibold is-size-2 has-text-centered">
                    Upcoming Events
                  </h1>
                </div>
                <div className="content">
                  <div className="column is-12">
                    <EventList />
                    <div className="column is-12 has-text-centered">
                      <Link className="button is-success has-text-weight-semibold is-medium" to="/events">
                        More Events →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      <MailingListForm />
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  mainpitch: PropTypes.object,
  values: PropTypes.object,
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
        mainpitch={frontmatter.mainpitch}
        values={frontmatter.values}
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
        mainpitch {
          title
          description
          quote
        }
        values {
          title
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
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
