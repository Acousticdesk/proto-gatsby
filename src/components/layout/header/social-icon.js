import React from 'react'
import PropTypes from 'prop-types'

const SocialIcon = ({ icon, title }) => (
  <img
    className="social-icon__img"
    src={icon}
    alt={`${title} icon`}
  />
)

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SocialIcon
