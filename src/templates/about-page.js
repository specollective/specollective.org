import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import TeamGrid from '../components/TeamGrid'

export const AboutPageTemplate = ({ title, content, contentComponent, team }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="full-width-image-container margin-top-0 spec-blue-background">
        <h2 className="header-title has-text-weight-bold is-size-1 is-white">
          About Us
        </h2>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={content} />
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Founders
              </h2>
              <TeamGrid gridItems={team.filter(member => member.group === 'founders')} />

              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Steering Committee
              </h2>
              <TeamGrid gridItems={team.filter(member => member.group === 'committee')} />

              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Core Contributors
              </h2>
              <TeamGrid gridItems={team.filter(member => member.group === 'core-team')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  team: PropTypes.array
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        team={post.frontmatter.team}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        team {
          name
          title
          group
          linkedin
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
