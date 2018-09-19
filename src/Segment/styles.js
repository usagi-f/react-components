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
  -webkit-font-smoothing: antialiased;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${variable.color.gray40};
  box-shadow: rgba(0, 0, 0, .1) 0 0 3px 1px;
  padding: 15px 20px;

  &.disabled {
    opacity: .3;
  }

  &.compact {
    display: inline-block;
  }

  &.basic {
    border: none;
    box-shadow: none;
  }

  &.mini {
    font-size: ${variable.size.mini}px;
    padding: 10px 12px;
  }
  &.tiny {
    font-size: ${variable.size.tiny}px;
    padding: 12px 14px;
  }
  &.small {
    font-size: ${variable.size.small}px;
    padding: 15px 18px;
  }
  &.large {
    font-size: ${variable.size.large}px;
  }
  &.big {
    font-size: ${variable.size.big}px;
    padding: 17px 20px;
  }
  &.huge {
    font-size: ${variable.size.huge}px;
    padding: 17px 20px;
  }
  &.massive {
    font-size: ${variable.size.massive}px;
    padding: 17px 23px;
  }

  &.left {
    text-align: left;
  }
  &.right {
    text-align: right;
  }
  &.center {
    text-align: center;
  }
}
.group {
  box-shadow: rgba(0, 0, 0, .1) 0 0 3px 1px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${variable.color.gray40};
  margin: 1em 0;

  & > .baseStyle {
    box-shadow: none;
    margin: 0;
    border-radius: 0;
    border-width: 0 0 1px 0;

    &:last-child {
      border-bottom-width: 0;
    }
  }

  &.horizontal {
    display: flex;

    & > .baseStyle {
      flex: 1;
      border-width: 0 1px 0 0;

      &:last-child {
        border-right-width: 0;
      }
    }
  }
}
`
