import css from 'styled-jsx/css'
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
.disabled {
  opacity: .5;
  cursor: default;
}
.disabled:hover {
  background-color: initial;
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
.blue {
  color: ${variable.color.white};
  background-color: ${variable.color.blue};
  border-color: ${variable.color.blue};
}
.blue:hover,
.blue:focus {
  color: ${variable.color.blue};
  background-color: ${variable.color.white};
}
.purple {
  color: ${variable.color.white};
  background-color: ${variable.color.purple};
  border-color: ${variable.color.purple};
}
.purple:hover,
.purple:focus {
  color: ${variable.color.purple};
  background-color: ${variable.color.white};
}
.pink {
  color: ${variable.color.white};
  background-color: ${variable.color.pink};
  border-color: ${variable.color.pink};
}
.pink:hover,
.pink:focus {
  color: ${variable.color.pink};
  background-color: ${variable.color.white};
}
.red {
  color: ${variable.color.white};
  background-color: ${variable.color.red};
  border-color: ${variable.color.red};
}
.red:hover,
.red:focus {
  color: ${variable.color.red};
  background-color: ${variable.color.white};
}
.orange {
  color: ${variable.color.white};
  background-color: ${variable.color.orange};
  border-color: ${variable.color.orange};
}
.orange:hover,
.orange:focus {
  color: ${variable.color.orange};
  background-color: ${variable.color.white};
}
.yellow {
  color: ${variable.color.white};
  background-color: ${variable.color.yellow};
  border-color: ${variable.color.yellow};
}
.yellow:hover,
.yellow:focus {
  color: ${variable.color.yellow};
  background-color: ${variable.color.white};
}
.lightgreen {
  color: ${variable.color.white};
  background-color: ${variable.color.lightgreen};
  border-color: ${variable.color.lightgreen};
}
.lightgreen:hover,
.lightgreen:focus {
  color: ${variable.color.lightgreen};
  background-color: ${variable.color.white};
}
.green {
  color: ${variable.color.white};
  background-color: ${variable.color.green};
  border-color: ${variable.color.green};
}
.green:hover,
.green:focus {
  color: ${variable.color.green};
  background-color: ${variable.color.white};
}
.lightblue {
  color: ${variable.color.white};
  background-color: ${variable.color.lightblue};
  border-color: ${variable.color.lightblue};
}
.lightblue:hover,
.lightblue:focus {
  color: ${variable.color.lightblue};
  background-color: ${variable.color.white};
}
`
