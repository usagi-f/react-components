import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'
import _JSXStyle from "styled-jsx/style"

const getAttribute = props => ({
  as: props.as || 'h1',
  className: cx({
    baseStyle: true,
    [props.as]: props.as !== undefined,
  }),
  additionalStyle: props.style || {},
  content: props.content || props.children,
})

const Header = props => {
  const attribute = getAttribute(props)
  return (
    <Fragment>
      {(attribute => {
        switch (attribute.as) {
          case 'h6':
            return <h6 className={attribute.className} style={attribute.additionalStyle}>{attribute.content}</h6>
          case 'h5':
            return <h5 className={attribute.className} style={attribute.additionalStyle}>{attribute.content}</h5>
          case 'h4':
            return <h4 className={attribute.className} style={attribute.additionalStyle}>{attribute.content}</h4>
          case 'h3':
            return <h3 className={attribute.className} style={attribute.additionalStyle}>{attribute.content}</h3>
          case 'h2':
            return <h2 className={attribute.className} style={attribute.additionalStyle}>{attribute.content}</h2>
          default:
            return <h1 className={attribute.className} style={attribute.additionalStyle}>{attribute.content}</h1>
        }
      })(attribute)}
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Header.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
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

export default Header
