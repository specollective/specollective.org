import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import vennDiagram from '../img/spec-venn.png'

// style={{
//   backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${
//     !!image.childImageSharp ? image.childImageSharp.fluid.src : image
//   })`,
// }}

export const OurWorkPageTemplate = ({
  content,
  contentComponent,
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <div className="full-width-image-container margin-top-0 spec-blue-background">
        <h2 className="header-title has-text-weight-bold is-size-1 is-white has-text-white">
          Our Work
        </h2>
      </div>

      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <div className="content">
                  <PostContent className="content" content={content} />
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <div className="content">
                  <h3 className="has-text-weight-semibold is-size-3">
                    Testimonials
                  </h3>
                  <article className="message">
                    <div className="message-body">
                      I transitioned into tech in an effort to implement change for social good - I was ecstatic to stumble upon SPEC! The mentorship I received through SPEC was integral in developing the confidence and skills I needed to land my first coding role.
                      <br />
                      <cite> – Julia Catalano</cite>
                    </div>
                  </article>
                  <article className="message">
                    <div className="message-body">
                      When Dr. Rogers asked me to be a part of her new initiative called SPEC with Joe Torreggiani. I was honored and excited to be a part of their new adventure to help change the world we currently live in. Dr. Rogers couldn’t have asked me to join forces with her and Joe at a better time, given the current social injustices happening across the country and also right in our backyards in Buffalo NY. I have had the ability to be viewed as a research intern where I have expressed my interests in website design and furthering my passion to bring awareness to becoming anti-racist. This past June of 2020, I co-founded a grassroots activism group called, Citizens for Change-Lockport, where we have held race panels and started forming sub-committees to address the startling lack of diversity within the community. Being an intern for SPEC has given me the tools to allow my grassroots activism group to grow, but also I have been given the confidence to express my ideas pertaining to a micro-credential that gives college graduates help toward finding their first job after graduating. I am excited and hopeful for the future of SPEC.
                      <br />
                      <cite> – Bethany Patterson</cite>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                  {heading}
                </h3>
              </div>

              <div className="content">
                <p className="has-text-centered">{description}</p>
              </div>

              <div className="content">
                <img src={vennDiagram} />
              </div>
            </div>
          </div>*/}

          {/*<div className="columns">
            <div className="column is-12">
              <div className="section">
                <div className="content">
                  <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                    Our Focus Areas
                  </h3>
                  <Features gridItems={intro.blurbs} />
                </div>
              </div>
            </div>
          </div>
        </div>*/}
      </section>
    </div>
  )
}

OurWorkPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const OurWorkPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <OurWorkPageTemplate
        contentComponent={HTMLContent}
        content={data.markdownRemark.html}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

OurWorkPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default OurWorkPage

export const ourWorkPageQuery = graphql`
  query OurWorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
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
        main {
          heading
          description
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
