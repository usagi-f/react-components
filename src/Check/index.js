import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import styles from './styles'

const getAttribute = props => ({
  className: cx({
    baseStyle: true,
    error: props.error,
    active: props.active,
    readOnly: props.readOnly,
    disabled: props.disabled !== undefined,
  }),
  label: props.label || null,
  defaultChecked: props.defaultChecked,
  disabled: props.disabled || props.readOnly ? true : false,
  tabIndex: props.disabled ? '-1' : 0,
  readOnly: props.readOnly,
  additionalStyle: props.style || {},
  onChange: props.onChange || null,
})

const Input = attribute => (
  <Fragment>
    <input
      type="checkbox"
      defaultChecked={attribute.defaultChecked}
      disabled={attribute.disabled}
      tabIndex={attribute.tabIndex}
      readOnly={attribute.readOnly}
      style={attribute.additionalStyle}
      onChange={attribute.onChange}
    />
    <style jsx>{styles}</style>
  </Fragment>
)

const CheckMark = attribute => (
  <span className="check">
    <FontAwesomeIcon
      size="xs"
      color="white"
      icon="check"
    />
    <style jsx>{styles}</style>
  </span>
)

export default props => {
  const attribute = getAttribute(props)
  if (attribute.label) {
    return (
      <label className={attribute.className}>
        <Input {...attribute} />
        <CheckMark />
        <span className="label">{attribute.label}</span>
        <style jsx>{styles}</style>
      </label>
    )
  }
  return (
    <div className={attribute.className}>
      <Input {...attribute} />
      <CheckMark />
      <style jsx>{styles}</style>
    </div>
  )
}
