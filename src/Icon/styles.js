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
  margin-right: 3px;

  &:focus {
    box-shadow: rgba(0, 0, 0, .1) 0 0 0 3px;
  }

  &:disabled {
    opacity: .5;
    cursor: default;
  }
}
.active {
  box-shadow: rgba(0, 0, 0, .1) 0 0 0 3px;
}
.rounded {
  border-radius: 20px;
}

// mode

@mixin buttonMode($color, $bg, $border, $activeBg) {
  color: $color;
  background-color: $bg;
  border-color: $border;

  &:not(:disabled):hover,
  &:focus,
  &.active {
    background-color: $activeBg;
  }
}

.default {
  @include buttonMode(
    ${variable.color.gray100},
    ${variable.color.white},
    ${variable.color.gray40},
    ${variable.color.gray20}
  )
}

.primary {
  @include buttonMode(
    ${variable.color.white},
    ${variable.color.blue},
    ${variable.additionalColor.darkblue},
    ${variable.additionalColor.darkblue}
  )
}

.secondary {
  @include buttonMode(
    ${variable.color.white},
    ${variable.color.gray100},
    ${variable.color.black},
    ${variable.color.black}
  )
}

.gost {
  @include buttonMode(
    ${variable.color.gray100},
    transparent,
    transparent,
    ${variable.color.gray20}
  )
}

// color

@mixin buttonColor($color) {
  color: ${variable.color.white};
  background-color: $color;
  border-color: $color;

  &:not(:disabled):hover,
  &:focus,
  &.active {
    color: $color;
    background-color: ${variable.color.white};
  }
}

.blue {
  @include buttonColor(${variable.color.blue})
}

.purple {
  @include buttonColor(${variable.color.purple})
}

.pink {
  @include buttonColor(${variable.color.pink})
}
.red {
  @include buttonColor(${variable.color.red})
}
.orange {
  @include buttonColor(${variable.color.orange})
}
.yellow {
  @include buttonColor(${variable.color.yellow})
}
.lightgreen {
  @include buttonColor(${variable.color.lightgreen})
}
.green {
  @include buttonColor(${variable.color.green})
}
.lightblue {
  @include buttonColor(${variable.color.lightblue})
}
.white {
  color: ${variable.color.white};
  background-color: transparent;
  border-color: ${variable.color.white};

  &:not(:disabled):hover,
  &:focus,
  &.active {
    color: ${variable.color.black};
    background-color: ${variable.color.white};
  }
}
`
