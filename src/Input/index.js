import React, { Fragment } from 'react'
import cx from 'classnames'
import styles from './styles'

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
})

export default props => {
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
      />
      <style jsx>{styles}</style>
    </Fragment>
  )
}
