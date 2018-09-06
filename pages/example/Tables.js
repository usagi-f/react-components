import React from 'react'
import { Table } from '../../src/index'

const Tables = () => (
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
)

export default Tables
