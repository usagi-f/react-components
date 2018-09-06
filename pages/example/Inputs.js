import React from 'react'
import css from 'styled-jsx/css'
import { Input } from '../../src/index'

const styles = css`
.flex {
  display: flex;

  & > div {
    padding: 0 5px;
  }
  hr {
    border: 0;
  }
}
`

const Inputs = () => (
  <section>
    <div className="flex">
      <div>
        <h5>Default</h5>
        <Input />
        <hr />
        <Input placeholder="My Placeholder Text..." />
      </div>
      <div>
        <h5>Active/Focus</h5>
        <Input active />
        <hr />
        <Input placeholder="My Placeholder Text..." active />
      </div>
      <div>
        <h5>Disabled</h5>
        <Input disabled />
        <hr />
        <Input placeholder="My Placeholder Text..." disabled />
      </div>
      <div>
        <h5>Error</h5>
        <Input error />
        <hr />
        <Input placeholder="My Placeholder Text..." error />
      </div>
    </div>
    <h4>Other Attribute</h4>
    <h5>Password</h5>
    <Input password />
    <h5>Additional style</h5>
    <Input style={{ width: '100%' }} />
    <h5>Callback Function</h5>
    <Input onChange={e => console.log('change input value: ' + e.target.value)} />
    <style jsx>{styles}</style>
  </section>
)

export default Inputs
