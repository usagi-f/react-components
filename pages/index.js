import React, { Fragment } from 'react'
import Button from '../src/Button'

const Index = () => (
  <Fragment>
    <Button>Default Button</Button>
    <Button type="primary">Primary Button</Button>
    <Button type="secondary">Secondary Button</Button>
    <Button type="gost">Gost Button</Button>
    <Button disabled>Disabled</Button>
    <Button content="Content by attribute" />
    <Button style={{ color: 'red' }}>Additional style</Button>
  </Fragment>
)

export default Index

