import css from 'styled-jsx/css'
import variable from '../css/variable'

export default css`
.baseStyle {
  font-family: ${variable.fontFamily};
  font-size: ${variable.size.massive}px;
  font-weight: 600;
  margin: 0 0 20px;

  &.h2 {
    font-size: ${variable.size.huge}px;
  }
  &.h3 {
    font-size: ${variable.size.big}px;
  }
  &.h4 {
    font-size: ${variable.size.large}px;
  }
  &.h5 {
    font-size: ${variable.size.medium}px;
  }
  &.h6 {
    font-size: ${variable.size.small}px;
  }
}
`
