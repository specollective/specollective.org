import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import vennDiagram from '../img/spec-venn.png'

// style={{
//   backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${
//     !!image.childImageSharp ? image.childImageSharp.fluid.src : image
//   })`,
// }}

export const OurWorkPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
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
        </div>

        <div className="columns">
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
      </div>
    </section>
  </div>
)

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
}

const OurWorkPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <OurWorkPageTemplate
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
