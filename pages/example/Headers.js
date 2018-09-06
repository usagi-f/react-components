import React from 'react'
import { Header } from '../../src/index'

const Headers = () => (
  <section>
    <h4>Headers h1 ~ h6</h4>
    <Header>h1. Alternatives to Placeholder Text</Header>
    <Header as="h2">h2. Improve form usability by addressing the perils of placeholders</Header>
    <Header as="h3">h3. Placeholders should be of a lighter value than input text</Header>
    <Header as="h4">h4. Placeholders should be visible on all screens</Header>
    <Header as="h5">h5. Placeholder as an example</Header>
    <Header as="h6">h6. Placeholders should not disappear when a user clicks into the input</Header>
    <h4>Other Attribute</h4>
    <Header style={{ textDecoration: 'underline' }}>h1. Additional style Header</Header>
  </section>
)

export default Headers
