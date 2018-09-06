import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { Buttons, Inputs, Headers, Texts, Tables } from './example/index'

const styles = css`
h1 + section {
  padding: 0 20px;
  margin-bottom: 80px;
}
`

const Index = () => (
  <Fragment>
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
