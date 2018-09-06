import React from 'react'
import css from 'styled-jsx/css'
import { Button } from '../../src/index'

const styles = css`
.flex {
  display: flex;

  & > div {
    padding: 0 5px;
  }
}
hr {
  border: 0;
}
.bgblack {
  display: inline-block;
  background-color: #222;
  padding: 5px;
  margin: 5px 0;
}
`

const Buttons = () => (
  <section>
    <div className="flex">
      <div>
        <h5>Default</h5>
        <Button>Default Button</Button>
        <hr />
        <Button mode="primary">Primary Button</Button>
        <hr />
        <Button mode="secondary">Secondary Button</Button>
        <hr />
        <Button mode="gost">Gost Button</Button>
      </div>
      <div>
        <h5>Active/Focus</h5>
        <Button active>Default Button</Button>
        <hr />
        <Button mode="primary" active>Primary Button</Button>
        <hr />
        <Button mode="secondary" active>Secondary Button</Button>
        <hr />
        <Button mode="gost" active>Gost Button</Button>
      </div>
      <div>
        <h5>Disabled</h5>
        <Button disabled>Default Button</Button>
        <hr />
        <Button mode="primary" disabled>Primary Button</Button>
        <hr />
        <Button mode="secondary" disabled>Secondary Button</Button>
        <hr />
        <Button mode="gost" disabled>Gost Button</Button>
      </div>
    </div>
    <h4>Other Attribute</h4>
    <Button type="submit">Change type to submit</Button>
    <Button content="Content by attribute" />
    <Button style={{ color: 'red' }}>Additional style</Button>
    <Button aria-label="foobar">Aria Label</Button>
    <Button onClick={() => alert('test')}>Callback Function</Button>
    <h4>Color</h4>
    <Button color="blue">Blue Button</Button>
    <Button color="purple">Purple Button</Button>
    <Button color="pink">Pink Button</Button>
    <Button color="red">Red Button</Button>
    <Button color="orange">Orange Button</Button><br />
    <Button color="yellow">Yellow Button</Button>
    <Button color="lightgreen">Lightgreen Button</Button>
    <Button color="green">Green Button</Button>
    <Button color="lightblue">Lightblue Button</Button><br />
    <div className="bgblack">
      <Button color="white">white Button</Button>
    </div>
    <h4>Rounded</h4>
    <Button rounded>Default Button</Button>
    <Button mode="primary" rounded>Primary Button</Button>
    <Button mode="secondary" rounded>Secondary Button</Button>
    <Button mode="gost" rounded>Gost Button</Button>
    <style jsx>{styles}</style>
  </section>
)

export default Buttons
