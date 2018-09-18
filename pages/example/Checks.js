import React from 'react'
import css from 'styled-jsx/css'
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
        <Check />
      </div>
      <div>
        <h5>Checked</h5>
        <Check defaultChecked />
      </div>
      <div>
        <h5>Active/Focus</h5>
        <Check active />
      </div>
      <div>
        <h5>Disabled</h5>
        <Check defaultChecked disabled />
        <Check disabled />
      </div>
    </div>
    <h4>Other Attribute</h4>
    <h5>Label</h5>
    <Check label="Make my profile visible" />
    <h5>Read Only</h5>
    <Check defaultChecked readOnly />
    <Check readOnly />
    <style jsx>{styles}</style>
  </section>
)

export default Buttons
