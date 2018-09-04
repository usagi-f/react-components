import css from 'styled-jsx/css'
import variable from '../css/variable'

export default css`
.baseStyle {
  font-family: ${variable.fontFamily};
  font-size: ${variable.size.medium}px;
  color: ${variable.color.gray100};
  border-color: ${variable.color.gray40};
  box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, .05);
  padding: 10px 15px;
  box-sizing: border-box;
  -webkit-appearance: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  outline: none;
  margin-right: 3px;
}
.baseStyle.active,
.baseStyle:focus {
  border-color: ${variable.color.blue};
  box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, .05), 0 0 0 3px rgba(0, 0, 0, .1);
}
.baseStyle:disabled {
  opacity: .5;
  background-color: ${variable.color.gray20};
}
.baseStyle.error {
  border-color: ${variable.color.red};
  background-color: ${variable.additionalColor.lightred};
  box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, .05), 0 0 0 3px ${variable.additionalColor.lightred};
}
.baseStyle.error:placeholder-shown,
.baseStyle.error::-webkit-input-placeholder {
  color: ${variable.color.red};
}
`
