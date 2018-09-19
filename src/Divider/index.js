import React, { Fragment } from 'react'
import cx from 'classnames'
import styles from './styles'

const getAttribute = props => ({
  className: cx({
    baseStyle: true,
    fitted: props.fitted,
    hidden: props.hidden,
  }),
  additionalStyle: props.style || {},
})

export default props => {
  const attribute = getAttribute(props)
  return (
    <Fragment>
      <hr className={attribute.className} style={attribute.additionalStyle} />
      <style jsx>{styles}</style>
    </Fragment>
  )
}
