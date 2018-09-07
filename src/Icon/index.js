import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import variable from '../css/variable'

/*
# Wrapped react-fontawesome
https://github.com/FortAwesome/react-fontawesome

## Support props
{
  icon: string,
  size: 'xs' | 'sm' | 'lg' | '1x' |'2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x',
  fixedWidth: boolean,
  inverse: boolean,
  listItem: boolean,
  rotation: number,
  flip: 'horizontal' | 'vertical' | 'both',
  spin: boolean,
  pulse: boolean,
  pull: 'right' | 'left',
  className: string,
  transform: string | object,
  mask: Array<string>,
  symbol: string | boolean,
}
*/

const defaultSize = 'lg'
const defaultColor = variable.color.gray100

export default props => {
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
