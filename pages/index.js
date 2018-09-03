import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Button from '../src/Button'

const styles = css`
section {
  display: flex;
}
section > div {
  padding: 5px;
}
hr {
  border: 0;
}
`

const Index = () => (
  <Fragment>
    <h3>Button</h3>
    <section>
      <div>
        <h4>Default</h4>
        <Button>Default Button</Button>
        <hr />
        <Button mode="primary">Primary Button</Button>
        <hr />
        <Button mode="secondary">Secondary Button</Button>
        <hr />
        <Button mode="gost">Gost Button</Button>
      </div>
      <div>
        <h4>Active/Focus</h4>
        <Button active>Default Button</Button>
        <hr />
        <Button mode="primary" active>Primary Button</Button>
        <hr />
        <Button mode="secondary" active>Secondary Button</Button>
        <hr />
        <Button mode="gost" active>Gost Button</Button>
      </div>
      <div>
        <h4>Disabled</h4>
        <Button disabled>Default Button</Button>
        <hr />
        <Button mode="primary" disabled>Primary Button</Button>
        <hr />
        <Button mode="secondary" disabled>Secondary Button</Button>
        <hr />
        <Button mode="gost" disabled>Gost Button</Button>
      </div>
    </section>
    <h4>Other Attribute</h4>
    <Button type="submit">Change type to submit</Button>
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
    <style jsx>{styles}</style>
  </Fragment>
)

export default Index
