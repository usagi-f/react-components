import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'
import _JSXStyle from "styled-jsx/style"

const getAttribute = props => ({
  className: cx({
    baseStyle: true,
    fitted: props.fitted,
    hidden: props.hidden,
  }),
  additionalStyle: props.style || {},
})

const Divider = props => {
  const attribute = getAttribute(props)
  return (
    <Fragment>
      <hr className={attribute.className} style={attribute.additionalStyle} />
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Divider.propTypes = {
  fitted: PropTypes.bool,
  hidden: PropTypes.bool,
  style: PropTypes.object,
}

export default Divider
