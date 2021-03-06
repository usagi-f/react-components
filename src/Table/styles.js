import css from 'styled-jsx/css'
import variable from '../css/variable'

export default css`
.baseStyle {
  font-family: ${variable.fontFamily};
  font-size: ${variable.size.small}px;
  color: ${variable.color.gray100};
  -webkit-font-smoothing: antialiased;
  border-collapse: collapse;
  border-spacing: 0;
  letter-spacing: .02em;
}
.th,
.td {
  border-width: 0 1px 1px 0;
  border-style: solid;

  &:last-child {
    border-right: none;
  }
}
.th {
  padding: 18px 30px 18px 15px;
  color: ${variable.color.main};
  border-bottom-color: ${variable.color.gray40};
  border-right-color: ${variable.color.gray20};
  text-align: left;
  position: relative;

  &.sortable {
    cursor: pointer;
  }
  &.sorted {
    user-select: none;
  }
  &.sorted,
  &.sortable:hover {
    background-color: ${variable.color.gray20};
  }
}
.td {
  padding: 10px 15px;
  border-color: ${variable.color.gray20};
  border-bottom: none;
}
.tr {
  border-bottom: 1px solid ${variable.color.gray20};

  &:last-child {
    border-bottom: none;
  }
}
.descending,
.ascending {
  position: absolute;
  right: 15px;
  top: 0;
  bottom: 0;
  margin: auto;
  display: inline;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
}
.descending {
  border-width: 4px 4px 0 4px;
  border-top-color: ${variable.color.main};
}
.ascending {
  border-width: 0 4px 4px 4px;
  border-bottom-color: ${variable.color.main};
}
`
