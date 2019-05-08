import React from 'react'
import css from 'styled-jsx/css'
import _JSXStyle from "styled-jsx/style"
import { Check } from '../../src/index'

const styles = css`
.flex {
  display: flex;

  & > div {
    padding: 0 5px;
  }
}
`

const Buttons = () => (
  <section>
    <div className="flex">
      <div>
        <h5>Default</h5>
        <Check /><br />
        <Check radio />
      </div>
      <div>
        <h5>Checked</h5>
        <Check defaultChecked /><br />
        <Check radio defaultChecked />
      </div>
      <div>
        <h5>Active/Focus</h5>
        <Check active /><br />
        <Check radio active />
      </div>
      <div>
        <h5>Disabled</h5>
        <Check defaultChecked disabled />
        <Check disabled /><br />
        <Check radio defaultChecked disabled />
        <Check radio disabled />
      </div>
    </div>
    <h4>Other Attribute</h4>
    <h5>Label</h5>
    <Check label="Make my profile visible" /><br />
    <Check radio label="Make my profile visible" />
    <h5>Radio Group</h5>
    <form>
      <Check radio name="foo" defaultChecked />
      <Check radio name="foo" />
    </form>
    <h5>Read Only</h5>
    <Check defaultChecked readOnly />
    <Check readOnly /><br />
    <Check radio defaultChecked readOnly />
    <Check radio readOnly />
    <style jsx>{styles}</style>
  </section>
)

export default Buttons
