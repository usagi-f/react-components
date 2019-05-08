import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'
import _JSXStyle from "styled-jsx/style"

const getAttribute = props => ({
  className: cx({
    baseStyle: true,
    compact: props.compact,
    disabled: props.disabled,
    basic: props.basic,
    [props.size]: props.size !== undefined,
    [props.textAlign]: props.textAlign !== undefined,
  }),
  additionalStyle: props.style || {},
  content: props.content || props.children,
})

const Segment = props => {
  const attribute = getAttribute(props)
  return (
    <Fragment>
      <div className={attribute.className} style={attribute.additionalStyle}>
        {attribute.content}
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Segment.Group = props => (
  <Fragment>
    <div className={`group ${props.horizontal ? 'horizontal' : null}`}>
      {props.children}
    </div>
    <style jsx>{styles}</style>
  </Fragment>
)

Segment.propTypes = {
  compact: PropTypes.bool,
  disabled: PropTypes.bool,
  basic: PropTypes.bool,
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']),
  textAlign: PropTypes.oneOf(['left', 'right', 'center']),
  style: PropTypes.object,
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
}

export default Segment
