import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import handshake from '../img/handshake.svg'
import SpecIcon from '../components/SpecIcon'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.title} className="column is-4">
        <section className="section">
          <div className="has-text-centered">
            <div className="content">
              {/*<span className="icon">
                <i className={`fas fa-${item.icon} fa-8x`}></i>
              </span>*/}
              <SpecIcon name={item.icon} />
            </div>
          </div>

          <div>
            <h4 className="has-text-centered">{item.title}</h4>
            <p className="has-text-centered">{item.text}</p>
          </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      icon: PropTypes.string
    })
  ),
}

export default FeatureGrid
