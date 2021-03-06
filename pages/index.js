import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import _JSXStyle from "styled-jsx/style"
import { Buttons, Inputs, Headers, Texts, Tables, Icons, Dropdowns, Checks, Segments, Dividers } from './example/index'

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
    <h1>Icon</h1>
    <Icons />
    <h1>Dropdown</h1>
    <Dropdowns />
    <h1>Check</h1>
    <Checks />
    <h1>Segment</h1>
    <Segments />
    <h1>Dividers</h1>
    <Dividers />
    <style jsx>{styles}</style>
  </Fragment>
)

export default Index
