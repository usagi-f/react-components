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
    }),
    disabled: props.disabled,
    tabIndex: props.disabled ? '-1' : 0,
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
        style={attribute.additionalStyle}
      >
        {attribute.content}
      </button>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
