import css from 'styled-jsx/css'
import variable from '../css/variable'

export default css`
.baseStyle {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-right: 3px;

  .input {
    position: relative;
    width: 18px;
    height: 18px;

    & > input {
      appearance: none;
      display: inline-block;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: ${variable.color.gray40};
      box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, .05);
      border-radius: 4px;
      margin: 0;
      cursor: pointer;
      width: 18px;
      height: 18px;
      outline: none;
      position: relative;

      &[type=radio] {
        border-radius: 18px;
      }

      &:checked {
        background-color: ${variable.color.blue};
      }

      &:focus {
        border-color: ${variable.color.blue};
        box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, .05), 0 0 0 3px rgba(0, 0, 0, .1);
      }
    }
  }

  .label {
    font-family: ${variable.fontFamily};
    font-size: ${variable.size.medium}px;
    font-weight: normal;
    color: ${variable.color.gray100};
    letter-spacing: .02em;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    margin-left: 5px;
    user-select: none;
  }

  .check,
  .radio {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    pointer-events: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .radio {
    width: 6px;
    height: 6px;
    background-color: ${variable.color.white};
    border-radius: 6px;
  }

  &.active .input > input {
    border-color: ${variable.color.blue};
    box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, .05), 0 0 0 3px rgba(0, 0, 0, .1);
  }

  &.disabled {
    opacity: .5;
  }
  &.disabled,
  &.readOnly {
    .input > input {
      cursor: default;
    }
  }
}
`
