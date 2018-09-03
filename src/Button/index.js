import React, { Fragment } from 'react'
import cx from 'classnames'
import styles from './styles'

export default props => {
  const selectType = props.type || 'default'
  const componentClass = cx({
    baseStyle: true,
    [selectType]: true,
    disabled: props.disabled,
  })
  const additionalStyle = props.style || {}
  return (
    <Fragment>
      <button
        className={componentClass}
        disabled={props.disabled}
        tabIndex={props.disabled ? '-1' : 0}
        style={additionalStyle}
      >
        {props.content || props.children}
      </button>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
