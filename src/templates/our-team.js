import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import TeamGrid from '../components/TeamGrid'

export const OurTeamPageTemplate = ({ title, content, contentComponent, team }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="full-width-image-container margin-top-0 spec-blue-background">
        <h2 className="header-title has-text-weight-bold is-size-1 is-white">
          Our Team
        </h2>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={content} />
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Core Contributors
              </h2>
              <TeamGrid gridItems={team.filter(member => member.group === 'core-team')} />
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Research  Associates & Fellows
              </h2>
              <TeamGrid gridItems={team.filter(member => member.group === 'research-associate')} />

              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Alumni & Emeriti
              </h2>
              <TeamGrid gridItems={team.filter(member => member.group === 'alumni')} />

              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Steering Committee
              </h2>
              <TeamGrid gridItems={team.filter(member => member.group === 'committee')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

OurTeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  team: PropTypes.array
}

const OurTeamPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <OurTeamPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        team={post.frontmatter.team}
      />
    </Layout>
  )
}

OurTeamPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OurTeamPage

export const aboutPageQuery = graphql`
  query OurTeamPage($id: String!) {
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
