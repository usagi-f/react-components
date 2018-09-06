import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { Button, Input, Header, Text, Table } from '../src/index'

const styles = css`
h1 + section {
  padding: 0 20px;
  margin-bottom: 80px;
}
.flex {
  display: flex;

  & > div {
    padding: 0 5px;
  }
}
button {
  margin: 5px;
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

const Index = () => (
  <Fragment>
    <h1>Button</h1>
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
    </section>
    <h1>Input</h1>
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
    </section>
    <h1>Header</h1>
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
    <h1>Paragraph</h1>
    <section>
      <Text>Placeholder text can be used as an attribute for almost every HTML input type, and misguided designers and developers don't hesitate. It is tempting to provide text help for complex forms, or omit input labels to improve aesthetics. However, employing placeholder text to do so causes many usability issues.</Text>
    </section>
    <style jsx>{styles}</style>
    <h1>Table</h1>
    <section>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Evidence Rating</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Consensus</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>B</Table.Cell>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>80%</Table.Cell>
            <Table.Cell>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>100%</Table.Cell>
            <Table.Cell>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>D</Table.Cell>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell>10%</Table.Cell>
            <Table.Cell>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <h4>Sortable</h4>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted="descending"
              onClick={() => alert('test')}
            >
              Evidence Rating
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted="ascending"
              onClick={() => alert('test')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell onClick={() => alert('test')}>Consensus</Table.HeaderCell>
            <Table.HeaderCell onClick={() => alert('test')}>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>B</Table.Cell>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>80%</Table.Cell>
            <Table.Cell>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>100%</Table.Cell>
            <Table.Cell>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>D</Table.Cell>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell>10%</Table.Cell>
            <Table.Cell>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </section>
  </Fragment>
)

export default Index
