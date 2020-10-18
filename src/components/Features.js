import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4">
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
                  <i className={`fas fa-${item.icon} fa-8x`}></i>
                </span>
              </div>
            </div>
          </div>

          <div className="has-text-centered">
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      icon: PropTypes.string
    })
  ),
}

export default FeatureGrid
