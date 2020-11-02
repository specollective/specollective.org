import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import logo from '../img/spec-logo.png'
import Layout from '../components/Layout'
import Features from '../components/Features'
import EventList from '../components/EventList'

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
                        <p className="is-size-5">{mainpitch.description}</p>

                        <article className="message">
                          <div className="message-body is-size-4 mainpitch-quote">
                            {mainpitch.quote}
                          </div>
                        </article>
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
                        Our Work
                      </h1>
                    </div>

                    <div className="content">
                      <p>
                        We want to build a community in which we will learn together, from one another, and for one another. A community in which knowledge and collaboration have no boundaries, and a community in which egos are put aside to make room for inclusive, honest relationships. Within that community, contributions of any kind are welcome, as long as they enable us to support, produce, and achieve more. Our community building efforts are focused on three core activities.
                      </p>
                      <ul>
                        <li>
                          Using participatory, data-driven research to create actions, initiatives, and propose solutions, so people may meet other members of their communities, promote sustainable relationship building, social innovation, and collective action.
                        </li>
                        <li>
                          Providing mentoring, training, and internships to people from underrepresented groups to help them get into the job market and become financially independent and sustainable.
                        </li>
                        <li>
                          Hosting events, gatherings, and workshops to facilitate direct networking opportunities, as well as face-to-face knowledge exchange.
                        </li>
                      </ul>
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

      <section className="section section--gradient">
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
      </section>

      <section className="section section--gradient spec-orange-background" style={{backgroundColor: 'rgb(250 166 52 / 20%)'}}>
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
              <h1 class="title site-title is-size-2">Sign up for our mailing list</h1>
              <div class="box">
                <div class="field is-grouped">
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Email Address" />
                  </p>
                  <p class="control">
                    <a class="button is-success">Sign Up</a>
                  </p>
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
