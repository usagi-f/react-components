import React from 'react'
import { Divider, Segment } from '../../src'

const Dividers = () => (
  <section>
    <Segment>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      <Divider />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
    </Segment>
    <h4>Other Attribute</h4>
    <h5>Fitted</h5>
    <Segment>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      <Divider fitted />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
    </Segment>
    <h5>Hidden</h5>
    <Segment>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      <Divider hidden />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
    </Segment>
  </section>
)

export default Dividers
