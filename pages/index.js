import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { Buttons, Inputs, Headers, Texts, Tables } from './example/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = css`
h1 {
  margin: 80px 0 20px;

  &:first-child {
    margin-top: 0;
  }
}
`

const Index = () => (
  <Fragment>
    <FontAwesomeIcon icon="stroopwafel" size="3x" color="red" spin />
    <h1>Button</h1>
    <Buttons />
    <h1>Input</h1>
    <Inputs />
    <h1>Header</h1>
    <Headers />
    <h1>Text</h1>
    <Texts />
    <h1>Table</h1>
    <Tables />
    <style jsx>{styles}</style>
  </Fragment>
)

export default Index
