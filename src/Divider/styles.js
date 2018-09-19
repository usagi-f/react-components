import css from 'styled-jsx/css'
import variable from '../css/variable'

export default css`
.baseStyle {
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: ${variable.color.gray40};
  margin: 1em 0;

  &.fitted {
    margin: 0;
  }

  &.hidden {
    border: none;
  }
}
`
