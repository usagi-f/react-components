import React, { Fragment } from 'react'
import cx from 'classnames'
import styles from './styles'

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
  }
}

export default props => {
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
      >
        {attribute.content}
      </button>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
