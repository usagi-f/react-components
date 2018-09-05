import css from 'styled-jsx/css'
import variable from '../css/variable'

export default css`
.baseStyle {
  font-family: ${variable.fontFamily};
  font-size: ${variable.size.medium}px;
  font-weight: normal;
  color: ${variable.color.gray100};
  letter-spacing: .02em;
  margin: 1em 0;
}
`
