import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'
import _JSXStyle from "styled-jsx/style"

const getAttribute = props => ({
  className: cx({
    baseStyle: true,
  }),
  additionalStyle: props.style || {},
  content: props.content || props.children,
})

const Text = props => {
  const attribute = getAttribute(props)
  return (
    <Fragment>
      <p className={attribute.className} style={attribute.additionalStyle}>
        {attribute.content}
      </p>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Text.propTypes = {
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

export default Text
