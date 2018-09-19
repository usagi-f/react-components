/*
# Wrapped react-fontawesome
https://github.com/FortAwesome/react-fontawesome
*/

import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import variable from '../css/variable'

const defaultSize = 'lg'
const defaultColor = variable.color.gray100

const Icon = props => {
  const selectSize = props.size || defaultSize
  const selectColor = props.color || defaultColor
  return (
    <FontAwesomeIcon
      size={selectSize}
      color={selectColor}
      {...props}
    />
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'lg', '1x','2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  fixedWidth: PropTypes.bool,
  inverse: PropTypes.bool,
  listItem: PropTypes.bool,
  rotation: PropTypes.number,
  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),
  spin: PropTypes.bool,
  pulse: PropTypes.bool,
  pull: PropTypes.oneOf(['right', 'left']),
  className: PropTypes.string,
  transform: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  mask: PropTypes.arrayOf(PropTypes.string),
  symbol: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

export default Icon
