import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const TeamGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((teamMember) => (
      <div key={teamMember.text} className="column is-4">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                padding: '2em',
                width: '240px',
                display: 'inline-block',
              }}
            >
              <div className="content">
                <span className="icon">
                  <i className={`fas fa-${teamMember.icon} fa-8x`}></i>
                </span>
              </div>
            </div>
          </div>

          <div className="has-text-centered">
            <h4>{teamMember.name}</h4>
            <p>{teamMember.title}</p>
          </div>
        </section>
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
