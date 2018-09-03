import React, { Fragment } from 'react'
import Button from '../src/Button'

const Index = () => (
  <Fragment>
    <h3>Button</h3>
    <h4>Default</h4>
    <Button>Default Button</Button>
    <h4>Primary</h4>
    <Button type="primary">Primary Button</Button>
    <h4>Secondary</h4>
    <Button type="secondary">Secondary Button</Button>
    <h4>Gost</h4>
    <Button type="gost">Gost Button</Button>
    <h4>Disabled</h4>
    <Button disabled>Disabled</Button>
    <h4>Other Attribute</h4>
    <Button content="Content by attribute" />
    <Button style={{ color: 'red' }}>Additional style</Button>
    <h4>Color</h4>
    <Button color="blue">Blue Button</Button>
    <Button color="purple">Purple Button</Button>
    <Button color="pink">Pink Button</Button>
    <Button color="red">Red Button</Button>
    <Button color="orange">Orange Button</Button>
    <Button color="yellow">Yellow Button</Button>
    <Button color="lightgreen">Lightgreen Button</Button>
    <Button color="green">Green Button</Button>
    <Button color="lightblue">Lightblue Button</Button>
  </Fragment>
)

export default Index
