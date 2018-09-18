import React from 'react'
import cx from 'classnames'
import styles from './styles'

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

export default props => {
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
