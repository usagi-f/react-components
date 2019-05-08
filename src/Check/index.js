import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import styles from './styles'
import _JSXStyle from "styled-jsx/style"

const getAttribute = props => ({
  className: cx({
    baseStyle: true,
    radio: props.radio,
    error: props.error,
    active: props.active,
    readOnly: props.readOnly,
    disabled: props.disabled !== undefined,
  }),
  type: props.radio ? 'radio' : 'checkbox',
  label: props.label || null,
  defaultChecked: props.defaultChecked,
  disabled: props.disabled || props.readOnly ? true : false,
  tabIndex: props.disabled ? '-1' : 0,
  readOnly: props.readOnly,
  name: props.name,
  additionalStyle: props.style || {},
  onChange: props.onChange || null,
})

const Input = attribute => (
  <div className="input">
    <input
      type={attribute.type}
      name={attribute.name}
      defaultChecked={attribute.defaultChecked}
      disabled={attribute.disabled}
      tabIndex={attribute.tabIndex}
      readOnly={attribute.readOnly}
      style={attribute.additionalStyle}
      onChange={attribute.onChange}
    />
    <CheckMark type={attribute.type} />
    <style jsx>{styles}</style>
  </div>
)

const CheckMark = ({ type }) => {
  if (type === 'radio') {
    return (
      <span className="radio">
        <style jsx>{styles}</style>
      </span>
    )
  }
  return (
    <span className="check">
      <FontAwesomeIcon
        size="xs"
        color="white"
        icon="check"
      />
      <style jsx>{styles}</style>
    </span>
  )
}

const Check = props => {
  const attribute = getAttribute(props)
  if (attribute.label) {
    return (
      <label className={attribute.className}>
        <Input {...attribute} />
        <span className="label">{attribute.label}</span>
        <style jsx>{styles}</style>
      </label>
    )
  }
  return (
    <div className={attribute.className}>
      <Input {...attribute} />
      <style jsx>{styles}</style>
    </div>
  )
}

Check.propTypes = {
  type: PropTypes.string,
  radio: PropTypes.bool,
  error: PropTypes.bool,
  radio: PropTypes.bool,
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  name: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
}

export default Check
