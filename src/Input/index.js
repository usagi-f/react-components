import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'
import _JSXStyle from "styled-jsx/style"

const getAttribute = props => ({
  type: props.password ? 'password' : 'text',
  className: cx({
    baseStyle: true,
    error: props.error,
    active: props.active,
  }),
  disabled: props.disabled,
  tabIndex: props.disabled ? '-1' : 0,
  placeholder: props.placeholder || '',
  additionalStyle: props.style || {},
  onChange: props.onChange || null,
})

const Input = props => {
  const attribute = getAttribute(props)
  return (
    <Fragment>
      <input
        type={attribute.type}
        className={attribute.className}
        disabled={attribute.disabled}
        tabIndex={attribute.tabIndex}
        placeholder={attribute.placeholder}
        style={attribute.additionalStyle}
        onChange={attribute.onChange}
      />
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Input.propTypes = {
  password: PropTypes.bool,
  error: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
}

export default Input
