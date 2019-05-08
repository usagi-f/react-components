import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'
import _JSXStyle from "styled-jsx/style"

const getAttribute = props => {
  const selectMode = props.mode || 'default'
  return {
    className: cx({
      baseStyle: true,
      arrow: !props.size,
      disabled: props.disabled !== undefined,
    }),
    id: props.id,
    name: props.name,
    size: props.size,
    disabled: props.disabled,
    tabIndex: props.disabled ? '-1' : 0,
    additionalStyle: props.style || {},
    content: props.options || [],
    onChange: props.onChange || null,
  }
}

const Dropdown = props => {
  const attribute = getAttribute(props)
  return (
    <div className={attribute.className}>
      <select
        id={attribute.id}
        name={attribute.name}
        size={attribute.size}
        disabled={attribute.disabled}
        tabIndex={attribute.tabIndex}
        style={attribute.additionalStyle}
        onChange={attribute.onChange}
      >
        {attribute.content.map(element => (
          <option value={element.value} key={element.value}>{element.text}</option>
        ))}
      </select>
      <style jsx>{styles}</style>
    </div>
  )
}

Dropdown.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  radio: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })),
  style: PropTypes.object,
  onChange: PropTypes.func,
}

export default Dropdown
