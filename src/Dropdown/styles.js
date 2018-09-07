import css from 'styled-jsx/css'
import variable from '../css/variable'

export default css`
.baseStyle {
  position: relative;
  display: inline-block;
  margin-right: 3px;

  &.arrow::after {
    content: '';
    position: absolute;
    right: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
    display: inline;
    width: 0;
    height: 0;
    border-width: 4px 4px 0 4px;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${variable.color.gray100};
  }

  select {
    font-family: ${variable.fontFamily};
    font-size: ${variable.size.medium}px;
    background-color: ${variable.color.white};
    color: ${variable.color.gray100};
    -webkit-font-smoothing: antialiased;
    padding: 10px 33px 10px 18px;
    box-sizing: border-box;
    vertical-align: middle;
    text-decoration: none;
    -webkit-appearance: none;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    border-color: ${variable.color.gray40};
    outline: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, .1) 0 0 3px 1px;

    &:focus {
      box-shadow: rgba(0, 0, 0, .1) 0 0 0 3px;
    }
  }

  &.disabled {
    opacity: .5;

    select {
      cursor: default;
    }
  }
}
`
