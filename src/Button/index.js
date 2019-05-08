import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'
import _JSXStyle from "styled-jsx/style"

const getAttribute = props => {
  const selectMode = props.mode || 'default'
  return {
    type: props.type || 'button',
    className: cx({
      baseStyle: true,
      [selectMode]: true,
      [props.color]: props.color !== undefined,
      active: props.active,
      rounded: props.rounded,
    }),
    disabled: props.disabled,
    tabIndex: props.disabled ? '-1' : 0,
    ariaLabel: props['aria-label'],
    additionalStyle: props.style || {},
    content: props.content || props.children,
    onClick: props.onClick || null,
  }
}

const Button = props => {
  const attribute = getAttribute(props)
  return (
    <Fragment>
      <button
        type={attribute.type}
        className={attribute.className}
        disabled={attribute.disabled}
        tabIndex={attribute.tabIndex}
        aria-label={attribute.ariaLabel}
        style={attribute.additionalStyle}
        onClick={attribute.onClick}
      >
        {attribute.content}
      </button>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  active: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  ['aria-label']: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
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

export default Button
