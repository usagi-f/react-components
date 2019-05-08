import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'
import _JSXStyle from "styled-jsx/style"

const getAttribute = (props, tag) => {
  const isSorted = props.sorted === 'descending' || props.sorted === 'ascending'
  return {
    className: cx({
      baseStyle: true,
      [tag]: tag !== (undefined || ''),
      sortable: props.onClick && tag === 'th',
      sorted: isSorted,
    }),
    sorted: isSorted ? props.sorted : null,
    additionalStyle: props.style || {},
    content: props.content || props.children,
    onClick: props.onClick || null,
  }
}

const SortedIcon = props => {
  if (!props.type) return null
  return (
    <Fragment>
      <span className={props.type} aria-label={props.type} />
      <style jsx>{styles}</style>
    </Fragment>
  )
}

const Table = props => {
  const attribute = getAttribute(props, 'table')
  return (
    <Fragment>
      <table
        className={attribute.className}
        style={attribute.additionalStyle}
      >
        {attribute.content}
      </table>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Table.Row = props => {
  const attribute = getAttribute(props, 'tr')
  return (
    <Fragment>
      <tr
        className={attribute.className}
        style={attribute.additionalStyle}
      >
        {attribute.content}
      </tr>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Table.Cell = props => {
  const attribute = getAttribute(props, 'td')
  return (
    <Fragment>
      <td
        className={attribute.className}
        style={attribute.additionalStyle}
      >
        {attribute.content}
      </td>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Table.HeaderCell = props => {
  const attribute = getAttribute(props, 'th')
  return (
    <Fragment>
      <th
        className={attribute.className}
        style={attribute.additionalStyle}
        onClick={attribute.onClick}
      >
        {attribute.content}
        <SortedIcon type={attribute.sorted} />
      </th>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Table.Header = props => <thead>{props.children}</thead>
Table.Body = props => <tbody>{props.children}</tbody>

Table.propTypes = {
  sorted: PropTypes.oneOf(['descending', 'ascending']),
  onClick: PropTypes.func,
  style: PropTypes.object,
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
}

export default Table
