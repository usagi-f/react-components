import React, { Fragment } from 'react'
import cx from 'classnames'
import styles from './styles'

const getAttribute = props => ({
  className: cx({
    baseStyle: true,
  }),
  additionalStyle: props.style || {},
  content: props.content || props.children,
})

export default props => {
  const attribute = getAttribute(props)
  return (
    <Fragment>
      <p className={attribute.className} style={attribute.additionalStyle}>
        {attribute.content}
      </p>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
