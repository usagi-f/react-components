import React, { Fragment } from 'react'
import cx from 'classnames'
import styles from './styles'

const getAttribute = props => ({
  className: cx({
    baseStyle: true,
    compact: props.compact,
    disabled: props.disabled,
    basic: props.basic,
    [props.size]: props.size !== undefined,
  }),
  additionalStyle: props.style || {},
  content: props.content || props.children,
})

export default props => {
  const attribute = getAttribute(props)
  return (
    <Fragment>
      <div className={attribute.className} style={attribute.additionalStyle}>
        {attribute.content}
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
