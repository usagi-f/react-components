import css, { resolve } from 'styled-jsx/css'
import variable from '../css/variable'

export default css`
.baseStyle {
  font-family: ${variable.fontFamily};
  font-size: ${variable.size.medium}px;
  -webkit-font-smoothing: antialiased;
  padding: 8px 20px;
  box-sizing: border-box;
  vertical-align: middle;
  text-decoration: none;
  -webkit-appearance: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}
.baseStyle:focus {
  box-shadow: rgba(0, 0, 0, .1) 0 0 0 2px;
}
.default {
  color: ${variable.color.gray100};
  background-color: ${variable.color.white};
  border-color: ${variable.color.gray40};
}
.default:hover,
.default:focus {
  background-color: ${variable.color.gray20};
}
.primary {
  color: ${variable.color.white};
  background-color: ${variable.color.blue};
  border-color: ${variable.additionalColor.darkBlue};
}
.primary:hover,
.primary:focus {
  background-color: ${variable.additionalColor.darkBlue};
}
.secondary {
  color: ${variable.color.white};
  background-color: ${variable.color.gray100};
  border-color: ${variable.color.black};
}
.secondary:hover,
.secondary:focus {
  background-color: ${variable.color.black};
}
.gost {
  color: ${variable.color.gray100};
  background-color: transparent;
  border-color: transparent;
}
.gost:hover,
.gost:focus {
  background-color: ${variable.color.gray20};
}
.disabled {
  opacity: .5;
  cursor: default;
}
.disabled:hover {
  background-color: initial;
}
`
