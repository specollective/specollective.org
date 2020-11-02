import React from 'react'
import PropTypes from 'prop-types'
import { OurWorkPage } from '../../templates/our-work-page'

const OurWorkPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
      <OurWorkPage
        image={getAsset(entry.getIn(['data', 'image']))}
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'heading'])}
        description={entry.getIn(['data', 'description'])}
        intro={{ blurbs }}
        main={{
          heading: entry.getIn(['data', 'main', 'heading']),
          description: entry.getIn(['data', 'main', 'description']),
          image1: {
            image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
            alt: entry.getIn(['data', 'main', 'image1', 'alt']),
          },
          image2: {
            image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
            alt: entry.getIn(['data', 'main', 'image2', 'alt']),
          },
          image3: {
            image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
            alt: entry.getIn(['data', 'main', 'image3', 'alt']),
          },
        }}
        testimonials={testimonials}
      />
    </>
  )
}

OurWorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default OurWorkPagePreview
