import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const TeamGrid = ({ gridItems }) => (
  <div className="columns">
    {gridItems.map((teamMember) => (
      <div key={teamMember.name} className="column is-4">
        <div className="has-text-centered">
          <div
            style={{
              padding: '2em',
              width: '240px',
              display: 'inline-block',
            }}
          >
            <div className="content">
              { teamMember?.image?.childImageSharp
                ? <img className="team-pic" src={teamMember.image.childImageSharp.fluid.src} />
                : <div className="icon-container"><i className={`fas fa-user fa-10x`}></i></div> }
            </div>
          </div>
        </div>

        <div className="has-text-centered">
          <h4 className="team-member-name">{teamMember.name}</h4>
          <h6 className="team-member-title">{teamMember.title}</h6>
          <a href={teamMember.linkedin} target="_blank">
            <i className="fab fa-linkedin-in circle-icon"></i>
          </a>
        </div>
      </div>
    ))}
  </div>
)

TeamGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      title: PropTypes.string
    })
  ),
}

export default TeamGrid
