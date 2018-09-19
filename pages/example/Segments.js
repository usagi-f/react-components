import React from 'react'
import { Segment } from '../../src'

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const Texts = () => (
  <section>
    <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
    <h4>Other Attribute</h4>
    <h5>Compact</h5>
    <Segment compact>Compact content.</Segment>
    <h5>Disabled</h5>
    <Segment disabled>Pellentesque habitant morbi tristique senectus.</Segment>
    <h5>Basic</h5>
    <Segment basic>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</Segment>
    <h5>Sizes</h5>
    {sizes.map(size => (
      <Segment key={size} size={size}>
        It's a {size} segment
      </Segment>
    ))}
    <h5>Group</h5>
    <Segment.Group>
      <Segment>It's a medium segment</Segment>
      <Segment>And it's a medium segment, too.</Segment>
      <Segment>And more.</Segment>
    </Segment.Group>
    <h5>Horizontal Group</h5>
    <Segment.Group horizontal>
      <Segment>Left</Segment>
      <Segment>Center</Segment>
      <Segment>Right</Segment>
    </Segment.Group>
    <h5>Text align</h5>
    <Segment textAlign="left">Left aligned content.</Segment>
    <Segment textAlign="right">Right aligned content.</Segment>
    <Segment textAlign="center">Center aligned content.</Segment>
  </section>
)

export default Texts
