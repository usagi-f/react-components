import React, { Fragment } from 'react'
import cx from 'classnames'
import styles from './styles'

const getAttribute = props => {
  const selectType = props.type || 'default'
  return {
    className: cx({
      baseStyle: true,
      [selectType]: true,
      disabled: props.disabled,
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
