import React, { Component, Fragment } from 'react'
import cx from 'classnames'
import styles from './styles'

const getAttribute = (props, tag) => ({
  className: cx({
    baseStyle: true,
    [tag]: tag !== (undefined || ''),
  }),
  additionalStyle: props.style || {},
  content: props.content || props.children,
})

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
      >
        {attribute.content}
      </th>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Table.Header = props => <thead>{props.children}</thead>
Table.Body = props => <tbody>{props.children}</tbody>

export default Table