import React, { Component } from 'react'
import { Table } from '../../src/index'

const tableData = [
  { evidenceRating: 'B', name: 'Emily', consensus: 80, description: 'Emily is an interesting girl but sometimes you don\'t really have enough room to describe everything you\'d like' },
  { evidenceRating: 'A', name: 'Sandlien', consensus: 100, description: 'Sandlien is a kind girl but sometimes you don\'t really have enough room to describe everything you\'d like' },
  { evidenceRating: 'D', name: 'Herman', consensus: 10, description: 'Herman is an alright boy but sometimes you don\'t really have enough room to describe everything you\'d like' },
  { evidenceRating: 'C', name: 'Pierre', consensus: 40, description: 'Pierre is a geeky boy but sometimes you don\'t really have enough room to describe everything you\'d like' },
]

const ascendingSort = (data, sortKey) => {
  return data.sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return -1
    if (a[sortKey] > b[sortKey]) return 1
  })
}

export default class Tables extends Component {
  state = {
    column: 'evidenceRating',
    data: ascendingSort(tableData, 'evidenceRating'),
    direction: 'ascending',
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      // 初回ソート時は昇順
      this.setState({
        column: clickedColumn,
        data: ascendingSort(data, clickedColumn),
        direction: 'ascending',
      })
      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }
  render() {
    const { column, data, direction } = this.state
    return (
      <section>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Registration Date</Table.HeaderCell>
              <Table.HeaderCell>E-mail address</Table.HeaderCell>
              <Table.HeaderCell>Premium Plan</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>John Lilki</Table.Cell>
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>January 11, 2014</Table.Cell>
              <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jack Abington</Table.Cell>
              <Table.Cell>July 04, 2014</Table.Cell>
              <Table.Cell>jack2ab@yahoo.com</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <h4>Sortable</h4>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'evidenceRating' ? direction : null}
                onClick={this.handleSort('evidenceRating')}
              >
                Evidence Rating
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'name' ? direction : null}
                onClick={this.handleSort('name')}
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'consensus' ? direction : null}
                onClick={this.handleSort('consensus')}
              >
                Consensus
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'description' ? direction : null}
                onClick={this.handleSort('description')}
              >
                Description
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.data.map(({ evidenceRating, name, consensus, description }) => (
              <Table.Row key={name}>
                <Table.Cell>{evidenceRating}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{consensus}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </section>
    )
  }
}
