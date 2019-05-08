import React from 'react'
import css from 'styled-jsx/css'
import _JSXStyle from "styled-jsx/style"
import { Dropdown } from '../../src/index'

const styles = css`
.flex {
  display: flex;

  & > div {
    padding: 0 5px;
  }
}
`

const data = [
  { text: 'John Lilki', value: 'John Lilki' },
  { text: 'Jamie Harington', value: 'Jamie Harington' },
  { text: 'Jill Lewis', value: 'Jill Lewis' },
  { text: 'Jack Abington', value: 'Jack Abington' },
]

const Buttons = () => (
  <section>
    <div className="flex">
      <div>
        <h5>Default</h5>
        <Dropdown id="dropdown1" name="dropdown1" options={data} />
      </div>
      <div>
        <h5>Disabled</h5>
        <Dropdown id="dropdown1" name="dropdown1" options={data} disabled />
      </div>
    </div>
    <h4>Other Attribute</h4>
    <h5>Size</h5>
    <Dropdown options={data} size={6} />
    <style jsx>{styles}</style>
  </section>
)

export default Buttons
